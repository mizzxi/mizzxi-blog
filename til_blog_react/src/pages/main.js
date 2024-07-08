import React, { useState, useEffect } from "react";
import CardNews from "../components/cardNews";
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
                      ML을 이용한 그래프 왜곡 탐지 및 교정 시스템 [프론트엔드]
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
        <CardNews />
        <div className="bottomImg"></div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
