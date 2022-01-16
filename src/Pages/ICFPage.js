import React from "react";

import Footer from "../Components/Footer/Footer";
import Hometab from "../Components/Hometab/Hometab";
import HometabRight from "../Components/Hometab/HometabRight";

import ICFForm from "../Components/ICFForm/ICFForm";

import { Row, Col } from "react-bootstrap";
function ICFPage() {
  return (
    <div>
      <Row>
        <Col xs={6} md={9} lg={10}>
          <Hometab activetab="icf" />
        </Col>

        <Col xs={6} md={3} lg={2}>
          <HometabRight />
        </Col>
      </Row>
      <ICFForm />
      <Footer />
    </div>
  );
}

export default ICFPage;
