import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
  Table,
} from "react-bootstrap";

import { useNavigate, useParams, Link } from "react-router-dom";
import { db } from "../../Config";
import { doc, collection, getDocs } from "firebase/firestore";

function SearchICFForm() {
  let { userId } = useParams();
  let navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const subcollection = collection(db, "users", userId, "icf");

  useEffect(() => {
    const getIcfId = async () => {
      const data = await getDocs(subcollection);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getIcfId();
  }, []);

  return (
    <Container className="p-3">
      <Row>
        <Col lg={12}>
          <Table responsive="md">
            <thead>
              <tr>
                <th>เวลา</th>
                <th style={{ width: "12%" }}></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                console.log(user.icfTime);
                return (
                  <tr>
                    <td>
                      {new Date(user.icfTime.seconds * 1000).toLocaleDateString(
                        "th-TH"
                      )}
                    </td>
                    <td>
                      <Button
                        className="w-100"
                        variant="primary"
                        title="ดูข้อมูล"
                        style={{ borderRadius: "15px", padding: ".5rem" }}
                      >
                        <Link
                          to={`/Icfinfo/${userId}/${user.id}`}
                          activeClassName="active"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          ดูข้อมูล
                        </Link>
                      </Button>
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

export default SearchICFForm;
