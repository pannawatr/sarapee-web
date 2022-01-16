import React from "react";

import Footer from "../Components/Footer/Footer";
import Hometab from "../Components/Hometab/Hometab";
import HometabRight from "../Components/Hometab/HometabRight";
import BIForm from "../Components/BIForm/BIForm";

import { Col, Row } from "react-bootstrap";

function BIPage() {
  return (
    <div>
      <Row>
        <Col xs={6} md={9} lg={10}>
          <Hometab activetab="bi" />
        </Col>
        <Col xs={6} md={3} lg={2}>
          <HometabRight />
        </Col>
      </Row>
      <BIForm />
      <Footer />
    </div>
  );
}

export default BIPage;
