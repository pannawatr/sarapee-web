import React from "react";

import Footer from "../Components/Footer/Footer";
import Hometab from "../Components/Hometab/Hometab";
import HometabRight from "../Components/Hometab/HometabRight";

import { Col, Row } from "react-bootstrap";
import InfoICFForm from "../Components/InfoICFForm/InfoICFForm";

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

      <InfoICFForm />
      <Footer />
    </div>
  );
}

export default InfoPatientPage;
