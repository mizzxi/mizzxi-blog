import React, { useState } from "react";
import main_til from "../../assets/images/study/main_til.jpg";
import "../../assets/css/post.css";

export default function TilExplain() {
  return (
    /* jshint ignore:start */
    <>
      <div className="post">
        <div>
          <a>TIL</a>
          <h1>What is a TIL blog?</h1>
          <h4>mizzxi의 TIL 블로그</h4>
          <p>mizzxi | 2024.01.01 15:33</p>
          <hr />
          <img src={main_til} />
          <p className="postText">
            TIL 블로그는 "오늘 배운 것 (Today I Learned)"을 나누는 공간으로,
            사용자들이 일상에서 새로운 지식이나 경험을 얻을 때마다 그것을
            기록하고 공유하는 플랫폼입니다.
            <br />
            <br /> 다양한 주제에 관한 짧은 글이나 사진, 링크를 통해 사용자들은
            자신의 학습 과정을 기록하고 다른 이들과 지식을 교류할 수 있습니다.
            <br />
            TIL 블로그는 소소한 일상에서부터 전문적인 지식까지 다양한 주제를
            다루며, 사용자 간 소통을 통해 지식의 확장과 함께 커뮤니티를 형성하는
            역할을 합니다. <br />
            <br />
            간결하면서도 실용적인 정보를 공유하는 TIL 블로그는 지식 공유의
            새로운 형태를 제공하며, 일상의 작은 경험에서 새로운 통찰을 얻는
            과정을 즐기는 이용자들에게 인기를 끌고 있습니다.
          </p>
        </div>
      </div>
      <div className="comment"></div>
    </>
    /* jshint ignore:end */
  );
}
