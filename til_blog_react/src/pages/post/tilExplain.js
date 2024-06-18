import React, { useState, useEffect } from "react";
import main_til from "../../assets/images/study/main_til.jpg";
import "../../assets/css/post.css";
import Progressbar from "../../components/progressbar";
import PostListSide from "../../components/postListSide";

export default function TilExplain() {
  return (
    /* jshint ignore:start */
    <>
      <Progressbar />
      <div className="post">
        <div>
          <a>TIL</a>
          <h1>🔔 What is a TIL blog?</h1>
          <h4>mizzxi의 TIL 블로그</h4>
          <p>mizzxi | 2024.01.01 15:33</p>
          <hr />
          <img src={main_til} />
          <p className="postText">
            TIL이란 "오늘 배운 것 (Today I Learned)"을 뜻합니다.
            <br />
            <br />
            mizzxi TIL 블로그는 제가 직접 제작하고 운영하는 학습 블로그입니다.
            <br />
            학습을 통해 새로운 지식이나 경험을 얻었을 때, 그것을 오래 기억하고
            나중에도 활용할 수 있도록 기록하기 위해 TIL 블로그를 만들었습니다.
            <br />
            <br />
            저는 프론트엔드 개발자로의 진로를 희망하기 때문에, 이 블로그를 통해
            제 기술과 제작 경험도 소개할 예정입니다. 따라서 TIL 게시물 말고도
            이전까지 진행한 프로젝트들을 소개하는 용도로도 블로그를 활용할
            것입니다.
            <br />
            <br />
            사이트를 직접 배포하고 운영하는 과정에서 얻을 수 있는 부분이 많을
            것으로 기대하고 있으며, 계속해서 블로그를 발전시켜나갈
            계획입니다.😄😄
          </p>
        </div>
        <hr />
        <div className="postTag">
          <h6>&#128204;태그</h6>
          <ul>
            <li>
              <a>#TIL</a>
            </li>
            <li>
              <a>#Blog</a>
            </li>
            <li>
              <a>#공부</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="comment"></div>
      <PostListSide title="til" />
    </>
    /* jshint ignore:end */
  );
}
