import React, { useState } from "react";
import "../../../assets/css/post.css";
import PostListSide from "../../../components/postListSide";

export default function TilTest() {
  return (
    /* jshint ignore:start */
    <>
      <div className="post">
        <div>
          <a>TIL</a>
          <h1>TIL Test</h1>
          <h4>몰입의 매력: 플로우 상태에서 찾는 창의성과 성취</h4>
          <p>mizzxi | 2024.01.30 15:33</p>
          <hr />
          <p className="postText">
            몰입, 그 말에는 어떤 일에 완전히 몰두하는 경험의 매력이
            담겨있습니다. 플로우 상태에서 빠져들면 시간이 어떻게 흘렀는지 모를
            만큼 활동에 몰입하게 됩니다. 이 글에서는 몰입의 매력과 플로우가
            창의성과 성취에 어떻게 기여하는지 살펴보겠습니다.
            <img src="https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/7zuC/image/wr-M7kpEAv9i5NS5YI-FwY0cNDY.jpeg" />
            <br />
            <br /> 플로우 상태의 특징 플로우는 헙사이 케익의 가운데 부분처럼,
            적당한 난이도와 능력이 균형을 이룰 때 발생합니다. 이때 개인의 능력이
            과제의 난이도에 적절하게 맞아 떨어져, 새로운 도전에 몰입할 수 있는
            상태가 형성됩니다. 창의성과 플로우의 관계 연구에 따르면, 플로우
            상태에서 창의성이 증가하는 경향이 있습니다. 마음이 긴장되고 완전히
            몰두하는 상태에서 새로운 아이디어가 떠오르기 쉽다는 것은 흥미로운
            현상 중 하나입니다. 이는 마음의 자유로움이 새로운 관점과 창의적인
            사고를 촉진하는 것으로 설명될 수 있습니다. 목표 달성과 플로우
            플로우는 목표를 달성하는 데 도움이 되는 상태입니다. 몰입된
            상태에서는 시간이 어떻게 지나가든 활동에 몰두하면서 목표를 달성하는
            데 더 높은 성취감을 느낄 수 있습니다. 이는 업무, 공부, 또는 취미에
            관계없이 적용될 수 있는 원리입니다. 플로우를 경험하기 위한 방법
            플로우를 경험하기 위해서는 자신의 능력과 도전의 난이도를 고려하여
            적절한 활동을 선택하는 것이 중요합니다. 또한 몰입을 방해하는
            요소들을 최소화하고, 주의를 집중할 수 있는 환경을 조성하는 것도
            필요합니다.
            <br />
            몰입과 플로우는 우리 삶에 즐거움과 성취감을 더해주는 중요한
            경험입니다. 새로운 도전에 몰두하고, 창의성을 개발하며, 목표를
            달성하는 과정에서 플로우를 느껴보는 것은 우리의 삶을 더 풍요롭게
            만들 수 있는 길 중 하나일 것입니다. 자신만의 몰입 체험을 찾아보고,
            그 과정에서 놀라운 발견을 해보는 것은 어떨까요?
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
