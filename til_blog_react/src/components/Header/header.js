import React from "react";
import MENU from "../../assets/images/ico/menu.png";
import SEARCH from "../../assets/images/ico/search.png";
import DELETE from "../../assets/images/ico/delete.png";
import "../../assets/css/header.css";

export default function header() {
  const header_style = {
    fontWeight: "bold",
    fontFamily: "'Noto Sans KR', sans-serif",
    fontSize: "2.5em",
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

  const searchClick = (e) => {};

  const titleClick = (e) => {
    window.location.reload();
  };

  return (
    /* jshint ignore:start */
    <>
      <div className="containerStyle">
        <button className="menu" onClick={menuClick}>
          <img src={MENU}></img>
        </button>
        <button style={header_style} className="title" onClick={titleClick}>
          mizzxi TIL Blog
        </button>
        <div>
          <input
            id="searchInput"
            className="searchBox"
            type="test"
            placeholder="검색내용을 입력하세요."
          ></input>
          <button type="submit" className="search" onClick={searchClick}>
            <img src={SEARCH}></img>
          </button>
        </div>
      </div>
      <div id="gnbBack" className="gnbBack hide"></div>
      <div id="gnb" className="gnb shadow hide">
        <div className="containerStyle">
          <button className="menu" onClick={deleteClick}>
            <img src={DELETE}></img>
          </button>
        </div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
