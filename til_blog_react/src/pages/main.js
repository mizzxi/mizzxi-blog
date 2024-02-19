import React, { useState } from "react";
import "../assets/css/main.css";
import main_til from "../assets/images/study/main_til.jpg";
import main_movie from "../assets/images/study/main_movie.jpg";
import main_dali2 from "../assets/images/study/main_dali2.jpg";
import main_etc from "../assets/images/study/main_etc.jpg";

export default function Main() {
  const [sliderMove, setSliderMove] = useState("slider");

  const slider_next = (e) => {
    setSliderMove("slider sliding");
  };

  const slider_prev = (e) => {
    setSliderMove("slider slidingBack");
  };

  return (
    /* jshint ignore:start */
    <>
      <div className="mainContainer">
        <div className="mainTopPost">
          <ul>
            <li>
              <a href="tilExplain">
                <span>
                  <img src={main_til} className="mainTopImg"></img>
                  <p>
                    <span className="mainTopTitle">What is a TIL blog?</span>
                    <br />
                    <span className="mainTopText">mizzxi의 TIL 블로그</span>
                  </p>
                </span>
              </a>
            </li>
            <li>
              <a href="myInfo">
                <span>
                  <img
                    src="https://cdn.pixabay.com/photo/2023/09/25/10/05/ai-generated-8274619_1280.png"
                    className="mainTopImg"
                  ></img>
                  <p>
                    <span className="mainTopTitle">mizzxi</span>
                    <br />
                    <span className="mainTopText">나에 대한 소개</span>
                  </p>
                </span>
              </a>
            </li>
            <li>
              <a href="project-dali">
                <span>
                  <img
                    src="https://www.finereport.com/kr/wp-content/uploads/2020/09/111-1024x546.png"
                    className="mainTopImg"
                  ></img>
                  <p>
                    <span className="mainTopTitle">졸업작품</span>
                    <br />
                    <span className="mainTopText">
                      여성 의류 쇼핑몰 전략 대시보드 제작
                    </span>
                  </p>
                </span>
              </a>
            </li>
            <li>
              <a>
                <span>
                  <img
                    src="https://file.f-lab.kr/blog/01fdbcf3-d265-4ae8-acd2-20f8dc5f1350-p43JyekM8M01abbm.jpg"
                    className="mainTopImg"
                  ></img>
                  <p>
                    <span className="mainTopTitle">기타</span>
                    <br />
                    <span className="mainTopText">테스트 중</span>
                  </p>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className={sliderMove} id="slider">
          <div id="sliderImg1">
            <a href="tilExplain">
              <span className="sliderTitle">TIL? Today I Learned</span>
              <button className="sliderButton" type="button">
                더보기
              </button>
            </a>
          </div>
          <div id="sliderImg2">
            <a href="tilExplain">
              <span className="sliderTitle">나의 최근 관심 분야</span>
              <button className="sliderButton shadow" type="button">
                더보기
              </button>
            </a>
          </div>
        </div>
        <div className="sliderControl">
          <button id="prev" type="button" onClick={slider_prev}></button>
          <button id="next" type="button" onClick={slider_next}></button>
        </div>
        <div className="mainCard">
          <img src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg" />
          <div className="cardBox">
            <div>
              포스트로 올리긴 애매하지만 적어놓고 싶은 생각이나 학습한 부분이
              있을 때 작성할 카드뉴스 <br />
              나중에는 사라질지도 모르는 부분💀
            </div>
          </div>
          <img src="https://cdn.pixabay.com/photo/2019/04/26/18/14/video-4158203_1280.png" />
          <div className="cardBox">
            <div>
              현재 가장 공부하기 어려운 분야는 컴퓨터 네트워크 <br />
              애매하게 알고 있어서 더 복잡한 상태 ㅜ.ㅜ <br />
              언제 한번 교보문구 가서 책을 구입해 봐야겠다
            </div>
          </div>
          <img src="https://cdn.pixabay.com/photo/2013/07/13/11/56/metro-159004_1280.png" />
          <div className="cardBox">
            <div>
              mizzxi.site 도메인 구매 후 AWS EC2를 사용해서 서버 배포 완료!
              웹주소에 내 닉네임이 들어가 있으니까 굉장히 감명 깊다😢
              <br />
              <br />
              <a href="project-subwayGame">프로젝트 설명 읽으러 가기</a>
              <br />
              <a href="https://subwaygame.mizzxi.site">지하철 게임하러 가기</a>
            </div>
          </div>
        </div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
