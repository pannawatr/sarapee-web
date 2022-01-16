import React from "react";

import Footer from "../Components/Footer/Footer";
import Hometab from "../Components/Hometab/Hometab";
import HometabRight from "../Components/Hometab/HometabRight";

import { Col, Row } from "react-bootstrap";
import InfoPatientForm from "../Components/InfoPatientForm/InfoPatientForm";

function InfoPatientPage() {
  return (
    <div>
      <Row>
        <Col xs={6} md={9} lg={10}>
          <Hometab />
        </Col>
        <Col xs={6} md={3} lg={2}>
          <HometabRight activetab="search" />
        </Col>

      </Row>
      <InfoPatientForm />
      <Footer />
    </div>
  );
}

export default InfoPatientPage;
