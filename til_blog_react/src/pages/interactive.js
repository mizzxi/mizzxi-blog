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
                <img src="https://cdn.discordapp.com/attachments/1198903037419331616/1210836318074970162/mintendo.JPG?ex=65ec0232&is=65d98d32&hm=ac80587dbdfa26a7958373a67d846aaa7e8e75f5e0c122ec317b4c8789fc2d86&" />
              </div>
              <p>
                가상의 닌텐도를 체험해 볼 수 있는 페이지, 총 3가지 인터랙티브한
                동작을 제공<p>2021.3~4</p>
              </p>
            </a>
          </div>
          <div className="webCard">
            <a target="blank">
              <div className="imgSize">
                <div className="sticker" />
                <img src="https://media.istockphoto.com/id/1399506394/ko/%EB%B2%A1%ED%84%B0/%EC%97%85-%EA%B8%B0%EC%88%A0%EA%B3%BC-%ED%95%99%EC%8A%B5%EC%9D%98-%EA%B0%9C%EB%85%90.jpg?s=612x612&w=0&k=20&c=4USH6Ylel7CC_USzCXX9T1l8fmDkRHlOusBnkUKoRk0=" />
              </div>
              <p>
                개발중<p>2024.2~4</p>
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
                개발중<p>2024.2~4</p>
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
