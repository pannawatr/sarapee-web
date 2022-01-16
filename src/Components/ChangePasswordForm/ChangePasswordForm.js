import React from "react";
import { Container, Form, FloatingLabel, Button } from "react-bootstrap";

function ChangePasswordForm() {
  return (
    <Container
      className="d-grid h-100"
      style={{ minHeight: "50vh", placeItems: "center center" }}
    >
      <form className="text-center w-50">
        <h1 className="p-3">เปลี่ยนรหัสผ่าน</h1>

        <FloatingLabel controlId="floatingInputGrid" label="รหัสผ่านเดิม">
          <Form.Control
            type="password"
            placeholder=" "
            style={{ borderRadius: "15px" }}
          />
        </FloatingLabel>
        <br></br>
        <FloatingLabel controlId="floatingInputGrid" label="รหัสผ่านใหม่">
          <Form.Control
            type="password"
            placeholder=" "
            style={{ borderRadius: "15px" }}
          />
        </FloatingLabel>
        <br></br>
        <FloatingLabel controlId="floatingInputGrid" label="ยืนยันรหัสผ่านใหม่">
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
          type="submit"
          style={{ borderRadius: "15px", padding: ".5rem" }}
        >
          เปลี่ยนรหัสผ่าน
        </Button>
        <br></br>
        <br></br>
      </form>
    </Container>
  );
}

export default ChangePasswordForm;
