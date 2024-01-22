import React, { useState, useEffect } from "react";
import "../assets/css/postListSide.css";
import data from "../assets/post/post.json";

export default function PostListSide({ title }) {
  let { mainTitle, subTitle, date } = data.til;

  useEffect(() => {
    mainTitle.forEach((text, i) => {
      let postList = document.createElement("a");
      let postListTitle = document.createElement("h3");
      let postListSubTitle = document.createElement("h4");
      let postListDate = document.createElement("h5");

      postListTitle.innerHTML = text;
      postListSubTitle.innerHTML = subTitle[i];
      postListDate.innerHTML = date[i];

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
      <div className="listTitle">&#128195;카테고리 - {title}의 다른 글</div>
      <div className="postList">
        <div className="postListMain" id="postListMain"></div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
