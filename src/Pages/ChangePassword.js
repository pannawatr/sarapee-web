import React from "react";

import ChangePasswordForm from "../Components/ChangePasswordForm/ChangePasswordForm";
import Footer from "../Components/Footer/Footer";
import Hometab from "../Components/Hometab/Hometab";
import HometabRight from "../Components/Hometab/HometabRight";

import { Col, Row } from "react-bootstrap";

function ChangePasswordPage() {
  return (
    <div>
      <Row>
        <Col xs={6} md={9} lg={10}>
          <Hometab/>
        </Col>

        <Col xs={6} md={3} lg={2}>
          <HometabRight activetab="changepassword" />
        </Col>
      </Row>
      <ChangePasswordForm />
      <Footer />
    </div>
  );
}

export default ChangePasswordPage;
