import React, { useState, useEffect } from "react";
import "../../../assets/css/post.css";
import Progressbar from "../../../components/progressbar";
import Main from "../../../assets/images/study/project/project_subway_opening.jpg";
import Content from "../../../assets/images/study/project/project_subway_game.jpg";
import Result from "../../../assets/images/study/project/project_subway_ending.jpg";
import PostListBottom from "../../../components/postListBottom";

export default function SubwayGame() {
  return (
    /* jshint ignore:start */
    <>
      <Progressbar />
      <div className="projectPost">
        <div>
          <a>프로젝트</a>
          <h1>SubwayGame</h1>
          <h4>친구들과 함께하는 지하철 1호선 역이름 말하기 게임</h4>
          <p>mizzxi | 2024.02.16 23:16</p>
          <hr />
          <h4>❗ 주제 소개</h4>
          <img src="https://www.sisul.or.kr/open_content/skydome/images/img_subway.png" />
          지하철 역 이름을 사용하는 게임은 술자리에서 인기있는 게임 중
          하나입니다. 이 게임은 3명의 플레이어들이 지하철 역 이름을 순서대로
          말하면서 진행되며 참가자들의 관찰력, 기억력 및 반응 속도를 시험할 수
          있습니다. SubwayGame은 1호선의 역이름을 10초안에 입력하는 게임으로
          미니 프로젝트입니다.
          <img src="https://cdn.ourcodeworld.com/public-media/articles/articleocw-57f3accea486b.png" />
          socket통신을 이용했고 백서버는 node.js를, 프론트는 react를
          사용했습니다.
          <p></p>
          <p className="postText">
            <h2>&#128677; 게임 화면 구성</h2>
            <img src={Main} />
            게임 시작화면입니다. 게임이 시작하기 위해선 총 세명의 사용자가
            필요하며 선착순으로 플레이 가능합니다. 세명의 참가자가 정해진 이후에
            들어온 나머지 사용자는 게임을 관전할 수 있습니다.
            <img src={Content} />
            게임 진행화면입니다. 참가 순서가 게임 순서이며 10초안에 역이름을
            입력해야 합니다.
            <br />
            <img src={Result} />
            게임 결과화면입니다. 총 점수에 따라서 순위가 정해지며 이때 관전자는
            참가자가 대기하기를 선택하거나 게임에서 나갔을 시 게임에 참여할 수
            있는 권한이 생깁니다.
            <br />
            <br />
            ++ aws의 ec2를 사용하여 배포
            <br />
            <br />
            <h2>&#128677; 결과물</h2>
            <br />
            <p className="middle">
              <a href="https://subwaygame.mizzxi.site/" target="blank">
                &#128073;[게임하러 가기]&#128072;
              </a>
            </p>
            <img src={Main} />
            <br />
            <br />
            <h2>&#128172; 느낀점</h2>
            <br />
            Socket.io를 사용해보면서 실시간으로 백서버와 프론트가 소통하는
            과정이 즐거웠습니다.
            <br />
            원래 게임을 좋아하기도 했고, bootstrap 라이브러리를 사용하여
            반응형으로 웹 사이트를 제작해 보니 너무 즐거웠고, 반응형 사이트에
            대한 이해에 많은 도움이 되었습니다.&#128170;
            <br />
            <br />
            참가자가 도중 나간 경우, 대기자가 있는 경우, 재게임을 하는 경우 등
            다양한 경우를 고려했고, 그에 대한 결과를 오류 없이 제작하기 위해
            노력했습니다.
            <br />
            <br />또 프로젝트를 AWS로 배포하는 경험도 좋았습니다.
            <br />
            EC2를 사용해 직접 구매한 도메인으로 컴퓨터를 빌려 서버를 밤새
            돌린다는 경험이 뜻깊고, 로드 밸런싱(여러 서버에 네트워크 트래픽을
            분산하는 기술)이나 보안그룹(그룹 설정을 통해 인바운드, 아웃바운드
            트래픽을 직접 설정하여 제어함) 등의 개념에 대해서도 학습할 수
            있었습니다.
          </p>
        </div>
        <hr />
        <div className="postTag">
          <h6>&#128204;태그</h6>
          <ul>
            <li>
              <a>#node.js</a>
            </li>
            <li>
              <a>#게임</a>
            </li>
            <li>
              <a>#React</a>
            </li>
            <li>
              <a>#지하철</a>
            </li>
            <li>
              <a>#AWS</a>
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
