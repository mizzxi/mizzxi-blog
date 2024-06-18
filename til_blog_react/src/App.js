import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

//content
import HEADER from "./components/Header/header";
import MAIN from "./pages/main";
import FOOTER from "./components/Footer/footer";
import "./App.css";
import PostList from "./pages/postList";
import SearchPostList from "./pages/searchPostList";
import TilExplain from "./pages/post/tilExplain";
import MyInfo from "./pages/post/myInfo";
import Interactive from "./pages/interactive";
import Daily from "./pages/daily";

//project post
import Dali from "./pages/post/Projects/project-dali";
import Graph from "./pages/post/Projects/project-graph";
import Vote from "./pages/post/Projects/project-vote";
import MlfApp from "./pages/post/Projects/project-mlfApp";
import SubwayGame from "./pages/post/Projects/project-subwaygame";
import Design from "./pages/post/Projects/project_design";

//til post
import Til240220 from "./pages/post/Tils/til-240220";
import Til240222 from "./pages/post/Tils/til-240222";
import Til240319 from "./pages/post/Tils/til-240319";

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
          <Route path="/searchPostList" element={<SearchPostList />} />
          <Route path="/tilExplain" element={<TilExplain />} />
          <Route path="/myInfo" element={<MyInfo />} />
          <Route path="/interactive" element={<Interactive />} />
          <Route path="/daily" element={<Daily />} />

          {/* project post */}
          <Route path="/project-dali" element={<Dali />} />
          <Route path="/project-graph" element={<Graph />} />
          <Route path="/project-vote" element={<Vote />} />
          <Route path="/project-mlfApp" element={<MlfApp />} />
          <Route path="/project-subwayGame" element={<SubwayGame />} />
          <Route path="/project-design" element={<Design />} />

          {/* til post */}
          <Route path="/til-240220" element={<Til240220 />} />
          <Route path="/til-240222" element={<Til240222 />} />
          <Route path="/til-240319" element={<Til240319 />} />
        </Routes>
        <FOOTER />
      </BrowserRouter>
    </>
    /* jshint ignore:end */
  );
}
