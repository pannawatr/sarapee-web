import React from "react";

import Footer from "../Components/Footer/Footer";
import Hometab from "../Components/Hometab/Hometab";
import HometabRight from "../Components/Hometab/HometabRight";
import ImageThrapy from "../Components/ImageThrapy/ImageThrapy";

import { Col, Row } from "react-bootstrap";

function ImageThrapyPage() {
  return (
    <div>
      <Row>
        <Col xs={6} md={9} lg={10}>
          <Hometab  />
        </Col>
        <Col xs={6} md={3} lg={2}>
          <HometabRight activetab="search"/>
        </Col>
      </Row>
      <ImageThrapy />
      <Footer />
    </div>
  );
}

export default ImageThrapyPage;
