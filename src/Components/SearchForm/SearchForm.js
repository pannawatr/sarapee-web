import React, { useState, useEffect } from "react";

import {
  Container,
  Col,
  Row,
  Form,
  FloatingLabel,
  Table,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

import { Link } from "react-router-dom";

import { db } from "../../Config";
import {
  collection,
  doc,
  getDocs,
  query,
  snapshotEqual,
  updateDoc,
  where,
} from "firebase/firestore";
import { connectAuthEmulator } from "firebase/auth";
function SearchForm() {
  // DB
  const [users, setUsers] = useState([]);
  const [usersIcf, setUsersIcf] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const colRef = collection(db, "users");

  useEffect(() => {
    // const q = query(colRef, where("idCard", "==", searchItem));
    const getUsers = async () => {
      const data = await getDocs(colRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  // Get DB ID

  return (
    <Container className="p-3">
      <Row>
        <Col lg={9}>
          <FloatingLabel controlId="floatingInputGrid" label="เลขบัตรประชาชน">
            <Form.Control
              type="text"
              placeholder=" "
              style={{ borderRadius: "15px" }}
            />
          </FloatingLabel>
          <br></br>
        </Col>
        <Col lg={3}>
          <FloatingLabel controlId="floatingSelect" label="รูปแบบ">
            <Form.Select style={{ borderRadius: "15px" }}>
              <option>ค่าเริ่มต้น</option>
              <option>เรียงตามบัตรประชาชน</option>
            </Form.Select>
          </FloatingLabel>
          <br></br>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Table responsive="md">
            <thead>
              <tr>
                <th>เลขบัตรประชาชน</th>
                <th style={{ width: "10%" }}>ตำบล</th>
                <th>ชื่อ-นามสกุล</th>
                <th>ความพิการ</th>
                <th style={{ width: "12%" }}>คะแนน BI</th>
                <th style={{ width: "13%" }}>ประเมินกายภาพบำบัด</th>
                <th style={{ width: "13%" }}>ประเมินกิจกรรมบำบัด</th>
                <th style={{ width: "10%" }}>ประเมิน ICF</th>
                <th style={{ width: "12%" }}></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                const updateRef = doc(db, "users", user.id);
                const subcollection = collection(updateRef, "icf");
                const gd = getDocs(subcollection).then((snap) => {
                  updateDoc(updateRef, {
                    countIcf: snap.size,
                  });
                });
                return (
                  <tr>
                    <td>{user.idCard}</td>
                    <td>{user.subDistrict}</td>
                    <td>
                      {user.fname} {user.lname}
                    </td>
                    <td>{user.disability}</td>
                    <td>
                      {user.biScore ? user.biScore : <p>ยังไม่ได้กรอกข้อมูล</p>}
                    </td>
                    <td>
                      <p>ยังไม่ได้กรอกข้อมูล</p>
                    </td>
                    <td>
                      <p>ยังไม่ได้กรอกข้อมูล</p>
                    </td>
                    <td>
                      {user.countIcf != 0
                        ? "กรอกข้อมูลแล้ว"
                        : "ยังไม่ได้กรอกข้อมูล"}
                    </td>
                    <td>
                      {user.countIcf != 0 ? (
                        <DropdownButton
                          id="dropdown-item-button"
                          className="w-100"
                          variant="primary"
                          title="ดูข้อมูล"
                          style={{ borderRadius: "15px", padding: ".5rem" }}
                        >
                          <Dropdown.Item>
                            <Link
                              to={`/infopatient/${user.id}`}
                              activeClassName="active"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              ดูข้อมูล
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link
                              to={`/Icfinfo/${user.id}`}
                              activeClassName="active"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              ICF
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link
                              to={`/bi/${user.id}`}
                              activeClassName="active"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              BI
                            </Link>
                          </Dropdown.Item>
                        </DropdownButton>
                      ) : (
                        <DropdownButton
                          id="dropdown-item-button"
                          className="w-100"
                          variant="primary"
                          title="ดูข้อมูล"
                          style={{ borderRadius: "15px", padding: ".5rem" }}
                        >
                          <Dropdown.Item
                            as={Link}
                            to={`/infopatient/${user.id}`}
                          >
                            <Link
                              to={`/infopatient/${user.id}`}
                              activeClassName="active"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              ดูข้อมูล
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to={`/bi/${user.id}`}>
                            <Link
                              to={`/bi/${user.id}`}
                              activeClassName="active"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              BI
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item
                            as={Link}
                            to={`/imagethrapy/${user.id}`}
                          >
                            <Link
                              to={`/imagethrapy/${user.id}`}
                              activeClassName="active"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              ประเมินกายภาพบำบัด
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item
                            as={Link}
                            to={`/occupationalthrapy/${user.id}`}
                          >
                            <Link
                              to={`/occupationalthrapy/${user.id}`}
                              activeClassName="active"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              ประเมินกิจกรรมบำบัด
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to={`/Icfinfo/${user.id}`}>
                            <Link
                              to={`/Icfinfo/${user.id}`}
                              activeClassName="active"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              ICF
                            </Link>
                          </Dropdown.Item>
                        </DropdownButton>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchForm;
