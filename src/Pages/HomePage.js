import React, { useState, useEffect } from "react";

import Footer from "../Components/Footer/Footer";
import Hometab from "../Components/Hometab/Hometab";
import HometabRight from "../Components/Hometab/HometabRight";

import { Col, Row, Container, Card } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  LabelList,
} from "recharts";

import { db } from "../Config";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

function HomePage() {
  const [users, setUsers] = useState([]);

  const colRef = collection(db, "users");

  useEffect(() => {
    // const q = query(colRef, where("idCard", "==", searchItem));
    const getUsers = async () => {
      const data = await getDocs(colRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  //Pie
  let countPatient1 = 0;
  let countPatient2 = 0;
  let countPatient3 = 0;
  let countPatient4 = 0;
  let countPatient5 = 0;
  let countPatient6 = 0;
  let countPatient7 = 0;

  //Count user subdistrict
  let userCountSubD = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  //Count Biscore from 10
  let BiType = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  let BiScoreCal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  users.map((user) => {
    //countUser
    if (user.subDistrict === "ขัวมุง") {
      userCountSubD[0] += 1;
      BiScoreCal[0] += parseInt(user.biScore);
      if (user.biFeeding !== 0) {
        BiType[0][0] += parseInt(user.biFeeding);
      }
      if (user.biGrooming !== 0) {
        BiType[0][1] += parseInt(user.biGrooming);
      }
      if (user.biTransfer !== 0) {
        BiType[0][2] += parseInt(user.biTransfer);
      }
      if (user.biToilet !== 0) {
        BiType[0][3] += parseInt(user.biToilet);
      }
      if (user.biMobility !== 0) {
        BiType[0][4] += parseInt(user.biMobility);
      }
      if (user.biDressing !== 0) {
        BiType[0][5] += parseInt(user.biDressing);
      }
      if (user.biStairs !== 0) {
        BiType[0][6] += parseInt(user.biStairs);
      }
      if (user.biBathing !== 0) {
        BiType[0][7] += parseInt(user.biBathing);
      }
      if (user.biBowels !== 0) {
        BiType[0][8] += parseInt(user.biBowels);
      }
      if (user.biBladder !== 0) {
        BiType[0][9] += parseInt(user.biBladder);
      }
    } else if (user.subDistrict === "ชมภู") {
      userCountSubD[1] += 1;
      BiScoreCal[1] += parseInt(user.biScore);
      if (user.biFeeding !== 0) {
        BiType[1][0] += parseInt(user.biFeeding);
      }
      if (user.biGrooming !== 0) {
        BiType[1][1] += parseInt(user.biGrooming);
      }
      if (user.biTransfer !== 0) {
        BiType[1][2] += parseInt(user.biTransfer);
      }
      if (user.biToilet !== 0) {
        BiType[1][3] += parseInt(user.biToilet);
      }
      if (user.biMobility !== 0) {
        BiType[1][4] += parseInt(user.biMobility);
      }
      if (user.biDressing !== 0) {
        BiType[1][5] += parseInt(user.biDressing);
      }
      if (user.biStairs !== 0) {
        BiType[1][6] += parseInt(user.biStairs);
      }
      if (user.biBathing !== 0) {
        BiType[1][7] += parseInt(user.biBathing);
      }
      if (user.biBowels !== 0) {
        BiType[1][8] += parseInt(user.biBowels);
      }
      if (user.biBladder !== 0) {
        BiType[1][9] += parseInt(user.biBladder);
      }
    } else if (user.subDistrict === "ไชยสถาน") {
      userCountSubD[2] += 1;
      BiScoreCal[2] += parseInt(user.biScore);
      if (user.biFeeding !== 0) {
        BiType[2][0] += parseInt(user.biFeeding);
      }
      if (user.biGrooming !== 0) {
        BiType[2][1] += parseInt(user.biGrooming);
      }
      if (user.biTransfer !== 0) {
        BiType[2][2] += parseInt(user.biTransfer);
      }
      if (user.biToilet !== 0) {
        BiType[2][3] += parseInt(user.biToilet);
      }
      if (user.biMobility !== 0) {
        BiType[2][4] += parseInt(user.biMobility);
      }
      if (user.biDressing !== 0) {
        BiType[2][5] += parseInt(user.biDressing);
      }
      if (user.biStairs !== 0) {
        BiType[2][6] += parseInt(user.biStairs);
      }
      if (user.biBathing !== 0) {
        BiType[2][7] += parseInt(user.biBathing);
      }
      if (user.biBowels !== 0) {
        BiType[2][8] += parseInt(user.biBowels);
      }
      if (user.biBladder !== 0) {
        BiType[2][9] += parseInt(user.biBladder);
      }
    } else if (user.subDistrict === "ดอนแก้ว") {
      userCountSubD[3] += 1;
      BiScoreCal[3] += parseInt(user.biScore);
      if (user.biFeeding !== 0) {
        BiType[3][0] += parseInt(user.biFeeding);
      }
      if (user.biGrooming !== 0) {
        BiType[3][1] += parseInt(user.biGrooming);
      }
      if (user.biTransfer !== 0) {
        BiType[3][2] += parseInt(user.biTransfer);
      }
      if (user.biToilet !== 0) {
        BiType[3][3] += parseInt(user.biToilet);
      }
      if (user.biMobility !== 0) {
        BiType[3][4] += parseInt(user.biMobility);
      }
      if (user.biDressing !== 0) {
        BiType[3][5] += parseInt(user.biDressing);
      }
      if (user.biStairs !== 0) {
        BiType[3][6] += parseInt(user.biStairs);
      }
      if (user.biBathing !== 0) {
        BiType[3][7] += parseInt(user.biBathing);
      }
      if (user.biBowels !== 0) {
        BiType[3][8] += parseInt(user.biBowels);
      }
      if (user.biBladder !== 0) {
        BiType[3][9] += parseInt(user.biBladder);
      }
    } else if (user.subDistrict === "ท่ากว้าง") {
      userCountSubD[4] += 1;
      BiScoreCal[4] += parseInt(user.biScore);
      if (user.biFeeding !== 0) {
        BiType[4][0] += parseInt(user.biFeeding);
      }
      if (user.biGrooming !== 0) {
        BiType[4][1] += parseInt(user.biGrooming);
      }
      if (user.biTransfer !== 0) {
        BiType[4][2] += parseInt(user.biTransfer);
      }
      if (user.biToilet !== 0) {
        BiType[4][3] += parseInt(user.biToilet);
      }
      if (user.biMobility !== 0) {
        BiType[4][4] += parseInt(user.biMobility);
      }
      if (user.biDressing !== 0) {
        BiType[4][5] += parseInt(user.biDressing);
      }
      if (user.biStairs !== 0) {
        BiType[4][6] += parseInt(user.biStairs);
      }
      if (user.biBathing !== 0) {
        BiType[4][7] += parseInt(user.biBathing);
      }
      if (user.biBowels !== 0) {
        BiType[4][8] += parseInt(user.biBowels);
      }
      if (user.biBladder !== 0) {
        BiType[4][9] += parseInt(user.biBladder);
      }
    } else if (user.subDistrict === "ท่าวังตาล") {
      userCountSubD[5] += 1;
      BiScoreCal[5] += parseInt(user.biScore);
      if (user.biFeeding !== 0) {
        BiType[5][0] += parseInt(user.biFeeding);
      }
      if (user.biGrooming !== 0) {
        BiType[5][1] += parseInt(user.biGrooming);
      }
      if (user.biTransfer !== 0) {
        BiType[5][2] += parseInt(user.biTransfer);
      }
      if (user.biToilet !== 0) {
        BiType[5][3] += parseInt(user.biToilet);
      }
      if (user.biMobility !== 0) {
        BiType[5][4] += parseInt(user.biMobility);
      }
      if (user.biDressing !== 0) {
        BiType[5][5] += parseInt(user.biDressing);
      }
      if (user.biStairs !== 0) {
        BiType[5][6] += parseInt(user.biStairs);
      }
      if (user.biBathing !== 0) {
        BiType[5][7] += parseInt(user.biBathing);
      }
      if (user.biBowels !== 0) {
        BiType[5][8] += parseInt(user.biBowels);
      }
      if (user.biBladder !== 0) {
        BiType[5][9] += parseInt(user.biBladder);
      }
    } else if (user.subDistrict === "ป่าบง") {
      userCountSubD[6] += 1;
      BiScoreCal[6] += parseInt(user.biScore);
      if (user.biFeeding !== 0) {
        BiType[6][0] += parseInt(user.biFeeding);
      }
      if (user.biGrooming !== 0) {
        BiType[6][1] += parseInt(user.biGrooming);
      }
      if (user.biTransfer !== 0) {
        BiType[6][2] += parseInt(user.biTransfer);
      }
      if (user.biToilet !== 0) {
        BiType[6][3] += parseInt(user.biToilet);
      }
      if (user.biMobility !== 0) {
        BiType[6][4] += parseInt(user.biMobility);
      }
      if (user.biDressing !== 0) {
        BiType[6][5] += parseInt(user.biDressing);
      }
      if (user.biStairs !== 0) {
        BiType[6][6] += parseInt(user.biStairs);
      }
      if (user.biBathing !== 0) {
        BiType[6][7] += parseInt(user.biBathing);
      }
      if (user.biBowels !== 0) {
        BiType[6][8] += parseInt(user.biBowels);
      }
      if (user.biBladder !== 0) {
        BiType[6][9] += parseInt(user.biBladder);
      }
    } else if (user.subDistrict === "ยางเนิ้ง") {
      userCountSubD[7] += 1;
      BiScoreCal[7] += parseInt(user.biScore);
      if (user.biFeeding !== 0) {
        BiType[7][0] += parseInt(user.biFeeding);
      }
      if (user.biGrooming !== 0) {
        BiType[7][1] += parseInt(user.biGrooming);
      }
      if (user.biTransfer !== 0) {
        BiType[7][2] += parseInt(user.biTransfer);
      }
      if (user.biToilet !== 0) {
        BiType[7][3] += parseInt(user.biToilet);
      }
      if (user.biMobility !== 0) {
        BiType[7][4] += parseInt(user.biMobility);
      }
      if (user.biDressing !== 0) {
        BiType[7][5] += parseInt(user.biDressing);
      }
      if (user.biStairs !== 0) {
        BiType[7][6] += parseInt(user.biStairs);
      }
      if (user.biBathing !== 0) {
        BiType[7][7] += parseInt(user.biBathing);
      }
      if (user.biBowels !== 0) {
        BiType[7][8] += parseInt(user.biBowels);
      }
      if (user.biBladder !== 0) {
        BiType[7][9] += parseInt(user.biBladder);
      }
    } else if (user.subDistrict === "สันทราย") {
      userCountSubD[8] += 1;
      BiScoreCal[8] += parseInt(user.biScore);
      if (user.biFeeding !== 0) {
        BiType[8][0] += parseInt(user.biFeeding);
      }
      if (user.biGrooming !== 0) {
        BiType[8][1] += parseInt(user.biGrooming);
      }
      if (user.biTransfer !== 0) {
        BiType[8][2] += parseInt(user.biTransfer);
      }
      if (user.biToilet !== 0) {
        BiType[8][3] += parseInt(user.biToilet);
      }
      if (user.biMobility !== 0) {
        BiType[8][4] += parseInt(user.biMobility);
      }
      if (user.biDressing !== 0) {
        BiType[8][5] += parseInt(user.biDressing);
      }
      if (user.biStairs !== 0) {
        BiType[8][6] += parseInt(user.biStairs);
      }
      if (user.biBathing !== 0) {
        BiType[8][7] += parseInt(user.biBathing);
      }
      if (user.biBowels !== 0) {
        BiType[8][8] += parseInt(user.biBowels);
      }
      if (user.biBladder !== 0) {
        BiType[8][9] += parseInt(user.biBladder);
      }
    } else if (user.subDistrict === "สารภี") {
      userCountSubD[9] += 1;
      BiScoreCal[9] += parseInt(user.biScore);
      if (user.biFeeding !== 0) {
        BiType[9][0] += parseInt(user.biFeeding);
      }
      if (user.biGrooming !== 0) {
        BiType[9][1] += parseInt(user.biGrooming);
      }
      if (user.biTransfer !== 0) {
        BiType[9][2] += parseInt(user.biTransfer);
      }
      if (user.biToilet !== 0) {
        BiType[9][3] += parseInt(user.biToilet);
      }
      if (user.biMobility !== 0) {
        BiType[9][4] += parseInt(user.biMobility);
      }
      if (user.biDressing !== 0) {
        BiType[9][5] += parseInt(user.biDressing);
      }
      if (user.biStairs !== 0) {
        BiType[9][6] += parseInt(user.biStairs);
      }
      if (user.biBathing !== 0) {
        BiType[9][7] += parseInt(user.biBathing);
      }
      if (user.biBowels !== 0) {
        BiType[9][8] += parseInt(user.biBowels);
      }
      if (user.biBladder !== 0) {
        BiType[9][9] += parseInt(user.biBladder);
      }
    } else if (user.subDistrict === "หนองผึ้ง") {
      userCountSubD[10] += 1;
      BiScoreCal[10] += parseInt(user.biScore);
      if (user.biFeeding !== 0) {
        BiType[10][0] += parseInt(user.biFeeding);
      }
      if (user.biGrooming !== 0) {
        BiType[10][1] += parseInt(user.biGrooming);
      }
      if (user.biTransfer !== 0) {
        BiType[10][2] += parseInt(user.biTransfer);
      }
      if (user.biToilet !== 0) {
        BiType[10][3] += parseInt(user.biToilet);
      }
      if (user.biMobility !== 0) {
        BiType[10][4] += parseInt(user.biMobility);
      }
      if (user.biDressing !== 0) {
        BiType[10][5] += parseInt(user.biDressing);
      }
      if (user.biStairs !== 0) {
        BiType[10][6] += parseInt(user.biStairs);
      }
      if (user.biBathing !== 0) {
        BiType[10][7] += parseInt(user.biBathing);
      }
      if (user.biBowels !== 0) {
        BiType[10][8] += parseInt(user.biBowels);
      }
      if (user.biBladder !== 0) {
        BiType[10][9] += parseInt(user.biBladder);
      }
    } else if (user.subDistrict === "หนองแฝก") {
      userCountSubD[11] += 1;
      BiScoreCal[11] += parseInt(user.biScore);
      if (user.biFeeding !== 0) {
        BiType[11][0] += parseInt(user.biFeeding);
      }
      if (user.biGrooming !== 0) {
        BiType[11][1] += parseInt(user.biGrooming);
      }
      if (user.biTransfer !== 0) {
        BiType[11][2] += parseInt(user.biTransfer);
      }
      if (user.biToilet !== 0) {
        BiType[11][3] += parseInt(user.biToilet);
      }
      if (user.biMobility !== 0) {
        BiType[11][4] += parseInt(user.biMobility);
      }
      if (user.biDressing !== 0) {
        BiType[11][5] += parseInt(user.biDressing);
      }
      if (user.biStairs !== 0) {
        BiType[11][6] += parseInt(user.biStairs);
      }
      if (user.biBathing !== 0) {
        BiType[11][7] += parseInt(user.biBathing);
      }
      if (user.biBowels !== 0) {
        BiType[11][8] += parseInt(user.biBowels);
      }
      if (user.biBladder !== 0) {
        BiType[11][9] += parseInt(user.biBladder);
      }
    }

    //Radar

    //Pie
    if (user.disability === "ทางการมองเห็น ") {
      countPatient1 += 1;
    } else if (user.disability === "ทางการได้ยินหรือสื่อความหมาย ") {
      countPatient2 += 1;
    } else if (user.disability === "ทางการเคลื่อนไหว ") {
      countPatient3 += 1;
    } else if (user.disability === "ทางจิตใจ ") {
      countPatient4 += 1;
    } else if (user.disability === "ทางสติปํญญา ") {
      countPatient5 += 1;
    } else if (user.disability === "ทางการเรียนรู้ ") {
      countPatient6 += 1;
    } else if (user.disability === "ออทิสติก ") {
      countPatient7 += 1;
    }

    return 0;
  });

  const dataBar = [
    {
      name: "ขัวมุง",
      "คะแนน BI": BiScoreCal[0],
    },
    {
      name: "ชมภู",
      "คะแนน BI": BiScoreCal[1],
    },
    {
      name: "ไชยสถาน",
      "คะแนน BI": BiScoreCal[2],
    },
    {
      name: "ดอนแก้ว",
      "คะแนน BI": BiScoreCal[3],
    },
    {
      name: "ท่ากว้าง",
      "คะแนน BI": BiScoreCal[4],
    },
    {
      name: "ท่าวังตาล",
      "คะแนน BI": BiScoreCal[5],
    },
    {
      name: "ป่าบง",
      "คะแนน BI": BiScoreCal[6],
    },
    {
      name: "ย่างเนิ้ง",
      "คะแนน BI": BiScoreCal[7],
    },
    {
      name: "สันทราย",
      "คะแนน BI": BiScoreCal[8],
    },
    {
      name: "สารภี",
      "คะแนน BI": BiScoreCal[9],
    },
    {
      name: "หนองผึ้ง",
      "คะแนน BI": BiScoreCal[10],
    },
    {
      name: "หนองแฝก",
      "คะแนน BI": BiScoreCal[11],
    },
  ];

  const dataPie = [
    { name: "การมองเห็น", value: countPatient1 },
    { name: "การได้ยิน", value: countPatient2 },
    { name: "การเคลื่อนไหว", value: countPatient3 },
    { name: "ทางจิตใจ", value: countPatient4 },
    { name: "ทางสติปัญญา", value: countPatient5 },
    { name: "ทางการเรียนรู้", value: countPatient6 },
    { name: "ออทิสติก", value: countPatient7 },
  ];

  const dataRadar = [
    {
      subject: "Feeding",
      A: BiType[0][0],
      B: BiType[0][0],
      C: BiType[0][0],
      D: BiType[0][0],
      E: BiType[0][0],
      F: BiType[0][0],
      G: BiType[0][0],
      H: BiType[0][0],
      I: BiType[0][0],
      J: BiType[0][0],
      K: BiType[0][0],
      L: BiType[0][0],
      fullMark: 2,
    },
    {
      subject: "Grooming",
      A: BiType[0][1],
      B: BiType[1][1],
      C: BiType[2][1],
      D: BiType[3][1],
      E: BiType[4][1],
      F: BiType[5][1],
      G: BiType[6][1],
      H: BiType[7][1],
      I: BiType[8][1],
      J: BiType[9][1],
      K: BiType[10][1],
      L: BiType[11][1],
      fullMark: 1,
    },
    {
      subject: "Transfer",
      A: BiType[0][2],
      B: BiType[1][2],
      C: BiType[2][2],
      D: BiType[3][2],
      E: BiType[4][2],
      F: BiType[5][2],
      G: BiType[6][2],
      H: BiType[7][2],
      I: BiType[8][2],
      J: BiType[9][2],
      K: BiType[10][2],
      L: BiType[11][2],
      fullMark: 3,
    },
    {
      subject: "Toilet",
      A: BiType[0][3],
      B: BiType[1][3],
      C: BiType[2][3],
      D: BiType[3][3],
      E: BiType[4][3],
      F: BiType[5][3],
      G: BiType[6][3],
      H: BiType[7][3],
      I: BiType[8][3],
      J: BiType[9][3],
      K: BiType[10][3],
      L: BiType[11][3],
      fullMark: 2,
    },
    {
      subject: "Mobility",
      A: BiType[0][4],
      B: BiType[1][4],
      C: BiType[2][4],
      D: BiType[3][4],
      E: BiType[4][4],
      F: BiType[5][4],
      G: BiType[6][4],
      H: BiType[7][4],
      I: BiType[8][4],
      J: BiType[9][4],
      K: BiType[10][4],
      L: BiType[11][4],
      fullMark: 3,
    },
    {
      subject: "Dressing",
      A: BiType[0][5],
      B: BiType[1][5],
      C: BiType[2][5],
      D: BiType[3][5],
      E: BiType[4][5],
      F: BiType[5][5],
      G: BiType[6][5],
      H: BiType[7][5],
      I: BiType[8][5],
      J: BiType[9][5],
      K: BiType[10][5],
      L: BiType[11][5],
      fullMark: 3,
    },
    {
      subject: "Stairs",
      A: BiType[0][6],
      B: BiType[1][6],
      C: BiType[2][6],
      D: BiType[3][6],
      E: BiType[4][6],
      F: BiType[5][6],
      G: BiType[6][6],
      H: BiType[7][6],
      I: BiType[8][6],
      J: BiType[9][6],
      K: BiType[10][6],
      L: BiType[11][6],
      fullMark: 2,
    },
    {
      subject: "Bathing",
      A: BiType[0][7],
      B: BiType[1][7],
      C: BiType[2][7],
      D: BiType[3][7],
      E: BiType[4][7],
      F: BiType[5][7],
      G: BiType[6][7],
      H: BiType[7][7],
      I: BiType[8][7],
      J: BiType[9][7],
      K: BiType[10][7],
      L: BiType[11][7],
      fullMark: 1,
    },
    {
      subject: "Bowels",
      A: BiType[0][8],
      B: BiType[1][8],
      C: BiType[2][8],
      D: BiType[3][8],
      E: BiType[4][8],
      F: BiType[5][8],
      G: BiType[6][8],
      H: BiType[7][8],
      I: BiType[8][8],
      J: BiType[9][8],
      K: BiType[10][8],
      L: BiType[11][8],
      fullMark: 2,
    },
    {
      subject: "Bladder",
      A: BiType[0][9],
      B: BiType[1][9],
      C: BiType[2][9],
      D: BiType[3][9],
      E: BiType[4][9],
      F: BiType[5][9],
      G: BiType[9][9],
      H: BiType[7][9],
      I: BiType[8][9],
      J: BiType[9][9],
      K: BiType[10][9],
      L: BiType[11][9],
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
                    name="ขัวมุง"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="ชมภู"
                    dataKey="B"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="ไชยสถาน"
                    dataKey="C"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="ดอนแก้ว"
                    dataKey="D"
                    stroke="#258a63"
                    fill="#258a63"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="ท่ากว้าง"
                    dataKey="E"
                    stroke="##b3dca0"
                    fill="##b3dca0"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="ท่าวังตาล"
                    dataKey="F"
                    stroke="#9acd32"
                    fill="#9acd32"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="ป่าบง"
                    dataKey="G"
                    stroke="#9ad88e"
                    fill="#9ad88e"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="ย่างเนิ้ง"
                    dataKey="H"
                    stroke="##7692bf"
                    fill="##7692bf"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="สันทราย"
                    dataKey="I"
                    stroke="##7692bf"
                    fill="##7692bf"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="สารภี"
                    dataKey="J"
                    stroke="#556699"
                    fill="#556699"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="หนองผึ้ง"
                    dataKey="K"
                    stroke="#556699"
                    fill="#556699"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="หนองแฝก"
                    dataKey="L"
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
                จำนวนคนพิการทั้งหมดในอำเภอสารภี
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
