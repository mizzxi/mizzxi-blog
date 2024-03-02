import React, { useState, useEffect } from "react";
import "../../../assets/css/post.css";
import PostListSide from "../../../components/postListSide";

export default function Til240220() {
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
      <div className="post">
        <div>
          <a>TIL</a>
          <h1>컴퓨터 구조와 운영체제</h1>
          <h4>#1 컴퓨터 구조</h4>
          <p>mizzxi | 2024.02.20 17:08</p>
          <hr />
          <p className="postText">
            <h4>🔎컴퓨터 구조</h4>
            컴퓨터 관련 전공이지만 소프트웨어에 비해 하드웨어에 대한 이해가
            부족하다는 것을 너무 느껴서 "혼자 공부하는 컴퓨터 구조 운영체제"
            책으로 간단하게 이해해보려 한다.
            <br />
            물론 소프트웨어에 대한 이해도 한참 부족하지만.. <br />
            대충 훑어봤을 때 비전공자가 읽기에 굉장히 쉽게 설명되어 있었고
            용어들도 풀어서 설명해주어 좋았다. <br />이 책으로 먼저 간단히
            이해하고, 이후 다른 책도 읽어 볼 예정이다.
            <br />
            <br /> ◼ 컴퓨터가 이해하는 정보: 데이터, 명령어 <br />
            <mark className="y">
              네 가지 핵심 부품: CPU(중앙처리장치), 메모리(주기억장치, RAM과
              ROM), 보조기억장치, 입출력장치
            </mark>
            <br /> <br />
            <img src="https://hongong.hanbit.co.kr/wp-content/uploads/2022/09/%EC%BB%B4%ED%93%A8%ED%84%B0-%EA%B5%AC%EC%A1%B0_%EC%9E%85%EC%B6%9C%EB%A0%A5%EC%9E%A5%EC%B9%98.png" />
            <br />
            <br />
            <h5>
              <mark>1. 메모리</mark>
            </h5>{" "}
            <mark className="y">
              현재 실행되는 프로그램의 명령어와 데이터를 저장하는 부품
            </mark>
            <br />
            <br />
            프로그램이 실행되기 위해선 꼭 메모리에 저장되어 있어야 한다. <br />
            메모리의 빠른 동작을 위해선 저장된 명령어와 데이터 위치가 정돈되어
            있어야 한다. <br />
            => 때문에 메모리는 주소를 사용해서 명령어와 데이터 위치를 정돈한다!
            <br />
            <img
              className="miniImg"
              src="https://i.namu.wiki/i/nPUleIE2l-p9-Hih6FuYtvljs4EqS46incBV9PQRXeqCip47_5W4VSuJu-mfWGKHjWzSFjSRofLkXm44vd2xmw.webp"
            />
            <br />
            <br />
            <h5>
              <mark>2. CPU</mark>
            </h5>
            <mark className="y">
              메모리에 저장된 명령어를 읽고, 해석 실행하는 부품
            </mark>
            <br />
            <br />
            산술논리연산장치 ALU란? CPU에서 계산기로 사용 <br />
            레지스터란? 계산한 값들을 저장하는 임시 저장 장치이다. 여러개 저장
            가능 <br />
            제어장치란? 컴퓨터 제어신호를 내보내는 명령어 해석 장치이다.
            <br />
            <img
              className="miniImg"
              src="https://t1.daumcdn.net/cfile/tistory/99FEA1365CF1670F01"
            />
            <br />
            <br />
            <h5>
              <mark>3. 보조기억장치</mark>
            </h5>
            <mark className="y">용량이 큰 저장 장치</mark>
            <br />
            <br />
            메모리는 적은 용량과 비싼 가격, 전원에 영향받는 단기기억 장치이기
            때문에 장기기억 저장 장치들이 필수적으로 존재 <br />
            예) 하드 디스크, SSD, USB 등<br />
            <img
              className="miniImg"
              src="https://mblogthumb-phinf.pstatic.net/MjAxODA4MjNfMTg3/MDAxNTM0OTg4MTYyMjI1.8TfR4prcSN6MUMPfZmOrQxBBkY9KZ0uclrrxGWrcQg4g.ahFbWFwMrIKuNWgP79rjBCOPZKaEWM6xBbdqYkrjmnsg.PNG.dellose/hdd_vs_ssd_bz.png?type=w800"
            />
            <br />
            <br />
            <h5>
              <mark>4. 입출력장치</mark>
            </h5>
            <mark className="y">컴퓨터 외부와 연결된 데이터 교환 장치</mark>{" "}
            <br />
            예) 마우스, 키보드, 모니터 등<br />
            <img
              className="miniImg"
              src="https://thebook.io/img/007026/065.jpg"
            />
            <br />
            <br />
            <mark className="y">
              ⇒ 위 네 가지 컴퓨터의 핵심 부품은 '메인보드'라는 판에 연결됨
            </mark>
            <br />
            메인보드(== 마더보드)는 부품들의 정보들을 내부 버스라는 통로를
            사용해서 자유롭게 이동할 수 있게 함
            <br />
            <br />
            <mark className="y">
              워드란? CPU가 한번에 처리할 수 있는 데이터 크기를 말함, 클 수록
              성능 업!
            </mark>
            <br />
            <br />
            <br />
            <h5>◼ 문자</h5>문자 집합: 컴퓨터가 인식하고 표현할 수 있는 모음
            문자들의 집합
            <br />
            &emsp; 인코딩: 집합 내 문자를 0과 1로 표현한 문자 <br />
            &emsp; 디코딩: 0과 1의 문자를 기존 문자로 변환하는 과정 <br />
            <br />
            아스키 코드: 한 문자에 8bit(=1byte), 1bit는 오류검출에 사용되므로
            실질적으로 7bit임 <br />
            한글 인코딩 방식은 EUC-KR <br />
            유니코드: EUC-KR보다 훨씬 다양한 한글을 포함한다. +특수문자도 있음{" "}
            <br />
            UTF-8: 인코딩 방식, 1~4 바이트까지의 인코딩 결과를 만들어 냄<br />
            <br />
            <h5>◼ 언어</h5>
            고급언어: 사람의 언어, 소스코드 <br />
            저급언어: 명령어로 이루어진 언어 <br />
            &emsp; - 기계어: 2진법, 16진법 등
            <br />
            &emsp; - 어셈블리어: 기계어를 읽기 편한 형태로 번역한 언어 <br />
            &emsp; ex) push, mov, add … <br />
            <br />- 언어의 변환 <br />
            컴파일 언어: 컴파일러에 의해 소스 코드 전체가 저급 언어로 변환된
            언어, 예를들어 c언어, 변환된 언어는 목적 코드라고 부름
            <br />
            인터프리터 언어: 인터프리터에 의해 소스 코드가 한 줄씩 실행되는
            언어, 예를들어 python
            <br />
            <mark className="y">→ 속도는 컴파일 언어가 더 빠름</mark>
            <br />
            <br />
            <h5>◼ 파일</h5>
            목적파일: 목적 코드로 이루어진 파일, 예를들어 exe 파일, 실행 시
            링킹작업을 거치게 됨
            <br />
            실행파일: 링킹 작업이 끝난 실행 파일 <br />
            <br />
            <h5>◼ 명령어의 구조 </h5>
            연산 코드: 명령어가 수행할 연산 <br />
            오퍼랜드: 연산되는 데이터가 저장된 주소(== 주소 필드) <br />
            <mark className="y">
              → 오퍼랜드 필드에 데이터 위치를 찾는 방법을 주소 지정 방식이라 함
            </mark>
            <br />
            <br />
            주소 지정 방식
            <br />
            🔹 즉시 주소 지정 방식: 데이터를 바로 명시 <br />
            🔹 직접 주소 지정 방식: 유효 주소를 명시 <br />
            🔹 간접 주소 지정 방식: 유효 주소의 주소를 명시 <br />
            🔹 레지스터 주소 지정 방식: CPU 내부 레지스터 주소를 명시, CPU접근이
            좀 더 빠르지만 크기 제한 존재 <br />
            🔹 레지스터 간접 주소 지정 방식: 유효주소의 레지스터 주소를 명시{" "}
            <br />
            <br />
            <img src="https://hongong.hanbit.co.kr/wp-content/uploads/2022/09/%EC%BB%B4%ED%93%A8%ED%84%B0-%EB%B6%80%ED%92%88.png" />
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
              <a>#컴퓨터구조</a>
            </li>
            <li>
              <a>#운영체제</a>
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
