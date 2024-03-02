import React, { useState, useEffect } from "react";
import "../assets/css/daily.css";
import BIG from "../assets/images/ico/layout.png";
import SMALL from "../assets/images/ico/layout2.png";
import Heart from "../assets/images/ico/heart.png";
import Comment from "../assets/images/ico/comment.png";

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
              <img
                id="postImg"
                src="https://cdn.discordapp.com/attachments/1198903037419331616/1210891428343980072/IMG_2648.jpg?ex=65ec3585&is=65d9c085&hm=343008eb0c6503b058a6f7da5d1897261d5d1a8f51be894bd4140588f2d8bd21&"
                className="dailyPostImg"
              />
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
              <img
                id="postImg"
                src="https://cdn.discordapp.com/attachments/1198903037419331616/1210891429048746074/IMG_2736.jpg?ex=65ec3585&is=65d9c085&hm=46be4232c6cc1cf28c3227debd887a98d88276ba30db90cc574db100fe88bfd9&"
                className="dailyPostImg"
              />
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
              <img
                id="postImg"
                src="https://cdn.discordapp.com/attachments/1198903037419331616/1213396290013233202/IMG_4182.jpg?ex=65f5525b&is=65e2dd5b&hm=d8e5614d1fc4c1e5fb1dacd16f5df89f475f88142bbe00caae76c28a4e7f5194&"
                className="dailyPostImg"
              />
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
              <img
                id="postImg"
                src="https://cdn.discordapp.com/attachments/1198903037419331616/1213360430609604628/image.png?ex=65f530f5&is=65e2bbf5&hm=285afcc5f19b986015fa7eb63f0e73b670ad0f22c44aae3e54f4965d11933527&"
                className="dailyPostImg"
              />
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
