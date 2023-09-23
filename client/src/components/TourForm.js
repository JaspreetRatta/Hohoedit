
import React from "react";
import { Col, Form, message, Modal, Row } from "antd";
import { axiosInstance } from "../helpers/axiosInstance";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";

function TourForm({
  showTourForm,
  setShowTourForm,
  type = "add",
  getData,
  selectedTour,
  setSelectedTour,
}) {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response = null;
      if (type === "add") {
        response = await axiosInstance.post("/api/tour/add-tour", values);
      } else {
        response = await axiosInstance.post("/api/tour/update-tour", {
          ...values,
          _id: selectedTour._id,
        });
      }
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
      getData();
      setShowTourForm(false);
      setSelectedTour(null);

      dispatch(HideLoading());
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };

  return (
    <Modal
      width={800}
      title={type === "add" ? "Add Tour" : "Update Tour"}
      visible={showTourForm}
      onCancel={() => {
        setSelectedTour(null);
        setShowTourForm(false);
      }}
      footer={false}
    >
      <Form layout="vertical" onFinish={onFinish} initialValues={selectedTour}>
        <Row gutter={[10, 10]}>
          <Col lg={24} xs={24}>
            <Form.Item label="Title" name="title">
              <input type="text" />
            </Form.Item>
          </Col>
          <Col lg={24} xs={24}>
            <Form.Item label="Tour" name="tourjourney">
              <input type="date" />
            </Form.Item>
          </Col>
          <Col lg={24} xs={24}>
            <Form.Item label="Price" name="price">
              <input type="text" />
            </Form.Item>
          </Col>
          
          <Col lg={24} xs={24}>
    <Form.Item label="Description" name="desc">
      <input type="text" />
    </Form.Item>
  </Col>
  <Col lg={24} xs={24}>
    <Form.Item label="Photo URL" name="photo">
      <input type="text" />
    </Form.Item>
  </Col>
  <Col lg={24} xs={24}>
    <Form.Item label="Tour Duration" name="duration">
      <input type="text" />
    </Form.Item>
  </Col>
  <Col lg={24} xs={24}>
    <Form.Item label="Details" name="details">
      <input type="text" />
    </Form.Item>
  </Col>
        </Row>

        <div className="d-flex justify-content-end">
          <button className="primary-btn" type="submit">
            Save
          </button>
        </div>
      </Form>
    </Modal>
  );
}

export default TourForm;
