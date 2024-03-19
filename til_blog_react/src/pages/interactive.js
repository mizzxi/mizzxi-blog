import React, { useState, useEffect } from "react";
import "../assets/css/interactive.css";

export default function Interactive() {
  return (
    /* jshint ignore:start */
    <>
      <div className="interactive">
        <div className="webCardBox">
          <div className="webCard">
            <a href="https://mintendo.netlify.app/" target="blank">
              <div className="imgSize">
                <div className="sticker" />
                <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdeSd5h%2FbtsFF3pYjib%2FWOwuWPUX7KogKtrJWFxVb1%2Fimg.jpg" />
              </div>
              <p>
                가상의 닌텐도를 체험해 볼 수 있는 페이지, 총 3가지 인터랙티브한
                동작을 제공<p>2021.3~4</p>
              </p>
            </a>
          </div>
          <div className="webCard">
            <a href="https://mitube-page.netlify.app/" target="blank">
              <div className="imgSize">
                <div className="sticker" />
                <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlkhsY%2FbtsFGLClOd2%2FMMvAe6QGKdob3vaKyJLmb0%2Fimg.png" />
              </div>
              <p>
                유튜브 디자인 따라하기 프로젝트, 구독, 좋아요 버튼 클릭과
                댓글달기 기능 제공 [개발중]
                <p>2024.2~4</p>
              </p>
            </a>
          </div>
          <div className="webCard">
            <a target="blank">
              <div className="imgSize">
                <div className="sticker" />
                <img src="https://img.freepik.com/free-vector/web-development-concept-flat-design-illustration_23-2148809198.jpg" />
              </div>
              <p>
                [개발중]<p>2024.2~4</p>
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
