import React, { useState } from "react";
import { Navbar, Image, Button, Nav } from "react-bootstrap";

import Logo from "./img/Logo.png";
import Datetime from "../Datetime/Datetime";

import { auth } from "../../Config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const logout = async () => {
    await signOut(auth);
    if (user) {
      navigate("/");
    }
  };

  let buttonLogout;
  let textNameUser;
  if (user) {
    buttonLogout = (
      <Button
        className="mr-auto"
        onClick={logout}
        style={{ borderRadius: "15px" }}
      >
        ออกจากระบบ
      </Button>
    );
    textNameUser = <Nav.Link>User : {user?.email}</Nav.Link>;
  } else {
    buttonLogout = (
      <Button
        className="mr-auto"
        as={Link}
        to="/"
        style={{ borderRadius: "15px" }}
      >
        เข้าสู่ระบบ
      </Button>
    );
  }

  return (
    <Navbar bg="light" expand="lg" className="p-2">
      <Navbar.Brand>
        <Image src={Logo} style={{ width: "10rem" }}></Image>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link className="pe-3">
            <Datetime />
          </Nav.Link>
          {textNameUser}
        </Nav>
        {buttonLogout}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
