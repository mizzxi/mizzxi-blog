import React, { useState, useEffect } from "react";
import "../../../assets/css/post.css";
import Demo from "../../../assets/images/study/main_graph.jpg";
import Chrome from "../../../assets/images/study/project/project_graph_chrome.jpg";
import Ex from "../../../assets/images/study/project/project_graph_ex.jpg";
import Popup from "../../../assets/images/study/project/project_graph_popup.jpg";
import DB from "../../../assets/images/study/project/project_graph_dbpia.jpg";
import Structure from "../../../assets/images/study/project/project_graph_structure.jpg";
import PostListBottom from "../../../components/postListBottom";

export default function Graph() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.clientHeight;

      const maxScroll = bodyHeight - windowHeight;
      const percentage = (scrollPosition / maxScroll) * 100;

      setProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    /* jshint ignore:start */
    <>
      <div
        className="progress"
        role="progressbar"
        style={{
          backgroundColor: "#ffff",
        }}
      >
        <div
          className="progress-bar barStyle"
          style={{
            width: progress + "%",
            backgroundColor: "black",
            position: "fixed",
            height: 3 + "px",
            zIndex: 2,
            margin: 8 + "px",
            borderRadius: 100 + "px",
          }}
        ></div>
      </div>
      <div className="projectPost">
        <div>
          <a>프로젝트</a>
          <h1>Graph Dentistry</h1>
          <h4>막대그래프 왜곡 탐지 및 교정 시스템 개발과 논문 작성</h4>
          <p>mizzxi | 2024.01.28 13:30</p>
          <hr />
          <h4>❗ 주제 선정 배경</h4>
          <img src="https://2618111627-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LDssGNTFE1WzKvtC6X0%2F-LECanOysJN4gJ8bupAK%2F-LECztYKySS9cFGzZMHc%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202018-06-05%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2012.30.45.png?alt=media&token=510fd644-745b-4532-af4c-c1874729ba38" />
          <p>
            현대 사회에서는 데이터를 이해하기 쉽게 전달하기 위해 그래프가 흔히
            사용됩니다. 언론사와 정부 기관과 같이 대중 의식에 영향을 미치는
            기관은 공정하고 중립적으로 정보를 제공해야 하지만, 미디어나 정부
            기관에서 왜곡된 시각화를 제공하는 경우가 흔히 발견됩니다. 이를
            방지하기 위해서는 정보 수용자가 직접 그래프 상의 수치와 시각화
            요소를 일일이 확인해야 하지만 이는 굉장히 번거로운 일입니다. 따라서
            이러한 불편함을 개선하기 위해 웹 사이트 내의 그래프를 자동으로
            인식하여 왜곡을 감지하고 교정해주는 프로그램을 개발했습니다.
          </p>
          <p className="postText">
            <h2>&#128677; 프로그램 데이터 흐름</h2>
            <img src={Structure} />
            웹페이지 상의 그래프 수집, 그래프 분류, 그래프 상의 데이터 추정,
            정확한 그래프 생성의 기능으로 구성된 크롬 확장 프로그램을
            개발하였으며 해당 프로그램의 데이터 흐름도입니다.
            <br />
            <br />
            <h2>&#128677; 크롬 확장 프로그램</h2>
            <img src="https://static-wix-blog.wix.com/blog/wp-content/uploads/2018/08/chrome-extentions-featured.png" />
            이 연구 시스템은 크롬 브라우저 확장 프로그램으로, 페이지 내 오류가
            있는 막대그래프를 감지하고 즉시 확인할 수 있도록 개발되었습니다.
            <img src={Popup} />
            사용자는 크롬에서 해당 시스템을 설치하고 팝업 기능을 통해 시스템
            사용법과 교정 형태를 손쉽게 확인할 수 있습니다. 그래프 재구성은
            웹사이트의 그래프 이미지를 전송하고 왜곡이 감지되면 전달받은
            데이터를 기반으로 chart.js 라이브러리를 사용하여 그래프를
            재구성합니다. 왜곡이 발생하면 해당 막대에 대한 데이터와 왜곡 정도를
            텍스트로도 제공하여 사용자가 빠르게 정보를 파악할 수 있습니다.
            <br />
            <img src={Ex} />
            <h2>&#128677; 결과</h2>
            <br />
            <a
              href="https://chromewebstore.google.com/detail/graph-dentistry/ejapihdfeciaajmlaklkelkibaglgphp"
              target="blank"
            >
              &#128073;[크롬 확장 프로그램]&#128072;
            </a>
            <img src={Chrome} />
            <img src={Demo} />
            <a
              href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11229843"
              target="blank"
            >
              &#128073;[논문으로 이동]&#128072;
            </a>
            <img src={DB} />
          </p>
        </div>
        <hr />
        <div className="postTag">
          <h6>&#128204;태그</h6>
          <ul>
            <li>
              <a>#크롬확장프로그램</a>
            </li>
            <li>
              <a>#그래프</a>
            </li>
            <li>
              <a>#정보디자인오류</a>
            </li>
            <li>
              <a>#논문</a>
            </li>
            <li>
              <a>#한국HCI학회</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="comment"></div>
      <PostListBottom title="project" />
    </>
    /* jshint ignore:end */
  );
}
