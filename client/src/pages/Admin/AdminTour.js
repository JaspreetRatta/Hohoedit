import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { message, Table } from "antd";
import axios from "axios";
import moment from "moment";
import TourForm from "../../components/TourForm"; // Import the TourForm component
import PageTitle from "../../components/PageTitle";
import { axiosInstance } from "../../helpers/axiosInstance";
import { HideLoading, ShowLoading } from "../../redux/alertsSlice";

function AdminTour() {
  const dispatch = useDispatch();
  const [showTourForm, setShowTourForm] = useState(false);
  const [tours, setTours] = useState([]);
  const [selectedTour, setSelectedTour] = useState(null);

  const getTours = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/api/tour/get-all-tour", {}); // Adjust the API endpoint as needed
      dispatch(HideLoading());
      if (response.data.success) {
        setTours(response.data.data);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const deleteTour = async (id) => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/api/tour/delete-tour", {
        _id: id, // Adjust the API endpoint as needed
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        getTours();
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Journey",
      dataIndex: "tourjourney",
    },
    
    {
      title: "Price",
      dataIndex: "price",
    },


    
    {
      title: "Duration",
      dataIndex: "duration",
   
    },
    {
      title: "Details",
      dataIndex: "details",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (action, record) => (
        <div className="d-flex gap-3">
          <i
            className="ri-delete-bin-line"
            onClick={() => {
              deleteTour(record._id);
            }}
          ></i>
          <i
            className="ri-pencil-line"
            onClick={() => {
              setSelectedTour(record);
              setShowTourForm(true);
            }}
          ></i>
        </div>
      ),
    },
  ];

  useEffect(() => {
    getTours();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between my-2">
        <PageTitle title="Tours" />
        <button
          className="btn-btn"
          onClick={() => setShowTourForm(true)}
        >
          Add Tour
        </button>
      </div>

      <Table columns={columns} dataSource={tours} />

      {showTourForm && (
        <TourForm
          showTourForm={showTourForm}
          setShowTourForm={setShowTourForm}
          type={selectedTour ? "edit" : "add"}
          selectedTour={selectedTour}
          setSelectedTour={setSelectedTour}
          getData={getTours}
        />
      )}
    </div>
  );
}

export default AdminTour;
