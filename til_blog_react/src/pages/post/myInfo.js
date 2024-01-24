import React, { useState, useEffect } from "react";
import "../../assets/css/info.css";
import PROFILEPHOTO from "../../assets/images/study/profilePhoto.jpg";
import PROJECT1 from "../../assets/images/study/main_dali.jpg";
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
    } else if (window.scrollY >= 3 && window.scrollY < 700) {
      setSkillTitle("hidden");
      setProfileTitle("slide-in-right");
    } else if (window.scrollY >= 700 && window.scrollY < 1000) {
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
            프론트엔드 개발자{" "}
            <div className="">
              <p>박미현</p>
            </div>
            <h5>
              프론트엔드 개발자는 웹 및 앱 인터페이스를 디자인하고 구현하는
              전문가로, HTML, CSS, JavaScript 등의 기술을 사용하여 사용자 경험을
              향상시키는 역할을 합니다. 사용자 인터페이스(UI)와 사용자
              경험(UX)에 중점을 두며, 디자인과 개발의 조화를 이루어 웹 및 앱의
              시각적 및 기능적 측면을 책임집니다. 최신 웹 기술 및 디자인
              트렌드를 따라가며 창의적이고 사용자 친화적인 환경을 만들어냅니다.
            </h5>
          </h2>
          <div className="mind">
            <p>
              지속적 학습과 개방된 마음 & 사용자 중심 사고 & 협업과 소통 능력
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
            <a className="project1" href="project-dali">
              <div className="project">
                <img src={PROJECT1} />
              </div>
            </a>
            <a className="project2" href="/">
              <div className="project">
                <img src={PROJECT1} />
              </div>
            </a>
            <a className="project3" href="/">
              <div className="project">
                <img src={PROJECT1} />
              </div>
            </a>
          </div>
          <div className="contact"></div>
        </div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
