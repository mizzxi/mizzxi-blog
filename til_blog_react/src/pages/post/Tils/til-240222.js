import React, { useState, useEffect } from "react";
import "../../../assets/css/post.css";
import Progressbar from "../../../components/progressbar";
import PostListSide from "../../../components/postListSide";

export default function Til240222() {
  alert("💬비공개포스트입니다");
  return (
    /* jshint ignore:start */
    <>
      <Progressbar />
      <div className="post" id="post">
        <div>
          <a>TIL</a>
          <h1>컴퓨터 구조와 운영체제</h1>
          <h4>#2 CPU</h4>
          <p>mizzxi | 2024.02.22 20:49</p>
          <hr />
          <p className="postText lock">
            <br />
            이번에는 컴퓨터의 필수 부품 중의 하나인 CPU의 구조와 기능에 대해서
            더 자세히 알아보고자 한다.
            <br />
            <br />
            <h5>CPU란?</h5> 메모리에 저장된 명령어를 읽고, 해석 실행하는
            부품이다.
            <img
              className="miniImg"
              src="https://breefin.com/assets/images/wysiwyg/1638865819_ch2p01_006_01.jpg"
            />
            <br />
            CPU는 ALU와 제어장치, 레지스터로 구성되어있다. <br />
            <br />
            <mark>ALU(== 연산장치)</mark>는 레지스터를 통해 피연산자를 읽고
            제어장치로부터 제어 신호를 읽은 후 연산을 수행한다. <br />
            연산 결과는 숫자, 문자, 주소로 나오고 일시적으로 레지스터에
            저장된다. <br />
            &emsp;{" "}
            <mark className="y">
              왜 일시적으로 저장되는가? CPU가 메모리에 접근하는 속도는 느리기
              때문에 시간 단축을 위해서 레지스터에 우선 저장하는 것이다.
            </mark>
            <br />
            계산 결과와 함께 플래그를 내보낸다.{" "}
            <mark className="y">
              (플래그란? 양수와 음수를 구분하는 부호를 말한다. 플래그 정보를
              저장하는 플래그 레지스터가 따로 있다.)
            </mark>{" "}
            <br />
            <br />
            <mark>제어장치:</mark> 가장 정교하기 때문에 제조사마다 방식이
            다르다. <br />
            &emsp; 1. 제어장치가 클럭 신호를 받음 (클럭이란? CPU의 시간 단위,
            신호가 이동하는 시간 박자를 말한다) <br />
            &emsp; 2. 명령어 받기 - 명령어 레지스터에서 받기 <br />
            &emsp; 3. 플래그 받기 (양수 음수 구분 부호) <br />
            &emsp; 4. 시스템 버스 중 제어 버스에서 신호 받기 <br />
            <br />
            <mark>레지스터:</mark> CPU의 저장 공간을 말한다. <br />
            <br />
            <mark className="y">- 레지스터 종류</mark> <br />
            &emsp; 프로그램 카운터: 명령어 주소, 명령어 포인터 <br />
            &emsp; 명령어 레지스터: 명령어 저장 공간 <br />
            &emsp; 메모리 주소 레지스터: 메모리 주소 저장 <br />
            &emsp; 메모리 버퍼 레지스터: 메모리와 주고 받을 값을 저장 (=메모리
            데이터 레지스터) <br />
            &emsp; 범용 레지스터: 모두 저장 가능한 공간 <br />
            &emsp; 플래그 레지스터 <br />
            <br />
            <mark className="y">- 주소 지정 방식</mark> <br />
            &emsp; 스택 주소 지정 방식: 스택 포인터가 가장 최근 저장 값을
            나타낸다. <br />
            &emsp; 변위 주소 지정 방식: 연산 코드, 레지스터 값, 오퍼랜드(주소)를
            저장한다. <br />
            <br />
            <mark>명령어 사이클:</mark> 명령어를 처리하는 정형화된 흐름을
            말한다. <br />
            &emsp;{" "}
            <mark className="y">
              인터럽트란? 사이클 중 흐름이 끊어지는 상황!
            </mark>
            <br />
            <img
              className="miniImg"
              src="https://velog.velcdn.com/images/localgaji/post/040731bb-6f1b-48fe-8b45-54c5cb6e281e/image.png"
            />
            <br />
            &emsp; &emsp; 동기 인터럽트는 CPU가 오류나 예외적 상황에 마주친
            상황(exception 예외)이다. <br />
            &emsp; &emsp; 비동기 인터럽트는 입출력 장치에 의해 발생한 인터럽트로
            예를들어 장치 알림이 있다. <br />
            &emsp; &emsp; + 입출력 장치 ex) 프린트, 키보드, 마우스 <br />
            <br />
            &emsp; 인출 사이클: 메모리에 있는 명령어를 CPU로 가져오는 단계{" "}
            <br />
            &emsp; 실행 사이클: 명령어를 실행하는 단계 <br />
            &emsp; 간접 사이클: 간접 주소 지정 방식으로 인해 메모리에 더
            접근하는 단계
            <br />
            <br />- 예외의 종류 <br /> &emsp; 🔹 fault: 예외 처리 후 예외 발생
            명령어부터 다시 실행한다. <br /> &emsp; 🔹 trap: 예외 처리 후 예외
            발생 명령어 <mark className="y">다음부터</mark> 다시 실행한다.
            <br /> &emsp; 🔹 abort: 중단 <br />
            <br />
            <mark>클럭:</mark> 클럭 신호가 빠를수록 CPU도 빨라진다, 헤르츠
            단위로 측정한다
            <br />
            &emsp; 오버클럭킹이란? 클럭 최대 속도를 강제로 끌어올리는 기법이다.
            지나치게 속도가 높으면 발열 문제가 생김! <br />
            <br />
            <mark>코어:</mark> 명령어를 실행하는 부품이다. CPU내부에 여러개의
            코어가 존재해 각각 ALU, 제어장치, 레지스터를 가진다. <br />
            &emsp; 멀티코어란? 코어를 여러개 포함하는 CPU를 말한다. <br />
            <br />
            <mark>스레드:</mark> 실행 흐름의 단위, 하나의 코어가 동시에 처리하는
            명령어 단위이다.
            <br />
            &emsp; 멀티 스레드란? 하나의 코어로 여러 명령어를 동시에 처리하는
            CPU를 말한다. (+ 인텔은 멀티 스레드를 하이퍼스레딩이라 이름 붙임){" "}
            <br />
            <br />
            파이프라인 위험 <br />
            &emsp; 데이터 위험: 데이터 의존성에 의해 원하지 않는 결과가 발생하는
            경우 <br />
            &emsp; 제어 위험: 프로그램 카운터의 갑작스런 변화에 의해 끊기면서
            이전 파이프라인이 쓸모없어지는 현상
            <br />
            &emsp; &emsp; 극복 기술 → 분기 예측: 분기를 예측하고 주소를 인출하는
            기술 <br />
            <br />
            <mark className="y">
              슈퍼스칼라란? 여러개의 파이프라인을 가지는 것을 말한다.
            </mark>{" "}
            <br />
            <br />
            비순차적 명령어 처리 OoOE: 순차적이지 않아도 결과가 달라지지 않는
            연산들은 기다리지 않고 바로 실행하는 방식이다. (파이프라인 중단을
            방지한다.) <br />
            <br />
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
              <a>#CPU</a>
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
