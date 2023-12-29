import React from "react";
import "../assets/css/main.css";
import main_til from "../assets/images/study/main_til.jpg";
import main_movie from "../assets/images/study/main_movie.jpg";
import main_dali from "../assets/images/study/main_dali.jpg";
import main_etc from "../assets/images/study/main_etc.jpg";
//import { useNavigate } from "react-router-dom";

export default function main() {
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
                    <img src={main_dali} className="mainTopImg"></img>
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
        <div className=""></div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
