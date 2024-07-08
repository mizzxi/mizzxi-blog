import React, { useState, useEffect } from "react";
import "../../../assets/css/post.css";
import Progressbar from "../../../components/progressbar";
import PostListSide from "../../../components/postListSide";

export default function Til240319() {
  alert("💬비공개포스트입니다");
  return (
    /* jshint ignore:start */
    <>
      <Progressbar />
      <div className="post" id="post">
        <div>
          <a>TIL</a>
          <h1>컴퓨터 구조와 운영체제</h1>
          <h4>#3 메모리</h4>
          <p>mizzxi | 2024.03.19 15:07</p>
          <hr />
          <p className="postText lock">
            <h5>메모리란?</h5> RAM(Random Access Memory = 메모리)은 실행할
            프로그램의 명령어와 데이터를 저장하는 휘발성 저장 장치이다. <br />
            CPU가 장기 저장 장치인 보조기억장치에 직접 접근하지 못하기 때문에
            보조기억장치에 저장된 데이터를 메모리로 가져와서 사용한다.
            <br />
            <br />
            그렇다면 RAM의 종류를 알아보자!
            <br />{" "}
            <img
              className="miniImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBaBVSkMJwRZ2SHr1h--BStOCjF_vhAkIkdA&usqp=CAU"
            />
            <br />
            <mark>1. DRAM:</mark> 다이나믹 메모리를 말한다. 저장된 데이터가
            동적으로 변하는 저장소이고 소멸을 막기 위해서 일정 주기로 재활성화가
            필요하다. <br /> 비용이 낮고 설계가 용이해 자주 사용되는 메모리이다.
            <br />
            <br />
            <mark>2. SPAM:</mark> 스테틱 메모리를 말한다. 저장된 데이터가 변하지
            않는 저장소이다. <br /> 속도가 빠르지만 비용이 높기 때문에
            소용량이고 빠른 속도가 필요한 부분에서 사용된다. 예로{" "}
            <mark className="y">캐시를 저장하는 메모리</mark>로 사용된다.
            <br />
            <br />
            <mark>3. SDRAM:</mark> 발전된 DRAM이다.{" "}
            <mark className="y">클럭 신호와 동기화</mark>되었다.
            <br />
            <br />
            <mark>4. DDR SDRAM:</mark> 대역폭을 넓혀 속도가 빨라진 SDRAM을
            말한다.
            <br />
            <mark className="y">
              (대역폭이란 데이터를 주고 받는 길의 너비를 말한다. 즉 대역폭이
              넓을수록 많은 데이터가 한번에 이동할 수 있어 속도가 빨라진다!)
            </mark>{" "}
            최근 흔히 사용되는 메모리이다.
            <br />
            <br />
            - 메모리의 주소
            <br />
            메모리의 주소는 물리 주소와 논리 주소가 있다.
            <br />
            물리주소는 메모리 하드웨어 주소를 말하고, 논리주소는 CPU와 실행
            프로그램에서 사용하는 주소를 말한다.
            <br />
            <br />
            &emsp; <mark className="y">메모리 관리 장치 MMU</mark>란 논리 주소와
            물리 주소간의 변환을 해주는 장치이다. CPU와 주소 버스 사이에
            위치해있고, CPU가 논리 주소에 베이스 레지스터 값을 더해 물리 주소로
            변환 시키는 작업을 한다.
            <br />
            &emsp;&emsp; <mark className="y">베이스 레지스터?</mark> 프로그램의
            가장 작은 물리 주소를 말한다. 즉 첫 물리 주소의 위치!
            <br />
            <br />
            <mark>+ 한계 레지스터</mark>란 논리 주소 범위를 벗어나는 명령어
            실행을 방지하기 위한 레지스터이다. 이를 통해 다른 프로그램 저장소의
            영역 침범을 방지한다.
            <br />
            <br />
            <mark>- 저장 장치 계층 구조</mark>
            <br />
            <img
              className="miniImg"
              src="https://velog.velcdn.com/images/ajm0718/post/237f19d7-d9e2-4b14-b8a4-4fd7814532b8/image.png"
            />
            <br />
            CPU가 얼마나 가까운 메모리인가를 기준으로 계층을 나눈 것이다. <br />
            가까운 순서대로 크게 레지스터 ➤ 메모리 ➤ 보조기억장치 순이다.
            <br />
            <br />
            <img
              className="miniImg"
              src="https://blog.kakaocdn.net/dn/Tynil/btqy9scQhbV/WklMwy6M0AbCbc3NGHrY11/img.png"
            />
            <br />
            캐시 메모리는 CPU와 메모리 사이에 위치하여 레지스터보단 용량이 크고
            메모리보단 빠른 SRAM 기반의 저장 장치이다. <br /> 메모리에서 CPU가
            사용할 일부 데이터를 미리 저장해 시간을 단축 시킨다.
            <br />
            레지스터 ➤ 캐시 메모리 ➤ 메모리 ➤ 보조기억장치
            <br />
            <br />
            <mark className="y">캐시 메모리 계층</mark>
            <br /> L1 캐시 ➤ L2 캐시 ➤ L3 캐시(코어 외부에 위치함)
            <br /> 탐색 순서는 L1부터 L3까지, L3는 여러 코어가 공유하는 캐시
            메모리이다.
            <br />
            <br />
            캐시 히트? 미리 저장해둔 캐시 메미로 내 데이터가 실제 CPU에서 사용될
            경우
            <br />
            캐시 미스? 저장했지만 사용 안된 경우 <br />
            &emsp;{" "}
            <mark>
              캐시 적중률: 캐시 히트 횟수 / (캐시 히트 횟수 + 캐시 미스 횟수)
            </mark>
            <br />
            <br />
            <mark>참조 지역성의 원리</mark>란 CPU가 메모리에 접근할 때 경향을
            판단해 캐시에 넣는 기술을 말한다.
            <br />
            &emsp; 시간 지역성: 최근 접근 메모리에 다시 접근하는 경우
            <br />
            &emsp; 공간 지역성: 접근 메모리 공간 근처에 접근하는 경우
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
              <a>#메모리</a>
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
