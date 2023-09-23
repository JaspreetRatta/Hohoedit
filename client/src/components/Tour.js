
import React from "react";
import { useNavigate } from "react-router-dom";

function Tour({ tour }) {
  const navigate = useNavigate();
  return (
    <div className="card p-2">
      <h1 className="text-lg primary-text">{tour.title}</h1>
      <hr />
      <div className="d-flex justify-content-between">
        <div>
          <p className="text-sm">Journey Date</p>
          <p className="text-sm">{tour.tourjourney}</p>
        </div>

        <div>
          <p className="text-sm">Price</p>
          <p className="text-sm">{tour.price} ฿ /-</p>
        </div>
      </div>
      <hr />
      
        <div>
          <p className="text-sm">Tour Duration</p>
          <p className="text-sm">{tour.duration}</p>
        </div>

        <h1
          className="text-lg underline secondary-text"
          onClick={() => {
            navigate(`/TourBookNow/${tour._id}`);
          }}
        >
          Show more
        </h1>
      </div>

  );
}

export default Tour;