import React, { useState, useEffect } from "react";
import "../assets/css/daily.css";

import BIG from "../assets/images/ico/layout.png";
import SMALL from "../assets/images/ico/layout2.png";
import Heart from "../assets/images/ico/heart.png";
import Comment from "../assets/images/ico/comment.png";

import Img01 from "../assets/images/study/daily/IMG_2648.jpg";
import Img02 from "../assets/images/study/daily/IMG_2736.jpg";
import Img03 from "../assets/images/study/daily/IMG_4182.jpg";
import Img04 from "../assets/images/study/daily/image.png";

export default function Daily() {
  const bigClick = () => {
    let postList = document.getElementsByName("dailyPost");
    for (let post of postList) {
      post.className = "";
      let postImg = post.childNodes[2];
      postImg.className = "dailyPost";
      let postReactImg = [postImg.childNodes[1], postImg.childNodes[2]];
      postReactImg[0].className = "";
      postReactImg[1].className = "";
    }
  };
  const smallClick = () => {
    let postList = document.getElementsByName("dailyPost");
    for (let post of postList) {
      post.className = "smallPost";
      let postImg = post.childNodes[2];
      postImg.className = "smallPostImg";
      let postReactImg = [postImg.childNodes[1], postImg.childNodes[2]];
      postReactImg[0].className = "smallPostReactImg";
      postReactImg[1].className = "smallPostReactImg";
    }
  };
  return (
    /* jshint ignore:start */
    <>
      <div className="daily">
        <div className="viewBtn">
          <button onClick={bigClick}>
            <img src={BIG} />
          </button>
          <button onClick={smallClick}>
            <img src={SMALL} />
          </button>
        </div>
        <div className="dailyPostBox">
          <span name="dailyPost">
            <img
              src="https://avatars.githubusercontent.com/u/83504363?v=4"
              className="dailyProfile"
            />
            mizzxi
            <div name="postSize" className="dailyPost">
              <img id="postImg" src={Img01} />
              <img src={Heart} />
              <img src={Comment} />
              <p>
                <div>일상을 기록하는 공간📷</div>
                사진과 함께 mizzxi의 일상 남기기
                <pre>2024.02.24</pre>
              </p>
            </div>
            <hr />
          </span>
          <span name="dailyPost">
            <img
              src="https://avatars.githubusercontent.com/u/83504363?v=4"
              className="dailyProfile"
            />
            mizzxi
            <div name="postSize" className="dailyPost">
              <img id="postImg" src={Img02} />
              <img src={Heart} />
              <img src={Comment} />
              <p>
                <div>일상을 기록하는 공간📷</div>
                마지막 겨울 눈 ❄ 얼른 봄이 왔으면<pre>2024.02.25</pre>
              </p>
            </div>
            <hr />
          </span>
          <span name="dailyPost">
            <img
              src="https://avatars.githubusercontent.com/u/83504363?v=4"
              className="dailyProfile"
            />
            mizzxi
            <div name="postSize" className="dailyPost">
              <img id="postImg" src={Img03} className="dailyPostImg" />
              <img src={Heart} />
              <img src={Comment} />
              <p>
                <div>일상을 기록하는 공간📷</div>
                북한산 등산 중 만난 호랑이
                <pre>2024.03.01</pre>
              </p>
            </div>
            <hr />
          </span>
          <span name="dailyPost">
            <img
              src="https://avatars.githubusercontent.com/u/83504363?v=4"
              className="dailyProfile"
            />
            mizzxi
            <div name="postSize" className="dailyPost">
              <img id="postImg" src={Img04} className="dailyPostImg" />
              <img src={Heart} />
              <img src={Comment} />
              <p>
                <div>일상을 기록하는 공간📷</div>
                유튜브 따라하기 제작 중,,, 아직도 반응형 레이아웃이 너무 어렵다
                <pre>2024.03.02</pre>
              </p>
            </div>
            <hr />
          </span>
        </div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
