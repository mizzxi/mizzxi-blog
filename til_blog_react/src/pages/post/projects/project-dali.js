import React, { useEffect, useState } from "react";
import "../../../assets/css/post.css";
import Progressbar from "../../../components/progressbar";
import Poster from "../../../assets/images/study/main_dali2.jpg";
import AW from "../../../assets/images/study/project/project_dali_aw.jpg";
import AW2 from "../../../assets/images/study/project/project_dali_aw2.jpg";
import Dali_dashboard from "../../../assets/images/study/main_dali.jpg";
import Structure from "../../../assets/images/study/project/project_dali_structure.jpg";
import PostListBottom from "../../../components/postListBottom";

export default function Dali() {
  return (
    /* jshint ignore:start */
    <>
      <Progressbar />
      <div className="projectPost">
        <div>
          <a>프로젝트</a>
          <h1>졸업작품</h1>
          <h4>여성 의류 쇼핑몰 전략 대시보드 제작</h4>
          <p>mizzxi | 2024.01.20 15:33</p>
          <hr />
          <h4>&#128295; 대시보드란?</h4>
          <p>
            대시보드는 데이터를 시각적으로 요약해 한눈에 파악하게 하는 도구로,
            주로 실시간 데이터 모니터링과 신속한 의사결정에 활용됩니다. <br />
            다양한 차트와 그래프를 활용해 정보를 시각화하며, 비즈니스, 프로젝트
            관리, IT 등에서 사용되며, 사용자에게 필요한 핵심 정보를 간편하게
            제공합니다.
          </p>
          <img src="https://mobiinsidecontent.s3.ap-northeast-2.amazonaws.com/kr/wp-content/uploads/2021/11/08114326/GettyImages-965374950-scaled.jpg" />
          <p className="postText">
            주식회사 디자이노블은 쇼핑몰 'dalihotel'을 운영하며, 해당 쇼핑몰의
            행동 및 매출 데이터는 Cafe24와 BigQuery에서 저장됩니다. 이
            프로젝트는 디자이노블의 요청을 받아 두 데이터를 통합하여 쇼핑몰
            'dalihotel'의 판매성과 및 추세를 파악할 수 있는 대시보드를 제작하는
            프로젝트입니다.
            <br />
            <br />
            <mark>
              백엔드 포지션에서 프로젝트를 진행하였으며, 파이프라인 제작과
              데이터 수집, 적재, 가공과 프로그램 스케줄링 시스템 구현 작업을
              하였습니다.
            </mark>
            <br />
            <br />
            <h2>&#128677; 데이터파이프라인 제작</h2>
            <img src={Structure} />
            개발 기획 단계에서 먼저 데이터 파이프라인을 제작하였습니다.
            <br /> 쇼핑몰의 판매, 상품, 고객 데이터는 Cafe24API로 수집하였으며
            사용자 행동 데이터는 Google Analytics를 통해 BigQuery에 저장되어
            있었습니다. 때문에 두 곳에서 데이터를 크롤링하고 대시보드에 필요한
            형태로 가공해 MariaDB에 적재했습니다. <br />
            Kibana를 사용해서 대시보드를 제작하기 위해선 ElasticSearch에
            대시보드별 필요한 데이터들이 인덱스별로 나누어 저장되어 있어야 했기
            때문에 MariaDB에 저장된 데이터를 재가공해서 ElasticSearch에 전송하는
            프로세스를 구현했습니다. <br />이 모든 일련의 과정은 매일 주기적으로
            실행되어 대시보드가 자동 업데이트 되어야 하므로 Spring Batch의 job
            형태로 재구성해 스케줄링 하였습니다. <br />
            <br />
            프론트엔드에서는 Elasticsearch에 저장된 데이터를 Kibana를 활용하여
            시각화하고, 이를 React 웹사이트에 iframe 태그를 통해 통합하여
            배포하는 작업을 하였습니다.
            <br />
            <br />
            <h2>&#128677; 대시보드 제작 과정 단계별 정리</h2>
            <br />
            <ul className="list">
              <li>대시보드별 필요한 데이터 선별</li>
              <li>mariaDB 데이터베이스 스키마 제작 및 cafe24 데이터 호출</li>
              <li>mariaDB에 데이터 적재 및 elasticsearch 연동</li>
              <li>elasticsearch 구조 설계 및 가공된 데이터 적재</li>
              <li>Spring Batch를 사용해 Job과 Scheduler 설정</li>
              <li>대시보드 생성 및 시각화 요소 정의</li>
              <li>대시보드 기간 설정 및 시각화 요소 생성, 키바나 권한 설정</li>
              <li>대시보드를 한 곳에 담는 SPA 생성</li>
            </ul>
            <br />
            <h2>&#128677; 결과</h2>
            <br />
            <p className="middle">
              <a
                href="https://uddiyam.github.io/elk_dail_dashboard/"
                target="blank"
              >
                &#128073;대시보드로 이동&#128072;
              </a>
            </p>
            <p className="middle">
              [현재는 회사측의 보안문제로 데이터가 수집되지 않아 2023년
              2월까지만 데이터가 존재합니다.]
            </p>
            <img src={Dali_dashboard} />
            <br />
            <br />
            <p className="middle">[프로젝트 포스터]</p>
            <img src={Poster} />
            <br />
            <br />
            <p className="middle">[전시회]</p>
            <img src={AW} id="aw" />
            <img src={AW2} id="aw2" />
            <br />
            <br />
            <h2>&#128172; 느낀점</h2>
            <br />
            전 프론트엔드 개발자 지망이지만 백엔드로 작업한 프로젝트입니다.
            <br />
            <br />
            졸업작품 프로젝트라 프론트엔드로 개발을 해야 하나 고민했었지만
            백엔드로 진행을 결정했습니다. 백엔드 경험이 부족하기도 했고,
            백엔드에 대한 부족한 이해를 높이는 것이 분명 프론트엔드 개발에도
            도움이 될 것이라 생각했기 때문입니다.
            <br />
            <br />
            결과적으로는 여러방면에서 정말 많은 도움이 되었습니다.
            <br />
            <br />
            우선 Spring을 처음 사용해 보면서 어노테이션, 그래들 등 많이 생소했던
            개념을 배울 수 있었고, 자바로 개발하면서 잊혔던 자바 문법을 다시금
            떠올릴 수 있었습니다.
            <br />또 개발과정에서 서버에 접근하기 위해 MobaXterm도 사용해 보고
            데이터 수집과 정제를 위해 SQL문도 밤새 수정 제작해 본 경험이 데이터
            이해와 서버 이해에 도움이 되었습니다.
            <br />
            <br />
            하지만 가장 크게 배운 부분은 프론트엔드 개발자와 백엔드 개발자
            사이에서는 어떤 소통이 필요하고 개발 흐름은 어떻게 다른가 였습니다.
            <br />
            <br />
            이전까진 프론트엔드 개발로 팀 프로젝트를 진행하였지만 백엔드 개발에
            대한 이해가 부족했기 때문에 필요한 요청이나 기능을 제시간에
            말씀드리지도 못했고, 오류 수정이나 기능 수정 과정에서도 소통의
            문제가 컸습니다.
            <br />
            <br />
            하지만 이번 프로젝트의 경험으로 인해 백엔드 개발자의 시선과 개발
            우선순위에 대해 이해할 수 있었고, 여러 고충도 알 수 있었습니다.
            그래서 결과적으론 프론트엔드 개발에도 많은 도움이 되어 좋았습니다.
            &#127775;&#127775;
          </p>
        </div>
        <hr />
        <div className="postTag">
          <h6>&#128204;태그</h6>
          <ul>
            <li>
              <a>#대시보드</a>
            </li>
            <li>
              <a>#Cafe24API</a>
            </li>
            <li>
              <a>#GoogleAnalytics</a>
            </li>
            <li>
              <a>#SpringBatch</a>
            </li>
            <li>
              <a>#ElasticSearch</a>
            </li>
            <li>
              <a>#Kibana</a>
            </li>
            <li>
              <a>#졸업작품</a>
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
