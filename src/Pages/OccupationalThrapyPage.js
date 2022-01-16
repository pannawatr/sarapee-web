import React from "react";

import Footer from "../Components/Footer/Footer";
import Hometab from "../Components/Hometab/Hometab";
import HometabRight from "../Components/Hometab/HometabRight";
import OccupationalThrapy from "../Components/OccupationalThrapy/OccupationalThrapy";

import { Col, Row } from "react-bootstrap";

function OccupationalThrapyPage() {
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
      <OccupationalThrapy />
      <Footer />
    </div>
  );
}

export default OccupationalThrapyPage;
