import React, { useState } from "react";
import { Container, Form, FloatingLabel, Button } from "react-bootstrap";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../Config";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  let navigate = useNavigate();
  const [user, setUser] = useState({});
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container
      className="d-grid h-100"
      style={{ minHeight: "100vh", placeItems: "center center" }}
    >
      <form className="text-center w-50">
        <h1 className="p-3">สร้างบัญชีใหม่</h1>
        <FloatingLabel
          controlId="floatingSelectNamePrefix"
          label="คำนำหน้าชื่อ"
        >
          <Form.Select style={{ borderRadius: "15px" }}>
            <option>นาย</option>
            <option>นาง</option>
            <option>นางสาว</option>
          </Form.Select>
        </FloatingLabel>
        <br></br>
        <FloatingLabel controlId="floatingInputFname" label="ชื่อ">
          <Form.Control
            name="fname"
            type="text"
            placeholder=" "
            style={{ borderRadius: "15px" }}
          />
        </FloatingLabel>
        <br></br>
        <FloatingLabel controlId="floatingInputLname" label="นามสกุล">
          <Form.Control
            name="lname"
            type="text"
            placeholder=" "
            style={{ borderRadius: "15px" }}
          />
        </FloatingLabel>
        <br></br>
        <FloatingLabel controlId="floatingInputRank" label="ตำแหน่ง">
          <Form.Control
            name="rank"
            type="text"
            placeholder=" "
            style={{ borderRadius: "15px" }}
          />
        </FloatingLabel>
        <br></br>
        <FloatingLabel controlId="floatingInputDistrict" label="ตำบล">
          <Form.Control
            name="district"
            type="text"
            placeholder=" "
            style={{ borderRadius: "15px" }}
          />
        </FloatingLabel>
        <br></br>
        <FloatingLabel controlId="floatingInputEmail" label="อีเมล">
          <Form.Control
            onChange={(e) => setRegisterEmail(e.target.value)}
            name="email"
            type="text"
            placeholder=" "
            style={{ borderRadius: "15px" }}
          />
        </FloatingLabel>
        <br></br>
        <FloatingLabel controlId="floatingInputUsername" label="ชื่อผู้ใช้งาน">
          <Form.Control
            type="text"
            placeholder=" "
            style={{ borderRadius: "15px" }}
          />
        </FloatingLabel>
        <br></br>
        <FloatingLabel controlId="floatingInputPassword" label="รหัสผ่าน">
          <Form.Control
            onChange={(e) => setRegisterPassword(e.target.value)}
            type="password"
            placeholder=" "
            style={{ borderRadius: "15px" }}
          />
        </FloatingLabel>
        <br></br>
        <FloatingLabel
          controlId="floatingInputConfirmPassword"
          label="ยืนยันรหัสผ่าน"
        >
          <Form.Control
            type="password"
            placeholder=" "
            style={{ borderRadius: "15px" }}
          />
        </FloatingLabel>
        <br></br>
        <Button
          className="w-50"
          variant="primary"
          style={{ borderRadius: "15px", padding: ".75rem", fontSize: "1rem" }}
          onClick={register}
        >
          สร้างบัญชีใหม่
        </Button>
      </form>
    </Container>
  );
}

export default RegisterForm;
