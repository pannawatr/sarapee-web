import React from "react";

import Footer from "../Components/Footer/Footer";
import Hometab from "../Components/Hometab/Hometab";
import HometabRight from "../Components/Hometab/HometabRight";

import { Col, Row, Container, Card } from "react-bootstrap";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  LabelList,
} from "recharts";

function HomePage() {
  const dataBar = [
    {
      name: "ย่างเนิ้ง",
      "คะแนน BI": 0,
    },
    {
      name: "สารภี",
      "คะแนน BI": 0,
    },
    {
      name: "ชมภู",
      "คะแนน BI": 0,
    },
    {
      name: "ไชยสถาน",
      "คะแนน BI": 0,
    },
    {
      name: "ขัวมุง",
      "คะแนน BI": 0,
    },
    {
      name: "หนังแฝก",
      "คะแนน BI": 0,
    },
    {
      name: "หนองผึ้ง",
      "คะแนน BI": 0,
    },
    {
      name: "ท่ากว้าง",
      "คะแนน BI": 0,
    },
    {
      name: "ดอนแก้ว",
      "คะแนน BI": 0,
    },
    {
      name: "สันทราย",
      "คะแนน BI": 0,
    },
    {
      name: "ป่าบง",
      "คะแนน BI": 0,
    },
  ];

  const dataPie = [
    { name: "การมองเห็น", value: 0 },
    { name: "การได้ยิน", value: 0 },
    { name: "การเคลื่อนไหว", value: 0 },
    { name: "ทางจิตใจ", value: 0 },
    { name: "ทางการเรียนรู้", value: 0 },
    { name: "ออทิสติก", value: 0 },
  ];

  const dataRadar = [
    {
      subject: "Feed",
      A: 0,
      B: 0,
      fullMark: 2,
    },
    {
      subject: "Groom",
      A: 0,
      B: 0,
      fullMark: 1,
    },
    {
      subject: "Transfer",
      A: 0,
      B: 0,
      fullMark: 3,
    },
    {
      subject: "Toilet",
      A: 0,
      B: 0,
      fullMark: 2,
    },
    {
      subject: "Mobility",
      A: 0,
      B: 0,
      fullMark: 3,
    },
    {
      subject: "Stairs",
      A: 0,
      B: 0,
      fullMark: 2,
    },
    {
      subject: "Bathing",
      A: 0,
      B: 0,
      fullMark: 1,
    },
    {
      subject: "Bowel",
      A: 0,
      B: 0,
      fullMark: 2,
    },
    {
      subject: "Bladder",
      A: 0,
      B: 0,
      fullMark: 2,
    },
  ];

  return (
    <div>
      <Row>
        <Col xs={6} md={9} lg={10}>
          <Hometab />
        </Col>
        <Col xs={6} md={3} lg={2}>
          <HometabRight activetab="home" />
        </Col>
      </Row>

      <Container className="p-3" style={{ minHeight: "50rem" }}>
        <Row>
          {/* Radar */}
          <Col>
            <Card>
              <h4 className="text-center pt-3">
                คะแนนการประเมิณ 10 ด้านแบบเฉลี่ยของ BI ในแต่ละตำบลในสารภี
              </h4>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  data={dataRadar}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 3]} />
                  <Radar
                    name="ไชยสถาน"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="ท่ากว้าง"
                    dataKey="B"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="ท่าวังตาล"
                    dataKey="B"
                    stroke="#258a63"
                    fill="#258a63"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="หนองผึ้ง"
                    dataKey="B"
                    stroke="#9acd32"
                    fill="#9acd32"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="ป่าบง"
                    dataKey="B"
                    stroke="#9ad88e"
                    fill="#9ad88e"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="ย่างเนิ้ง"
                    dataKey="B"
                    stroke="##7692bf"
                    fill="##7692bf"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="ดอนแก้ว"
                    dataKey="B"
                    stroke="#556699"
                    fill="#556699"
                    fillOpacity={0.6}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        </Row>

        <br></br>

        <Row>
          <Col lg={6}>
            <Card>
              <h4 className="text-center p-3">
                คะแนน BI เฉลี่ยของในแต่ละตำบลในสารภี
              </h4>
              {/* BarChart */}
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  width={500}
                  height={300}
                  data={dataBar}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="คะแนน BI" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
            <br></br>
          </Col>
          <Col lg={6}>
            <Card>
              <h4 className="text-center p-3">
                จำนวนคนพิการทั้งหมดในอำเภแสารภี
              </h4>
              {/* PieChart */}
              <ResponsiveContainer width="100%" height={400}>
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={dataPie}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                    labelLine
                  />
                  <LabelList dataKey="name" position="inside" />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
            <br></br>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default HomePage;
