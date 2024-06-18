import React from "react";
import "../../assets/css/header.css";
import GIT from "../../assets/images/ico/git.png";
import { useNavigate } from "react-router-dom";
import data from "../../assets/post/post.json";
import SvgIcon from "@mui/material/SvgIcon";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  const postCount = data.all.mainTitle.length;

  const navigate = useNavigate();
  const header_style = {
    fontWeight: "bold",
    fontFamily: "'Noto Sans KR', sans-serif",
    fontSize: "2em",
  };

  const menuClick = (e) => {
    let gnb = document.getElementById("gnb");
    let gnbB = document.getElementById("gnbBack");

    gnb.classList.remove("hide");
    gnb.classList.remove("scale-out-hor-left");
    gnb.classList.add("block");
    gnb.classList.add("scale-in-hor-left");

    gnbB.classList.remove("hide");
    gnbB.classList.add("block");
  };

  const deleteClick = (e) => {
    let gnb = document.getElementById("gnb");
    let gnbB = document.getElementById("gnbBack");

    gnb.classList.remove("scale-in-hor-left");
    gnb.classList.remove("block");
    gnb.classList.add("scale-out-hor-left");
    gnbB.classList.remove("block");
    gnbB.classList.add("hide");
  };

  const searchClick = (e) => {
    let searchText = document.getElementById("searchInput").value;
    navigate("searchPostList", { state: { title: searchText } });
  };

  const searchSubmit = (e) => {
    if (e.key == "Enter") {
      searchClick();
    }
  };

  const postListMove = (e) => {
    console.log(e.target.id);
    deleteClick();
    navigate("postList", { state: { title: e.target.id } });
  };

  return (
    /* jshint ignore:start */
    <>
      <div className="containerStyle">
        <button className="menu" onClick={menuClick}>
          <SvgIcon component={MenuIcon} fontSize="large" />
        </button>
        <a href="/mizzxi-blog" style={header_style} className="headerTitle">
          mizzxi TIL Blog
          <p className="headerMiniTitle">
            "사용자를 우선시하며, 지속적인 성장을 추구하는 mizzxi의
            블로그입니다."
          </p>
        </a>
        <div>
          <input
            id="searchInput"
            className="searchBox"
            type="test"
            placeholder="검색내용을 입력하세요."
            onKeyDown={searchSubmit}
          ></input>
          <button type="submit" className="search" onClick={searchClick}>
            <SvgIcon component={SearchIcon} fontSize="large" />
          </button>
        </div>
      </div>
      <div id="gnbBack" className="gnbBack hide"></div>
      <div id="gnb" className="gnb shadow hide">
        <div className="containerStyle">
          <button className="menu" onClick={deleteClick}>
            <SvgIcon component={ClearIcon} fontSize="large" />
          </button>
          <div className="gnbText">
            <h4>
              <a onClick={postListMove} id="all">
                전체 보기 ({postCount})
              </a>
            </h4>
            <br />
            <h5>카테고리</h5>
            <ul>
              <li>
                <a onClick={postListMove} id="til">
                  - TIL
                </a>
              </li>
              <li>
                <a href="daily" style={{ color: "rgb(22, 22, 22)" }}>
                  - 일상
                </a>
              </li>
              <li>
                <a onClick={postListMove} id="project">
                  - 프로젝트 ⭐
                </a>
              </li>
              <li>
                <a href="interactive" style={{ color: "rgb(22, 22, 22)" }}>
                  - 인터랙티브
                </a>
              </li>
            </ul>
          </div>
          <div className="gnbFooter">
            <a href="https://github.com/mizzxi" target="blank">
              <img src={GIT} />
            </a>
            <p>Created based on TISTORY.</p>
          </div>
        </div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
