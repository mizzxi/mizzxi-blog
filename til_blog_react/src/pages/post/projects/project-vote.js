import React, { useState } from "react";
import "../../../assets/css/post.css";
import Demo from "../../../assets/images/study/project_vote_result.jpg";
import Ex from "../../../assets/images/study/project_vote_ex.gif";
import ProjectListBottom from "../../../components/postListBottom";

export default function Vote() {
  return (
    /* jshint ignore:start */
    <>
      <div className="projectPost">
        <div>
          <a>프로젝트</a>
          <h1>선거 전략 대시보드</h1>
          <h4>2022 대선 데이터를 활용한 분석 대시보드</h4>
          <p>mizzxi | 2024.01.30 19:13</p>
          <hr />
          <h4>❗ 주제 소개</h4>
          <img src="https://cdn.eroun.net/news/photo/202202/27651_52215_2329.jpg" />
          <p>
            프로젝트 명은 '2022 대선 데이터 기반 분석 대시보드'입니다. 두 가지
            이유로 대선 입후보자들을 위한 선거 전략 대시보드를 개발하기로
            결정했습니다. 첫 번째, 선거캠프의 전략 실패 사례를 분석하여 득표율에
            미치는 영향을 확인하였고, 후보자들의 전략 수립에 도움이 되는 서비스
            필요성을 인지했습니다. 두 번째, 높은 기권율을 고려하여 투표를
            장려하는 서비스의 필요성을 느꼈으며, 이를 통해 이용자가 기권율이
            높은 지역을 파악하고 선거 유세 활동에 활용할 수 있는 정보를 제공하는
            것을 목표로 하였습니다.
          </p>
          <p className="postText">
            <h2>&#128677; 기능</h2>
            <img src={Ex} />
            좌측에서 후보를 선택하면 공약 확인이 가능하고, 가운데에는 선택된 두
            후보자의 정보에 따라 변하는 지도 차트를 제공합니다. 라디오 버튼으로
            득표율, 경합지역, 기권율 중 하나를 선택하면 해당 정보에 따라 지도
            색이 변경되어 두 후보의 성적을 한눈에 파악할 수 있습니다. 지도 클릭
            시 우측에는 해당 지역과 상호작용하는 4개의 그래프를 제공합니다. 지역
            성비는 파이차트로, 지역 연령별 인구는 세로 막대 그래프로 시각화되어
            호버시 정확한 정보를 표시합니다. 또한, 지역별 주요 키워드는
            드롭다운으로 선택하여 5가지 주요 키워드를 확인할 수 있으며, 정당별
            득표율은 가로 막대 그래프로 시각화됩니다.
            <br />
            <br />
            <h2>&#128677; 결과</h2>
            <br />
            <a href="https://w6grf2.csb.app/" target="blank">
              &#128073;[사이트로 이동]&#128072;
            </a>
            <img src={Demo} />
          </p>
        </div>
        <hr />
        <div className="postTag">
          <h6>&#128204;태그</h6>
          <ul>
            <li>
              <a>#정보디자인</a>
            </li>
            <li>
              <a>#그래프</a>
            </li>
            <li>
              <a>#리액트</a>
            </li>
            <li>
              <a>#대선</a>
            </li>
            <li>
              <a>#데이터</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="comment"></div>
      <ProjectListBottom title="project" />
    </>
    /* jshint ignore:end */
  );
}
