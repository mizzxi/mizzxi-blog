import React, { useState } from "react";
import "../../../assets/css/post.css";
import Poster from "../../../assets/images/study/main_dali2.jpg";
import Dali_dashboard from "../../../assets/images/study/main_dali.jpg";
import Structure from "../../../assets/images/study/project_dali_structure.jpg";
import ProjectListBottom from "../../../components/postListBottom";

export default function Dali() {
  return (
    /* jshint ignore:start */
    <>
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
            주로 실시간 데이터 모니터링과 신속한 의사결정에 활용됩니다. 다양한
            차트와 그래프를 활용해 정보를 시각화하며, 사용자 역할에 따라
            맞춤화된 설정이 가능합니다. 대시보드는 비즈니스, 프로젝트 관리, IT
            등에서 사용되며, 사용자에게 필요한 핵심 정보를 간편하게 제공합니다.
          </p>
          [대시보드 예시]
          <img src="https://mobiinsidecontent.s3.ap-northeast-2.amazonaws.com/kr/wp-content/uploads/2021/11/08114326/GettyImages-965374950-scaled.jpg" />
          <p className="postText">
            주식회사 디자이노블은 쇼핑몰 'dalihotel'을 운영하며, 해당 쇼핑몰의
            행동 및 매출 데이터는 Cafe24와 BigQuery에서 저장됩니다. 두 데이터를
            통합하여 달리호텔의 판매성과 및 추세를 파악할 수 있는 대시보드를
            제작하는 프로젝트를 진행했습니다.
            <br />
            <br />
            <h2>&#128677; 데이터파이프라인 제작</h2>
            <img src={Structure} />
            Cafe24와 Google Analytics의 데이터를 크롤링하고 가공한 후 MariaDB에
            적재하고, Spring Batch의 job을 사용하여 이를 Elasticsearch로
            전송하는 프로세스를 구성했습니다. 생성된 job은 매일 주기적으로
            실행되어 이전 데이터를 업데이트합니다. Elasticsearch에 저장된
            데이터는 Kibana를 활용하여 시각화하고, 이를 React 웹사이트에 iframe
            태그를 통해 통합하여 배포했습니다.
            <br />
            <br />
            <h2>&#128677; 대시보드 제작 과정</h2>
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
            <a
              href="https://uddiyam.github.io/elk_dail_dashboard/"
              target="blank"
            >
              &#128073;대시보드로 이동&#128072;
            </a>
            <img src={Dali_dashboard} />
            <br />
            <br />
            [프로젝트 포스터]
            <img src={Poster} />
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
      <ProjectListBottom title="project" />
    </>
    /* jshint ignore:end */
  );
}
