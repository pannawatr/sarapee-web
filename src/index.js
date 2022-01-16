import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ChangePasswordPage from "./Pages/ChangePassword";
import ICFPage from "./Pages/ICFPage";

import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";

import RegisterPatientPage from "./Pages/RegisterPatientPage";
import RegisterPatientPage2 from "./Pages/RegisterPatientPage2";
import BIPage from "./Pages/BIPage";

import InfoPatientPage from "./Pages/InfoPatientPage";
import InfoICFPage from "./Pages/InfoICFPage";

import SearchICFPage from "./Pages/SearchICFPage";

import ImageThrapyPage from "./Pages/ImageThrapyPage";
import OccupationalThrapyPage from "./Pages/OccupationalThrapyPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={"/sarapee-web"}>
      <App />

      <Routes>
        {/* Login */}
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/changepassword" element={<ChangePasswordPage />}></Route>

        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>

        <Route
          path="/registerpatient"
          element={<RegisterPatientPage />}
        ></Route>
        
        <Route path="/icf" element={<ICFPage />}></Route>

        <Route
          path="/registerpatient2/:userId"
          element={<RegisterPatientPage2 />}
        ></Route>
        <Route path="/bi/:userId" element={<BIPage />}></Route>
        <Route path="/icf/:userId" element={<ICFPage />}></Route>
        <Route
          path="/imagethrapy/:userId"
          element={<ImageThrapyPage />}
        ></Route>
        <Route
          path="/occupationalthrapy/:userId"
          element={<OccupationalThrapyPage />}
        ></Route>

        {/* Info Page */}
        <Route
          path="/infopatient/:userId"
          element={<InfoPatientPage />}
        ></Route>
        <Route path="/icfinfo/:userId" element={<SearchICFPage />}></Route>
        <Route
          path="/icfinfo/:userId/:userICF"
          element={<InfoICFPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
