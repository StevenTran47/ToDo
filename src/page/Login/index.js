import React, { useEffect, useRef } from "react";
import { Form, Card, Input, Button, Layout, Menu, Image } from "antd";
import { useDispatch } from "react-redux";
import { IsUserLogin, loginAction } from "../../store/action/auth";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const formRef = useRef();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const login = {
      email: values.user,
      password: values.password,
    };
    dispatch(loginAction(login)).then(() => navigate("/user/profile") || 0);
  };

  return (
    <Card title="LOG IN" style={{ width: "500px", left: "35%" }}>
      <Form onFinish={onFinish} ref={formRef} layout="vertical">
        <Form.Item name="user" label="USER NAME">
          <Input placeholder="username@gmail.com " />
        </Form.Item>
        <Form.Item name="password" label="PASSWORD">
          <Input.Password placeholder="PASSWORD" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default Login;
