import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";

import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../Config";
import {
  updateDoc,
  doc,
  addDoc,
  getDocs,
  collection,
  Timestamp,
} from "firebase/firestore";

function ICFForm() {
  let navigate = useNavigate();

  //useState
  const [idCardDb, setIdCardDb] = useState("");
  const [icfBodyInjuryDb, setIcfBodyInjuryDb] = useState("");
  const [icfBodyCognitionDb, setIcfBodyCognitionDb] = useState("");
  const [icfBodyFitnessDb, setIcfBodyFitnessDb] = useState("");
  const [icfBodyUpperDb, setIcfBodyUpperDb] = useState("");

  const [icfPartiQualityDb, setIcfPartiQualityDb] = useState("");
  const [icfPartiCommunityDb, setIcfPartiCommunityDb] = useState("");
  const [icfPartiSocialDb, setIcfPartiSocialDb] = useState("");
  const [icfPartiWorkEmploymentDb, setIcfPartiWorkEmploymentDb] = useState("");

  const [icfActMobilityDb, setIcfActMobilityDb] = useState("");
  const [icfActADLDb, setIcfActADLDb] = useState("");
  const [icfActPhysicalDb, setIcfActPhysicalDb] = useState("");

  const [icfEnvWheelDb, setIcfEnvWheelDb] = useState("");
  const [icfEnvHomeDb, setIcfEnvHomeDb] = useState("");
  const [icfEnvTransDb, setIcfEnvTransDb] = useState("");

  const [icfImpairmentDb, setIcfImpairmentDb] = useState("การเคลื่อนไหว");

  const [icfPerStatusDb, setIcfPerStatusDb] = useState("");
  const [icfPerSkillDb, setIcfPerSkillDb] = useState("");
  const [icfPerBMIDb, setIcfPerBMIDb] = useState("");
  const [icfPerGenderDb, setIcfPerGenderDb] = useState("");
  const [icfPerEthDb, setIcfPerEthDb] = useState("");
  const [icfPerDurationDb, setIcfPerDurationDb] = useState("");
  const [icfPerMarDb, setIcfPerMarDb] = useState("");

  const updateUser = async () => {
    const updateRef = doc(db, "users", idCardDb);
    const subcollection = collection(updateRef, "icf");
    await addDoc(subcollection, {
      //icf
      icfBodyInjury: icfBodyInjuryDb,
      icfBodyCognition: icfBodyCognitionDb,
      icfBodyFitness: icfBodyFitnessDb,
      icfBodyUpper: icfBodyUpperDb,

      icfPartiQuality: icfPartiQualityDb,
      icfPartiCommunity: icfPartiCommunityDb,
      icfPartiSocial: icfPartiSocialDb,
      icfPartiWorkEmployment: icfPartiWorkEmploymentDb,

      icfActMobility: icfActMobilityDb,
      icfActADL: icfActADLDb,
      icfActPhysical: icfActPhysicalDb,

      icfEnvWheel: icfEnvWheelDb,
      icfEnvHome: icfEnvHomeDb,
      icfEnvTrans: icfEnvTransDb,

      icfImpairment: icfImpairmentDb,

      icfPerStatus: icfPerStatusDb,
      icfPerSkill: icfPerSkillDb,
      icfPerBMI: icfPerBMIDb,
      icfPerGender: icfPerGenderDb,
      icfPerEth: icfPerEthDb,
      icfPerDuration: icfPerDurationDb,
      icfPerMar: icfPerMarDb,

      icfTime: Timestamp.fromDate(new Date()),
    }).then(() => {
      updateDoc(updateRef, {
        countIcf: 1,
      });
      alert("บันทึกข้อมูลแล้ว");
      // navigate("/search");
    });
  };

  return (
    <Container className="d-grid p-3">
      <Form>
        <Row>
          <Col lg={12}>
            <FloatingLabel controlId="floatingInputGrid" label="เลขบัตรประชาชน">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setIdCardDb(e.target.value);
                }}
              />
            </FloatingLabel>
            <br></br>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Card style={{ borderRadius: "15px" }}>
              <Card.Body>
                <h4 className="text-center p-2">
                  Body functions and structures
                </h4>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Injury severity and neurologic level"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfBodyInjuryDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel controlId="floatingInputGrid" label="Cognition">
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfBodyCognitionDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel controlId="floatingInputGrid" label="Fitness">
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfBodyFitnessDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Upper extremities"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfBodyUpperDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
              </Card.Body>
            </Card>
            <br></br>
          </Col>

          <Col lg={6}>
            <Card style={{ borderRadius: "15px" }}>
              <Card.Body>
                <h4 className="text-center p-2">Participation</h4>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Quality of life"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfPartiQualityDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Community Participation"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfPartiCommunityDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Social Engagement"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfPartiSocialDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Work / Employment"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfPartiWorkEmploymentDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
              </Card.Body>
            </Card>
            <br></br>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <Card style={{ borderRadius: "15px" }}>
              <Card.Body>
                <h4 className="text-center p-2">Activities</h4>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Mobility in the home and community"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfActMobilityDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel controlId="floatingInputGrid" label="ADL">
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfActADLDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Physical avtivity and exercise"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfActPhysicalDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
              </Card.Body>
            </Card>
            <br></br>
          </Col>

          <Col lg={6}>
            <Card style={{ borderRadius: "15px" }}>
              <Card.Body>
                <h4 className="text-center p-2">Enviromental Factors</h4>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Wheelchair design and seating configuration"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfEnvWheelDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Home, Comunity, and work barriers"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfEnvHomeDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Transportation"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfEnvTransDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
              </Card.Body>
            </Card>
            <br></br>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Card style={{ borderRadius: "15px" }}>
              <Card.Body>
                <FloatingLabel controlId="floatingSelect" label="Impairment">
                  <Form.Select
                    style={{ borderRadius: "15px" }}
                    onChange={(e) => {
                      setIcfImpairmentDb(e.target.value);
                    }}
                  >
                    <option value="การเคลื่อนไหว">การเคลื่อนไหว</option>
                    <option value="การกลื่น">การกลื่น</option>
                    <option value="การพูด">การพูด</option>
                    <option value="ความคิดความจำ">ความคิดตวามจำ</option>
                  </Form.Select>
                </FloatingLabel>
              </Card.Body>
            </Card>
            <br></br>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Card style={{ borderRadius: "15px" }}>
              <Card.Body>
                <h4 className="text-center p-2">Personal Factors</h4>
                <FloatingLabel controlId="floatingInputGrid" label="Status">
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfPerStatusDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                    required
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel controlId="floatingInputGrid" label="Skill">
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfPerSkillDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel controlId="floatingInputGrid" label="BMI">
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfPerBMIDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel controlId="floatingInputGrid" label="Gender">
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfPerGenderDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel controlId="floatingInputGrid" label="Ethnicity">
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfPerEthDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Duration of impairment"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfPerDurationDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Maritial and socioeconomic stauts"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    onChange={(e) => {
                      setIcfPerMarDb(e.target.value);
                    }}
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
              </Card.Body>
            </Card>
            <br></br>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col lg={6}>
            <Button
              className="w-100"
              variant="primary"
              onClick={updateUser}
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

export default ICFForm;
