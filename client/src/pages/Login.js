import React from "react";
import "../styles/RegisterStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async values => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/login",
        values
      );
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <div className="form-container bg-[#fff4c9]">
      <Form
        layout="vertical"
        onFinish={onfinishHandler}
        className=" border-2 border-black rounded-md px-3 pb-5 pt-3"
      >
        <h3 className="text-center font-semibold text-xl">Login</h3>

        <Form.Item label="Email" name="email">
          <Input type="email" placeholder="Enter your Email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" placeholder=" Enter your password" required />
        </Form.Item>
        <Link to="/register" className="m-2 text-blue-100">
          Not a user Register here
        </Link>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
};

export default Login;
