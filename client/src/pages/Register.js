import React from "react";
import "../styles/RegisterStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; //calling network
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onfinishHandler = async (values) => {
    console.log(values)
    try {
      dispatch(showLoading());
      const res = await axios.post("http://localhost:8080/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Registered Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(showLoading());
      console.log(error);
      message.error("Something Went wrong");
    }
  };
  return (
    <>
      <div className="form-container bg-[#fff4c9]">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className=" mx-auto w-[25%] border-2 border-black rounded-md px-3 py-11 bg-[#f0f0f0]"
        >
          <h3  className="text-center font-semibold text-2xl pb-3">Signup</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <div className=" flex items-center justify-between">
          <Link to="/login" className="m-2 text-sky-500">
            Already user login here
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Register;
