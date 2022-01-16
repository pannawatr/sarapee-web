import React from "react";

import Footer from "../Components/Footer/Footer";
import Hometab from "../Components/Hometab/Hometab";
import HometabRight from "../Components/Hometab/HometabRight";
import SearchForm from "../Components/SearchForm/SearchForm";

import { Col, Row } from "react-bootstrap";

function SearchPage() {
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
      <SearchForm />
      <Footer />
    </div>
  );
}

export default SearchPage;
