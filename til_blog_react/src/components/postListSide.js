import React, { useState, useEffect } from "react";
import "../assets/css/postListSide.css";
import data from "../assets/post/post.json";

export default function PostListSide({ title }) {
  let { mainTitle, subTitle, date, link } = data[title];

  useEffect(() => {
    mainTitle.forEach((text, i) => {
      let postList = document.createElement("a");
      let postListTitle = document.createElement("h3");
      let postListSubTitle = document.createElement("h4");
      let postListDate = document.createElement("h5");

      postListTitle.innerHTML = text;
      postListSubTitle.innerHTML = subTitle[i];
      postListDate.innerHTML = date[i];
      postList.href = link[i];

      postList.className = "postListBoxSide";
      postListTitle.className = "postListTitleSide highlight";
      postListSubTitle.className = "postListSubTitleSide";
      postListDate.className = "postListDateSide";

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
      <div className="listTitleSide">&#128195;카테고리 - {title}의 다른 글</div>
      <div className="postListSide">
        <div className="postListMainSide" id="postListMain"></div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
