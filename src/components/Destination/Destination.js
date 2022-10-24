import React from "react";
import { Link } from "react-router-dom";

const Destination = (props) => {
  console.log(props);
  const { place, img, details } = props.destination;
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{place}</h5>
            <p className="card-text">{details}</p>
            <Link>
              <button type="button" className="btn btn-warning">
                Booking
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
