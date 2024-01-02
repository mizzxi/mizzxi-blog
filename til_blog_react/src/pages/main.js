import React, { useState } from "react";
import "../assets/css/main.css";
import main_til from "../assets/images/study/main_til.jpg";
import main_movie from "../assets/images/study/main_movie.jpg";
import main_dali2 from "../assets/images/study/main_dali2.jpg";
import main_etc from "../assets/images/study/main_etc.jpg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

//import { useNavigate } from "react-router-dom";

export default function main() {
  // let current = 1;
  // const slider = document.getElementById(".sliderCover");
  // const sliderImg = document.getElementById(".sliderImg");
  // const nextBtn = document.getElementById("next");

  const slider_next = (e) => {
    console.log("next btn click");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    /* jshint ignore:start */
    <>
      <div className="mainContainer">
        <div className="mainTopPost">
          <div>
            <ul>
              <li>
                <a>
                  <span>
                    <img src={main_til} className="mainTopImg"></img>
                    <p>
                      <span className="mainTopTitle">What is a TIL blog?</span>
                      <br />
                      <span className="mainTopText">
                        mizzxi가 오늘 배운 것은?
                      </span>
                    </p>
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <span>
                    <img src={main_movie} className="mainTopImg"></img>
                    <p>
                      <span className="mainTopTitle">최근 관심 분야</span>
                      <br />
                      <span className="mainTopText">
                        Steam 신작 & 영화 & React
                      </span>
                    </p>
                  </span>
                </a>
              </li>
              <li>
                <a>
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
        </div>
        <hr />
        <div>
          <ul className="slider">
            <li id="sliderImg1">
              <a>
                <span className="sliderTitle">TIL? Today I Learned</span>
                <button className="sliderButton" type="button">
                  더보기
                </button>
              </a>
            </li>
            <li id="sliderImg2">
              <a>
                <span className="sliderTitle">나의 최근 관심 분야</span>
                <button className="sliderButton shadow" type="button">
                  더보기
                </button>
              </a>
            </li>
          </ul>
          <div className="sliderControl">
            <button id="prev" type="button"></button>
            <button id="next" type="button" onClick={slider_next}></button>
          </div>
        </div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
