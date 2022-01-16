import React, { useState } from "react";

import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";

import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../Config";
import { updateDoc, doc } from "firebase/firestore";

function BIForm() {
  let { userId } = useParams();
  let navigate = useNavigate();
  const updateRef = doc(db, "users", userId);

  const sumBI = async () => {
    const biscoredb =
      parseInt(biscore1) +
      parseInt(biscore2) +
      parseInt(biscore3) +
      parseInt(biscore4) +
      parseInt(biscore5) +
      parseInt(biscore6) +
      parseInt(biscore7) +
      parseInt(biscore8) +
      parseInt(biscore9) +
      parseInt(biscore10);

    await updateDoc(updateRef, {
      biScore: biscoredb,
    }).then(() => {
      alert("บันทึกข้อมูลแล้ว");
      navigate("/search");
    });
  };

  //BI score
  const [biscore1, setBiscore1] = useState(0);
  const [biscore2, setBiscore2] = useState(0);
  const [biscore3, setBiscore3] = useState(0);
  const [biscore4, setBiscore4] = useState(0);
  const [biscore5, setBiscore5] = useState(0);
  const [biscore6, setBiscore6] = useState(0);
  const [biscore7, setBiscore7] = useState(0);
  const [biscore8, setBiscore8] = useState(0);
  const [biscore9, setBiscore9] = useState(0);
  const [biscore10, setBiscore10] = useState(0);

  return (
    <Container className="p-3">
      <h4 className="text-center p-3">ประเมินความสามารถการดำเนินชีวิต</h4>
      <Row>
        <Form>
          <Col lg={12}>
            <Table responsive="lg">
              <thead>
                <tr>
                  <th>กิจกรรม / คะแนน</th>
                  <th>0</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    1. รับประทานอาหารเมื่อเตรียมไว้ให้เรียบร้อยต่อหน้า (Feeding)
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="0"
                      name="bi-1"
                      onChange={(e) => {
                        setBiscore1(e.target.value);
                      }}
                    />{" "}
                    ต้องมีคนป้อนให้
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="1"
                      name="bi-1"
                      onChange={(e) => {
                        setBiscore1(e.target.value);
                      }}
                    />{" "}
                    ตักอาหารเองได้แต่ต้องมีคนช่วย
                    เช่นช่วยตักเตรียมไว้ให้หรือตัดเป็นชิ้นเล็ก ๆไว้ให้
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="2"
                      name="bi-1"
                      onChange={(e) => {
                        setBiscore1(e.target.value);
                      }}
                    />{" "}
                    ตักอาหารและช่วยตัวเองได้ปกติ
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>2. ล้างหน้า แปลงฟัน หวีผม โกนหนวด (Grooming)</td>
                  <td>
                    <input
                      type="radio"
                      value="0"
                      name="bi-2"
                      onChange={(e) => {
                        setBiscore2(e.target.value);
                      }}
                    />{" "}
                    ต้องการความช่วยเหลือ
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="1"
                      name="bi-2"
                      onChange={(e) => {
                        setBiscore2(e.target.value);
                      }}
                    />{" "}
                    ทำเองได้ (รวมทั้งที่ทำได้เองถ้าเตรียมอุปกรณ์ไว้ให้)
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    3. ลุกนั่งจากที่นอนหรือจากเตียงไปยังเก้าอี้ (Transfer)
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="0"
                      name="bi-3"
                      onChange={(e) => {
                        setBiscore3(e.target.value);
                      }}
                    />{" "}
                    นอนติดเตียง นั่งเองไม่ได้หรือต้องใช้ 2 คนช่วยกันพยุงนั่ง
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="1"
                      name="bi-3"
                      onChange={(e) => {
                        setBiscore3(e.target.value);
                      }}
                    />{" "}
                    ต้องใช้คนช่วยอย่างมากจึงจะนั่งได้
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="2"
                      name="bi-3"
                      onChange={(e) => {
                        setBiscore3(e.target.value);
                      }}
                    />{" "}
                    ต้องการความช่วยเหลือบ้าง ต้องคอยดูแล
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="3"
                      name="bi-3"
                      onChange={(e) => {
                        setBiscore3(e.target.value);
                      }}
                    />{" "}
                    ทำเองได้
                  </td>
                </tr>
                <tr>
                  <td>4. ใช้ห้องน้ำ (Toulet use)</td>
                  <td>
                    <input
                      type="radio"
                      value="0"
                      name="bi-4"
                      onChange={(e) => {
                        setBiscore4(e.target.value);
                      }}
                    />{" "}
                    ช่วยตัวเองไม่่ได้ ต้องช่วยทุกขั้นตอน
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="1"
                      name="bi-4"
                      onChange={(e) => {
                        setBiscore4(e.target.value);
                      }}
                    />{" "}
                    ทำเองได้บ้าง (ต้องทำความสะอาดตัวเองได้หลังจากเสร็จธุระ)
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="2"
                      name="bi-4"
                      onChange={(e) => {
                        setBiscore4(e.target.value);
                      }}
                    />{" "}
                    ช่วยตัวเองได้ดี (ขึ้นนั่งและลงจากโถส้วมได้
                    ทำความสะอาดได้เรียบร้อยหลังจากเสร็จธุระ)
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>5. การเคลื่อนที่ภายในห้องหรือบ้าน (Mobility)</td>
                  <td>
                    <input
                      type="radio"
                      value="0"
                      name="bi-5"
                      onChange={(e) => {
                        setBiscore5(e.target.value);
                      }}
                    />{" "}
                    เคลื่อนที่ไปไหนไม่ได้
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="1"
                      name="bi-5"
                      onChange={(e) => {
                        setBiscore5(e.target.value);
                      }}
                    />{" "}
                    ต้องใช้รถเข็นช่วยตัวเองให้เคลื่อนที่ได้เอง
                    (ไม่ต้องมีคนเข็นให้) และจะต้องเข้าออกมุมห้อง/ประตูได้
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="2"
                      name="bi-5"
                      onChange={(e) => {
                        setBiscore5(e.target.value);
                      }}
                    />{" "}
                    เดินหรือเคลื่อนที่โดยมีคนช่วย เช่นหยุง หรือบอกให้ทำตาม
                    ต้องดูแลเพื่อความปลอดภัย
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="3"
                      name="bi-5"
                      onChange={(e) => {
                        setBiscore5(e.target.value);
                      }}
                    />{" "}
                    เดินหรือเคลื่อนที่ได้เอง
                  </td>
                </tr>
                <tr>
                  <td>6. การสวมใส่เสื้อผ้า (Dressing)</td>
                  <td>
                    <input
                      type="radio"
                      value="0"
                      name="bi-6"
                      onChange={(e) => {
                        setBiscore6(e.target.value);
                      }}
                    />{" "}
                    ต้องมีคนสวมใส่ให้ ช่วยตัวเองแทบไม่ได้หรือได้น้อย
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="1"
                      name="bi-6"
                      onChange={(e) => {
                        setBiscore6(e.target.value);
                      }}
                    />{" "}
                    ช่วยตัวเองได้ประมาณร้อยละ 50 ที่เหลือต้องมีคนช่วย
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="2"
                      name="bi-6"
                      onChange={(e) => {
                        setBiscore6(e.target.value);
                      }}
                    />{" "}
                    ช่วยเหลือตัวเองได้ดี (รวมทั้งการติดกระดุม รูดซิบ)
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>7. การขึ้น-ลงบันได 1 ชั้น (Stairs)</td>
                  <td>
                    <input
                      type="radio"
                      value="0"
                      name="bi-7"
                      onChange={(e) => {
                        setBiscore7(e.target.value);
                      }}
                    />{" "}
                    ไม่สามารถทำได้
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="1"
                      name="bi-7"
                      onChange={(e) => {
                        setBiscore7(e.target.value);
                      }}
                    />{" "}
                    ต้องมีคนช่วย
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="2"
                      name="bi-7"
                      onChange={(e) => {
                        setBiscore7(e.target.value);
                      }}
                    />{" "}
                    ขึ้นลงได้เอง (ถ้าต้องใช้เครื่องช่วยเดินต้องเอาขึ้นลงได้ด้วย)
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>8. การอาบน้ำ (Bathing)</td>
                  <td>
                    <input
                      type="radio"
                      value="0"
                      name="bi-8"
                      onChange={(e) => {
                        setBiscore8(e.target.value);
                      }}
                    />{" "}
                    ต้องมีคนช่วยหรือทำให้
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="1"
                      name="bi-8"
                      onChange={(e) => {
                        setBiscore8(e.target.value);
                      }}
                    />{" "}
                    อาบน้ำเองได้ เช่นตักน้ำ ฟอกสบู่
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>9. การกลั้นการขับถ่ายอุจจาระ (Bowels)</td>
                  <td>
                    <input
                      type="radio"
                      value="0"
                      name="bi-9"
                      onChange={(e) => {
                        setBiscore9(e.target.value);
                      }}
                    />{" "}
                    กลั้นไม่ได้ หรือต้องการการสวนอุจจาระอยู่เสมอ
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="1"
                      name="bi-9"
                      onChange={(e) => {
                        setBiscore9(e.target.value);
                      }}
                    />{" "}
                    กลั้นไม่ได้บางครั้ง (เป็นน้อยกว่า 1 ครั้งต่อสัปดาห์)
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="2"
                      name="bi-9"
                      onChange={(e) => {
                        setBiscore9(e.target.value);
                      }}
                    />{" "}
                    กลั้นได้ปกติ
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    10. การกลั้นปัสสาวะในระยะเวลา 1สัปดาห์ที่ผ่านมา (Bladder)
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="0"
                      name="bi-10"
                      onChange={(e) => {
                        setBiscore10(e.target.value);
                      }}
                    />{" "}
                    กลั้นไม่ได้หรือใส่สายสวนปัสสาวะแต่ไม่สามารถดูแลได้
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="1"
                      name="bi-10"
                      onChange={(e) => {
                        setBiscore10(e.target.value);
                      }}
                    />{" "}
                    กลั้นไม่ได้บางครั้ง (เป็นน้อยกว่าวันละ 1 ครั้ง)
                  </td>
                  <td>
                    <input
                      type="radio"
                      value="2"
                      name="bi-10"
                      onChange={(e) => {
                        setBiscore10(e.target.value);
                      }}
                    />{" "}
                    กลั้นได้ปกติ
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Form>
      </Row>

      <Row className="pt-3">
        <Col md={12}>
          <p className="text-center">
            การแปลผล : 0-4 ไม่สามารถพึ่งตนเองหรือช่วยเหลือตนเองได้ 5-11
            ช่วยเหลือตัวเองได้บ้าง 12 ช่วยเหลือตนเองได้ปกติ
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="d-grid gap-2 d-md-flex justify-content-md-end p-3">
          <Button
            className="w-25"
            variant="primary"
            style={{ borderRadius: "15px", padding: ".5rem" }}
            onClick={sumBI}
          >
            บันทึกข้อมูล
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default BIForm;
