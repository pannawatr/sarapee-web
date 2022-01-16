import React from "react";

import Footer from "../Components/Footer/Footer";
import Hometab from "../Components/Hometab/Hometab";
import HometabRight from "../Components/Hometab/HometabRight";

import { Col, Row } from "react-bootstrap";
import SearchICFForm from "../Components/InfoICFForm/SearchICFForm";

function SearchICFPage() {
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

      <SearchICFForm />
      <Footer />
    </div>
  );
}

export default SearchICFPage;
