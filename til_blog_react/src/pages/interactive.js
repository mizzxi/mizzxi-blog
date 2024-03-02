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
            <a
              href="https://web-mizzxi-youtube-17xco2nlsh8my76.sel5.cloudtype.app/"
              target="blank"
            >
              <div className="imgSize">
                <div className="sticker" />
                <img src="https://cdn.discordapp.com/attachments/1198903037419331616/1213360637863010334/image.png?ex=65f53127&is=65e2bc27&hm=91acd2783fb98720c5fd1fa94212cb41211b646e66c2303efbaeace8a1856ec4&" />
              </div>
              <p>
                유튜브 디자인 따라하기 프로젝트, 버튼 클릭과 댓글달기 기능 제공
                [개발중]
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
