import React, { useState, useEffect } from "react";
import "../assets/css/postListSide.css";
import data from "../assets/post/post.json";
import $ from "jquery";

export default function PostListSide({ title }) {
  let { mainTitle, subTitle, date, link } = data[title];

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

  $(document).ready(function () {
    var currentPosition = parseInt($(".quickmenu").css("top"));
    $(window).scroll(function () {
      var position = $(window).scrollTop();
      let m = position + currentPosition;
      if (position >= 50) {
        m = position + currentPosition - 150;
      }
      //console.log(position, m);
      $(".quickmenu")
        .stop()
        .animate({ top: m + "px" }, 500);
    });
  });

  https: return (
    /* jshint ignore:start */
    <>
      <div className="listTitleSide quickmenu">
        &#128195;카테고리 - {category}의 다른 글
      </div>
      <div className="postListSide quickmenu">
        <div className="postListMainSide" id="postListMain"></div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
