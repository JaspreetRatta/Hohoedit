import { Col, message, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tour from "../components/Tour";
import { axiosInstance } from "../helpers/axiosInstance";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";

function TourPage() {
  const { user } = useSelector((state) => state.users);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query
  const dispatch = useDispatch();
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        "/api/tour/get-all-tour",
        {
          // Include the search query in the request data
          searchQuery: searchQuery,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
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

  useEffect(() => {
    getTours();
  }, [searchQuery]); // Run getTours when the searchQuery changes

  return (
    <div>
      <div className="my-3 py-1">
        <Row gutter={10} align="center">
          <Col lg={12} sm={24}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Tour"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            
           
            </div>
          </Col>
          <Col lg={6} sm={24}>
            <div className="d-flex gap-2">
              <button className="primary-btn" onClick={() => getTours()}>
                Filter
              </button>
              <button
                className="outlined px-3"
                onClick={() => setSearchQuery("")}
              >
                Clear
              </button>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row gutter={[15, 15]}>
          {tours
            .filter((tour) => tour.status === "Upcoming")
            .map((tour) => (
              <Col lg={12} xs={24} sm={24} key={tour.id}>
                <Tour tour={tour} />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}

export default TourPage;

