import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MAIN from "./page/main";

export default function App() {
  return (
    /* jshint ignore:start */
    <Routes>
      <Route path="/" element={<MAIN />} />
    </Routes>
    /* jshint ignore:end */
  );
}
