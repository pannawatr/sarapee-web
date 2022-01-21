import React, { useState, useEffect } from "react";
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
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../Config";
import { onSnapshot, doc, updateDoc } from "firebase/firestore";

function ImageThrapy() {
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

  //DB
  const [imgTimeDb, setImgTimeDb] = useState("");
  const [imgDayrecieveDb, setImgDaytrecieveDb] = useState("");
  const [imgTimeServiceDb, setImgTimeServiceDb] = useState("");
  const [imgIcdDb, setImgIcdDb] = useState("");
  const [imgImportantSymptomsDb, setImgImportantStmptomsDb] = useState("");
  const [imgPIDb, setImgPIDb] = useState("");
  const [imgPHDb, setImgPHDb] = useState("");
  const [imgPrecautionDb, setImgPrecautionDb] = useState("");
  const [imgSpecialInvestigationDb, setImgSpecialInvestigationDb] =
    useState("");
  const [imgVitalBPDb, setImgVitalBPDb] = useState("");
  const [imgVitalHRDb, setImgVitalHRDb] = useState("");
  const [imgVitalPRDb, setImgVitalPRDb] = useState("");
  const [imgVitalTempDb, setImgVitalTempDb] = useState("");
  const [imgVital02satDb, setImgVital02satDb] = useState("");
  const [imgConsiouscationDb, setImgConsiouscationDb] = useState("");
  const [imgComununicationDb, setImgComunicationDb] = useState("");
  const [imgComununicationAboutDb, setImgComunicationAboutDb] = useState("");
  const [imgGeneralApperanceDb, setImgGeneralApperanceDb] = useState("");
  const [imgPalpationDb, setImgPalpationDb] = useState("");
  const [imgMuscleToneDb, setImgMusleToneDb] = useState("");
  const [imgROMDb, setImgROMDb] = useState("");
  const [imgMNTDb, setImgMNTDb] = useState("");
  const [imgHERtDb, setImgHERtDb] = useState("");
  const [imgHELtDb, setImgHELtDb] = useState("");
  const [imgLERtDb, setImgLERtDb] = useState("");
  const [imgLELtDb, setImgLELtDb] = useState("");
  const [imgUpwardDownwardDb, setImgUpwardDownwardDb] = useState("");
  const [imgSupineDb, setImgSupineDb] = useState("");
  const [imgSidelyingDb, setImgSidelyingDb] = useState("");
  const [imgSittingtoStandDb, setImgSittingtoStandDb] = useState("");
  const [imgBalanceSitDynamicDb, setImgBalanceSitDynamicDb] = useState("");
  const [imgBalanceSitStaticDb, setImgBalanceSitStaticDb] = useState("");
  const [imgBalanceStandDynamicDb, setImgBalanceStandDynamicDb] = useState("");
  const [imgBalanceStandStaticDb, setImgBalanceStandStaticDb] = useState("");
  const [imgTransferBedtoWcDb, setImgTransferBedtoWCDb] = useState("");
  const [imgTransferBedtoToiletDb, setImgTransferBedtoToiletDb] = useState("");
  const [imgWalkingDb, setImgWalkingDb] = useState("");
  const [imgWalkingAboutDb, setImgWalkingAboutDb] = useState("");
  const [imgIndoorDb, setImgIndoorDb] = useState("");
  const [imgOutDoorDb, setImgOutDoorDb] = useState("");
  const [imgPTDiagDb, setImgPTDiagDb] = useState("");
  const [imgPatientFamGoalDb, setImgPatientFamGoalDb] = useState("");
  const [imgTeamTreatGoalDb, setImgTeamTreatGoalDb] = useState("");
  const [imgFunctionallimitDb, setImgFunctionallimitDb] = useState("");
  const [imgPlanOfTreatmentDb, setImgPlanofTreatmentDb] = useState("");
  const [imgTreatmentAboutDb, setImgTreatmentAboutDb] = useState("");
  const [imgHomeprogramDb, setImgHomeprogramDb] = useState("");
  const [imgReassessmentDb, setImgReassessmentDb] = useState("");
  const [imgReassessmentPointDb, setImgReassessmentPointDb] = useState("");
  const [imgReassessmentPointAboutDb, setImgReassessmentPointAboutDb] =
    useState("");
  const [imgPhysicalTherapyNameDb, setImgPhysicalTherapyNameDb] = useState("");

  //State Check
  const [CommunicationCheckYes, setCommunicationCheckYes] = useState(false);
  const [CommunicationCheckNo, setCommunicationCheckNo] = useState(false);

  //Checkbox
  const [checkbox1, setCheckbox1] = useState(false);
  const [valueCheckbox1, setValueCheckbox1] = useState("");
  const handleCheckbox1 = (e) => {
    setCheckbox1(!checkbox1);
    if (!checkbox1) {
      setValueCheckbox1(e.target.value);
    } else {
      setValueCheckbox1("");
    }
  };

  //Checkbox-2
  const [checkbox2, setCheckbox2] = useState(false);
  const [valueCheckbox2, setValueCheckbox2] = useState("");
  const handleCheckbox2 = (e) => {
    setCheckbox2(!checkbox2);
    if (!checkbox2) {
      setValueCheckbox2(e.target.value);
    } else {
      setValueCheckbox2("");
    }
  };

  //Checkbox-3
  const [checkbox3, setCheckbox3] = useState(false);
  const [valueCheckbox3, setValueCheckbox3] = useState("");
  const handleCheckbox3 = (e) => {
    setCheckbox3(!checkbox3);
    if (!checkbox3) {
      setValueCheckbox3(e.target.value);
    } else {
      setValueCheckbox3("");
    }
  };

  //Checkbox-4
  const [checkbox4, setCheckbox4] = useState(false);
  const [valueCheckbox4, setValueCheckbox4] = useState("");
  const handleCheckbox4 = (e) => {
    setCheckbox4(!checkbox4);
    if (!checkbox4) {
      setValueCheckbox4(e.target.value);
    } else {
      setValueCheckbox4("");
    }
  };

  //Checkbox-5
  const [checkbox5, setCheckbox5] = useState(false);
  const [valueCheckbox5, setValueCheckbox5] = useState("");
  const handleCheckbox5 = (e) => {
    setCheckbox5(!checkbox5);
    if (!checkbox5) {
      setValueCheckbox5(e.target.value);
    } else {
      setValueCheckbox5("");
    }
  };

  //Checkbox-6
  const [checkbox6, setCheckbox6] = useState(false);
  const [valueCheckbox6, setValueCheckbox6] = useState("");
  const handleCheckbox6 = (e) => {
    setCheckbox6(!checkbox6);
    if (!checkbox6) {
      setValueCheckbox6(e.target.value);
    } else {
      setValueCheckbox6("");
    }
  };

  //Checkbox-7
  const [checkbox7, setCheckbox7] = useState(false);
  const [valueCheckbox7, setValueCheckbox7] = useState("");
  const handleCheckbox7 = (e) => {
    setCheckbox7(!checkbox7);
    if (!checkbox7) {
      setValueCheckbox7(e.target.value);
    } else {
      setValueCheckbox7("");
    }
  };

  //Checkbox-8
  const [checkbox8, setCheckbox8] = useState(false);
  const [valueCheckbox8, setValueCheckbox8] = useState("");
  const handleCheckbox8 = (e) => {
    setCheckbox8(!checkbox8);
    if (!checkbox8) {
      setValueCheckbox8(e.target.value);
    } else {
      setValueCheckbox8("");
    }
  };

  //Checkbox-9
  const [checkbox9, setCheckbox9] = useState(false);
  const [valueCheckbox9, setValueCheckbox9] = useState("");
  const handleCheckbox9 = (e) => {
    setCheckbox9(!checkbox9);
    if (!checkbox9) {
      setValueCheckbox9(e.target.value);
    } else {
      setValueCheckbox9("");
    }
  };

  //Checkbox-10
  const [checkbox10, setCheckbox10] = useState(false);
  const [valueCheckbox10, setValueCheckbox10] = useState("");
  const handleCheckbox10 = (e) => {
    setCheckbox10(!checkbox10);
    if (!checkbox10) {
      setValueCheckbox10(e.target.value);
    } else {
      setValueCheckbox10("");
    }
  };

  //Checkbox-11
  const [checkbox11, setCheckbox11] = useState(false);
  const [valueCheckbox11, setValueCheckbox11] = useState("");
  const handleCheckbox11 = (e) => {
    setCheckbox11(!checkbox11);
    if (!checkbox11) {
      setValueCheckbox11(e.target.value);
    } else {
      setValueCheckbox11("");
    }
  };

  const updateUser = async () => {
    const imgTreatmentDb =
      valueCheckbox1 +
      valueCheckbox2 +
      valueCheckbox3 +
      valueCheckbox4 +
      valueCheckbox5 +
      valueCheckbox6 +
      valueCheckbox7 +
      valueCheckbox8 +
      valueCheckbox9 +
      valueCheckbox10 +
      valueCheckbox11 +
      imgTreatmentAboutDb;

    await updateDoc(updateRef, {
      //กายภาพบำบัด
      imgTime: imgTimeDb,
      imgDayrecieve: imgDayrecieveDb,
      imgTimeService: imgTimeServiceDb,

      imgIcd: imgIcdDb,
      imgImportantSymptoms: imgImportantSymptomsDb,
      imgPI: imgPIDb,
      imgPH: imgPHDb,
      imgPrecaution: imgPrecautionDb,
      imgSpecialInvestigation: imgSpecialInvestigationDb,
      imgVitalBP: imgVitalBPDb,
      imgVitalHR: imgVitalHRDb,
      imgVitalPR: imgVitalPRDb,
      imgVitalTemp: imgVitalTempDb,
      imgVitalO2sat: imgVital02satDb,

      imgConsiouscation: imgConsiouscationDb,
      imgComununication: imgComununicationDb,
      imgComununicationAbout: imgComununicationAboutDb,
      imgGeneralApperance: imgGeneralApperanceDb,

      imgPalpation: imgPalpationDb,

      imgMuscleTone: imgMuscleToneDb,
      imgROM: imgROMDb,
      imgMNT: imgMNTDb,
      imgHERt: imgHERtDb,
      imgHELt: imgHELtDb,
      imgLERt: imgLERtDb,
      imgLELt: imgLELtDb,

      imgUpwardDownward: imgUpwardDownwardDb,
      imgSupine: imgSupineDb,
      imgSidelying: imgSidelyingDb,
      imgSittingtoStand: imgSittingtoStandDb,

      imgBalanceSitStatic: imgBalanceSitStaticDb,
      imgBalanceSitDynamic: imgBalanceSitDynamicDb,
      imgBalanceStandStatic: imgBalanceStandStaticDb,
      imgBalanceStandDynamic: imgBalanceStandDynamicDb,

      imgTranferBedtoWC: imgTransferBedtoWcDb,
      imgTransferBedtoToilet: imgTransferBedtoToiletDb,
      imgWalking: imgWalkingDb,
      imgWalkingAbout: imgWalkingAboutDb,

      imgIndoor: imgIndoorDb,
      imgOutDoor: imgOutDoorDb,

      imgPTDiag: imgPTDiagDb,
      imgPatientFamGoal: imgPatientFamGoalDb,
      imgTeamTreatGoal: imgTeamTreatGoalDb,
      imgFunctionallimit: imgFunctionallimitDb,

      imgPlanOfTreatment: imgPlanOfTreatmentDb,

      imgTreatment: imgTreatmentDb,

      imgHomeprogram: imgHomeprogramDb,
      imgReassessment: imgReassessmentDb,
      imgReassessmentPoint: imgReassessmentPointDb,
      imgReassessmentPointAbout: imgReassessmentPointAboutDb,
      imgPhysicalTherapyName: imgPhysicalTherapyNameDb,
    }).then(() => {
      alert("บันทึกข้อมูลแล้ว");
      navigate("/search");
    });
  };

  //IF for Communication

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
                  value="ในเวลา"
                  onChange={(e) => {
                    setImgTimeDb(e.target.value);
                  }}
                ></Form.Check>
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="นอกเวลา"
                  name="group-1"
                  className="pe-3"
                  value="นอกเวลา"
                  onChange={(e) => {
                    setImgTimeDb(e.target.value);
                  }}
                ></Form.Check>
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="Refer"
                  name="group-1"
                  className="pe-3"
                  value="Refer"
                  onChange={(e) => {
                    setImgTimeDb(e.target.value);
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
                    setImgDaytrecieveDb(e.target.value);
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
                    setImgTimeServiceDb(e.target.value);
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
                return <h4 className="pe-3">เลขบัตรประชาชน : {user.idCard}</h4>;
              })}
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
                      onChange={(e) => {
                        setImgIcdDb(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setImgImportantStmptomsDb(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setImgPIDb(e.target.value);
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
                        setImgPHDb(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setImgPrecautionDb(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setImgSpecialInvestigationDb(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setImgVitalBPDb(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setImgVitalHRDb(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setImgVitalPRDb(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setImgVitalTempDb(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setImgVital02satDb(e.target.value);
                      }}
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
                    <Form.Select
                      style={{ borderRadius: "15px" }}
                      onChange={(e) => {
                        setImgConsiouscationDb(e.target.value);
                      }}
                    >
                      <option value="Alert">Alert</option>
                      <option value="Drowsiness">Drowsiness</option>
                      <option value="Stupor">Stupor</option>
                      <option value="Semicoma">Semicoma</option>
                      <option value="Coma">Coma</option>
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
                    value="Yes"
                    onChange={(e) => {
                      setCommunicationCheckYes(true);
                      setCommunicationCheckNo(false);
                      setImgComunicationDb(e.target.value);
                    }}
                  ></Form.Check>

                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="ระบุระดับ/ลักษณะการสื่อสาร"
                  >
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                      onChange={(e) => {
                        if (CommunicationCheckYes) {
                          setImgComunicationAboutDb(e.target.value);
                        }
                      }}
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
                    value="No"
                    onChange={(e) => {
                      setCommunicationCheckYes(false);
                      setCommunicationCheckNo(true);
                      setImgComunicationDb(e.target.value);
                    }}
                  ></Form.Check>

                  <FloatingLabel controlId="floatingInputGrid" label="หมายเหตุ">
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                      onChange={(e) => {
                        if (CommunicationCheckNo) {
                          setImgComunicationAboutDb(e.target.value);
                        }
                      }}
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
                      onChange={(e) => {
                        setImgGeneralApperanceDb(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setImgPalpationDb(e.target.value);
                      }}
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
                    value="Normal"
                    onChange={(e) => {
                      setImgMusleToneDb(e.target.value);
                    }}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="Hypertone"
                    name="group-3"
                    className="pe-3"
                    value="Hypertone"
                    onChange={(e) => {
                      setImgMusleToneDb(e.target.value);
                    }}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="Hypotone"
                    name="group-3"
                    className="pe-3"
                    value="Hypotone"
                    onChange={(e) => {
                      setImgMusleToneDb(e.target.value);
                    }}
                  ></Form.Check>
                </Col>
                <Col>
                  <FloatingLabel controlId="floatingInputGrid" label="ROM">
                    <Form.Control
                      as="textarea"
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px", height: "7.5rem" }}
                      onChange={(e) => {
                        setImgROMDb(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setImgMNTDb(e.target.value);
                      }}
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
                      value="Good"
                      onChange={(e) => {
                        setImgHERtDb(e.target.value);
                      }}
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Fair"
                      name="group-4"
                      className="pe-3"
                      value="Fair"
                      onChange={(e) => {
                        setImgHERtDb(e.target.value);
                      }}
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Poor"
                      name="group-4"
                      className="pe-3"
                      value="Poor"
                      onChange={(e) => {
                        setImgHERtDb(e.target.value);
                      }}
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Loss"
                      name="group-4"
                      className="pe-3"
                      value="Loss"
                      onChange={(e) => {
                        setImgHERtDb(e.target.value);
                      }}
                    ></Form.Check>
                  </div>
                  <div className="d-flex">
                    <p className="pe-2">Lt.</p>
                    <Form.Check
                      type="radio"
                      label="Good"
                      name="group-5"
                      className="pe-3"
                      value="Good"
                      onChange={(e) => {
                        setImgHELtDb(e.target.value);
                      }}
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Fair"
                      name="group-5"
                      className="pe-3"
                      value="Fair"
                      onChange={(e) => {
                        setImgHELtDb(e.target.value);
                      }}
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Poor"
                      name="group-5"
                      className="pe-3"
                      value="Poor"
                      onChange={(e) => {
                        setImgHELtDb(e.target.value);
                      }}
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Loss"
                      name="group-5"
                      className="pe-3"
                      value="Loss"
                      onChange={(e) => {
                        setImgHELtDb(e.target.value);
                      }}
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
                      value="Good"
                      onChange={(e) => {
                        setImgLERtDb(e.target.value);
                      }}
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Fair"
                      name="group-6"
                      className="pe-3"
                      value="Fair"
                      onChange={(e) => {
                        setImgLERtDb(e.target.value);
                      }}
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Poor"
                      name="group-6"
                      className="pe-3"
                      value="Poor"
                      onChange={(e) => {
                        setImgLERtDb(e.target.value);
                      }}
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Loss"
                      name="group-6"
                      className="pe-3"
                      value="Loss"
                      onChange={(e) => {
                        setImgLERtDb(e.target.value);
                      }}
                    ></Form.Check>
                  </div>
                  <div className="d-flex">
                    <p className="pe-2">Lt.</p>
                    <Form.Check
                      type="radio"
                      label="Good"
                      name="group-7"
                      className="pe-3"
                      value="Good"
                      onChange={(e) => {
                        setImgLELtDb(e.target.value);
                      }}
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Fair"
                      name="group-7"
                      className="pe-3"
                      value="Fair"
                      onChange={(e) => {
                        setImgLELtDb(e.target.value);
                      }}
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Poor"
                      name="group-7"
                      className="pe-3"
                      value="Poor"
                      onChange={(e) => {
                        setImgLELtDb(e.target.value);
                      }}
                    ></Form.Check>
                    <Form.Check
                      type="radio"
                      label="Loss"
                      name="group-7"
                      className="pe-3"
                      value="Loss"
                      onChange={(e) => {
                        setImgLELtDb(e.target.value);
                      }}
                      P
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
                      <Form.Select
                        style={{ borderRadius: "15px" }}
                        onChange={(e) => {
                          setImgUpwardDownwardDb(e.target.value);
                        }}
                      >
                        <option value="dependent">dependent</option>
                        <option value="partially dependent">
                          partially dependent
                        </option>
                        <option value="under-supervision">
                          under-supervision
                        </option>
                        <option value="independent">independent</option>
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
                      <Form.Select
                        style={{ borderRadius: "15px" }}
                        onChange={(e) => {
                          setImgSupineDb(e.target.value);
                        }}
                      >
                        <option value="dependent">dependent</option>
                        <option value="partially dependent">
                          partially dependent
                        </option>
                        <option value="under-supervision">
                          under-supervision
                        </option>
                        <option value="independent">independent</option>
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
                      <Form.Select
                        style={{ borderRadius: "15px" }}
                        onChange={(e) => {
                          setImgSidelyingDb(e.target.value);
                        }}
                      >
                        <option value="dependent">dependent</option>
                        <option value="partially dependent">
                          partially dependent
                        </option>
                        <option value="under-supervision">
                          under-supervision
                        </option>
                        <option value="independent">independent</option>
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
                      <Form.Select
                        style={{ borderRadius: "15px" }}
                        onChange={(e) => {
                          setImgSittingtoStandDb(e.target.value);
                        }}
                      >
                        <option value="dependent">dependent</option>
                        <option value="partially dependent">
                          partially dependent
                        </option>
                        <option value="under-supervision">
                          under-supervision
                        </option>
                        <option value="independent">independent</option>
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
                    <Form.Select
                      style={{ borderRadius: "15px" }}
                      onChange={(e) => {
                        setImgBalanceSitStaticDb(e.target.value);
                      }}
                    >
                      <option value="normal">nornmal</option>
                      <option value="good">good</option>
                      <option value="fair">fair</option>
                      <option value="poor">poor</option>
                      <option value="zero">zero</option>
                    </Form.Select>
                  </FloatingLabel>
                  <br></br>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Sitting : dynamic"
                  >
                    <Form.Select
                      style={{ borderRadius: "15px" }}
                      onChange={(e) => {
                        setImgBalanceSitDynamicDb(e.target.value);
                      }}
                    >
                      <option value="normal">nornmal</option>
                      <option value="good">good</option>
                      <option value="fair">fair</option>
                      <option value="poor">poor</option>
                      <option value="zero">zero</option>
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
                    <Form.Select
                      style={{ borderRadius: "15px" }}
                      onChange={(e) => {
                        setImgBalanceStandStaticDb(e.target.value);
                      }}
                    >
                      <option value="normal">nornmal</option>
                      <option value="good">good</option>
                      <option value="fair">fair</option>
                      <option value="poor">poor</option>
                      <option value="zero">zero</option>
                    </Form.Select>
                  </FloatingLabel>
                  <br></br>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Standing : dynamic"
                  >
                    <Form.Select
                      style={{ borderRadius: "15px" }}
                      onChange={(e) => {
                        setImgBalanceStandDynamicDb(e.target.value);
                      }}
                    >
                      <option value="normal">nornmal</option>
                      <option value="good">good</option>
                      <option value="fair">fair</option>
                      <option value="poor">poor</option>
                      <option value="zero">zero</option>
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
                    value="dependent"
                    onChange={(e) => {
                      setImgTransferBedtoWCDb(e.target.value);
                    }}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="partially dependent"
                    name="group-8"
                    className="pe-3"
                    value="partially dependent"
                    onChange={(e) => {
                      setImgTransferBedtoWCDb(e.target.value);
                    }}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="under-supervision"
                    name="group-8"
                    className="pe-3"
                    value="under-supervision"
                    onChange={(e) => {
                      setImgTransferBedtoWCDb(e.target.value);
                    }}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="independent"
                    name="group-8"
                    className="pe-3"
                    value="independent"
                    onChange={(e) => {
                      setImgTransferBedtoWCDb(e.target.value);
                    }}
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
                    value="dependent"
                    onChange={(e) => {
                      setImgTransferBedtoToiletDb(e.target.value);
                    }}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="partially dependent"
                    name="group-9"
                    className="pe-3"
                    value="partially dependent"
                    onChange={(e) => {
                      setImgTransferBedtoToiletDb(e.target.value);
                    }}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="under-supervision"
                    name="group-9"
                    className="pe-3"
                    value="under-supervision"
                    onChange={(e) => {
                      setImgTransferBedtoToiletDb(e.target.value);
                    }}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="independent"
                    name="group-9"
                    className="pe-3"
                    value="independent"
                    onChange={(e) => {
                      setImgTransferBedtoToiletDb(e.target.value);
                    }}
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
                    value="independent"
                    onChange={(e) => {
                      setImgWalkingDb(e.target.value);
                    }}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="w/c"
                    name="group-10"
                    className="pe-3"
                    value="w/c"
                    onChange={(e) => {
                      setImgWalkingDb(e.target.value);
                    }}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="walking aid"
                    name="group-10"
                    className="pe-3"
                    value="walking aid"
                    onChange={(e) => {
                      setImgWalkingDb(e.target.value);
                    }}
                  ></Form.Check>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" "
                    className="pe-3"
                    style={{ borderRadius: "15px" }}
                    onChange={(e) => {
                      setImgWalkingAboutDb(e.target.value);
                    }}
                  ></Form.Control>
                  <Form.Check
                    type="radio"
                    label="orthotic"
                    name="group-10"
                    className="pe-3"
                    value="orthotic"
                    onChange={(e) => {
                      setImgWalkingDb(e.target.value);
                    }}
                  ></Form.Check>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                    onChange={(e) => {
                      setImgWalkingAboutDb(e.target.value);
                    }}
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
                    value="dependent"
                    onChange={(e) => {
                      setImgIndoorDb(e.target.value);
                    }}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="partially dependent"
                    name="group-11"
                    className="pe-3"
                    value="partially dependent"
                    onChange={(e) => {
                      setImgIndoorDb(e.target.value);
                    }}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="under-supervision"
                    name="group-11"
                    className="pe-3"
                    value="under-supervision"
                    onChange={(e) => {
                      setImgIndoorDb(e.target.value);
                    }}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="independent"
                    name="group-11"
                    className="pe-3"
                    value="independent"
                    onChange={(e) => {
                      setImgIndoorDb(e.target.value);
                    }}
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
                    value="dependent"
                    onChange={(e) => {
                      setImgOutDoorDb(e.target.value);
                    }}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="partially dependent"
                    name="group-12"
                    className="pe-3"
                    value="partially dependent"
                    onChange={(e) => {
                      setImgOutDoorDb(e.target.value);
                    }}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="under-supervision"
                    name="group-12"
                    className="pe-3"
                    value="under-supervision"
                    onChange={(e) => {
                      setImgOutDoorDb(e.target.value);
                    }}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="independent"
                    name="group-12"
                    className="pe-3"
                    value="independent"
                    onChange={(e) => {
                      setImgOutDoorDb(e.target.value);
                    }}
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
                      onChange={(e) => {
                        setImgPTDiagDb(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setImgPatientFamGoalDb(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setImgTeamTreatGoalDb(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setImgFunctionallimitDb(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setImgPlanofTreatmentDb(e.target.value);
                      }}
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
                    className="pe-3"
                    label="Active assisted exs (93.11)"
                    value="Active assisted exs (93.11)"
                    onChange={handleCheckbox1}
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="Active exs (93.12)"
                    value="Active exs (93.12)"
                    className="pe-3"
                    onChange={handleCheckbox2}
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="Passive exs (93.17)"
                    value="Passive exs (93.17)"
                    className="pe-3"
                    onChange={handleCheckbox3}
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="Stretching (93.27)"
                    value="Stretching (93.27)"
                    className="pe-3"
                    onChange={handleCheckbox4}
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="Cardio/Pulmonary exs (93.36)"
                    value="Cardio/Pulmonary exs (93.36)"
                    className="pe-3"
                    onChange={handleCheckbox5}
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="Balance training (93.19)"
                    value="Balance training (93.19)"
                    className="pe-3"
                    onChange={handleCheckbox6}
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="Ambulation & Gait training (93.22)"
                    value="Ambulation & Gait training (93.22)"
                    className="pe-3"
                    onChange={handleCheckbox7}
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="Breathing (93.18)"
                    value="Breathing (93.18)"
                    className="pe-3"
                    onChange={handleCheckbox8}
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="Coughing training (93.39)"
                    value="Coughing training (93.39)"
                    className="pe-3"
                    onChange={handleCheckbox8}
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="Percussion/Vibration (93.39)"
                    value="Percussion/Vibration (93.39)"
                    className="pe-3"
                    onChange={handleCheckbox10}
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="Postural Drainage (93.39)"
                    value="Postural Drainage (93.39)"
                    className="pe-3"
                    onChange={handleCheckbox11}
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
                    onChange={(e) => {
                      setImgTreatmentAboutDb(e.target.value);
                    }}
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
                      onChange={(e) => {
                        setImgHomeprogramDb(e.target.value);
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
                    label="Re-assessment"
                  >
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                      onChange={(e) => {
                        setImgReassessmentDb(e.target.value);
                      }}
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
                        value="ฟื้นฟูฯต่อเนื่อง"
                        onChange={(e) => {
                          setImgReassessmentPointDb(e.target.value);
                        }}
                      ></Form.Check>
                    </Col>
                    <Col>
                      <Form.Check
                        type="radio"
                        label="จำหน่าย"
                        name="group-14"
                        className="pe-3"
                        value="จำหน่าย"
                        onChange={(e) => {
                          setImgReassessmentPointDb(e.target.value);
                        }}
                      ></Form.Check>
                    </Col>
                    <Col>
                      <Form.Check
                        type="radio"
                        label="เยื่ยมบ้าน"
                        name="group-14"
                        className="pe-3"
                        value="เยี่ยมบ้าน"
                        onChange={(e) => {
                          setImgReassessmentPointDb(e.target.value);
                        }}
                      ></Form.Check>
                    </Col>
                    <Col>
                      <Form.Check
                        type="radio"
                        label="ส่งต่อ"
                        name="group-14"
                        className="pe-3"
                        value="ส่งต่อ"
                        onChange={(e) => {
                          setImgReassessmentPointDb(e.target.value);
                        }}
                      ></Form.Check>
                    </Col>
                    <Col lg={4}>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder=" "
                        style={{ borderRadius: "15px" }}
                        onChange={(e) => {
                          setImgReassessmentPointAboutDb(e.target.value);
                        }}
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
                      onChange={(e) => {
                        setImgPhysicalTherapyNameDb(e.target.value);
                      }}
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
              onClick={updateUser}
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
