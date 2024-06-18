import React, { useState, useEffect } from "react";
import "../assets/css/postList.css";
import data from "../assets/post/post.json";
import { useLocation } from "react-router-dom";

export default function PostList() {
  const location = useLocation();
  const title = location.state.title;
  let category = "";
  switch (title) {
    case "all":
      category = "전체 보기";
      break;
    case "project":
      category = "프로젝트";
      break;
    default:
      category = "TIL";
  }

  let { mainTitle, subTitle, date, link } = data[title];

  useEffect(() => {
    let clean = document.getElementById("postListMain");
    if (clean.childElementCount != 0) {
      while (clean.hasChildNodes()) clean.removeChild(clean.firstChild);
    }

    mainTitle.forEach((text, i) => {
      let postList = document.createElement("a");
      let postListTitle = document.createElement("h3");
      let postListSubTitle = document.createElement("h4");
      let postListDate = document.createElement("h5");

      postListTitle.innerHTML = text;
      postListSubTitle.innerHTML = subTitle[i];
      postListDate.innerHTML = date[i];
      postList.href = link[i];

      postList.className = "postListBox";
      postListTitle.className = "postListTitle";
      postListSubTitle.className = "postListSubTitle";
      postListDate.className = "postListDate";

      postList.appendChild(postListTitle);
      postList.appendChild(postListSubTitle);
      postList.appendChild(postListDate);

      let postListMain = document.getElementById("postListMain");
      if (postListMain) {
        postListMain.appendChild(postList);
      }
    });
  }, [mainTitle, subTitle, date]);
  return (
    /* jshint ignore:start */
    <>
      <div className="listTitle">&#128195; : {category}의 모든 글</div>
      <div className="postList">
        <div className="postListMain" id="postListMain"></div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
