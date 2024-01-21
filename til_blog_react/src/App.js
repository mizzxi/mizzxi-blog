import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HEADER from "./components/Header/header";
import MAIN from "./pages/main";
import FOOTER from "./components/Footer/footer";
import "./App.css";
import TilExplain from "./pages/post/tilExplain";
import MyInfo from "./pages/post/myInfo";
import Dali from "./pages/post/projects/dali-dashboard";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID; // 환경 변수에 저장된 추적ID 가져오기
ReactGA.initialize(gaTrackingId, { debug: true }); // react-ga 초기화 및 debug 사용
ReactGA.pageview(window.location.pathname); // 추적하려는 page 설정

const history = createBrowserHistory();
history.listen((response) => {
  console.log(response.location.pathname);
  ReactGA.set({ page: response.location.pathname });
  ReactGA.pageview(response.location.pathname);
});

export default function App() {
  return (
    /* jshint ignore:start */
    <>
      <BrowserRouter basename="/mizzxi-blog">
        <HEADER />
        <Routes>
          <Route path="" element={<MAIN />} />
          <Route path="/tilExplain" element={<TilExplain />} />
          <Route path="/myInfo" element={<MyInfo />} />
          <Route path="/project-dali" element={<Dali />} />
        </Routes>
        <FOOTER />
      </BrowserRouter>
    </>
    /* jshint ignore:end */
  );
}
