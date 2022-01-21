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
  const [occTimeServiceDb, setOccTimeServiceDb] = useState("");
  const [occIcdDb, setOccIcdDb] = useState("");
  const [occImportantSymptomsDb, setOccImportantSymptomsDb] = useState("");
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
  const [occPerception2Db, setOccPerception2Db] = useState("");
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
  const [occPlanofTreatAboutDb, setOccPlanofTreatAboutDb] = useState("");

  const [occTreatmentICDDb, setOccTreatmentICDDb] = useState("");
  const [occTreatmentICDAboutDb, setOccTreatmentICDAboutDb] = useState("");
  const [occTreatmentICD2Db, setOccTreatmentICD2Db] = useState("");
  const [occTreatmentICDAbout2Db, setOccTreatmentICDAbout2Db] = useState("");

  const [occHomeProgramDb, setOccHomeProgramDb] = useState("");
  const [occHomeProgramAboutDb, setOccHomeProgramAboutDb] = useState("");
  const [occReassDb, setOccReassDb] = useState("");
  const [occReassAboutDb, setOccReassAboutDb] = useState("");
  const [occReassAbout2Db, setOccReassAbout2Db] = useState("");

  const [occPhysicalNameDb, setOccPhysicalNameDb] = useState("");
  const [occNumJobDb, setOccNumJobDb] = useState("");

  const updateUser = async () => {
    await updateDoc(updateRef, {
      //กิจกรรม
      occTime: occTimeDb,
      occDayrecieve: occDayrecieveDb,
      occTimeService: occTimeServiceDb,
      occIcd: occIcdDb,
      occImportantSymptoms: occImportantSymptomsDb,
      occPI: occPIDb,
      occPIDate: occPIDateDb,
      occPH: occPHDb,
      occPrecaution: occPrecautionDb,

      occGcsE: occGcsEDb,
      occGcsM: occGcsMDb,
      occGcsV: occGcsVDb,

      occSencationLigth: occSencationLigthDb,
      occSencationPain: occSencationPainDb,
      occSencationProp: occSencationPropDb,

      occMuscleTone: occMuscleToneDb,
      occShoulderR: occShoulderRDb,
      occShoulderL: occShoulderLDb,
      occElbowR: occElbowRDb,
      occElbowL: occElbowLDb,
      occForearmR: occForearmRDb,
      occForearmL: occForearmLDb,
      occWristR: occWristRDb,
      occWristL: occWristLDb,
      occFingersR: occFingersRDb,
      occFingersL: occFingersLDb,
      occRecoveryState: occRecoveryStateDb,

      occCoordination: occCoordinationDb,

      occHandGrasp: occHandGraspDb,
      occHandGraspAbout: occHandGraspAboutDb,

      occHandPrehension: occHandPrehensionDb,
      occHandPrehensionAbout: occHandPrehensionAboutDb,

      occHandDex: occHandDexDb,
      occHandDexAbout: occHandDexAboutDb,

      occSittingStatic: occSittingStaticDb,
      occSittingDynamic: occSittingDynamicDb,

      occEndruance: occEndruanceDb,

      occPerception: occPerceptionDb,
      occPerception2: occPerception2Db,
      occPerceptionAbout: occPerceptionAboutDb,

      occCommunication: occCommunicationDb,
      occCommunicationAbout: occCommunicationAboutDb,

      occDysphagia: occDysphagiaDb,
      occDysphagiaAbout: occDysphagiaAboutDb,

      occComplication: occComplicationDb,
      occComplicationAbout: occComplicationAboutDb,

      occADL: occADLDb,
      occADLAbout: occADLAboutDb,

      occBiScore: occBiScoreDb,
      occAdaptive: occAdaptiveDb,
      occHomePhy: occHomePhyDb,

      occLeisure: occLeisureDb,
      occPrevocational: occPrevocationalDb,

      occ2Q1: occ2Q1Db,
      occ2Q2: occ2Q2Db,
      occOTDiag: occOTDiagDb,
      occPatientGoal: occPatientGoalDb,
      occRehab: occRehabDb,
      occProblem: occProblemDb,
      occPlanofTreat: occPlanofTreatDb,
      occPlanofTreatAbout: occPlanofTreatAboutDb,

      occTreatmentICD: occTreatmentICDDb,
      occTreatmentICDAbout: occTreatmentICDAboutDb,
      occTreatmentICD2: occTreatmentICD2Db,
      occTreatmentICDAbout2: occTreatmentICDAbout2Db,

      occHomeProgram: occHomeProgramDb,
      occHomeProgramAbout: occHomeProgramAboutDb,
      occReass: occReassDb,
      occReassAbout: occReassAboutDb,
      occReassAbout2: occReassAbout2Db,

      occPhysicalName: occPhysicalNameDb,
      occNumJob: occNumJobDb,
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
                    value="ในเวลา"
                    name="group-1"
                    className="pe-3"
                    onChange={(e) => {
                      setOccTimeDb(e.target.value);
                    }}
                  ></Form.Check>
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    label="นอกเวลา"
                    value="นอกเวลา"
                    name="group-1"
                    className="pe-3"
                    onChange={(e) => {
                      setOccTimeDb(e.target.value);
                    }}
                  ></Form.Check>
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Refer"
                    value="Refer"
                    name="group-1"
                    className="pe-3"
                    onChange={(e) => {
                      setOccTimeDb(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setOccDayrecieveDb(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setOccTimeServiceDb(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setOccIcdDb(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setOccImportantSymptomsDb(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setOccPIDateDb(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setOccPIDb(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setOccPHDb(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setOccPrecautionDb(e.target.value);
                    }}
                  />
                </FloatingLabel>
                <br></br>
              </Col>
            </Row>
            <Row>
              <h4>1. GCS</h4>
              <Col>
                <FloatingLabel controlId="floatingSelect" label="E">
                  <Form.Select
                    style={{ borderRadius: "15px" }}
                    onChange={(e) => {
                      setOccGcsEDb(e.target.value);
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </Form.Select>
                </FloatingLabel>
                <br></br>
              </Col>
              <Col>
                <FloatingLabel controlId="floatingSelect" label="M">
                  <Form.Select
                    style={{ borderRadius: "15px" }}
                    onChange={(e) => {
                      setOccGcsMDb(e.target.value);
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </Form.Select>
                </FloatingLabel>
                <br></br>
              </Col>
              <Col>
                <FloatingLabel controlId="floatingSelect" label="V">
                  <Form.Select
                    style={{ borderRadius: "15px" }}
                    onChange={(e) => {
                      setOccGcsVDb(e.target.valueP);
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </Form.Select>
                </FloatingLabel>
                <br></br>
              </Col>
            </Row>

            <Row>
              <h4>2. Sencation</h4>
              <Col>
                <FloatingLabel controlId="floatingSelect" label="Light touch">
                  <Form.Select
                    style={{ borderRadius: "15px" }}
                    onChange={(e) => {
                      setOccSencationLightDb(e.target.value);
                    }}
                  >
                    <option value="Intact">Intact</option>
                    <option value="Intact">Impaired</option>
                    <option value="Intact">Absent</option>
                  </Form.Select>
                </FloatingLabel>
                <br></br>
              </Col>
              <Col>
                <FloatingLabel controlId="floatingSelect" label="Pain response">
                  <Form.Select
                    style={{ borderRadius: "15px" }}
                    onChange={(e) => {
                      setOccSencationPainDb(e.target.value);
                    }}
                  >
                    <option value="Intact">Intact</option>
                    <option value="Intact">Impaired</option>
                    <option value="Intact">Absent</option>
                  </Form.Select>
                </FloatingLabel>
                <br></br>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingSelect"
                  label="Proprioception"
                >
                  <Form.Select
                    style={{ borderRadius: "15px" }}
                    onChange={(e) => {
                      setOccSencationPropDb(e.target.value);
                    }}
                  >
                    <option value="Intact">Intact</option>
                    <option value="Intact">Impaired</option>
                    <option value="Intact">Absent</option>
                  </Form.Select>
                </FloatingLabel>
                <br></br>
              </Col>
            </Row>
            <Row>
              <h4>3. Muscle Tone</h4>
              <Col>
                <FloatingLabel controlId="floatingSelect" label="Muscle Tone">
                  <Form.Select
                    style={{ borderRadius: "15px" }}
                    onChange={(e) => {
                      setOccMuscleToneDb(e.target.value);
                    }}
                  >
                    <option value="Flaccidity">Flaccidity</option>
                    <option value="hypotonic">hypotonic</option>
                    <option value="normal">normal</option>
                    <option value="hypertomia">hypertonia</option>
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
                          onChange={(e) => {
                            setOccShoulderRDb(e.target.value);
                          }}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder=" "
                          style={{ borderRadius: "15px" }}
                          onChange={(e) => {
                            setOccShoulderLDb(e.target.value);
                          }}
                        />
                      </td>
                      <td rowSpan="5">
                        <Col>
                          <Form.Check
                            type="radio"
                            label="Stage 1 Flaccidity"
                            value="Stage 1 Flaccidity"
                            name="group-1"
                            className="pe-3"
                            onChange={(e) => {
                              setOccRecoveryStateDb(e.target.value);
                            }}
                          ></Form.Check>
                          <Form.Check
                            type="radio"
                            label="Stage 2 Spasticity developing"
                            value="Stage 2 Spasticity developing"
                            name="group-1"
                            className="pe-3"
                            onChange={(e) => {
                              setOccRecoveryStateDb(e.target.value);
                            }}
                          ></Form.Check>
                          <Form.Check
                            type="radio"
                            label="Stage 3 Voluntary movement with synergy"
                            value="Stage 3 Voluntary movement with synergy"
                            name="group-1"
                            className="pe-3"
                            onChange={(e) => {
                              setOccRecoveryStateDb(e.target.value);
                            }}
                          ></Form.Check>
                          <Form.Check
                            type="radio"
                            label="Stage 4 Decrease synergy movement"
                            value="Stage 4 Decrease synergy movement"
                            name="group-1"
                            className="pe-3"
                            onChange={(e) => {
                              setOccRecoveryStateDb(e.target.value);
                            }}
                          ></Form.Check>
                          <Form.Check
                            type="radio"
                            label="Stage 5 Disappearance of basic synergy"
                            value="Stage 5 Disappearance of basic synergy"
                            name="group-1"
                            className="pe-3"
                            onChange={(e) => {
                              setOccRecoveryStateDb(e.target.value);
                            }}
                          ></Form.Check>
                          <Form.Check
                            type="radio"
                            label="Stage 6 Voluntary movement"
                            value="Stage 6 Voluntary movement"
                            name="group-1"
                            className="pe-3"
                            onChange={(e) => {
                              setOccRecoveryStateDb(e.target.value);
                            }}
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
                          onChange={(e) => {
                            setOccElbowRDb(e.target.value);
                          }}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder=" "
                          style={{ borderRadius: "15px" }}
                          onChange={(e) => {
                            setOccElbowLDb(e.target.value);
                          }}
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
                          onChange={(e) => {
                            setOccForearmRDb(e.target.value);
                          }}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder=" "
                          style={{ borderRadius: "15px" }}
                          onChange={(e) => {
                            setOccForearmLDb(e.target.value);
                          }}
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
                          onChange={(e) => {
                            setOccWristRDb(e.target.value);
                          }}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder=" "
                          style={{ borderRadius: "15px" }}
                          onChange={(e) => {
                            setOccWristLDb(e.target.value);
                          }}
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
                          onChange={(e) => {
                            setOccFingersRDb(e.target.value);
                          }}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder=" "
                          style={{ borderRadius: "15px" }}
                          onChange={(e) => {
                            setOccFingersLDb(e.target.value);
                          }}
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
                    onChange={(e) => {
                      setOccCoordinationDb(e.target.value);
                    }}
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
                  value="Yes"
                  name="group-2"
                  className="pe-3"
                  onChange={(e) => {
                    setOccHandGraspDb(e.target.value);
                  }}
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="No"
                  value="No"
                  name="group-2"
                  className="pe-3"
                  onChange={(e) => {
                    setOccHandGraspDb(e.target.value);
                  }}
                ></Form.Check>
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  onChange={(e) => {
                    setOccHandGraspAboutDb(e.target.value);
                  }}
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
                  value="Yes"
                  name="group-3"
                  className="pe-3"
                  onChange={(e) => {
                    setOccHandPrehensionDb(e.target.value);
                  }}
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="No"
                  value="No"
                  name="group-3"
                  className="pe-3"
                  onChange={(e) => {
                    setOccHandPrehensionDb(e.target.value);
                  }}
                ></Form.Check>
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  onChange={(e) => {
                    setOccHandPrehensionAboutDb(e.target.valueP);
                  }}
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
                  value="Yes"
                  name="group-4"
                  className="pe-3"
                  onChange={(e) => {
                    setOccHandDexDb(e.target.value);
                  }}
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="No"
                  value="No"
                  name="group-4"
                  className="pe-3"
                  onChange={(e) => {
                    setOccHandDexDb(e.target.value);
                  }}
                ></Form.Check>
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  onChange={(e) => {
                    setOccHandDexAboutDb(e.target.value);
                  }}
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
                  <Form.Select
                    style={{ borderRadius: "15px" }}
                    onChange={(e) => {
                      setOccSittingStaticDb(e.target.value);
                    }}
                  >
                    <option value="No balance">No balance</option>
                    <option value="poor">poor</option>
                    <option value="fair">fair</option>
                    <option value="good">good</option>
                    <option value="normal">normal</option>
                  </Form.Select>
                </FloatingLabel>
                <br></br>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingSelect"
                  label="Sitting : Dynamic"
                >
                  <Form.Select
                    style={{ borderRadius: "15px" }}
                    onChange={(e) => {
                      setOccSittingDynamicDb(e.target.value);
                    }}
                  >
                    <option value="No balance">No balance</option>
                    <option value="poor">poor</option>
                    <option value="fair">fair</option>
                    <option value="good">good</option>
                    <option value="normal">normal</option>
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
                    onChange={(e) => {
                      setOccEndruanceDb(e.target.value);
                    }}
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
                  value="Normal"
                  name="group-5"
                  className="pe-3"
                  onChange={(e) => {
                    setOccPerceptionDb(e.target.value);
                  }}
                ></Form.Check>
              </Col>
              <Col lg={2}>
                <Form.Check
                  type="radio"
                  label="Impaired"
                  value="Impaired"
                  name="group-5"
                  className="pe-3"
                  onChange={(e) => {
                    setOccPerceptionDb(e.target.value);
                  }}
                ></Form.Check>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Check
                  type="radio"
                  label="Neglect"
                  value="Neglect"
                  name="group-6"
                  className="pe-3"
                  onChange={(e) => {
                    setOccPerception2Db(e.target.value);
                  }}
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="Apraxia"
                  value="Apraxia"
                  name="group-6"
                  className="pe-3"
                  onChange={(e) => {
                    setOccPerception2Db(e.target.value);
                  }}
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="Body schema"
                  value="Body schema"
                  name="group-6"
                  className="pe-3"
                  onChange={(e) => {
                    setOccPerception2Db(e.target.value);
                  }}
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="Memory"
                  value="Memory"
                  name="group-6"
                  className="pe-3"
                  onChange={(e) => {
                    setOccPerception2Db(e.target.value);
                  }}
                ></Form.Check>
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="Orientation"
                  value="Orientation"
                  name="group-6"
                  className="pe-3"
                  onChange={(e) => {
                    setOccPerception2Db(e.target.value);
                  }}
                ></Form.Check>

                <Col>
                  <Form.Check
                    type="radio"
                    label="Attention span"
                    value="Attention span"
                    name="group-6"
                    className="pe-3"
                    onChange={(e) => {
                      setOccPerception2Db(e.target.value);
                    }}
                  ></Form.Check>
                </Col>
                <Col>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder=""
                      style={{ borderRadius: "15px 0 0 15px" }}
                      onChange={(e) => {
                        setOccPerceptionAboutDb(e.target.value);
                      }}
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
                  value="Normal"
                  name="group-7"
                  className="pe-3"
                  onChange={(e) => {
                    setOccCommunicationDb(e.target.value);
                  }}
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="Dysarthria"
                  value="Dysarthria"
                  name="group-7"
                  className="pe-3"
                  onChange={(e) => {
                    setOccCommunicationDb(e.target.value);
                  }}
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="Apraxia of speech"
                  value="Apraxia of speech"
                  name="group-7"
                  className="pe-3"
                  onChange={(e) => {
                    setOccCommunicationDb(e.target.value);
                  }}
                ></Form.Check>
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="Aphasia"
                  value="Aphasia"
                  name="group-7"
                  className="pe-3"
                  onChange={(e) => {
                    setOccCommunicationDb(e.target.value);
                  }}
                ></Form.Check>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=""
                  style={{ borderRadius: "15px " }}
                  onChange={(e) => {
                    setOccCommunicationAboutDb(e.target.value);
                  }}
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
                    value="Yes"
                    name="group-8"
                    className="pe-3"
                    onChange={(e) => {
                      setOccDysphagiaDb(e.target.value);
                    }}
                  ></Form.Check>
                </Col>
                <Col>
                  <FloatingLabel controlId="floatingInputGrid" label="">
                    <Form.Control
                      as="textarea"
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px", height: "4rem" }}
                      onChange={(e) => {
                        setOccDysphagiaAboutDb(e.target.value);
                      }}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Check
                    type="radio"
                    label="No"
                    label="No"
                    name="group-8"
                    className="pe-3"
                    onChange={(e) => {
                      setOccDysphagiaDb(e.target.value);
                    }}
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
                  value="Shoulder subluxation"
                  className="pe-3"
                  onChange={(e) => {
                    setOccComplicationDb(e.target.value);
                  }}
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="Shoulder-hand syndrome"
                  value="Shoulder-hand syndrome"
                  className="pe-3"
                  onChange={(e) => {
                    setOccComplicationDb(e.target.value);
                  }}
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="Pressure sore"
                  value="Pressure sore"
                  className="pe-3"
                  onChange={(e) => {
                    setOccComplicationDb(e.target.value);
                  }}
                ></Form.Check>
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="Other"
                  value="Other"
                  className="pe-3"
                  onChange={(e) => {
                    setOccComplicationDb(e.target.value);
                  }}
                ></Form.Check>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  onChange={(e) => {
                    setOccComplicationAboutDb(e.target.value);
                  }}
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
                  value="Independent"
                  name="group-9"
                  className="pe-3"
                  onChange={(e) => {
                    setOccADLDb(e.target.value);
                  }}
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="Dependent"
                  value="Dependent"
                  name="group-9"
                  className="pe-3"
                  onChange={(e) => {
                    setOccADLDb(e.target.value);
                  }}
                ></Form.Check>
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="Assist"
                  value="Assist"
                  name="group-9"
                  className="pe-3"
                  onChange={(e) => {
                    setOccADLDb(e.target.value);
                  }}
                ></Form.Check>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  onChange={(e) => {
                    setOccADLAboutDb(e.target.value);
                  }}
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
                    onChange={(e) => {
                      setOccBiScoreDb(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setOccAdaptiveDb(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setOccHomePhyDb(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setOccLeisureDb(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setOccPrevocationalDb(e.target.value);
                    }}
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
                  value="Yes"
                  name="group-10"
                  className="pe-3"
                  onChange={(e) => {
                    setOcc2Q1Db(e.target.value);
                  }}
                ></Form.Check>
              </Col>
              <Col md={1} lg={1}>
                <Form.Check
                  type="radio"
                  label="No"
                  value="No"
                  name="group-10"
                  className="pe-3"
                  onChange={(e) => {
                    setOcc2Q1Db(e.target.value);
                  }}
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
                  value="Yes"
                  name="group-11"
                  className="pe-3"
                  onChange={(e) => {
                    setOcc2Q2Db(e.target.value);
                  }}
                ></Form.Check>
              </Col>
              <Col md={1} lg={1}>
                <Form.Check
                  type="radio"
                  label="No"
                  value="No"
                  name="group-11"
                  className="pe-3"
                  onChange={(e) => {
                    setOcc2Q2Db(e.target.value);
                  }}
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
                    onChange={(e) => {
                      setOccOTDiagDb(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setOccPatientGoalDb(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setOccRehabDb(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setOccProblemDb(e.target.value);
                    }}
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
                  value="Improve ADL"
                  className="pe-3"
                  onChange={(e) => {
                    setOccPlanofTreatDb(e.target.value);
                  }}
                ></Form.Check>
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  onChange={(e) => {
                    setOccPlanofTreatAboutDb(e.target.value);
                  }}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={4} lg={4}>
                <Form.Check
                  type="checkbox"
                  label="Improve hand function"
                  value="Improve hand function"
                  className="pe-3"
                  onChange={(e) => {
                    setOccPlanofTreatDb(e.target.value);
                  }}
                ></Form.Check>
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  onChange={(e) => {
                    setOccPlanofTreatAboutDb(e.target.value);
                  }}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={4} lg={4}>
                <Form.Check
                  type="checkbox"
                  label="Improve swallow"
                  value="Improve swallow"
                  className="pe-3"
                  onChange={(e) => {
                    setOccPlanofTreatDb(e.target.value);
                  }}
                ></Form.Check>
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  onChange={(e) => {
                    setOccPlanofTreatAboutDb(e.target.value);
                  }}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={4} lg={4}>
                <Form.Check
                  type="checkbox"
                  label="Improve sitting balance"
                  value="Improve sitting balance"
                  className="pe-3"
                  onChange={(e) => {
                    setOccPlanofTreatDb(e.target.value);
                  }}
                ></Form.Check>
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  onChange={(e) => {
                    setOccPlanofTreatAboutDb(e.target.value);
                  }}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={4} lg={4}>
                <Form.Check
                  type="checkbox"
                  label="Improve cognition/perception"
                  value="Improve cognition/perception"
                  className="pe-3"
                  onChange={(e) => {
                    setOccPlanofTreatDb(e.target.value);
                  }}
                ></Form.Check>
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  onChange={(e) => {
                    setOccPlanofTreatAboutDb(e.target.value);
                  }}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={4} lg={4}>
                <Form.Check
                  type="checkbox"
                  label="Other"
                  value="Other"
                  className="pe-3"
                  onChange={(e) => {
                    setOccPlanofTreatDb(e.target.value);
                  }}
                ></Form.Check>
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  onChange={(e) => {
                    setOccPlanofTreatAboutDb(e.target.value);
                  }}
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
                  value="Occupational Thrapy (9383)"
                  className="pe-3"
                  onChange={(e) => {
                    setOccTreatmentICDDb(e.target.value);
                  }}
                ></Form.Check>

                <Form.Check
                  type="checkbox"
                  label="Other"
                  value="Other"
                  className="pe-3"
                  onChange={(e) => {
                    setOccTreatmentICDDb(e.target.value);
                  }}
                ></Form.Check>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  onChange={(e) => {
                    setOccTreatmentICDAboutDb(e.target.value);
                  }}
                />
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="ADL training"
                  value="ADL training"
                  className="pe-3"
                  onChange={(e) => {
                    setOccTreatmentICD2Db(e.target.value);
                  }}
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="Swallowing"
                  value="Swallowing"
                  className="pe-3"
                  onChange={(e) => {
                    setOccTreatmentICD2Db(e.target.value);
                  }}
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="Oro-motor stimulation"
                  value="Oro-motor stimulation"
                  className="pe-3"
                  onChange={(e) => {
                    setOccTreatmentICD2Db(e.target.value);
                  }}
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="Perception/Cognition"
                  value="Perception/Cognition"
                  className="pe-3"
                  onChange={(e) => {
                    setOccTreatmentICD2Db(e.target.value);
                  }}
                ></Form.Check>
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="Hand Function"
                  value="Hand Function"
                  className="pe-3"
                  onChange={(e) => {
                    setOccTreatmentICD2Db(e.target.value);
                  }}
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="Exercise"
                  value="Exercise"
                  className="pe-3"
                  onChange={(e) => {
                    setOccTreatmentICD2Db(e.target.value);
                  }}
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="Other"
                  value="Other"
                  className="pe-3"
                  onChange={(e) => {
                    setOccTreatmentICD2Db(e.target.value);
                  }}
                ></Form.Check>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  onChange={(e) => {
                    setOccTreatmentICDAbout2Db(e.target.value);
                  }}
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
                  value="Self exercise"
                  className="pe-3"
                  onChange={(e) => {
                    setOccHomeProgramDb(e.target.value);
                  }}
                ></Form.Check>
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  onChange={(e) => {
                    setOccHomeProgramAboutDb(e.target.value);
                  }}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={4} lg={4}>
                <Form.Check
                  type="checkbox"
                  label="Instruction"
                  value="Instruction"
                  className="pe-3"
                  onChange={(e) => {
                    setOccHomeProgramDb(e.target.value);
                  }}
                ></Form.Check>
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  onChange={(e) => {
                    setOccHomeProgramAboutDb(e.target.value);
                  }}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={4} lg={4}>
                <Form.Check
                  type="checkbox"
                  label="Care giver training"
                  value="Care giver training"
                  className="pe-3"
                  onChange={(e) => {
                    setOccHomeProgramDb(e.target.value);
                  }}
                ></Form.Check>
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  onChange={(e) => {
                    setOccHomeProgramAboutDb(e.target.value);
                  }}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={4} lg={4}>
                <Form.Check
                  type="checkbox"
                  label="Other"
                  value="Other"
                  className="pe-3"
                  onChange={(e) => {
                    setOccHomeProgramDb(e.target.value);
                  }}
                ></Form.Check>
              </Col>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  onChange={(e) => {
                    setOccHomeProgramAboutDb(e.target.value);
                  }}
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
                    onChange={(e) => {
                      setOccReassDb(e.target.value);
                    }}
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
                  value="ฟื้นฟูฯต่อเนื่อง"
                  name="group-12"
                  className="pe-3"
                  onChange={(e) => {
                    setOccReassAboutDb(e.target.value);
                  }}
                ></Form.Check>

                <Form.Check
                  type="radio"
                  label="จำหน่าย"
                  value="จำหน่าย"
                  name="group-12"
                  className="pe-3"
                  onChange={(e) => {
                    setOccReassAboutDb(e.target.value);
                  }}
                ></Form.Check>

                <Form.Check
                  type="radio"
                  label="ส่งต่อ"
                  value="ส่งต่อ"
                  name="group-12"
                  className="pe-3"
                  onChange={(e) => {
                    setOccReassAboutDb(e.target.value);
                  }}
                ></Form.Check>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  onChange={(e) => {
                    setOccReassAbout2Db(e.target.value);
                  }}
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
                    onChange={(e) => {
                      setOccPhysicalNameDb(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setOccNumJobDb(e.target.value);
                    }}
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
                onClick={updateUser}
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
