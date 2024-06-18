import React, { useState, useEffect } from "react";
import "../assets/css/main.css";
import main_til from "../assets/images/study/main_til.jpg";
import main_movie from "../assets/images/study/main_movie.jpg";
import main_dali from "../assets/images/study/project/project_dali_aw2.jpg";
import main_graph from "../assets/images/study/project/project_graph_aw.jpg";
import main_info from "../assets/images/study/main_info.jpg";
import main_inter from "../assets/images/study/slider2.png";

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
                  <div className="topImgSize">
                    <img src={main_til} className="mainTopImg"></img>
                  </div>
                  <p>
                    <span className="mainTopTitle">🔔 What is a TIL blog?</span>
                    <br />
                    <span className="mainTopText">mizzxi의 TIL 블로그란?</span>
                  </p>
                </span>
              </a>
            </li>
            <li>
              <a href="myInfo">
                <span>
                  <div className="topImgSize">
                    <img src={main_info} className="mainTopImg"></img>
                  </div>
                  <p>
                    <span className="mainTopTitle">mizzxi</span>
                    <br />
                    <span className="mainTopText">간단한 자기소개</span>
                  </p>
                </span>
              </a>
            </li>
            <li>
              <a href="project-dali">
                <span>
                  <div className="topImgSize">
                    <img src={main_dali} className="mainTopImg"></img>
                  </div>
                  <p>
                    <span className="mainTopTitle">졸업작품</span>
                    <br />
                    <span className="mainTopText">
                      여성 의류 쇼핑몰 전략 대시보드 제작 [백엔드]
                    </span>
                  </p>
                </span>
              </a>
            </li>
            <li>
              <a href="project-graph">
                <span>
                  <div className="topImgSize">
                    <img src={main_graph} className="mainTopImg"></img>
                  </div>
                  <p>
                    <span className="mainTopTitle">논문경험</span>
                    <br />
                    <span className="mainTopText">
                      ML을 이용한 그래프 왜곡 탐지 및 교정 시스템
                    </span>
                  </p>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className={sliderMove} id="slider">
          <div id="sliderImg1">
            <a href="tilExplain">
              <span className="sliderTitle">mizzxi TIL blog 알아보기</span>
              <button className="sliderButton" type="button">
                더보기
              </button>
            </a>
          </div>
          <div id="sliderImg2">
            <a href="interactive">
              <span className="sliderTitle">Interactive 구경하기</span>
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
          <img src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg" />
          <div className="cardBox">
            <div>
              <mark>mizzxi blog NEWS ! 💬</mark>
            </div>
          </div>
          <img src="https://cdn.pixabay.com/photo/2013/07/13/11/56/metro-159004_1280.png" />
          <div className="cardBox">
            <div>
              mizzxi.site 도메인 구매 후 AWS EC2를 사용해서 서버 배포 완료
              <br />
              <br />
              <a href="project-subwayGame">- 프로젝트 설명 읽으러 가기 -</a>
              <br />
              <a href="https://subwaygame.mizzxi.site">
                - 지하철 게임하러 가기 -
              </a>
            </div>
          </div>
        </div>
        <div className="bottomImg"></div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
