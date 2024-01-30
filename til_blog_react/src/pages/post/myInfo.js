import React, { useState, useEffect } from "react";
import "../../assets/css/info.css";
import PROFILEPHOTO from "../../assets/images/study/profilePhoto.jpg";
import PROJECT1 from "../../assets/images/study/main_dali.jpg";
import PROJECT2 from "../../assets/images/study/project/project_graph_dbpia.jpg";
import PROJECT3 from "../../assets/images/study/project/project_vote_result.jpg";
import {
  Aws,
  Bigquery,
  Chrome,
  Css,
  Github,
  GA,
  Html,
  Java,
  Js,
  Node,
  Python,
  ReactIco,
  Spring,
  Elastic,
} from "../..";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function MyInfo() {
  const [profileTitle, setProfileTitle] = useState("hidden");
  const [skillTitle, setSkillTitle] = useState("hidden");
  const [projectTitle, setProjectTitle] = useState("hidden");

  const [skillLineTop, setSkillLineTop] = useState("hidden");
  const [skillLineDown, setSkillLineDown] = useState("hidden");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY == 0) {
      setSkillLineTop("hidden");
      setSkillLineDown("hidden");
    } else if (window.scrollY >= 3 && window.scrollY < 600) {
      setSkillTitle("hidden");
      setProfileTitle("slide-in-right");
    } else if (window.scrollY >= 400 && window.scrollY < 1000) {
      setSkillLineTop("scale-up-ver-top");
    } else if (window.scrollY >= 1050 && window.scrollY < 1900) {
      setProfileTitle("hidden");
      setProjectTitle("hidden");
      setSkillTitle("slide-in-left");
    } else if (window.scrollY >= 2200 && window.scrollY < 2450) {
      setSkillLineDown("scale-up-ver-top");
    } else if (window.scrollY >= 2300 && window.scrollY < 3800) {
      setSkillTitle("hidden");
      setProjectTitle("slide-in-right");
    } else {
      setProjectTitle("hidden");
    }
  };

  return (
    /* jshint ignore:start */
    <>
      <div className="info">
        <div className="profile">
          <div className="profileCover" />
          <h1 className={profileTitle}>About Me</h1>
          <img src={PROFILEPHOTO} />
          <h2>
            프론트엔드 개발자
            <div className="">
              <p>박미현</p>
            </div>
            <h5>
              어릴 적부터 게임을 좋아했습니다. 단순히 게임을 플레이하는 것에
              그치지 않고, 게임의 스토리와 구성을 주의 깊게 관찰하며, UI/UX를
              분석하고 개선하는 것에 흥미를 느꼈습니다. 이제는 직접 개발을
              하면서 사용자의 관점에서 기획하여 새로운 프로그램을 만들어내고, 또
              피드백을 받아 발전시켜가는 과정이 재미있습니다. 개발자에게는
              지속적인 학습, 사용자 중심 사고, 협업과 소통 능력이 중요하다
              생각합니다. 저는 앞으로도 이러한 가치를 중심으로 공부하여
              사람들에게 <div>필요한 개발자</div>가 되고 싶습니다.
            </h5>
          </h2>
          <div className="mind">
            <p>
              내가 생각하는 프론드엔드 개발자의 중요한 역량 세가지:
              <br />
              <div id="typingWrapper">
                <div id="typing">
                  지속적 학습과 개방된 마음 & 사용자 중심 사고 & 협업과 소통
                  능력
                </div>
              </div>
            </p>
          </div>
        </div>
        <div className="skills">
          <div className={skillLineTop}>
            <p className="skillsP1" />
            <p className="skillsP2" />
            <p className="skillsP3" />
          </div>
          <div className="skillsMain">
            <h1 className={skillTitle}>Skills</h1>
            <div className="skill">
              <div className="skillGroup">
                <span
                  data-tooltip-id="skill-tooltip"
                  data-tooltip-content={"JavaScript [Familiar]"}
                >
                  <img src={Js} />
                </span>
                <span
                  data-tooltip-id="skill-tooltip"
                  data-tooltip-content={"HTML [Familiar]"}
                >
                  <img src={Html} />
                </span>
                <span
                  data-tooltip-id="skill-tooltip"
                  data-tooltip-content={"CSS [Familiar]"}
                >
                  <img src={Css} />
                </span>
                <span
                  data-tooltip-id="skill-tooltip"
                  data-tooltip-content={"React [Familiar]"}
                >
                  <img src={ReactIco} />
                </span>
              </div>
              <div className="skillGroup">
                <span
                  data-tooltip-id="skill-tooltip"
                  data-tooltip-content={"Java [studying]"}
                >
                  <img src={Java} />
                </span>
                <span
                  data-tooltip-id="skill-tooltip"
                  data-tooltip-content={"Python [Familiar]"}
                >
                  <img src={Python} />
                </span>
                <span
                  data-tooltip-id="skill-tooltip"
                  data-tooltip-content={"Node.js [studying]"}
                >
                  <img src={Node} />
                </span>
                <span
                  data-tooltip-id="skill-tooltip"
                  data-tooltip-content={"Spring [studying]"}
                >
                  <img src={Spring} />
                </span>
              </div>
              <div className="skillGroup">
                <span
                  data-tooltip-id="skill-tooltip"
                  data-tooltip-content={"Aws [tried]"}
                >
                  <img src={Aws} />
                </span>
                <span
                  data-tooltip-id="skill-tooltip"
                  data-tooltip-content={"Chrome extension [tried]"}
                >
                  <img src={Chrome} />
                </span>
                <span
                  data-tooltip-id="skill-tooltip"
                  data-tooltip-content={"Google Analytics [tried]"}
                >
                  <img src={GA} />
                </span>
                <span
                  data-tooltip-id="skill-tooltip"
                  data-tooltip-content={"BigQuery [tried]"}
                >
                  <img src={Bigquery} />
                </span>
                <span
                  data-tooltip-id="skill-tooltip"
                  data-tooltip-content={"ElasticSearch & Kibana [tried]"}
                >
                  <img src={Elastic} />
                </span>
                <span
                  data-tooltip-id="skill-tooltip"
                  data-tooltip-content={"Github"}
                >
                  <img src={Github} />
                </span>
              </div>
            </div>
          </div>
          <ReactTooltip id="skill-tooltip" place="bottom" />
          <div className={skillLineDown}>
            <p className="skillsP4" />
            <p className="skillsP5" />
            <p className="skillsP6" />
          </div>
        </div>
        <div className="projects">
          <div className="projectCover" />
          <h1 className={projectTitle}>Projects</h1>
          <div className="projectMain">
            <div className="project1">
              <div className="project">
                <img src={PROJECT1} />
                <div id="projectText">
                  <p>여성 의류 쇼핑몰 전략 대시보드 제작</p>
                  <p>
                    여성 의류 쇼핑몰 달리호텔의 제품, 고객, 매출 등의 데이터를
                    수집 가공하여 판매성과 및 추세를 파악할 수 있는 대시보드
                    제작 프로젝트
                  </p>
                  <p>2022.07.01 ~ 2023.02.28</p>
                  <a href="project-dali">클릭하여 게시물로 이동</a>
                </div>
              </div>
            </div>
            <div className="project2">
              <div className="project">
                <img src={PROJECT2} />
                <div id="projectText">
                  <p>막대그래프 왜곡 탐지 및 교정 시스템 개발과 논문 작성</p>
                  <p>
                    웹페이지 상의 그래프 수집, 그래프 분류, 그래프 상의 데이터
                    추정, 정확한 그래프 생성의 기능으로 구성된 크롬 확장
                    프로그램을 개발과 연구 논문 작성
                  </p>
                  <p>2022.12.10 ~ 2022.09.05</p>
                  <a href="project-graph">클릭하여 게시물로 이동</a>
                </div>
              </div>
            </div>
            <div className="project3">
              <div className="project">
                <img src={PROJECT3} />
                <div id="projectText">
                  <p>대선 데이터 기반 분석 대시보드</p>
                  <p>
                    2022 대선 데이터를 기반으로 다음 대선 입후보자들을 타깃으로
                    한 선거 전략 대시보드 제작
                  </p>
                  <p>2022.05.01 ~ 2022.06.01</p>
                  <a href="project-vote">클릭하여 게시물로 이동</a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact">
            <a href="mailto:3093977@naver.com">&#128386; 3093977@naver.com</a>

            <p>카카오톡 ID: mizzxi</p>
          </div>
        </div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
