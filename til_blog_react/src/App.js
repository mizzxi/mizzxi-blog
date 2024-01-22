import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HEADER from "./components/Header/header";
import MAIN from "./pages/main";
import FOOTER from "./components/Footer/footer";
import "./App.css";
import PostList from "./pages/postList";
import TilExplain from "./pages/post/tilExplain";
import MyInfo from "./pages/post/myInfo";
import Dali from "./pages/post/projects/project-dali";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

export default function App() {
  const history = createBrowserHistory();
  React.useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_TRACKING_ID, { debug: true });
    history.listen((location) => {
      ReactGA.set({ page: location.pathname }); // Update the user's current page
      ReactGA.pageview(location.pathname); // Record a pageview for the given page
    });
  }, []);

  return (
    /* jshint ignore:start */
    <>
      <BrowserRouter basename="/mizzxi-blog">
        <HEADER />
        <Routes>
          <Route path="" element={<MAIN />} />
          <Route path="/postList" element={<PostList />} />
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
