import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/WorkerList";
const HomePage = () => {
  const [workers, SetWorkers] = useState([]);
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.get("/api/v1/user/getAllWorkers", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      if (res.data.success) {
        SetWorkers(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Layout>
      <h1 className="text-center">Home Page</h1>
      <Row>
        {workers && workers.map(worker => <WorkerList worker={worker} />)}
      </Row>
    </Layout>
  );
};

export default HomePage;
