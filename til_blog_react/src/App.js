import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HEADER from "./components/Header/header";
import MAIN from "./pages/main";
import FOOTER from "./components/Footer/footer";
import ".//App.css";
import TilExplain from "./pages/post/tilExplain";
import MyInfo from "./pages/post/myInfo";

export default function App() {
  return (
    /* jshint ignore:start */
    <>
      <HEADER />
      <Routes>
        <Route path="/" element={<MAIN />} />
        <Route path="/tilExplain" element={<TilExplain />} />
        <Route path="/myInfo" element={<MyInfo />} />
      </Routes>
      <FOOTER />
    </>
    /* jshint ignore:end */
  );
}
