import React, { useState, useEffect } from "react";
import "../../../assets/css/post.css";
import Progressbar from "../../../components/progressbar";
import Demo from "../../../assets/images/study/project/project_vote_result.jpg";
import Ex from "../../../assets/images/study/project/project_vote_ex.gif";
import PostListBottom from "../../../components/postListBottom";

export default function Vote() {
  return (
    /* jshint ignore:start */
    <>
      <Progressbar />
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
            프로젝트 명은 '2022 대선 데이터 기반 분석 대시보드'이고, 타겟층은
            선거 입후보자들입니다. <br />
            <br />이 프로젝트는 2022년 대선 데이터를 분석하고 시각화해서
            이용자가 쉽고 빠르게 2022 대선 정보와 투표 결과를 알 수 있도록 하는
            대시보드 제작 프로젝트입니다. <br />
            <br />
            주제 선정 계기는 두 가지입니다. <br />첫 번째는 여러 데이터 수집
            과정 중 선거캠프의 전략 실패 사례가 득표율에 미치는 영향을
            확인하였고, 선거 후보자들의 전략 수립에 도움이 되는 서비스가
            필요하다고 생각했습니다. <br />두 번째는 우리나라의 높은 기권율로
            투표를 장려하는 서비스의 필요성을 느꼈으며, 이용자가 기권율이 높은
            지역을 파악하고 선거 유세 활동에 활용할 수 있는 정보를 제공하기
            위함입니다.
            <br />
            <br />
            프로젝트 제작에서 가장 신경썼던 부분은 데이터 시각화와
            레이아웃입니다. 시각화 방식, 색상, 크기와 위치를 적절하게 사용하고
            고려하여 이용자가 대시보드를 보았을 때 한눈에 기능과 데이터를 파악할
            수 있도록 제작하였습니다.
          </p>
          <p className="postText">
            <h2>&#128677; 기능</h2>
            <img src={Ex} />
            좌측에서 후보를 선택하면 공약 확인이 가능합니다.
            <br /> 가운데에는 선택된 두 후보자의 정보에 따라 변하는 지도 차트를
            제공합니다. 라디오 버튼으로 득표율, 경합지역, 기권율 중 하나를
            선택하면 해당 정보에 따라 지도 색이 변경되어 두 후보의 성적을 한눈에
            파악할 수 있습니다.
            <br /> 지도 클릭 시 우측에는 해당 지역과 상호작용하는 4개의 그래프를
            제공합니다.
            <br /> 지역 성비는 파이차트로, 지역 연령별 인구는 세로 막대 그래프로
            시각화되어 마우스오버시 정확한 정보를 표시합니다.
            <br /> 또한, 지역별 주요 키워드는 드롭다운으로 선택하여 5가지 주요
            키워드를 확인할 수 있으며, 정당별 득표율은 가로 막대 그래프로
            시각화됩니다.
            <br />
            <br />
            <h2>&#128677; 결과</h2>
            <br />
            <p className="middle">
              <a href="https://voteboard.netlify.app" target="blank">
                &#128073;[사이트로 이동]&#128072;
              </a>
            </p>
            <img src={Demo} />
            <br />
            <br />
            <h2>&#128172; 느낀점</h2>
            <br />
            리액트를 처음 사용해본 프로젝트였습니다.
            <br />
            훅 개념과 리액트 문법, 파일구조가 당황스러웠고 너무나 생소했지만
            팀원들과의 협업으로 프로젝트를 완성할 수 있었습니다.
            <br />
            <br />
            팀원들도 리액트를 사용해 본 적이 없었기 때문에 공식 문서를 함께
            뒤져가며 밤새 개발했습니다.
            <br />
            <br />
            프로젝트 이후로 리액트의 문법과 작동 방식, 함수 등 새로운 매력에
            빠져 더 관심을 가지고 공부할 수 있었습니다. &#128152;
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
      <PostListBottom title="project" />
    </>
    /* jshint ignore:end */
  );
}
