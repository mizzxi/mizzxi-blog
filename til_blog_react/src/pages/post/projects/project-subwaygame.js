import React, { useState, useEffect } from "react";
import "../../../assets/css/post.css";
import Main from "../../../assets/images/study/project/project_subway_opening.jpg";
import Content from "../../../assets/images/study/project/project_subway_game.jpg";
import Result from "../../../assets/images/study/project/project_subway_ending.jpg";
import ProjectListBottom from "../../../components/postListBottom";

export default function SubwayGame() {
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
          <h1>SubwayGame</h1>
          <h4>친구들과 함께하는 지하철 1호선 역이름 말하기 게임</h4>
          <p>mizzxi | 2024.02.16 23:16</p>
          <hr />
          <h4>❗ 주제 소개</h4>
          <img src="https://www.sisul.or.kr/open_content/skydome/images/img_subway.png" />
          지하철 역 이름을 사용하는 게임은 술자리에서 인기있는 게임 중
          하나입니다. 이 게임은 플레이어들이 지하철 역 이름을 순서대로 말하면서
          진행되며 참가자들의 관찰력, 기억력 및 반응 속도를 시험할 수 있습니다.
          SubwayGame은 1호선의 역이름을 10초안에 입력하는 게임으로 미니
          프로젝트입니다.
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
            <a href="https://subwaygame.mizzxi.site/" target="blank">
              &#128073;[게임하러 가기]&#128072;
            </a>
            <img src={Main} />
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
      <ProjectListBottom title="project" />
    </>
    /* jshint ignore:end */
  );
}
