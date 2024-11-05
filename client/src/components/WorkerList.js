import React from "react";
import { useNavigate } from "react-router-dom";

const WorkerList = ({ worker }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card m-2"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/worker/book-appointment/${worker._id}`)}
      >
        <div className="card-header">
          Mr. {worker.firstName} {worker.lastName}
        </div>
        <div className="card-body">
          <p>
            <b>Specialization</b> {worker.specialization}
          </p>
          <p>
            <b>Experience</b> {worker.experience}
          </p>
          <p>
            <b>Fees Per Consaltation</b> {worker.feesPerCunsaltation}
          </p>
          <p>
            <b>Timings</b> {worker.timings[0]} - {worker.timings[1]}
          </p>
        </div>
      </div>
    </>
  );
};

export default WorkerList;
