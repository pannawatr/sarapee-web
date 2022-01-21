import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  FloatingLabel,
  Card,
  Table,
  InputGroup,
  Button,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../Config";
import { onSnapshot, doc, updateDoc } from "firebase/firestore";

function OccupationalThrapy() {
  let { userId } = useParams();
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();

  const updateRef = doc(db, "users", userId);
  useEffect(() => {
    onSnapshot(doc(db, "users", userId), (doc) => {
      const item = [];
      item.push(doc.data());
      setUsers(item);
    });
  }, []);

  const [occTimeDb, setOccTimeDb] = useState("");
  const [occDayrecieveDb, setOccDayrecieveDb] = useState("");
  const [occTimeServiceDb, setOccServiceDb] = useState("");
  const [occIcdDb, setOccIcdDb] = useState("");
  const [occImportantSymptomsDb, setOccImportantSymtomsDb] = useState("");
  const [occPIDb, setOccPIDb] = useState("");
  const [occPIDateDb, setOccPIDateDb] = useState("");
  const [occPHDb, setOccPHDb] = useState("");
  const [occPrecautionDb, setOccPrecautionDb] = useState("");

  const [occGcsEDb, setOccGcsEDb] = useState("");
  const [occGcsMDb, setOccGcsMDb] = useState("");
  const [occGcsVDb, setOccGcsVDb] = useState("");

  const [occSencationLigthDb, setOccSencationLightDb] = useState("");
  const [occSencationPainDb, setOccSencationPainDb] = useState("");
  const [occSencationPropDb, setOccSencationPropDb] = useState("");

  const [occMuscleToneDb, setOccMuscleToneDb] = useState("");
  const [occShoulderRDb, setOccShoulderRDb] = useState("");
  const [occShoulderLDb, setOccShoulderLDb] = useState("");
  const [occElbowRDb, setOccElbowRDb] = useState("");
  const [occElbowLDb, setOccElbowLDb] = useState("");
  const [occForearmRDb, setOccForearmRDb] = useState("");
  const [occForearmLDb, setOccForearmLDb] = useState("");
  const [occWristRDb, setOccWristRDb] = useState("");
  const [occWristLDb, setOccWristLDb] = useState("");
  const [occFingersRDb, setOccFingersRDb] = useState("");
  const [occFingersLDb, setOccFingersLDb] = useState("");
  const [occRecoveryStateDb, setOccRecoveryStateDb] = useState("");

  const [occCoordinationDb, setOccCoordinationDb] = useState("");

  const [occHandGraspDb, setOccHandGraspDb] = useState("");
  const [occHandGraspAboutDb, setOccHandGraspAboutDb] = useState("");

  const [occHandPrehensionDb, setOccHandPrehensionDb] = useState("");
  const [occHandPrehensionAboutDb, setOccHandPrehensionAboutDb] = useState("");

  const [occHandDexDb, setOccHandDexDb] = useState("");
  const [occHandDexAboutDb, setOccHandDexAboutDb] = useState("");

  const [occSittingStaticDb, setOccSittingStaticDb] = useState("");
  const [occSittingDynamicDb, setOccSittingDynamicDb] = useState("");

  const [occEndruanceDb, setOccEndruanceDb] = useState("");

  const [occPerceptionDb, setOccPerceptionDb] = useState("");
  const [occPerceptionAboutDb, setOccPerceptionAboutDb] = useState("");

  const [occCommunicationDb, setOccCommunicationDb] = useState("");
  const [occCommunicationAboutDb, setOccCommunicationAboutDb] = useState("");

  const [occDysphagiaDb, setOccDysphagiaDb] = useState("");
  const [occDysphagiaAboutDb, setOccDysphagiaAboutDb] = useState("");

  const [occComplicationDb, setOccComplicationDb] = useState("");
  const [occComplicationAboutDb, setOccComplicationAboutDb] = useState("");

  const [occADLDb, setOccADLDb] = useState("");
  const [occADLAboutDb, setOccADLAboutDb] = useState("");

  const [occBiScoreDb, setOccBiScoreDb] = useState("");
  const [occAdaptiveDb, setOccAdaptiveDb] = useState("");
  const [occHomePhyDb, setOccHomePhyDb] = useState("");

  const [occLeisureDb, setOccLeisureDb] = useState("");
  const [occPrevocationalDb, setOccPrevocationalDb] = useState("");

  const [occ2Q1Db, setOcc2Q1Db] = useState("");
  const [occ2Q2Db, setOcc2Q2Db] = useState("");
  const [occOTDiagDb, setOccOTDiagDb] = useState("");
  const [occPatientGoalDb, setOccPatientGoalDb] = useState("");
  const [occRehabDb, setOccRehabDb] = useState("");
  const [occProblemDb, setOccProblemDb] = useState("");
  const [occPlanofTreatDb, setOccPlanofTreatDb] = useState("");

  const [occTreatmentICDDb, setOccTreatmentICFDb] = useState("");

  const [occHomeProgramDb, setOccHomeProgramDb] = useState("");
  const [occReassDb, setOccReassDb] = useState("");
  const [occReassAboutDb, setOccReassAboutDb] = useState("");

  const [occPhysicalNameDb, setOccPhysicalNameDb] = useState("");
  const [occNumJobDb, setOccNumJobDb] = useState("");

  const updateUser = async () => {
    await updateDoc(updateRef, {
      //กิจกรรม
      occTime: "",
      occDayrecieve: "",
      occTimeService: "",
      occIcd: "",
      occImportantSymptoms: "",
      occPI: "",
      occPIDate: "",
      occPH: "",
      occPrecaution: "",

      occGcsE: "",
      occGcsM: "",
      occGcsV: "",

      occSencationLigth: "",
      occSencationPain: "",
      occSencationProp: "",

      occMuscleTone: "",
      occShoulderR: "",
      occShoulderL: "",
      occElbowR: "",
      occElbowL: "",
      occForearmR: "",
      occForearmL: "",
      occWristR: "",
      occWristL: "",
      occFingersR: "",
      occFingersL: "",
      occRecoveryState: "",

      occCoordination: "",

      occHandGrasp: "",
      occHandGraspAbout: "",

      occHandPrehension: "",
      occHandPrehensionAbout: "",

      occHandDex: "",
      occHandDexAbout: "",

      occSittingStatic: "",
      occSittingDynamic: "",

      occEndruance: "",

      occPerception: "",
      occPerceptionAbout: "",

      occCommunication: "",
      occCommunicationAbout: "",

      occDysphagia: "",
      occDysphagiaAbout: "",

      occComplication: "",
      occComplicationAbout: "",

      occADL: "",
      occADLAbout: "",

      occBiScore: "",
      occAdaptive: "",
      occHomePhy: "",

      occLeisure: "",
      occPrevocational: "",

      occ2Q1: "",
      occ2Q2: "",
      occOTDiag: "",
      occPatientGoal: "",
      occRehab: "",
      occProblem: "",
      occPlanofTreat: "",

      occTreatmentICD: "",

      occHomeProgram: "",
      occReass: "",
      occReassAbout: "",

      occPhysicalName: "",
      occNumJob: "",
    }).then(() => {
      alert("บันทึกข้อมูลแล้ว");
      navigate("/search");
    });
  };
  return (
    <div>
      <Container className="p-3">
        <h4 className="text-center p-3">ประเมินกิจกรรมบำบัด</h4>
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
                    type="date"
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
                    type="time"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
              </div>
            </Col>

            <Col sm={6} md={6} lg={6} className="m-auto pt-3">
              <div className="d-flex justify-content-end">
                {users.map((user) => {
                  return (
                    <h4 className="pe-3">
                      ชื่อ : {user.fname} {user.lname}
                    </h4>
                  );
                })}
                {users.map((user) => {
                  return <h4 className="pe-3">อายุ : {user.age}</h4>;
                })}
              </div>
              <div className="d-flex justify-content-end">
                {users.map((user) => {
                  return (
                    <h4 className="pe-3">เลขบัตรประชาชน : {user.idCard}</h4>
                  );
                })}
              </div>
            </Col>
          </Row>
          <br></br>
          <Card className="p-3">
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
                <FloatingLabel controlId="floatingInputGrid" label="อาการสำคัญ">
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
              <h4>PI</h4>
              <Col>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Date of onset"
                >
                  <Form.Control
                    type="date"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
              </Col>
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
                <FloatingLabel controlId="floatingInputGrid" label="Precaution">
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
              <h4>1. GCS</h4>
              <Col>
                <FloatingLabel controlId="floatingSelect" label="E">
                  <Form.Select style={{ borderRadius: "15px" }}>
                    <option value=" ">1</option>
                    <option value=" ">2</option>
                    <option value=" ">3</option>
                    <option value=" ">4</option>
                    <option value=" ">5</option>
                    <option value=" ">6</option>
                    <option value=" ">7</option>
                    <option value=" ">8</option>
                    <option value=" ">9</option>
                  </Form.Select>
                </FloatingLabel>
                <br></br>
              </Col>
              <Col>
                <FloatingLabel controlId="floatingSelect" label="M">
                  <Form.Select style={{ borderRadius: "15px" }}>
                    <option value=" ">1</option>
                    <option value=" ">2</option>
                    <option value=" ">3</option>
                    <option value=" ">4</option>
                    <option value=" ">5</option>
                    <option value=" ">6</option>
                    <option value=" ">7</option>
                    <option value=" ">8</option>
                    <option value=" ">9</option>
                  </Form.Select>
                </FloatingLabel>
                <br></br>
              </Col>
              <Col>
                <FloatingLabel controlId="floatingSelect" label="V">
                  <Form.Select style={{ borderRadius: "15px" }}>
                    <option value=" ">1</option>
                    <option value=" ">2</option>
                    <option value=" ">3</option>
                    <option value=" ">4</option>
                    <option value=" ">5</option>
                    <option value=" ">6</option>
                    <option value=" ">7</option>
                    <option value=" ">8</option>
                    <option value=" ">9</option>
                  </Form.Select>
                </FloatingLabel>
                <br></br>
              </Col>
            </Row>

            <Row>
              <h4>2. Sencation</h4>
              <Col>
                <FloatingLabel controlId="floatingSelect" label="Light touch">
                  <Form.Select style={{ borderRadius: "15px" }}>
                    <option value=" ">Intact</option>
                  </Form.Select>
                </FloatingLabel>
                <br></br>
              </Col>
              <Col>
                <FloatingLabel controlId="floatingSelect" label="Pain response">
                  <Form.Select style={{ borderRadius: "15px" }}>
                    <option value=" ">Impaired</option>
                  </Form.Select>
                </FloatingLabel>
                <br></br>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingSelect"
                  label="Proprioception"
                >
                  <Form.Select style={{ borderRadius: "15px" }}>
                    <option value=" ">Absent</option>
                  </Form.Select>
                </FloatingLabel>
                <br></br>
              </Col>
            </Row>
            <Row>
              <h4>3. Muscle Tone</h4>
              <Col>
                <FloatingLabel controlId="floatingSelect" label="Muscle Tone">
                  <Form.Select style={{ borderRadius: "15px" }}>
                    <option value=" ">Flaccidity</option>
                  </Form.Select>
                </FloatingLabel>
                <br></br>
              </Col>
            </Row>
            <Row>
              <h4>4. ROM&Recover state (Brunnstrom stage)</h4>
              <Col className="mx-auto" lg={11}>
                <Table bordered responsive>
                  <thead>
                    <tr className="text-center">
                      <th rowSpan="2">UE</th>
                      <th colSpan="2">ROM</th>
                      <th rowSpan="2">Recovery state</th>
                    </tr>
                    <tr className="text-center">
                      <th>Rt.</th>
                      <th>Lt.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">Shoulder</td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder=" "
                          style={{ borderRadius: "15px" }}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder=" "
                          style={{ borderRadius: "15px" }}
                        />
                      </td>
                      <td rowSpan="5">
                        <Col>
                          <Form.Check
                            type="radio"
                            label="Stage 1 Flaccidity"
                            name="group-1"
                            className="pe-3"
                          ></Form.Check>
                          <Form.Check
                            type="radio"
                            label="Stage 2 Spasticity developing"
                            name="group-1"
                            className="pe-3"
                          ></Form.Check>
                          <Form.Check
                            type="radio"
                            label="Stage 3 Voluntary movement with synergy"
                            name="group-1"
                            className="pe-3"
                          ></Form.Check>
                          <Form.Check
                            type="radio"
                            label="Stage 4 Decrease synergy movement"
                            name="group-1"
                            className="pe-3"
                          ></Form.Check>
                          <Form.Check
                            type="radio"
                            label="Stage 5 Disappearance of basic synergy"
                            name="group-1"
                            className="pe-3"
                          ></Form.Check>
                          <Form.Check
                            type="radio"
                            label="Stage 6 Voluntary movement"
                            name="group-1"
                            className="pe-3"
                          ></Form.Check>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">Elbow</td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder=" "
                          style={{ borderRadius: "15px" }}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder=" "
                          style={{ borderRadius: "15px" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">Forearm</td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder=" "
                          style={{ borderRadius: "15px" }}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder=" "
                          style={{ borderRadius: "15px" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">Wrist</td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder=" "
                          style={{ borderRadius: "15px" }}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder=" "
                          style={{ borderRadius: "15px" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">Fingers</td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder=" "
                          style={{ borderRadius: "15px" }}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder=" "
                          style={{ borderRadius: "15px" }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row>
              <h4>5. Co-ordination</h4>
              <Col>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Co-ordination"
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
              <h4>6. Hand function</h4>
              <Col>
                <p>Grasp & release</p>
              </Col>
              <Col sm={12} lg={6}>
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="group-2"
                  className="pe-3"
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="No"
                  name="group-2"
                  className="pe-3"
                ></Form.Check>
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <p>Hand prehension</p>
              </Col>
              <Col sm={12} lg={6}>
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="group-3"
                  className="pe-3"
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="No"
                  name="group-3"
                  className="pe-3"
                ></Form.Check>
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <p>Hand dexterity</p>
              </Col>
              <Col sm={12} lg={6}>
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="group-4"
                  className="pe-3"
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="No"
                  name="group-4"
                  className="pe-3"
                ></Form.Check>
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </Col>
            </Row>
            <br></br>
            <Row>
              <h4>7. Sitting Balance</h4>
              <Col>
                <FloatingLabel
                  controlId="floatingSelect"
                  label="Sitting : Static"
                >
                  <Form.Select style={{ borderRadius: "15px" }}>
                    <option value=" ">No balance</option>
                    <option value=" ">poor</option>
                    <option value=" ">fair</option>
                    <option value=" ">good</option>
                    <option value=" ">Normal</option>
                  </Form.Select>
                </FloatingLabel>
                <br></br>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingSelect"
                  label="Sitting : Dynamic"
                >
                  <Form.Select style={{ borderRadius: "15px" }}>
                    <option value=" ">No balance</option>
                    <option value=" ">poor</option>
                    <option value=" ">fair</option>
                    <option value=" ">good</option>
                    <option value=" ">Normal</option>
                  </Form.Select>
                </FloatingLabel>
                <br></br>
              </Col>
            </Row>
            <Row>
              <h4>8. Endruance</h4>
              <Col>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder=""
                    style={{ borderRadius: "15px 0 0 15px" }}
                  />

                  <InputGroup.Text style={{ borderRadius: "0 15px 15px 0" }}>
                    นาที
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
            <Row className="me-auto pb-2">
              <Col lg={8}>
                <h4>9. Perception & Cognition</h4>
              </Col>
              <Col lg={2}>
                <Form.Check
                  type="radio"
                  label="Normal"
                  name="group-5"
                  className="pe-3"
                ></Form.Check>
              </Col>
              <Col lg={2}>
                <Form.Check
                  type="radio"
                  label="Impaired"
                  name="group-5"
                  className="pe-3"
                ></Form.Check>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Check
                  type="radio"
                  label="Neglect"
                  name="group-6"
                  className="pe-3"
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="Apraxia"
                  name="group-6"
                  className="pe-3"
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="Body schema"
                  name="group-6"
                  className="pe-3"
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="Memory"
                  name="group-6"
                  className="pe-3"
                ></Form.Check>
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="Orientation"
                  name="group-6"
                  className="pe-3"
                ></Form.Check>

                <Col>
                  <Form.Check
                    type="radio"
                    label="Attention span"
                    name="group-6"
                    className="pe-3"
                  ></Form.Check>
                </Col>
                <Col>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder=""
                      style={{ borderRadius: "15px 0 0 15px" }}
                    />

                    <InputGroup.Text style={{ borderRadius: "0 15px 15px 0" }}>
                      นาที
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </Col>
            </Row>
            <br></br>
            <Row>
              <h4>10. Communication</h4>
              <Col>
                <Form.Check
                  type="radio"
                  label="Normal"
                  name="group-7"
                  className="pe-3"
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="Dysarthria"
                  name="group-7"
                  className="pe-3"
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="Apraxia of speech"
                  name="group-7"
                  className="pe-3"
                ></Form.Check>
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="Aphasia"
                  name="group-7"
                  className="pe-3"
                ></Form.Check>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=""
                  style={{ borderRadius: "15px " }}
                />
              </Col>
            </Row>
            <br></br>
            <Row>
              <h4>11. Dysphagia</h4>
              <Row>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="group-8"
                    className="pe-3"
                  ></Form.Check>
                </Col>
                <Col>
                  <FloatingLabel controlId="floatingInputGrid" label="">
                    <Form.Control
                      as="textarea"
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px", height: "4rem" }}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Check
                    type="radio"
                    label="No"
                    name="group-8"
                    className="pe-3"
                  ></Form.Check>
                </Col>
              </Row>
            </Row>
            <br></br>
            <Row>
              <h4>12. Complication</h4>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="Shoulder subluxation"
                  className="pe-3"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="Shoulder-hand syndrome"
                  className="pe-3"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="Pressure sore"
                  className="pe-3"
                ></Form.Check>
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="Other"
                  className="pe-3"
                ></Form.Check>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </Col>
            </Row>
            <br></br>
            <Row>
              <h4>13. ADL</h4>
              <Col>
                <Form.Check
                  type="radio"
                  label="Independent"
                  name="group-9"
                  className="pe-3"
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="Dependent"
                  name="group-9"
                  className="pe-3"
                ></Form.Check>
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="Assist"
                  name="group-9"
                  className="pe-3"
                ></Form.Check>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </Col>
            </Row>
            <br></br>
            <Row>
              <h4>14. BI Score</h4>
              <Col>
                <FloatingLabel controlId="floatingInputGrid" label="BI Score">
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
              <h4>15. Adaptive device</h4>
              <Col>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Adaptive device"
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
              <h4>16. Home & Physical Environment</h4>
              <Col>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Home & Physical Environment"
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
              <h4>17. Leisure</h4>
              <Col>
                <FloatingLabel controlId="floatingInputGrid" label="Leisure">
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
              <h4>18. Prevocational</h4>
              <Col>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Prevocational"
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
              <h4>แบบคัดกรองโรคซึมเศร้าด้วย 2 คำถาม (2Q)</h4>
              <Col>
                <p>
                  ใน 2 สัปดาห์ที่ผ่านมารวมวันนี้ "ท่านรู้สึก หอหู่ เศร้า
                  หรือท้อแท้สิ้นหวังหรือไม่"
                </p>
              </Col>
              <Col md={1} lg={1}>
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="group-10"
                  className="pe-3"
                ></Form.Check>
              </Col>
              <Col md={1} lg={1}>
                <Form.Check
                  type="radio"
                  label="No"
                  name="group-10"
                  className="pe-3"
                ></Form.Check>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  ใน 2 สัปดาห์ที่ผ่านมารวมวันนี้ "ท่านรู้สึก เบื่อ
                  ทำอะไรก็ไม่เพลิดเพลินหรือไม่"
                </p>
              </Col>
              <Col md={1} lg={1}>
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="group-11"
                  className="pe-3"
                ></Form.Check>
              </Col>
              <Col md={1} lg={1}>
                <Form.Check
                  type="radio"
                  label="No"
                  name="group-11"
                  className="pe-3"
                ></Form.Check>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="OT Diagnosis"
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
                  label="Patient&Family Goal"
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
                <FloatingLabel controlId="floatingInputGrid" label="Rehab Team">
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
                <FloatingLabel controlId="floatingInputGrid" label="Problem">
                  <Form.Control
                    as="textarea"
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
              </Col>
            </Row>
            <Row className="mb-2">
              <h4>Plan of treatment</h4>
              <Col md={4} lg={4}>
                <Form.Check
                  type="checkbox"
                  label="Improve ADL"
                  className="pe-3"
                ></Form.Check>
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={4} lg={4}>
                <Form.Check
                  type="checkbox"
                  label="Improve hand function"
                  className="pe-3"
                ></Form.Check>
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={4} lg={4}>
                <Form.Check
                  type="checkbox"
                  label="Improve swallow"
                  className="pe-3"
                ></Form.Check>
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={4} lg={4}>
                <Form.Check
                  type="checkbox"
                  label="Improve sitting balance"
                  className="pe-3"
                ></Form.Check>
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={4} lg={4}>
                <Form.Check
                  type="checkbox"
                  label="Improve cognition/perception"
                  className="pe-3"
                ></Form.Check>
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={4} lg={4}>
                <Form.Check
                  type="checkbox"
                  label="Other"
                  className="pe-3"
                ></Form.Check>
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <h4>Treatment/ICD9</h4>
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="Occupational Thrapy (9383)"
                  className="pe-3"
                ></Form.Check>

                <Form.Check
                  type="checkbox"
                  label="Other"
                  className="pe-3"
                ></Form.Check>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="ADL training"
                  className="pe-3"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="Swallowing"
                  className="pe-3"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="Oro-motor stimulation"
                  className="pe-3"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="Perception/Cognition"
                  className="pe-3"
                ></Form.Check>
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="Hand Function"
                  className="pe-3"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="Exercise"
                  className="pe-3"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="Other"
                  className="pe-3"
                ></Form.Check>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </Col>
            </Row>
            <br></br>
            <Row className="mb-2">
              <h4>Home program</h4>
              <Col md={4} lg={4}>
                <Form.Check
                  type="checkbox"
                  label="Self exercise"
                  className="pe-3"
                ></Form.Check>
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={4} lg={4}>
                <Form.Check
                  type="checkbox"
                  label="Instruction"
                  className="pe-3"
                ></Form.Check>
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={4} lg={4}>
                <Form.Check
                  type="checkbox"
                  label="Care giver training"
                  className="pe-3"
                ></Form.Check>
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={4} lg={4}>
                <Form.Check
                  type="checkbox"
                  label="Other"
                  className="pe-3"
                ></Form.Check>
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </Col>
            </Row>
            <Row>
              <h4>Re-assessment</h4>
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
                <Form.Check
                  type="radio"
                  label="ฟื้นฟูฯต่อเนื่อง"
                  name="group-12"
                  className="pe-3"
                ></Form.Check>

                <Form.Check
                  type="radio"
                  label="จำหน่าย"
                  name="group-12"
                  className="pe-3"
                ></Form.Check>

                <Form.Check
                  type="radio"
                  label="ส่งต่อ"
                  name="group-12"
                  className="pe-3"
                ></Form.Check>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </Col>
              <Col> </Col>
            </Row>
            <br></br>
            <Row>
              <h4>Physical Therapist</h4>
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
              <Col>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="เลขที่ใบประกอบวิชาชีพ"
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
    </div>
  );
}

export default OccupationalThrapy;
