import React, { useState, useEffect } from "react";
import "../../../assets/css/post.css";
import Progressbar from "../../../components/progressbar";
import Main from "../../../assets/images/study/project/project_mlf_main.jpg";
import Content from "../../../assets/images/study/project/project_mlf_content.jpg";
import Result from "../../../assets/images/study/project/project_mlf_result.jpg";
import Chat from "../../../assets/images/study/project/project_mlf_chat.gif";
import MiniGame from "../../../assets/images/study/project/project_mlf_minigame.gif";
import PostListBottom from "../../../components/postListBottom";

export default function MlfApp() {
  return (
    /* jshint ignore:start */
    <>
      <Progressbar />
      <div className="projectPost">
        <div>
          <a>프로젝트</a>
          <h1>My Little Friend</h1>
          <h4>안드로이드 앱으로 즐기는 간단한 육성 게임</h4>
          <p>mizzxi | 2024.02.01 18:27</p>
          <hr />
          <h4>❗ 주제 소개</h4>
          <img src="https://img.appstory.co.kr/@files/monthly.appstory.co.kr/thum/Bdatafile/Board/dir_147/14775.jpg?v=1627516728" />
          육성 게임은 플레이어가 가상 세계에서 캐릭터, 동물, 농장 등을 키우고
          발전시키는 게임으로, 주로 시간과 노력을 투자하여 리소스를 모으고
          발전시키는 측면에서 중요한 역할을 합니다.
          <img src="https://cdn.inflearn.com/wp-content/uploads/androidstudio.png" />
          My Little Friend는 안드로이드 스튜디오를 사용하여 개발된 안드로이드 앱
          프로젝트입니다. <br />
          주제 선정 당시는 covid19로 인해 사회적 거리두기가 시행되던 시점으로
          코로나 우울이라는 키워드가 주목받던 시기입니다. <br />
          이에 육성게임이라는 주제가 코로나 우울 문제를 해소할 수 있지 않을까
          생각들었고, 플레이어가 게임 속 가상 친구와 대화를 하고 돌보기,
          놀아주기 등의 활동을 통해 일상에서 벗어나 즐거움과 힐링을 느낄 수
          있도록 하기 위해 제작하였습니다.
          <p></p>
          <p className="postText">
            <h2>&#128677; 콘텐츠 구성</h2>
            <img src={Main} />
            게임 콘텐츠는 크게 돌보기, 놀아주기, 대화하기로 분류되며 사용자는
            가상친구의 상태를 확인하며 각각의 행위를 통해 친밀도를 쌓을 수
            있습니다.아래 이미지는 대화하기, 그림그리기, 게임하기 화면의
            사진입니다.
            <img src={Content} />
            <img src={Chat} id="gif" />
            <img src={MiniGame} id="gif2" />
            대화하기는 사용자가 특수문자와 정해진 규칙을 이용하여 새로운 말들을
            배울 수 있도록 하였으며, 그림그리기는 빨강, 파랑, 검정 펜 색깔을
            고를 수 있고 다 그린 후에는 스크린샷 저장이 가능합니다. <br />
            미니게임은 다른 그림 찾기 게임으로 아홉장의 이미지에서 한장의 다른
            그림을 찾아 터치하면 점수가 올라가고 얻은 점수는 친밀도에 반영이
            됩니다.
            <br />
            <br />
            다양한 활동을 통해 친밀도가 정해진 수치 이상이 되면 게임화면은
            엔딩으로 바뀌며 가상 친구가 사용자에게 작별인사를 합니다. 후에는
            모든 기록이 리셋되며 게임 오프닝화면으로 되돌아갑니다.
            <br />
            <br />
            <br />
            <br />
            <h2>&#128677; 결과물</h2>
            <br />
            <p className="middle">
              <a
                href="https://drive.google.com/file/d/1eLuSecQEQef5wVkS3E8sImiIcrAOO6p6/view"
                target="blank"
              >
                &#128073;[앱 다운로드 파일]&#128072;
              </a>
            </p>
            <img src={Result} />
            <br />
            <br />
            <h2>&#128172; 느낀점</h2>
            <br />
            앱 개발은 에뮬레이터를 통해 바로바로 실행해 볼 수 있다는 부분이
            재미있고 좋았습니다.
            <br />
            혼자서 직접 기획 디자인 개발을 전부 진행한 프로젝트라 더 뜻깊었고,
            진행 중에 의견을 공유하거나 분업을 할 수 있는 팀원이 있었으면
            좋겠다는 생각도 많이 했습니다.
            <br />
            <br />
            개발 중에 바보 같은 오류도 많이 나고, 오타나 실수도 많아 작은 기능을
            만들더라도 하나하나 들여다보았던 기억이 있습니다.
            <br />이 경험은 이후 잔실수를 많이 줄일 수 있던 발판이 된 것
            같습니다.
          </p>
        </div>
        <hr />
        <div className="postTag">
          <h6>&#128204;태그</h6>
          <ul>
            <li>
              <a>#안드로이드스튜디오</a>
            </li>
            <li>
              <a>#게임</a>
            </li>
            <li>
              <a>#JS</a>
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
