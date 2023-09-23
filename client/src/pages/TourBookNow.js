import React, { useEffect, useState } from "react";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../helpers/axiosInstance";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";
import StripeCheckout from "react-stripe-checkout";

function TourBookNow() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tour, setTour] = useState(null);

  const getTour = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/api/tour/get-tour-by-id", {
        _id: params.id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        setTour(response.data.data);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onToken = async (token) => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/api/tour/make-payment", {
        token,
        amount: tour.price // Convert to cents
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        navigate("/tour");
        // Handle success
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getTour();
  }, []);

  return (
    <div>
      {tour && (
        <div className="card p-2">
          <h1 className="text-lg primary-text">{tour.title}</h1>
          <hr />
          <div className="d-flex justify-content-between">
            <div>
              <p className="text-sm">Journey Date</p>
              <p className="text-sm">{tour.tourjourney}</p>
            </div>
          </div>
          <hr />
          <div>
            <p className="text-sm">Description</p>
            <p className="text-sm">{tour.desc}</p>
          </div>
       
          <div>
            <p className="text-sm">Price</p>
            <p className="text-sm">{tour.price} ฿ /-</p>
          </div>
       
          <hr />
          <div>
            <p className="text-sm">Tour Duration</p>
            <p className="text-sm">{tour.duration}</p>
          </div>
          <hr />
          <div className="payment-options">
            <StripeCheckout
              billingAddress
              token={onToken}
              amount={tour.price *100} // Convert to cents
              currency="THB"
              stripeKey="pk_test_51No2dzLzyWTDvO4mFVgg15J7SyIsIhnmesOOyDf6RknBT7aD2yfQxRWVyYwSKDHWRT0wpHyKXuPdvghPK0DbR2Xg00d2jB7qjP"
            >
              <button className="primary-btn">Pay with Card</button>
            </StripeCheckout>
          </div>
        </div>
      )}
    </div>
  );
}

export default TourBookNow;
