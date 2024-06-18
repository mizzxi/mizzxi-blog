import React, { useState, useEffect } from "react";
import "../../../assets/css/post.css";
import Progressbar from "../../../components/progressbar";
import PostListSide from "../../../components/postListSide";

export default function Til240220() {
  alert("💬비공개포스트입니다");
  return (
    /* jshint ignore:start */
    <>
      <Progressbar />
      <div className="post">
        <div>
          <a>TIL</a>
          <h1>컴퓨터 구조와 운영체제</h1>
          <h4>#1 컴퓨터 구조</h4>
          <p>mizzxi | 2024.02.20 17:08</p>
          <hr />
          <p className="postText lock">
            <h4>🔎컴퓨터 구조</h4>
            컴퓨터 관련 전공이지만 최근 소프트웨어에 비해 하드웨어에 대한 이해가
            너무 부족하다는 것을 느꼈다.. <br />
            때문에 mizzxi TIL블로그 첫 공부 포스트의 주제를 '컴퓨터 구조'로
            결정했다!
            <br />
            <br /> 컴퓨터 구조는 "혼자 공부하는 컴퓨터 구조 운영체제" 책과 함께
            공부해보려 한다.
            <br /> 이 책은 쉬운 용어와 세세한 설명으로 비전공자가 읽기에도
            어렵지 않다. 나와같은 컴퓨터 초보자들이 컴퓨터 구조를 독학할 때
            참고하기 좋은 책같아 골랐다! 특히 삽입된 그림들이 귀엽고 이해를
            도와주어서 좋다.
            <br />
            <br />
            처음 작성해보는 TIL 포스트라 타인이 읽기에는 문맥이 어색하거나
            설명이 부족할 수 있지만 계속해서 수정하고 발전시켜나갈 예정이다.
            댓글창이 없어 다행이다ㅎ_ㅎ
            <br />
            <br /> <h5>◼ 컴퓨터</h5>
            "컴퓨터가 이해하는 정보는 데이터와 명령어이다." <br />
            <br />
            <mark className="y">
              컴퓨터의 네 가지 핵심 부품은 CPU(중앙처리장치), 메모리(주기억장치,
              RAM과 ROM), 보조기억장치, 입출력장치이다.
            </mark>
            <br /> <br />
            <img src="https://hongong.hanbit.co.kr/wp-content/uploads/2022/09/%EC%BB%B4%ED%93%A8%ED%84%B0-%EA%B5%AC%EC%A1%B0_%EC%9E%85%EC%B6%9C%EB%A0%A5%EC%9E%A5%EC%B9%98.png" />
            <br />
            <br />
            <h5>
              <mark>메모리란?</mark>
            </h5>{" "}
            <mark className="y">
              메모리는 현재 실행하는 프로그램의 명령어와 데이터를 저장하는
              부품이다.
            </mark>
            <br />
            <br />
            따라서 프로그램이 실행되기 위해선 꼭 프로그램의 명령어와 데이터가
            메모리에 저장되어 있어야 한다. <br />
            메모리가 빠른 동작을 하기 위해선 메모리에 저장된 명령어와 데이터
            위치가 정돈되어 있어야 한다. <br />
            이에 메모리는 '주소'를 사용해서 명령어와 데이터의 위치를 정돈한다!
            <br />
            <img
              className="miniImg"
              src="https://i.namu.wiki/i/nPUleIE2l-p9-Hih6FuYtvljs4EqS46incBV9PQRXeqCip47_5W4VSuJu-mfWGKHjWzSFjSRofLkXm44vd2xmw.webp"
            />
            <br />
            <br />
            <h5>
              <mark>CPU란?</mark>
            </h5>
            <mark className="y">
              CPU는 메모리에 저장된 명령어를 읽고, 해석하고, 실행하는 부품이다.
            </mark>
            <br />
            <br />
            CPU는 ALU와 레지스터, 제어장치로 구성되어 있다. <br />
            ALU는 CPU에서 계산기로 사용되는 산술논리연산장치이고, <br />
            레지스터는 계산한 값들을 저장하는 임시 저장 장치, <br />
            제어장치는 컴퓨터 제어신호를 내보내는 명령어 해석 장치이다.
            <br />
            <img
              className="miniImg"
              src="https://t1.daumcdn.net/cfile/tistory/99FEA1365CF1670F01"
            />
            <br />
            <br />
            <h5>
              <mark>보조기억장치란?</mark>
            </h5>
            <mark className="y">보조기억장치는 용량이 큰 저장 장치이다.</mark>
            <br />
            <br />
            메모리는 적은 용량과 비싼 가격, 전원에 영향받는 단기기억 장치이기
            때문에 데이터를 저장하는 장기기억 저장 장치, 즉 보조기억장치가
            필요하다. <br />
            보조기억장치로는 우리가 잘 아는 하드 디스크, SSD, USB 등이 있다.
            <br />
            <img
              className="miniImg"
              src="https://mblogthumb-phinf.pstatic.net/MjAxODA4MjNfMTg3/MDAxNTM0OTg4MTYyMjI1.8TfR4prcSN6MUMPfZmOrQxBBkY9KZ0uclrrxGWrcQg4g.ahFbWFwMrIKuNWgP79rjBCOPZKaEWM6xBbdqYkrjmnsg.PNG.dellose/hdd_vs_ssd_bz.png?type=w800"
            />
            <br />
            <br />
            <h5>
              <mark>입출력장치란?</mark>
            </h5>
            <mark className="y">
              입출력장치는 컴퓨터 외부와 연결된 데이터 교환 장치이다.
            </mark>{" "}
            <br />
            <br />
            예로 마우스, 키보드, 모니터 등이 있다.
            <br />
            <img
              className="miniImg"
              src="https://thebook.io/img/007026/065.jpg"
            />
            <br />
            <br />
            <mark className="y">
              ➤ 이렇게 네 가지 컴퓨터의 핵심 부품은 '메인보드'라는 판에
              연결된다.
            </mark>
            <br />
            메인보드(== 마더보드)는 부품들의 정보들을 내부 버스라는 통로를
            사용해서 자유롭게 이동할 수 있게 한다.
            <br />
            <br />
            + 워드란? CPU가 한번에 처리할 수 있는 데이터 크기를 말한다. 워드가
            클 수록 성능이 좋아진다.
            <br />
            <br />
            <br />
            <h5>◼ 컴퓨터의 문자</h5>컴퓨터의 문자 집합이란 컴퓨터가 인식하고
            표현할 수 있는 모음 문자들의 집합이다.
            <br />
            &emsp; + 인코딩: 집합 내 문자를 0과 1로 표현한 문자 <br />
            &emsp; + 디코딩: 0과 1의 문자를 기존 문자로 변환하는 과정 <br />
            <br />
            아스키 코드란 한 문자에 8bit(=1byte)를 가지는 문자 집합이다. 1bit는
            오류검출에 사용되므로 실질적인 사이즈는 7bit이다. <br />
            한글 인코딩 방식은 EUC-KR를 사용한다.
            <br />
            유니코드란 EUC-KR보다 훨씬 다양한 한글을 포함하는 문자 집합이다. +
            특수문자도 있다
            <br />
            <br />
            + UTF-8이란? 인코딩 방식이다. 1~4 바이트까지의 인코딩 결과를 만들어
            낸다.
            <br />
            <br />
            <h5>◼ 컴퓨터의 언어</h5>
            컴퓨터의 언어는 고급언어와 저급언어로 나뉜다.
            <br />
            고급언어는 사람이 이해할 수 있는 언어를 뜻한다. 예로 지금 내가
            작성하는 소스코드가 있다. <br />
            반대로 저급언어는 사람이 이해하기 힘든 명령어로 이루어진 언어이다.
            기계어와 어셈블리어가 있다. <br />
            &emsp; - 기계어: 2진법, 16진법 등
            <br />
            &emsp; - 어셈블리어: 기계어를 읽기 편한 형태로 번역한 언어 <br />
            &emsp; ex) push, mov, add … <br />
            <br />
            고급언어와 저급언어가 서로의 언어를 이해하기 위해선 변환과정이
            필요하다. 그 과정을 컴파일, 인터프리팅이라고 한다.
            <br />
            <br />
            컴파일 언어란 컴파일러에 의해 소스 코드 전체가 저급 언어로 변환된
            언어를 말한다. 대표적으로 c언어가 있다. 컴파일러에 의해 변환된
            언어는 목적 코드라고 부른다.
            <br />
            <br />
            인터프리터 언어란 인터프리터에 의해 소스 코드가 한 줄씩 실행되는
            언어를 말한다. 대표적으로 python이 있다.
            <br />
            <br />
            <mark className="y">+ 속도는 컴파일 언어가 더 빠르다!</mark>
            <br />
            <br />
            <h5>◼ 컴퓨터의 파일</h5>
            컴퓨터의 파일은 목적파일과 실행파일로 나뉜다.
            <br />
            목적파일은 목적 코드로 이루어진 파일이다. 대표적으로 exe 파일을
            말한다. 이러한 목적파일은 실행 시 링킹작업을 거치게 된다.
            <br />
            실행파일은 링킹 작업이 끝난 목적파일을 뜻한다. <br />
            <br />
            <h5>◼ 컴퓨터 명령어의 구조 </h5>
            명령어의 구조는 연산 코드와 오퍼랜드로 이루어져있다. <br />
            연산 코드는 명령어가 수행할 연산을 말하고, <br />
            오퍼랜드는 연산되는 데이터가 저장된 주소(== 주소 필드)를 말한다.{" "}
            <br />
            <mark className="y">
              → 오퍼랜드 필드에 데이터 위치를 찾는 방법을 주소 지정 방식이라
              한다.
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
