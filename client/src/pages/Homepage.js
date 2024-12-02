import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import WorkerList from "../components/WorkerList";

const Homepage = () => {
  const [workers, setWorkers] = useState([]);
  const [groupedWorkers, setGroupedWorkers] = useState({});

  // Fetch worker data
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/user/getAllWorkers",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      if (res.data.success) {
        setWorkers(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Group workers by profession
  const groupByProfession = workers => {
    return workers.reduce((acc, worker) => {
      const { speciality } = worker;
      if (!acc[speciality]) {
        acc[speciality] = [];
      }
      acc[speciality].push(worker);
      return acc;
    }, {});
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(
    () => {
      if (workers.length > 0) {
        const grouped = groupByProfession(workers);
        setGroupedWorkers(grouped);
      }
    },
    [workers]
  );

  return (
    <Layout>
      <h2 className="font-semibold text-2xl pt-3">What are you looking for?</h2>
      <div className="pt-3">
        {Object.keys(groupedWorkers).map(speciality =>
          <div key={speciality} className="mb-6 flex gap-2 flex-wrap">
            <h3 className="text-xl font-bold mb-2">
              {speciality}
            </h3>
            <div className="flex gap-2 flex-wrap">
              {groupedWorkers[speciality].map(worker =>
                <WorkerList key={worker.id} worker={worker} />
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Homepage;
