import React, { useState } from "react";
import "../assets/css/main.css";
import main_til from "../assets/images/study/main_til.jpg";
import main_movie from "../assets/images/study/main_movie.jpg";
import main_dali2 from "../assets/images/study/main_dali2.jpg";
import main_etc from "../assets/images/study/main_etc.jpg";

export default function Main() {
  const [sliderMove, setSliderMove] = useState("slider");

  const slider_next = (e) => {
    setSliderMove("slider sliding");
  };

  const slider_prev = (e) => {
    setSliderMove("slider slidingBack");
  };

  return (
    /* jshint ignore:start */
    <>
      <div className="mainContainer">
        <div className="mainTopPost">
          <ul>
            <li>
              <a href="tilExplain">
                <span>
                  <img src={main_til} className="mainTopImg"></img>
                  <p>
                    <span className="mainTopTitle">What is a TIL blog?</span>
                    <br />
                    <span className="mainTopText">mizzxi의 TIL 블로그</span>
                  </p>
                </span>
              </a>
            </li>
            <li>
              <a href="myInfo">
                <span>
                  <img src={main_movie} className="mainTopImg"></img>
                  <p>
                    <span className="mainTopTitle">mizzxi</span>
                    <br />
                    <span className="mainTopText">나에 대한 소개</span>
                  </p>
                </span>
              </a>
            </li>
            <li>
              <a href="project-dali">
                <span>
                  <img src={main_dali2} className="mainTopImg"></img>
                  <p>
                    <span className="mainTopTitle">졸업작품</span>
                    <br />
                    <span className="mainTopText">
                      여성 의류 쇼핑몰 전략 대시보드 제작
                    </span>
                  </p>
                </span>
              </a>
            </li>
            <li>
              <a>
                <span>
                  <img src={main_etc} className="mainTopImg"></img>
                  <p>
                    <span className="mainTopTitle">기타</span>
                    <br />
                    <span className="mainTopText">일상</span>
                  </p>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className={sliderMove} id="slider">
          <div id="sliderImg1">
            <a>
              <span className="sliderTitle">TIL? Today I Learned</span>
              <button className="sliderButton" type="button">
                더보기
              </button>
            </a>
          </div>
          <div id="sliderImg2">
            <a>
              <span className="sliderTitle">나의 최근 관심 분야</span>
              <button className="sliderButton shadow" type="button">
                더보기
              </button>
            </a>
          </div>
        </div>
        <div className="sliderControl">
          <button id="prev" type="button" onClick={slider_prev}></button>
          <button id="next" type="button" onClick={slider_next}></button>
        </div>
        <div className="mainCard">
          <img src={main_til} />
          <div className="cardBox">
            <div>
              웹 개발자는 웹사이트를 만들고 유지보수하는 전문가로, 프론트엔드와
              백엔드 개발을 담당합니다. HTML, CSS, JavaScript 등을 사용하여
              사용자 경험을 개선하고, 서버 측 로직과 데이터베이스와 상호작용하여
              웹 애플리케이션을 구축합니다. 끊임없이 발전하는 기술에 대한 학습과
              적응 능력이 필요합니다.
            </div>
          </div>
          <img src={main_movie} />
          <div className="cardBox">
            <div>
              1. 토마토기법 (Pomodoro Technique): 25분간 집중하고 5분 휴식을
              반복하는 방식으로 학습 시간을 효율적으로 활용하세요. 2. 스크린
              공유 앱 활용: 수업이나 스터디 중에 중요한 내용이나 문제를 스크린
              공유 앱을 사용하여 공유하면서 학습하면 효과적입니다. 3. 강의 녹음:
              수업이나 강의 중에 핵심 내용을 녹음해두면 나중에 다시 듣거나
              복습할 때 도움이 됩니다.
            </div>
          </div>
          <img src={main_etc} />
          <div className="cardBox">
            <div>
              물망초 피는 계절엔 꽃들이 피어나는데 나도 그 꽃잎 속에 아름다운
              꿈이 피어나리
            </div>
          </div>
        </div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
