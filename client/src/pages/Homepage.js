import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Row } from "antd";
import WorkerList from "../components/WorkerList";
const Homepage = () => {
  const [workers, setWorkers] = useState([]);
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/user/getAllWorkers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      console.log(res)
      if (res.data.success) {
        setWorkers(res.data.data);
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

export default Homepage;
