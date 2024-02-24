import React, { useState, useEffect } from "react";
import "../../../assets/css/post.css";
import PostListSide from "../../../components/postListSide";

export default function Til240222() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.getElementById("post").clientHeight;

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
      <div className="post" id="post">
        <div>
          <a>TIL</a>
          <h1>컴퓨터 구조와 운영체제</h1>
          <h4>#2 CPU</h4>
          <p>mizzxi | 2024.02.22 20:49</p>
          <hr />
          <p className="postText">
            <br />
            <h5> ◼ CPU </h5>
            <img
              className="miniImg"
              src="https://breefin.com/assets/images/wysiwyg/1638865819_ch2p01_006_01.jpg"
            />
            <br />
            <mark>ALU:</mark> 레지스터를 통해 피연산자를 읽고 제어장치로부터
            제어 신호를 읽음 → 연산 수행 <br />
            &emsp; 결과는 숫자, 문자, 주소가 됨, 결과는 일시적으로 레지스터에
            저장 <br />
            &emsp;{" "}
            <mark className="y">
              -why? cpu가 메모리에 접근하는 속도는 느리기 때문에 레지스터에 우선
              저장
            </mark>
            <br />
            계산 결과와 함께 플래그를 내보냄 (플래그: 양수와 음수를 구분하는
            부호, 플래그 레지스터가 따로 있음) <br />
            <br />
            <mark>제어장치:</mark> 가장 정교하기 때문에 제조사마다 방식이 다름{" "}
            <br />
            &emsp; 1. 제어장치가 클럭 신호를 받음 (클럭: 시간 단위, 신호가
            이동하는 시간 박자) <br />
            &emsp; 2. 명령어 받기 (명령어 레지스터에서 받기) <br />
            &emsp; 3. 플래그 받기 <br />
            &emsp; 4. 시스템 버스 중 제어 버스에서 신호 받기 <br />
            <br />
            <mark>레지스터:</mark> cpu의 저장 공간 <br />
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
            <img
              className="miniImg"
              src="https://blog.kakaocdn.net/dn/bGwiaN/btsnK9GaqzH/xWnO5Fs33ePsHQkaF4UFl1/img.png"
            />
            <br />
            &emsp; 스택 주소 지정 방식: 스택 포인터가 가장 최근 저장 값을 나타냄{" "}
            <br />
            &emsp; 변위 주소 지정 방식: 연산 코드, 레지스터 값, 오퍼랜드(주소){" "}
            <br />
            <br />
            <mark>명령어 사이클:</mark> 명령어를 처리하는 정형화된 흐름 <br />
            &emsp; <mark className="y">인터럽트? 흐름이 끊어지는 상황</mark>
            <br />
            <img
              className="miniImg"
              src="https://velog.velcdn.com/images/localgaji/post/040731bb-6f1b-48fe-8b45-54c5cb6e281e/image.png"
            />
            <br />
            &emsp; &emsp; 동기 인터럽트: CPU가 오류나 예외적 상황에 마주쳤을
            때(exception 예외) <br />
            &emsp; &emsp; 비동기 인터럽트: 입출력 장치에 의해 발생, 알림 <br />
            &emsp; &emsp; ex) 프린트, 키보드, 마우스 <br />
            &emsp; 인출 사이클: 메모리에 있는 명령어를 CPU로 가져오는 단계{" "}
            <br />
            &emsp; 실행 사이클: 명령어를 실행하는 단계 <br />
            &emsp; 간접 사이클: 간접 주소 지정 방식으로 인해 메모리에 더
            접근하는 단계
            <br />
            <br />- 예외의 종류 <br /> &emsp; 🔹 fault: 예외 처리 후 예외 발생
            명령어부터 다시 실행 <br /> &emsp; 🔹 trap: 예외 처리 후 예외 발생
            명령어 다음부터 실행
            <br /> &emsp; 🔹 abort: 중단 <br />
            <br />
            <mark>클럭:</mark> 클럭 신호가 빠를수록 CPU도 빨라짐, 헤르츠 단위로
            측정
            <br />
            &emsp; 오버클럭킹? 클럭 최대 속도를 강제로 끌어올리는 기법, 지나치게
            속도가 높으면 발열 문제가 생김 <br />
            <br />
            <mark>코어:</mark> 명령어를 실행하는 부품, CPU내부에 여러개의 코어가
            존재해 각각 ALU, 제어장치, 레지스터를 가짐 <br />
            &emsp; 멀티코어? 코어를 여러개 포함하는 CPU <br />
            <br />
            <mark>스레드:</mark> 실행 흐름의 단위, 하나의 코어가 동시에 처리하는
            명령어 단위
            <br />
            &emsp; 멀티 스레드? 하나의 코어로 여러 명령어를 동시에 처리하는 CPU
            (+ 인텔은 하이퍼스레딩이라 이름 붙임) <br />
            <br />
            파이프라인 위험 <br />
            &emsp; 데이터 위험: 데이터 의존성에 의해 원하지 않는 결과가 발생{" "}
            <br />
            &emsp; 제어 위험: 프로그램 카운터의 갑작스런 변화에 의해 끊기면서
            이전 파이프라인이 쓸모없어지는 현상 → 분기 예측: 분기를 예측하고
            주소를 인출하는 기술 <br />
            <br />
            <mark className="y">
              슈퍼스칼라: 여러개의 파이프라인을 가짐
            </mark>{" "}
            <br />
            <br />
            비순차적 명령어 처리 OoOE: 순차적이지 않아도 결과가 달라지지 않는
            연산들은 기다리지 않고 바로 실행 (파이프라인 중단을 방지) <br />
            <br />
            🔹 ISA: CPU의 언어이자 하드웨어가 소프트웨어를 이해하는 방식 <br />
            🔹 CISC: 복잡하고 다양한 종류의 명령어 집합을 활용 <br />
            🔹 RISC: 단순하고 적은 종류의 명령어 집합 활용
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
