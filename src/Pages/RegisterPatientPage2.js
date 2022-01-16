import React from "react";

import Footer from "../Components/Footer/Footer";
import Hometab from "../Components/Hometab/Hometab";
import HometabRight from "../Components/Hometab/HometabRight";
import RegisterPatienForm2 from "../Components/RegisterPatientForm/RegisterPatientForm2";

import { Col, Row } from "react-bootstrap";

function RegisterPatientPage2() {
  return (
    <div>
      <Row>
        <Col xs={6} md={9} lg={10}>
          <Hometab activetab="registerpatient" />
        </Col>
        <Col xs={6} md={3} lg={2}>
          <HometabRight />
        </Col>
      </Row>
      <RegisterPatienForm2 />
      <Footer />
    </div>
  );
}

export default RegisterPatientPage2;
