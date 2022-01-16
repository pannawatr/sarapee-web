import React, { useState } from "react";
import { Nav, Col, Image } from "react-bootstrap";

import { Link } from "react-router-dom";

import Homepic from "./img/Home.png";
import Padlockpic from "./img/Padlock.png";
import Searchpic from "./img/Search.png";

import { auth, db } from "../../Config";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function HometabRight(props) {
  let navigate = useNavigate();

  const [userAuth, setuserAuth] = useState({});
  onAuthStateChanged(auth, (currentuserAuth) => {
    setuserAuth(currentuserAuth);
  });
  if (!userAuth) {
    navigate("/");
  }
  return (
    <Nav
      variant="tabs"
      defaultActiveKey={props.activetab}
      className="justify-content-end"
    >
      {/* HOMERIGHT */}
      <Col md={4}>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/home"
            style={{ color: "black" }}
            eventKey="home"
          >
            <Image src={Homepic} style={{ width: "1.5rem" }}></Image>
          </Nav.Link>
        </Nav.Item>
      </Col>
      <Col md={4}>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/changepassword"
            style={{ color: "black" }}
            eventKey="changepassword"
          >
            <Image src={Padlockpic} style={{ width: "1.5rem" }}></Image>
          </Nav.Link>
        </Nav.Item>
      </Col>
      <Col md={4}>
        <Nav.Item className="justify-content-end">
          <Nav.Link
            as={Link}
            to="/search"
            style={{ color: "black" }}
            eventKey="search"
          >
            <Image src={Searchpic} style={{ width: "1.5rem" }}></Image>
          </Nav.Link>
        </Nav.Item>
      </Col>
    </Nav>
  );
}

export default HometabRight;
