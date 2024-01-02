import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HEADER from "./components/Header/header";
import MAIN from "./pages/main";
import FOOTER from "./components/Footer/footer";
import ".//App.css";

export default function App() {
  return (
    /* jshint ignore:start */
    <>
      <HEADER />
      <Routes>
        <Route path="/" element={<MAIN />} />
      </Routes>
      <FOOTER />
    </>
    /* jshint ignore:end */
  );
}
