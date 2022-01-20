import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Button,
  FloatingLabel,
  Card,
} from "react-bootstrap";

import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../Config";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";

function RegisterPatientForm2() {
  let { userId } = useParams();
  let navigate = useNavigate();

  const updateRef = doc(db, "users", userId);

  //DB
  const [treatmentHistoryDb, setTreatmentHistoryDb] = useState("");
  const [rigthToTreatmentDb, setRigthToTreatmentDb] = useState("ไม่มี"); //สิทธิการรักษา
  const [drugAllergyDb, setDrugAllergyDb] = useState(""); //แพ้ยา
  const [congenitalDiseaseDb, setCongenitalDiseaseDb] = useState(""); //โรคประจำตัว
  const [walkingAidDb, setWalkingAidDb] = useState("ไม่มี");
  const [takeHomeEquDb, setTakeHomeEquDb] = useState("ไม่มี");

  const backUser = async () => {
    await deleteDoc(updateRef).then(() => {
      navigate("/registerpatient");
    });
  };

  const updateUser = async () => {
    const disabilityDb =
      valueCheckbox1 +
      valueCheckbox2 +
      valueCheckbox3 +
      valueCheckbox4 +
      valueCheckbox5 +
      valueCheckbox6 +
      valueCheckbox7;

    await updateDoc(updateRef, {
      treatmentHistory: treatmentHistoryDb,
      rigthToTreatment: rigthToTreatmentDb,
      drugAllergy: drugAllergyDb,
      congenitalDisease: congenitalDiseaseDb,
      walkingAid: walkingAidDb,
      takeHomeEqu: takeHomeEquDb,
      disability: disabilityDb,
    }).then(() => {
      alert("บันทึกข้อมูลแล้ว");
      navigate("/search");
    });
  };

  //Checkbox-1
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

  return (
    <div>
      <Container className="d-grid p-3">
        <Form>
          <h4>ประวัติผู้ป่วย</h4>
          <br></br>
          <Row>
            <Col lg={6}>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="ประวัติการรักษา"
                onChange={(e) => {
                  setTreatmentHistoryDb(e.target.value);
                }}
              >
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                />
              </FloatingLabel>
              <br></br>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="ทางการมองเห็น"
                  value="ทางการมองเห็น "
                  onChange={handleCheckbox1}
                />
              </Col>
              <br></br>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="ทางการได้ยินหรือสื่อความหมาย"
                  value="ทางการได้ยินหรือสื่อความหมาย "
                  onChange={handleCheckbox2}
                />
              </Col>
              <br></br>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="ทางการเคลื่อนไหวหรือทางร่างกาย"
                  value="ทางการเคลื่อนไหวหรือทางร่างกาย "
                  onChange={handleCheckbox3}
                />
                <br></br>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="ทางจิตใจหรือพฤติกรรม"
                    value="ทางจิตใจหรือพฤติกรรม "
                    onChange={handleCheckbox4}
                  />
                </Col>
                <br></br>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="ทางสติปัญญา"
                    value="ทางสติปัญญา "
                    onChange={handleCheckbox5}
                  />
                  <br></br>
                  <Col>
                    <Form.Check
                      type="checkbox"
                      label="ทางการเรียนรู้"
                      value="ทางการเรียนรู้ "
                      onChange={handleCheckbox6}
                    />
                    <br></br>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        label="ออทิสติก"
                        value="ออทิสติก "
                        onChange={handleCheckbox7}
                      />
                    </Col>
                  </Col>
                </Col>
              </Col>
              <br></br>
            </Col>

            <Col lg={6}>
              <Card
                className="text-center"
                style={{ marginBottom: "1rem", borderRadius: "10px" }}
              >
                <Card.Body>
                  <Col>
                    <FloatingLabel
                      controlId="floatingSelect"
                      label="สิทธิรักษา"
                    >
                      <Form.Select
                        style={{ borderRadius: "15px" }}
                        onChange={(e) => {
                          setRigthToTreatmentDb(e.target.value);
                        }}
                      >
                        <option value="ไม่มี">ไม่มี</option>
                        <option value="UCF (สิทธิบัตรทอง)">
                          UCF (สิทธิบัตรทอง)
                        </option>
                        <option value="OFC (สิทธิข้าราชการ)">
                          OFC (สิทธิข้าราชการ)
                        </option>
                        <option value="SSS (สิทธิประกันสังคม)">
                          SSS (สิทธิประกันสังคม)
                        </option>
                        <option value="LGO (สิทธิ อปท)">LGO (สิทธิ อปท)</option>
                        <option value="SSI (สิทธิประกันสังคมทุพพลภาพ)">
                          SSI (สิทธิประกันสังคมทุพพลภาพ)
                        </option>
                        <option value="อื่น ๆ">อื่น ๆ</option>
                      </Form.Select>
                    </FloatingLabel>
                    <br></br>
                  </Col>

                  <Col>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="แพ้ยา"
                      onChange={(e) => {
                        setDrugAllergyDb(e.target.value);
                      }}
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
                      label="โรคประจำตัว"
                      onChange={(e) => {
                        setCongenitalDiseaseDb(e.target.value);
                      }}
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
                      controlId="floatingSelect"
                      label="อุปกรณ์ช่วยเดิน"
                      onChange={(e) => {
                        setWalkingAidDb(e.target.value);
                      }}
                    >
                      <Form.Select style={{ borderRadius: "15px" }}>
                        <option value="ไม่มี">ไม่มี</option>
                        <option value="Tripod">Tripod</option>
                        <option value="Wheel Chair">Wheel Chair</option>
                        <option value="Walker">Walker</option>
                      </Form.Select>
                    </FloatingLabel>
                    <br></br>
                  </Col>

                  <Col>
                    <FloatingLabel
                      controlId="floatingSelect"
                      label="อุปกรณ์อื่น ๆ"
                      onChange={(e) => {
                        setTakeHomeEquDb(e.target.value);
                      }}
                    >
                      <Form.Select style={{ borderRadius: "15px" }}>
                        <option value="ไม่มี">ไม่มี</option>
                        <option value="NG">NG</option>
                        <option value="FOLEY">FOLEY</option>
                        <option value="Trancheaostomy">Trancheaostomy</option>
                        <option value="Colostomy">Colostomy</option>
                        <option value="Skintraction">Skintraction</option>
                        <option value="Bipap">Bipap</option>
                        <option value="Syringdriver">Syringdriver</option>
                        <option value="เครื่องผลิต Oxygen">
                          เครื่องผลิต Oxygen
                        </option>
                        <option value="เครื่อง Suction">เครื่อง Suction</option>
                        <option value="อื่น ๆ">อื่น ๆ</option>
                      </Form.Select>
                    </FloatingLabel>
                    <br></br>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6} lg={6} className="d-flex justify-content-center mt-3">
              <Button
                className="w-100"
                variant="primary"
                onClick={backUser}
                style={{
                  borderRadius: "15px",
                  padding: "1.1rem",
                }}
              >
                ย้อนกลับ
              </Button>
            </Col>
            <Col md={6} lg={6} className="d-flex justify-content-center mt-3">
              <Button
                className="w-100"
                variant="primary"
                onClick={updateUser}
                style={{
                  borderRadius: "15px",
                  padding: "1.1rem",
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

export default RegisterPatientForm2;
