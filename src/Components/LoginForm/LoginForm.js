import React, { useState } from "react";

import { Container, Form, FloatingLabel, Button, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../Config";
import {
  signInWithEmailAndPassword,
  // onAuthStateChanged
} from "firebase/auth";

function LoginForm() {
  let navigate = useNavigate();
  // const [user, setUser] = useState({});
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container
      className="d-grid h-100"
      style={{ minHeight: "50vh", placeItems: "center center" }}
    >
      <form className="text-center w-50">
        <h1 className="p-3">เข้าสู่ระบบ</h1>

        <FloatingLabel
          controlId="floatingInputGrid"
          label="ชื่อผู้ใช้งาน / อีเมล"
        >
          <Form.Control
            onChange={(e) => setLoginEmail(e.target.value)}
            type="text"
            placeholder=" "
            style={{ borderRadius: "15px" }}
          />
        </FloatingLabel>
        <br></br>
        <FloatingLabel controlId="floatingInputGrid" label="รหัสผ่าน">
          <Form.Control
            onChange={(e) => setLoginPassword(e.target.value)}
            type="password"
            placeholder=" "
            style={{ borderRadius: "15px" }}
          />
        </FloatingLabel>
        <br></br>
        <Row>
          <Link to="#" style={{ textDecoration: "none", textAlign: "left" }}>
            ลืมรหัสผ่าน
          </Link>
        </Row>
        <br></br>
        <Button
          className="w-50"
          variant="primary"
          style={{ borderRadius: "15px", padding: ".5rem" }}
          onClick={login}
        >
          {/* <Link to="/home" style={{ textDecoration: "none", color: "white" }}> */}
          เข้าสู่ระบบ
          {/* </Link> */}
        </Button>
        <br></br>
        <br></br>
        <p>
          ไม่มีบัญชี?
          <Link to="/register" style={{ textDecoration: "none" }}>
            สร้างบัญชีใหม่
          </Link>
        </p>
      </form>
    </Container>
  );
}

export default LoginForm;
