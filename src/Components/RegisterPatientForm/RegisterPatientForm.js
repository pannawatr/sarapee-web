import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  FloatingLabel,
  Card,
  Button,
  Image,
} from "react-bootstrap";

import { auth, db } from "../../Config";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { doc, setDoc } from "firebase/firestore";

import ImageBlank from "./img/Profile.png";

function RegisterPatienForm() {
  // Auth
  let navigate = useNavigate();

  const [userAuth, setuserAuth] = useState({});
  onAuthStateChanged(auth, (currentuserAuth) => {
    setuserAuth(currentuserAuth);
  });
  if (!userAuth) {
    navigate("/");
  }

  // Image Preview
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  if (!images.length) {
    imageURLs[0] = ImageBlank;
  }
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);
  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  // Data Db
  const [hnDb, setHnDb] = useState("");
  const [datePatientCardDb, setDatePatientCardDb] = useState("");
  const [lifeStatusDb, setLifeStatusDb] = useState("มีชีวิตอยู่");
  const [preFixNameDb, setPrefixNameDb] = useState("นาย");
  const [sexDb, setSexDb] = useState("ชาย");
  const [fnameDb, setFnameDb] = useState("");
  const [lnameDb, setLnameDb] = useState("");
  const [idCardDb, setIdCardDb] = useState("");
  const [birthDayDb, setBirthDayDb] = useState("");
  const [ageDb, setAgeDb] = useState("");
  const [bloodTypeDb, setBloodTypeDb] = useState("O");
  const [statusDb, setStatusDb] = useState("โสด");
  const [addressDb, setAddressDb] = useState("");
  const [swineDb, setSwineDb] = useState("");
  const [alleyDb, setAlleyDb] = useState("");
  const [villageDb, setVillageDb] = useState("");
  const [subDistrictDb, setSubDistrictDb] = useState("ขัวมุง");
  const [relativePrefixNameDb, setRelativePrefixNameDb] = useState("นาย");
  const [relativeFnameDb, setRelativeFnameDb] = useState("");
  const [relativeLnameDb, setRelativeLnameDb] = useState("");
  const [relationShipDb, setRelationShipDb] = useState("บิดา");
  const [telephoneDb, setTelephoneDb] = useState("");

  const data = {
    imageurl: imageURLs[0],
    hn: hnDb,
    datePatientCard: datePatientCardDb,
    lifeStatus: lifeStatusDb,
    prefixName: preFixNameDb,
    sex: sexDb,
    fname: fnameDb,
    lname: lnameDb,
    idCard: idCardDb,
    birthDay: birthDayDb,
    age: ageDb,
    bloodType: bloodTypeDb,
    status: statusDb,
    address: addressDb,
    swine: swineDb,
    alley: alleyDb,
    village: villageDb,
    subDistrict: subDistrictDb,
    district: "สารภี",
    province: "เชียงใหม่",
    postcode: "50140",
    relativePrefixName: relativePrefixNameDb,
    realativeFname: relativeFnameDb,
    realativeLname: relativeLnameDb,
    realationship: relationShipDb,
    telephone: telephoneDb,
    rigthToTreatment: "",
    drugAllergy: "",
    congenitalDisease: "",
    walkingAid: "",
    takeHomeEqu: "",
    disability: "",

    //icf
    countIcf: 0,

    // BI
    biScore: "",
    biFeeding: 0,
    biGrooming: 0,
    biTransfer: 0,
    biToilet: 0,
    biMobility: 0,
    biDressing: 0,
    biStairs: 0,
    biBathing: 0,
    biBowels: 0,
    biBladder: 0,

    //กายภาพบำบัด
    imgTime: "",
    imgDayrecieve: "",
    imgTimeService: "",

    imgIcd: "",
    imgImportantSymptoms: "",
    imgPI: "",
    imgPH: "",
    imgPrecaution: "",
    imgSpecialInvestigation: "",
    imgVitalBP: "",
    imgVitalHR: "",
    imgVitalPR: "",
    imgVitalTemp: "",
    imgVitalO2sat: "",

    imgConsiouscation: "Alert",
    imgComununication: "",
    imgComununicationAbout: "",
    imgGeneralApperance: "",

    imgPalpation: "",

    imgMuscleTone: "",
    imgROM: "",
    imgMNT: "",
    imgHERt: "",
    imgHELt: "",
    imgLERt: "",
    imgLELt: "",

    imgUpwardDownward: "dependent",
    imgSupine: "dependent",
    imgSidelying: "dependent",
    imgSittingtoStand: "dependent",

    imgBalanceSitStatic: "normal",
    imgBalanceSitDynamic: "normal",
    imgBalanceStandStatic: "normal",
    imgBalanceStandDynamic: "normal",

    imgTranferBedtoWC: "",
    imgTransferBedtoToilet: "",
    imgWalking: "",
    imgWalkingAbout: "",

    imgIndoor: "",
    imgOutDoor: "",

    imgPTDiag: "",
    imgPatientFamGoal: "",
    imgTeamTreatGoal: "",
    imgFunctionallimit: "",

    imgPlanOfTreatment: "",

    imgTreatment: "",
    imgHomeprogram: "",
    imgReassessment: "",
    imgReassessmentPoint: "",
    imgReassessmentPointAbout: "",
    imgPhysicalTherapyName: "",

    //กิจกรรมบำบัด
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
  };

  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //Order
  const createUser = async () => {
    setFormError(validate(data));
    setIsSubmit(true);
    if (Object.keys(formError).length === 0 && isSubmit) {
      await setDoc(doc(db, "users", idCardDb), data).then(() => {
        navigate(`/registerpatient2/${idCardDb}`);
      });
    }
  };

  const validate = (values) => {
    const error = {};
    if (!values.idCard) {
      error.idCard = "กรุณากรอกบัตรประชาชน";
      alert("กรุณากรอกบัตรประชาชน");
    }
    return error;
  };

  return (
    <Container className="d-grid p-3">
      <Form>
        <h4>ข้อมูลทะเบียนผู้พิการ</h4>
        <br></br>
        <Row>
          <Col lg={4}>
            <FloatingLabel controlId="floatingInputGrid" label="HN">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setHnDb(e.target.value);
                }}
              />
            </FloatingLabel>
            <br></br>
          </Col>
          <Col lg={4}>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="วันที่มีบัตรคนพิการ"
            >
              <Form.Control
                type="date"
                placeholder=" "
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setDatePatientCardDb(e.target.value);
                }}
              />
            </FloatingLabel>
            <br></br>
          </Col>
          <Col lg={4}>
            <FloatingLabel controlId="floatingSelect" label="สถานะ">
              <Form.Select
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setLifeStatusDb(e.target.value);
                }}
              >
                <option value="มีชีวิตอยู่">มีชีวิตอยู่</option>
                <option value="เสียชีวิต">เสียชีวิต</option>
                <option value="ย้ายถิ่นที่อยู่">ย้ายถิ่นที่อยู่</option>
              </Form.Select>
            </FloatingLabel>
            <br></br>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <FloatingLabel controlId="floatingSelect" label="คำนำหน้าชื่อ">
              <Form.Select
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  if (e.target.value === "นาย") {
                    setSexDb("ชาย");
                  } else if (
                    e.target.value === "นาง" ||
                    e.target.value === "นางสาว"
                  ) {
                    setSexDb("หญิง");
                  }
                  setPrefixNameDb(e.target.value);
                }}
              >
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
              </Form.Select>
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="ชื่อ">
              <Form.Control
                type="text"
                name="fname"
                placeholder=" "
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setFnameDb(e.target.value);
                }}
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="นามสกุล">
              <Form.Control
                type="text"
                name="lname"
                placeholder=" "
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setLnameDb(e.target.value);
                }}
              />
            </FloatingLabel>
            <br></br>
          </Col>
          <Col lg={3}>
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
          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="วันเกิด">
              <Form.Control
                type="date"
                placeholder=" "
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setBirthDayDb(e.target.value);
                }}
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="อายุ">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setAgeDb(e.target.value);
                }}
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingSelect" label="หมู่เลือด">
              <Form.Select
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setBloodTypeDb(e.target.value);
                }}
              >
                <option value="O">O</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
              </Form.Select>
            </FloatingLabel>
            <br></br>
          </Col>
          <Col lg={3}>
            <FloatingLabel controlId="floatingSelect" label="สถานภาพ">
              <Form.Select
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setStatusDb(e.target.value);
                }}
              >
                <option value="โสด">โสด</option>
                <option value="สมรส">สมรส</option>
              </Form.Select>
            </FloatingLabel>
            <br></br>
          </Col>
        </Row>

        <br></br>
        <h4>ที่อยู่ปัจจุบัน</h4>
        <br></br>

        <Row>
          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="ที่อยู่">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setAddressDb(e.target.value);
                }}
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="หมู่">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setSwineDb(e.target.value);
                }}
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="ตรอก/ซอย ถนน">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setAlleyDb(e.target.value);
                }}
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="หมู่บ้าน">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setVillageDb(e.target.value);
                }}
              />
            </FloatingLabel>
            <br></br>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <FloatingLabel controlId="floatingSelect" label="ตำบล">
              <Form.Select
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setSubDistrictDb(e.target.value);
                }}
              >
                <option value="ขัวมุง">ขัวมุง</option>
                <option value="ชมภู">ชมภู</option>
                <option value="ไชยสถาน">ไชยสถาน</option>
                <option value="ดอนแก้ว">ดอนแก้ว</option>
                <option value="ท่ากว้าง">ท่ากว้าง</option>
                <option value="ท่าวังตาล">ท่าวังตาล</option>
                <option value="ป่าบง">ป่าบง</option>
                <option value="ยางเนิ้ง">ยางเนิ้ง</option>
                <option value="สันทราย">สันทราย</option>
                <option value="สารภี">สารภี</option>
                <option value="หนองผึ้ง">หนองผึ้ง</option>
                <option value="หนองแฝก">หนองแฝก</option>
              </Form.Select>
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="อำเภอ">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
                value="สารภี"
                readOnly
              />
            </FloatingLabel>
            <br></br>
          </Col>
          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="จังหวัด">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
                value="เชียงใหม่"
                readOnly
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="รหัสไปรษณีย์">
              <Form.Control
                type="text"
                placeholder=" "
                value="50140"
                style={{ borderRadius: "15px" }}
                readOnly
              />
            </FloatingLabel>
            <br></br>
          </Col>
        </Row>

        <br></br>
        <h4>ญาติ</h4>
        <br></br>

        <Row>
          <Col lg={3}>
            <FloatingLabel controlId="floatingSelect" label="คำนำหน้าชื่อ">
              <Form.Select
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setRelativePrefixNameDb(e.target.value);
                }}
              >
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
              </Form.Select>
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="ชื่อ">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setRelativeFnameDb(e.target.value);
                }}
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="นามสกุล">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setRelativeLnameDb(e.target.value);
                }}
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingSelect" label="ความสัมพันธ์">
              <Form.Select
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setRelationShipDb(e.target.value);
                }}
              >
                <option value="บิดา">บิดา</option>
                <option value="มารดา">มารดา</option>
                <option value="ผู้ปกครอง">ผู้ปกครอง</option>
              </Form.Select>
            </FloatingLabel>
            <br></br>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="เบอร์โทร">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setTelephoneDb(e.target.value);
                }}
              />
            </FloatingLabel>
            <br></br>
          </Col>
        </Row>

        <br></br>
        <br></br>
        <Row>
          <Col lg={12} className="d-flex justify-content-center">
            <Card
              className="text-center"
              style={{ marginBottom: "1rem", borderRadius: "10px" }}
            >
              <Card.Body>
                <Col>
                  {imageURLs.map((imageSrc) => (
                    <Image
                      src={imageSrc}
                      style={{ minHeight: "20.2rem", maxHeifht: "20.2rem" }}
                      thumbnail
                    />
                  ))}
                  <br></br>
                  <br></br>
                  <Form.Control
                    type="file"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                    multiple
                    accept="image/*"
                    onChange={onImageChange}
                    label="อัพโหลดรูปภาพ"
                  />
                  <br></br>
                </Col>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col lg={12} className="d-flex justify-content-center">
            <Button
              className="w-50"
              variant="primary"
              onClick={createUser}
              style={{
                borderRadius: "15px",
                padding: "1.1rem",
              }}
            >
              ถัดไป
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default RegisterPatienForm;
