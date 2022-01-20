import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Col,
  Row,
  Image,
  Form,
  Table,
  FloatingLabel,
  Button,
} from "react-bootstrap";

import { useParams } from "react-router-dom";

import { db } from "../../Config";
import { onSnapshot, doc } from "firebase/firestore";

import { useReactToPrint } from "react-to-print";

function InfoPatientForm() {
  let { userId } = useParams();
  const [users, setUsers] = useState([]);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    onSnapshot(doc(db, "users", userId), (doc) => {
      const item = [];
      item.push(doc.data());
      setUsers(item);
    });
  }, []);

  return (
    <Container className="p-3">
      <h4 className="text-center p-3">ข้อมูลผู้พิการ</h4>
      <Row>
        <Col lg={12} className="p-3">
          {users.map((user) => {
            return (
              <Image
                src={user.imageurl}
                className="mx-auto d-block"
                thumbnail
              ></Image>
            );
          })}
          <br></br>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Row>
            <Col md={4}>
              {users.map((user) => {
                return (
                  <FloatingLabel controlId="floatingInputGrid" label="HN">
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                      value={user.hn}
                      readOnly
                    />
                  </FloatingLabel>
                );
              })}

              <br></br>
            </Col>
            <Col md={4}>
              {users.map((user) => {
                return (
                  <FloatingLabel controlId="floatingInputGrid" label="ชื่อ">
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                      value={user.fname + " " + user.lname}
                      readOnly
                    />
                  </FloatingLabel>
                );
              })}
              <br></br>
            </Col>
            <Col md={4}>
              {users.map((user) => {
                return (
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="บัตรประชาชน"
                  >
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                      value={user.idCard}
                      readOnly
                    />
                  </FloatingLabel>
                );
              })}
              <br></br>
            </Col>
            <br></br>
          </Row>

          <Row>
            <Col md={4}>
              {users.map((user) => {
                return (
                  <FloatingLabel controlId="floatingInputGrid" label="เพศ">
                    <Form.Control
                      type="text"
                      placeholder=" "
                      value={user.sex}
                      style={{ borderRadius: "15px" }}
                      readOnly
                    />
                  </FloatingLabel>
                );
              })}
              <br></br>
            </Col>
            <Col md={4}>
              {users.map((user) => {
                return (
                  <FloatingLabel controlId="floatingInputGrid" label="วันเกิด">
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                      value={user.birthDay}
                      readOnly
                    />
                  </FloatingLabel>
                );
              })}
              <br></br>
            </Col>
            <Col md={4}>
              {users.map((user) => {
                return (
                  <FloatingLabel controlId="floatingInputGrid" label="อายุ">
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                      value={user.age}
                      readOnly
                    />
                  </FloatingLabel>
                );
              })}
              <br></br>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              {users.map((user) => {
                return (
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="หมู่เลือด"
                  >
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                      value={user.bloodType}
                      readOnly
                    />
                  </FloatingLabel>
                );
              })}
              <br></br>
            </Col>
            <Col md={6}>
              {users.map((user) => {
                return (
                  <FloatingLabel controlId="floatingInputGrid" label="สถานะ">
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                      value={user.status}
                      readOnly
                    />
                  </FloatingLabel>
                );
              })}
              <br></br>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              {users.map((user) => {
                return (
                  <FloatingLabel controlId="floatingInputGrid" label="ญาติชื่อ">
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                      value={user.realativeFname + " " + user.realativeLname}
                      readOnly
                    />
                  </FloatingLabel>
                );
              })}
              <br></br>
            </Col>
            <Col md={4}>
              {users.map((user) => {
                return (
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="ความสัมพันธ์"
                  >
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                      value={user.realationship}
                      readOnly
                    />
                  </FloatingLabel>
                );
              })}
              <br></br>
            </Col>
            <Col md={4}>
              {users.map((user) => {
                return (
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="เบอร์โทรติดต่อ"
                  >
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                      value={user.telephone}
                      readOnly
                    />
                  </FloatingLabel>
                );
              })}
              <br></br>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              {users.map((user) => {
                return (
                  <FloatingLabel controlId="floatingInputGrid" label="ที่อยู่">
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                      value={
                        user.address +
                        " " +
                        user.swine +
                        " " +
                        user.alley +
                        " " +
                        user.village +
                        " " +
                        user.subDistrict +
                        " " +
                        user.district +
                        " " +
                        user.province +
                        " " +
                        user.postcode
                      }
                      readOnly
                    />
                  </FloatingLabel>
                );
              })}
              <br></br>
            </Col>
          </Row>
        </Col>
      </Row>
      <h4 className="p-3">ข้อมูลผู้รับบริการ</h4>
      <Row>
        <Col md={6}>
          <FloatingLabel controlId="floatingInputGrid" label="อาการสำคัญ">
            <Form.Control
              type="text"
              placeholder=" "
              style={{ borderRadius: "15px" }}
              readOnly
            />
          </FloatingLabel>
          <br></br>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="floatingInputGrid" label="การวินิจฉัยโรค">
            <Form.Control
              type="text"
              placeholder=" "
              style={{ borderRadius: "15px" }}
              readOnly
            />
          </FloatingLabel>
          <br></br>
        </Col>

        <Col md={4}>
          <FloatingLabel controlId="floatingInputGrid" label="สาเหตุอาการ">
            <Form.Control
              type="text"
              placeholder=" "
              style={{ borderRadius: "15px" }}
              readOnly
            />
          </FloatingLabel>
          <br></br>
        </Col>
        <Col md={4}>
          {users.map((user) => {
            return (
              <FloatingLabel controlId="floatingInputGrid" label="คะแนน BI">
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  value={user.biScore}
                  readOnly
                />
              </FloatingLabel>
            );
          })}

          <br></br>
        </Col>
        <Col md={4}>
          {users.map((user) => {
            return (
              <FloatingLabel controlId="floatingInputGrid" label="สิทธิรักษา">
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  value={user.rigthToTreatment}
                  readOnly
                />
              </FloatingLabel>
            );
          })}
          <br></br>
        </Col>

        <Col md={4}>
          {users.map((user) => {
            return (
              <FloatingLabel
                controlId="floatingInputGrid"
                label="อุปกรณ์ช่วยเดิน"
              >
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  value={user.walkingAid}
                  readOnly
                />
              </FloatingLabel>
            );
          })}
          <br></br>
        </Col>
        <Col md={4}>
          {users.map((user) => {
            return (
              <FloatingLabel controlId="floatingInputGrid" label="ความพิการ">
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  value={user.disability}
                  readOnly
                />
              </FloatingLabel>
            );
          })}
          <br></br>
        </Col>
        <Col md={4}>
          {users.map((user) => {
            return (
              <FloatingLabel
                controlId="floatingInputGrid"
                label="อุปกรณ์ที่ได้รับ"
              >
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  value={user.takeHomeEqu}
                  readOnly
                />
              </FloatingLabel>
            );
          })}
          <br></br>
        </Col>
      </Row>
      <Row>
        <h4 className="p-3">เลือกพิมพ์</h4>
        <Col md={4}>
          <Form.Check type="checkbox" label="ประเมินกายภาพบำบัด" />
          <br></br>
        </Col>
        <Col md={4}>
          <Form.Check type="checkbox" label="ประเมินกิจกรรมบำบัด" />
          <br></br>
        </Col>
        <Col md={4}>
          <Form.Check type="checkbox" label="ประเมิน ICF" />
          <br></br>
        </Col>
      </Row>
      <Row>
        <Container>
          <Col className="text-center">
            <Button
              className="w-50"
              variant="primary"
              type="submit"
              style={{
                borderRadius: "15px",
                padding: "1.1rem",
              }}
              onClick={handlePrint}
            >
              พิมพ์
            </Button>

            <div style={{ display: "none" }}>
              {/* แบบบันทึกการตรวจประเมินรักษากายภาพ */}
              <div ref={componentRef}>
                <Container>
                  <h6 className="text-center">
                    แบบบันทึกการตรวจประเมินรักษากายภาพ
                  </h6>
                  <h6 className="text-center">
                    ผู้ป่วยระบบกระดูกและกล้ามเนื้อ โรงพยาบาลสารภีบวรพัฒนา
                  </h6>
                  <br></br>
                  {users.map((user) => {
                    return (
                      <p className="justify-content-center">
                        ชื่อ {user.fname} {user.lname} อายุ {user.age} ปี เพศ{" "}
                        {user.prefixName} สถานภาพ {user.status}
                      </p>
                    );
                  })}
                  {users.map((user) => {
                    return (
                      <p>
                        ที่อยู่{" "}
                        {user.address +
                          " " +
                          user.swine +
                          " " +
                          user.alley +
                          " " +
                          user.village +
                          " " +
                          user.subDistrict +
                          " " +
                          user.district +
                          " " +
                          user.province +
                          " " +
                          user.postcode}{" "}
                        เบอร์โทร {user.telephone} อาชีพ {user.fname}
                      </p>
                    );
                  })}

                  <br></br>
                  <h4>Physical Examination</h4>
                  <Table style={{ border: "1px solid black" }}>
                    {users.map((user) => {
                      return (
                        <thead>
                          <tr>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              1. GCS
                            </th>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              10. Comunication
                            </th>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              2. Sencation
                            </th>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              11. Dysphagia
                            </th>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              3. Musle Rone
                            </th>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              12. Complication
                            </th>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              4. ROM
                            </th>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              13. ADL
                            </th>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              5. Co-ordination
                            </th>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              14. BI Score: {user.biScore}
                            </th>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              6. Hard function
                            </th>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              15. Adaptive Device
                            </th>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              7. Sitting function
                            </th>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              16. Home & Physical Environment
                            </th>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              8. Endurance
                            </th>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              17. Leisure
                            </th>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              9. Perception
                            </th>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              18. Prevocational
                            </th>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              Plan of treatment:
                            </th>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              Treatment:
                            </th>
                          </tr>
                          <tr>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              Re - assessment:
                            </th>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "50%",
                              }}
                            >
                              Home - program:
                            </th>
                          </tr>
                        </thead>
                      );
                    })}
                  </Table>
                  <br></br>
                  <div className="d-flex justify-content-end">
                    <h6 className="mr-auto">
                      นักกิจกรรมบำบัด..................................
                      เลขที่ใบประกอบวิชาชีพ..................................
                    </h6>
                  </div>
                </Container>
              </div>
            </div>
          </Col>
        </Container>
      </Row>
    </Container>
  );
}

export default InfoPatientForm;
