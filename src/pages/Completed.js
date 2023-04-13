import React from "react";

function Completed({ formData }) {
  return (
    <>
      <h4 className="text-center mt-2 text-white">Booking was successful!!</h4>
      <div className="card mt-4">
        <h6 className="card-header bg-dark text-white text-center">
          {formData.name}
        </h6>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Date:
              <span className="h6 text-success">{formData.date}</span>
            </li>
            <li className="list-group-item">
                Time:
              <span className="h6 text-success">{formData.time}</span>
            </li>
            <li className="list-group-item">
                Mobile Number:
              <span className="h6 text-success">{formData.mobileNumber}</span>
            </li>
            <li className="list-group-item">
              No. of passengers:
              <span className="h6 text-success">{formData.passengers}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Completed;