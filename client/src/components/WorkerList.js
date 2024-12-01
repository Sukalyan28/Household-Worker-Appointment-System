import React from "react";
import { useNavigate } from "react-router-dom";

const WorkerList = ({ worker }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card m-2 "
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/worker/book-appointment/${worker?._id}`)}
      >
        <div className="card-header py-3">
          <b>Mr. {worker?.firstName} {worker?.lastName}</b>
        </div>
        <div className="card-body py-3 flex flex-col gap-2">
          <p>
            <b>Specialization:</b> {worker?.speciality}
          </p>
          <p>
            <b>Experience:</b> {worker?.experience} years
          </p>
          <p>
            <b>Fees Per Consultation:</b>  &#8377;{worker?.fees}
          </p>
          <p>
            {/* <b>Timings</b> {worker?.timings[0]} - {worker?.timings[1]} */}
          </p>
        </div>
      </div>
    </>
  );
};

export default WorkerList;
