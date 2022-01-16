import React from "react";
import {
  Container,
  Col,
  Row,
  Form,
  FloatingLabel,
  Card,
  InputGroup,
  Button,
} from "react-bootstrap";

import { Link } from "react-router-dom";
function ImageThrapy() {
  return (
    <Container className="p-3">
      <h4 className="text-center p-3">ประเมินกายภาพบำบัด</h4>
      <Form>
        <Row>
          <Col sm={6} md={6} lg={6}>
            <div className="d-flex">
              <Col>
                <Form.Check
                  type="radio"
                  label="ในเวลา"
                  name="group-1"
                  className="pe-3"
                ></Form.Check>
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="นอกเวลา"
                  name="group-1"
                  className="pe-3"
                ></Form.Check>
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="Refer"
                  name="group-1"
                  className="pe-3"
                ></Form.Check>
              </Col>
            </div>
            <div className="d-flex pt-3">
              <FloatingLabel
                controlId="floatingInputGrid"
                label="วันแรกที่รับ"
                className="pe-3"
              >
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </FloatingLabel>
              <br></br>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="เวลาให้บริการ"
                className="pe-3"
              >
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </FloatingLabel>
              <br></br>
            </div>
          </Col>

          <Col sm={6} md={6} lg={6} className="m-auto pt-3">
            <div className="d-flex justify-content-end">
              <h4 className="pe-3">ชื่อ : </h4>
              <h4 className="pe-3">อายุ : </h4>
            </div>
            <div className="d-flex justify-content-end">
              <h4 className="pe-3">เลขบัตรประชาชน : </h4>
            </div>
          </Col>
        </Row>
        <br></br>

        {/* Content */}
        <Card className="p-3">
          <Row>
            <Col>
              <Row>
                <Col>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="การวินิจฉัยของแพทย์ / ICD10"
                  >
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                    />
                  </FloatingLabel>
                  <br></br>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="อาการสำคัญ"
                  >
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                    />
                  </FloatingLabel>
                  <br></br>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FloatingLabel controlId="floatingInputGrid" label="PI">
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                    />
                  </FloatingLabel>
                  <br></br>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FloatingLabel controlId="floatingInputGrid" label="PH">
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                    />
                  </FloatingLabel>
                  <br></br>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Precaution"
                  >
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                    />
                  </FloatingLabel>
                  <br></br>
                </Col>
              </Row>
              <br></br>
              <Row>
                <h4>Special Investigation (CI/MRI//X-ray)</h4>
                <Col>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Special Investigation (CI/MRI//X-ray)"
                  >
                    <Form.Control
                      as="textarea"
                      type="text"
                      placeholder=""
                      style={{ borderRadius: "15px" }}
                    />
                  </FloatingLabel>
                  <br></br>
                </Col>
              </Row>
              <br></br>
              <Row>
                <h4>Vital Sig</h4>
                <Col>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="BP"
                      style={{ borderRadius: "15px 0 0 15px" }}
                    />

                    <InputGroup.Text style={{ borderRadius: "0 15px 15px 0" }}>
                      mmHg
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
                <br></br>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="HR"
                      style={{ borderRadius: "15px 0 0 15px" }}
                    />
                    <InputGroup.Text style={{ borderRadius: "0 15px 15px 0" }}>
                      t/min
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
                <br></br>
                <Col>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="PR"
                      style={{ borderRadius: "15px 0 0 15px" }}
                    />
                    <InputGroup.Text style={{ borderRadius: "0 15px 15px 0" }}>
                      t/min
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
                <br></br>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Temp"
                      style={{ borderRadius: "15px 0 0 15px" }}
                    />
                    <InputGroup.Text style={{ borderRadius: "0 15px 15px 0" }}>
                      C
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="O2sat"
                      style={{ borderRadius: "15px 0 0 15px" }}
                    />
                    <InputGroup.Text style={{ borderRadius: "0 15px 15px 0" }}>
                      %
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </Row>
              <br></br>
              <Row>
                <h4>Observation</h4>
                <p>Consiousness</p>
                <Col>
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Consiousness"
                  >
                    <Form.Select style={{ borderRadius: "15px" }}>
                      <option value=" ">Alert</option>
                      <option value=" ">Drowsiness</option>
                      <option value=" ">Stupor</option>
                      <option value=" ">Semicoma</option>
                      <option value=" ">Coma</option>
                    </Form.Select>
                  </FloatingLabel>
                  <br></br>
                </Col>
              </Row>
              <Row>
                <p>Communication</p>
              </Row>
              <Row>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="group-2"
                    className="pe-3"
                  ></Form.Check>

                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="ระบุระดับ/ลักษณะการสื่อสาร"
                  >
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                    />
                  </FloatingLabel>
                  <br></br>
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    label="No"
                    name="group-2"
                    className="pe-3"
                  ></Form.Check>
                  <FloatingLabel controlId="floatingInputGrid" label="หมายเหตุ">
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                    />
                  </FloatingLabel>
                  <br></br>
                </Col>
              </Row>
              <Row>
                <p>General appearance</p>
                <Col>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="General appearance"
                  >
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                    />
                  </FloatingLabel>
                  <br></br>
                </Col>
              </Row>
              <br></br>
              <Row>
                <h4>Palpation</h4>
                <Col>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Palpation"
                  >
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                    />
                  </FloatingLabel>
                  <br></br>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <h4>Muscle Tone</h4>
                  <Form.Check
                    type="radio"
                    label="Normal"
                    name="group-3"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="Hypertone"
                    name="group-3"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="Hypotone"
                    name="group-3"
                    className="pe-3"
                  ></Form.Check>
                </Col>
                <Col>
                  <FloatingLabel controlId="floatingInputGrid" label="ROM">
                    <Form.Control
                      as="textarea"
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px", height: "7.5rem" }}
                    />
                  </FloatingLabel>
                  <br></br>
                </Col>
                <Col>
                  <FloatingLabel controlId="floatingInputGrid" label="MNT">
                    <Form.Control
                      as="textarea"
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px", height: "7.5rem" }}
                    />
                  </FloatingLabel>
                  <br></br>
                </Col>
              </Row>
              <br></br>
              <Row>
                <h4>Essential Component</h4>
                <Col>
                  <p>HE</p>
                  <div className="d-flex">
                    <p className="pe-2">Rt.</p>
                    <Form.Check
                      type="radio"
                      label="Good"
                      name="group-4"
                      className="pe-3"
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Fair"
                      name="group-4"
                      className="pe-3"
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Poor"
                      name="group-4"
                      className="pe-3"
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Loss"
                      name="group-4"
                      className="pe-3"
                    ></Form.Check>
                  </div>
                  <div className="d-flex">
                    <p className="pe-2">Lt.</p>
                    <Form.Check
                      type="radio"
                      label="Good"
                      name="group-5"
                      className="pe-3"
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Fair"
                      name="group-5"
                      className="pe-3"
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Poor"
                      name="group-5"
                      className="pe-3"
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Loss"
                      name="group-5"
                      className="pe-3"
                    ></Form.Check>
                  </div>
                </Col>
                <Col>
                  <p>LE</p>
                  <div className="d-flex">
                    <p className="pe-2">Rt.</p>
                    <Form.Check
                      type="radio"
                      label="Good"
                      name="group-6"
                      className="pe-3"
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Fair"
                      name="group-6"
                      className="pe-3"
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Poor"
                      name="group-6"
                      className="pe-3"
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Loss"
                      name="group-6"
                      className="pe-3"
                    ></Form.Check>
                  </div>
                  <div className="d-flex">
                    <p className="pe-2">Lt.</p>
                    <Form.Check
                      type="radio"
                      label="Good"
                      name="group-7"
                      className="pe-3"
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Fair"
                      name="group-7"
                      className="pe-3"
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Poor"
                      name="group-7"
                      className="pe-3"
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Loss"
                      name="group-7"
                      className="pe-3"
                    ></Form.Check>
                  </div>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Row>
                  <h4>Bed mobility/Gross motor function</h4>
                  <Col>
                    <FloatingLabel
                      controlId="floatingSelect"
                      label="Upward & Downward"
                    >
                      <Form.Select style={{ borderRadius: "15px" }}>
                        <option value=" ">dependent</option>
                        <option value=" ">partially dependent</option>
                        <option value=" ">under-supervision</option>
                        <option value=" ">independent</option>
                      </Form.Select>
                    </FloatingLabel>
                    <br></br>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FloatingLabel
                      controlId="floatingSelect"
                      label="Supine to side lying"
                    >
                      <Form.Select style={{ borderRadius: "15px" }}>
                        <option value=" ">dependent</option>
                        <option value=" ">partially dependent</option>
                        <option value=" ">under-supervision</option>
                        <option value=" ">independent</option>
                      </Form.Select>
                    </FloatingLabel>
                    <br></br>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FloatingLabel
                      controlId="floatingSelect"
                      label="Side lying to sitting"
                    >
                      <Form.Select style={{ borderRadius: "15px" }}>
                        <option value=" ">dependent</option>
                        <option value=" ">partially dependent</option>
                        <option value=" ">under-supervision</option>
                        <option value=" ">independent</option>
                      </Form.Select>
                    </FloatingLabel>
                    <br></br>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FloatingLabel
                      controlId="floatingSelect"
                      label="Sitting to standing"
                    >
                      <Form.Select style={{ borderRadius: "15px" }}>
                        <option value=" ">dependent</option>
                        <option value=" ">partially dependent</option>
                        <option value=" ">under-supervision</option>
                        <option value=" ">independent</option>
                      </Form.Select>
                    </FloatingLabel>
                    <br></br>
                  </Col>
                </Row>
              </Row>
              <br></br>
              <Row>
                <h4>Balance</h4>
                <Col>
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Sitting : static"
                  >
                    <Form.Select style={{ borderRadius: "15px" }}>
                      <option value=" ">nornmal</option>
                      <option value=" ">good</option>
                      <option value=" ">fair</option>
                      <option value=" ">poor</option>
                      <option value=" ">zero</option>
                    </Form.Select>
                  </FloatingLabel>
                  <br></br>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Sitting : dynamic"
                  >
                    <Form.Select style={{ borderRadius: "15px" }}>
                      <option value=" ">nornmal</option>
                      <option value=" ">good</option>
                      <option value=" ">fair</option>
                      <option value=" ">poor</option>
                      <option value=" ">zero</option>
                    </Form.Select>
                  </FloatingLabel>
                  <br></br>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Standing : static"
                  >
                    <Form.Select style={{ borderRadius: "15px" }}>
                      <option value=" ">nornmal</option>
                      <option value=" ">good</option>
                      <option value=" ">fair</option>
                      <option value=" ">poor</option>
                      <option value=" ">zero</option>
                    </Form.Select>
                  </FloatingLabel>
                  <br></br>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Standing : dynamic"
                  >
                    <Form.Select style={{ borderRadius: "15px" }}>
                      <option value=" ">nornmal</option>
                      <option value=" ">good</option>
                      <option value=" ">fair</option>
                      <option value=" ">poor</option>
                      <option value=" ">zero</option>
                    </Form.Select>
                  </FloatingLabel>
                  <br></br>
                </Col>
              </Row>
              <br></br>
              <Row>
                <h4>Transfer</h4>
                <Col>
                  <p className="pe-2">Bed to W/C or chair</p>
                </Col>
                <Col sm={12} lg={6}>
                  <Form.Check
                    type="radio"
                    label="dependent"
                    name="group-8"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="partially dependent"
                    name="group-8"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="under-supervision"
                    name="group-8"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="independent"
                    name="group-8"
                    className="pe-3"
                  ></Form.Check>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <p className="pe-2">Bed to toilet</p>
                </Col>
                <Col sm={12} lg={6}>
                  <Form.Check
                    type="radio"
                    label="dependent"
                    name="group-9"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="partially dependent"
                    name="group-9"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="under-supervision"
                    name="group-9"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="independent"
                    name="group-9"
                    className="pe-3"
                  ></Form.Check>
                </Col>
              </Row>
              <br></br>
              <br></br>
              <Row>
                <Col sm={12} lg={6}>
                  <h4 className="pe-2">Walking/Mobility</h4>
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    label="independent"
                    name="group-10"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="w/c"
                    name="group-10"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="walking aid"
                    name="group-10"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" "
                    className="pe-3"
                    style={{ borderRadius: "15px" }}
                  ></Form.Control>
                  <Form.Check
                    type="radio"
                    label="orthotic"
                    name="group-10"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  ></Form.Control>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <p className="pe-2">Indoor</p>
                </Col>
                <Col sm={12} lg={6}>
                  <Form.Check
                    type="radio"
                    label="dependent"
                    name="group-11"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="partially dependent"
                    name="group-11"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="under-supervision"
                    name="group-11"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="independent"
                    name="group-11"
                    className="pe-3"
                  ></Form.Check>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <p className="pe-2">Outdoor</p>
                </Col>
                <Col sm={12} lg={6}>
                  <Form.Check
                    type="radio"
                    label="dependent"
                    name="group-12"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="partially dependent"
                    name="group-12"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="under-supervision"
                    name="group-12"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="independent"
                    name="group-12"
                    className="pe-3"
                  ></Form.Check>
                </Col>
              </Row>
              <br></br>
              <br></br>
              <Row>
                <Col>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="PT Diagnosis"
                  >
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                    />
                  </FloatingLabel>
                  <br></br>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Patient & Family Goal"
                  >
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                    />
                  </FloatingLabel>
                  <br></br>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Team Treatment Goal"
                  >
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                    />
                  </FloatingLabel>
                  <br></br>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Fuctional limitation"
                  >
                    <Form.Control
                      as="textarea"
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px", height: "14rem" }}
                    />
                  </FloatingLabel>
                  <br></br>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Plan of treatment"
                  >
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                    />
                  </FloatingLabel>
                  <br></br>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>Treatment</h4>
                </Col>
                <Col sm={12} lg={6}>
                  <Form.Check
                    type="checkbox"
                    label="Active assisted exs (93.11)"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="Active exs (93.12)"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="Passive exs (93.17)"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="Stretching (93.27)"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="Cardio/Pulmonary exs (93.36)"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="Balance training (93.19)"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="Ambulation & Gait training (93.22)"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="Breathing (93.18)"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="Coughing training (93.39)"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="Percussion/Vibration (93.39)"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="Postural Drainage (93.39)"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="other"
                    className="pe-3"
                  ></Form.Check>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  ></Form.Control>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Home Program"
                  >
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                    />
                  </FloatingLabel>
                  <br></br>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Re-assessment"
                  >
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                    />
                  </FloatingLabel>
                  <br></br>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex">
                    <Col>
                      <Form.Check
                        type="radio"
                        label="ฟื้นฟูฯต่อเนื่อง"
                        name="group-14"
                        className="pe-3"
                      ></Form.Check>
                    </Col>
                    <Col>
                      <Form.Check
                        type="radio"
                        label="จำหน่าย"
                        name="group-14"
                        className="pe-3"
                      ></Form.Check>
                    </Col>
                    <Col>
                      <Form.Check
                        type="radio"
                        label="เยื่ยมบ้าน"
                        name="group-14"
                        className="pe-3"
                      ></Form.Check>
                    </Col>
                    <Col>
                      <Form.Check
                        type="radio"
                        label="ส่งต่อ"
                        name="group-14"
                        className="pe-3"
                      ></Form.Check>
                    </Col>
                    <Col lg={4}>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder=" "
                        style={{ borderRadius: "15px" }}
                      ></Form.Control>
                    </Col>
                  </div>
                  <br></br>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Physical Therapist's Name"
                  >
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                    />
                  </FloatingLabel>
                  <br></br>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
        <br></br>
        <Row className="justify-content-md-center">
          <Col lg={6}>
            <Button
              as={Link}
              to="/search"
              className="w-100"
              variant="primary"
              style={{
                borderRadius: "15px",
                padding: ".75rem",
              }}
            >
              บันทึกข้อมูล
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default ImageThrapy;
