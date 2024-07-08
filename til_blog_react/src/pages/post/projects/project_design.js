import React, { useState, useEffect } from "react";
import "../../../assets/css/post.css";
import Progressbar from "../../../components/progressbar";
import PostListBottom from "../../../components/postListBottom";
import menu from "../../../assets/images/study/project/project_design_menu.jpg";
import panel from "../../../assets/images/study/project/project_design_panel.jpg";
import blog from "../../../assets/images/study/project/project_design_blog.jpg";
import blog2 from "../../../assets/images/study/project/project_design_blog2.jpg";

export default function Design() {
  return (
    /* jshint ignore:start */
    <>
      <Progressbar />
      <div className="projectPost">
        <div>
          <a>프로젝트</a>
          <h1>포토샵과 일러스트</h1>
          <h4>식당 메뉴판과 판넬, 홍보 현수막 제작기</h4>
          <p>mizzxi | 2024.03.19 21:07</p>
          <hr />
          <h4>&#128293; 내용 소개</h4>
          <img src="https://helpx.adobe.com/content/dam/help/ko/illustrator/how-to/digital-layout-design/jcr_content/main-pars/image/digital-layout-design-intro_900x506.jpg" />
          <p>
            이번 프로젝트 포스트 주제는 포토샵과 일러스트 툴을 사용한 디자인
            작업 경험에 대한 글입니다.
            <br />
            <br />
            저는 2019년 처음 Adobe Photoshop 툴을 접했고 전공 수업을 통해
            익혔으며, 2022년에는 Adobe Illustrator 툴을 접해 독학하였습니다.
            <br />
            <br /> 초기에는 단순한 호기심과 디자인에 대한 흥미로 공부한
            툴이었지만, 이 경험은 이후 프로젝트 제작이나 와이어프레임 제작에도
            활용할 수 있었고, 디자인에 대한 이해에 많은 도움이 되었습니다.
            &#128077;
          </p>
          <p className="postText">
            <h2>&#128677; 메뉴판 제작 계기</h2>
            대학생활을 하면서 항상 아르바이트를 병행했었습니다. <br />
            그리고 2020년도에 아르바이트 인연으로 만난 사장님의 제안으로
            메뉴판을 제작하게 되었습니다. <br />
            <br />
            메뉴판을 제작한 가게는 제가 홀서빙 아르바이트를 하던 돈가스
            집이었고, 사장님은 그 당시 사용하시던 메뉴판에서 메뉴 몇가지와
            가격을 수정해야하는 이유로 메뉴판 제작을 원하셨습니다. <br />
            <br />
            이건 좋은 기회다! &#128161; 라고 생각들어 기존 메뉴판의 디자인을
            참고하여 조금 더 가독성이 좋고 깔끔하게, 또 손님들의 피드백을 토대로
            디자인하여 포토샵 툴을 사용해 완성하였습니다.
            <br />
            <br />
            제작한 메뉴판은 아직까지 잘 쓰이고 있고, 삼송점과 구파발점에서
            사용되었습니다.
            <br />
            <br />
            <h2>&#128677; 메뉴판 결과</h2>
            <img src={menu} />
            <img src={blog} />
            <br />
            <h2>&#128677; 판넬과 현수막 제작 계기</h2>
            2021년도에 지인의 가게에서 판넬을 제작해달라는 요청이 들어왔습니다.
            <br />전 디자인 전공자도 아니었지만 지인분은 이전 제가 제작한 메뉴판
            디자인을 보시고 간단하게 만들어달라 하셨습니다.
            <br />
            <br />
            판넬은 생소했기에 여러 레퍼런스들을 찾아 디자인했고 지인분의 요청을
            토대로 포토샵과 일러스트 툴을 사용하여 제작하였습니다.
            <br />
            <br />
            이후에는 할인이나 메뉴 수정이 있을 때마다 수정작업을 진행했으며,
            홍보 현수막 제작도 진행하였습니다.
            <br />
            <br />
            <h2>&#128677; 판넬&현수막 결과</h2>
            <img src={panel} />
            <img src={blog2} />
            <br />
            <br />
            <br />
            <h2>&#128172; 느낀점</h2>
            <br />
            가장 크게 느낀 부분은 '디자인에는 정답이 없고, 좋은 디자인 나쁜
            디자인만이 있다'였습니다. 그리고 좋고 나쁘고는 누군가 한 명이 정하는
            것이 아니라 여러 사람들의 반응으로 알 수 있다입니다.
            <br />
            <br />
            다양한 사람들의 니즈를 충족하는 것이 너무나 어려웠고, 제작과 빠른
            완성보다는 피드백과 수정 작업에서 요청자와 제작자의 소통이 가장
            중요하다고 느꼈습니다.
            <br />
            <br />
            뿌듯하고 재미있는 경험이었지만, 디알못이었던 저에게는 너무 어려운
            경험이기도 했습니다.
            <br />
            <br />
            덕분에 포토샵 일러스트 실력은 많이 늘었습니다..&#128077;&#128077;
          </p>
        </div>
        <hr />
        <div className="postTag">
          <h6>&#128204;태그</h6>
          <ul>
            <li>
              <a>#일러스트레이터</a>
            </li>
            <li>
              <a>#포토샵</a>
            </li>
            <li>
              <a>#판넬</a>
            </li>
            <li>
              <a>#메뉴판</a>
            </li>
            <li>
              <a>#디자인</a>
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
