import React, { useEffect, useState } from "react";
import "../../../assets/css/post.css";
import Poster from "../../../assets/images/study/main_dali2.jpg";
import Dali_dashboard from "../../../assets/images/study/main_dali.jpg";
import Structure from "../../../assets/images/study/project/project_dali_structure.jpg";
import PostListBottom from "../../../components/postListBottom";

export default function Dali() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.clientHeight;

      const maxScroll = bodyHeight - windowHeight;
      const percentage = (scrollPosition / maxScroll) * 100;

      setProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    /* jshint ignore:start */
    <>
      <div
        className="progress"
        role="progressbar"
        style={{
          backgroundColor: "#ffff",
        }}
      >
        <div
          className="progress-bar barStyle"
          style={{
            width: progress + "%",
            backgroundColor: "black",
            position: "fixed",
            height: 3 + "px",
            zIndex: 2,
            margin: 8 + "px",
            borderRadius: 100 + "px",
          }}
        ></div>
      </div>
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
          [대시보드 예시]
          <img src="https://mobiinsidecontent.s3.ap-northeast-2.amazonaws.com/kr/wp-content/uploads/2021/11/08114326/GettyImages-965374950-scaled.jpg" />
          <p className="postText">
            주식회사 디자이노블은 쇼핑몰 'dalihotel'을 운영하며, 해당 쇼핑몰의
            행동 및 매출 데이터는 Cafe24와 BigQuery에서 저장됩니다. 이
            프로젝트는 디자이노블의 요청을 받아 두 데이터를 통합하여 쇼핑몰
            'dalihotel'의 판매성과 및 추세를 파악할 수 있는 대시보드를 제작하는
            프로젝트입니다.
            <br />
            <br />
            <h2>&#128677; 데이터파이프라인 제작</h2>
            <img src={Structure} />
            Cafe24와 Google Analytics의 데이터를 크롤링하고 가공한 후 MariaDB에
            적재하고, Spring Batch의 job을 사용하여 이를 Elasticsearch로
            전송하는 프로세스를 구성했습니다. <br />
            생성된 job은 매일 주기적으로 실행되어 이전 데이터를 업데이트합니다.
            Elasticsearch에 저장된 데이터는 Kibana를 활용하여 시각화하고, 이를
            React 웹사이트에 iframe 태그를 통해 통합하여 배포했습니다.
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
            이해와 실력향상에 도움이 되었습니다.
            <br />
            <br />
            하지만 가장 느낀 부분은 프론트엔드 개발자와 백엔드 개발자 사이에서는
            어떤 소통이 필요하고 어떤 시기에 무엇이 필요한가 였습니다.
            <br />
            <br />
            이전까진 프론트엔드 개발로 팀 프로젝트를 진행하였지만 백엔드 개발에
            대한 이해가 부족했기 때문에 필요한 요청이나 기능을 제시간에
            말씀드리지도 못했고, 오류 수정이나 기능 수정 과정에서도 소통의
            문제가 컸습니다.
            <br />
            <br />
            하지만 이번 프로젝트의 경험으로 인해 백엔드 개발자의 시선과 개발
            흐름에 대해 이해할 수 있었고, 여러 고충도 알 수 있었습니다. 그래서
            결과적으론 프론트엔드 개발에도 많은 도움이 되어 좋았습니다.
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
