import React, { useState, useEffect } from "react";
import "../assets/css/daily.css";
import BIG from "../assets/images/ico/layout.png";
import SMALL from "../assets/images/ico/layout2.png";
import Heart from "../assets/images/ico/heart.png";
import Comment from "../assets/images/ico/comment.png";

export default function Daily() {
  const smallClick = () => {};
  return (
    /* jshint ignore:start */
    <>
      <div className="daily">
        <div className="viewBtn">
          <button>
            <img src={BIG} />
          </button>
          <button onClick={smallClick}>
            <img src={SMALL} />
          </button>
        </div>
        <div className="dailyPostBox">
          <div id="dailyPost">
            <img
              src="https://avatars.githubusercontent.com/u/83504363?v=4"
              className="dailyProfile"
            />
            mizzxi
            <div className="dailyPost">
              <div className="dailyPostImgBox">
                <img
                  id="postImg"
                  src="https://cdn.discordapp.com/attachments/1198903037419331616/1210891428343980072/IMG_2648.jpg?ex=65ec3585&is=65d9c085&hm=343008eb0c6503b058a6f7da5d1897261d5d1a8f51be894bd4140588f2d8bd21&"
                />
              </div>
              <img src={Heart} />
              <img src={Comment} />
              <p>
                <div>일상을 기록하는 공간📷</div>
                사진과 함께 mizzxi의 일상 남기기
                <pre>2024.02.24</pre>
              </p>
            </div>
            <hr />
          </div>
          <div id="dailyPost">
            <img
              src="https://avatars.githubusercontent.com/u/83504363?v=4"
              className="dailyProfile"
            />
            mizzxi
            <div className="dailyPost">
              <div className="dailyPostImgBox">
                <img
                  id="postImg"
                  src="https://cdn.discordapp.com/attachments/1198903037419331616/1210891429048746074/IMG_2736.jpg?ex=65ec3585&is=65d9c085&hm=46be4232c6cc1cf28c3227debd887a98d88276ba30db90cc574db100fe88bfd9&"
                />
              </div>
              <img src={Heart} />
              <img src={Comment} />
              <p>
                <div>일상을 기록하는 공간📷</div>
                마지막 겨울 눈 ❄ 얼른 봄이 왔으면<pre>2024.02.24</pre>
              </p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
