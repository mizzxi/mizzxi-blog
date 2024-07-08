import React, { useState, useEffect } from "react";
import "../assets/css/postListSide.css";
import data from "../assets/post/post.json";
import $ from "jquery";

export default function PostListSide({ title }) {
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

  return (
    /* jshint ignore:start */
    <>
      <div className="listTitleSide quickmenu">
        &#128195;카테고리 - {category}의 다른 글
      </div>
      <div className="postListSide quickmenu">
        <div className="postListMainSide" id="postListMain">
          {data[title].map((v, i) => (
            <a href={v.link} key={v.link}>
              <div>
                <h3 className="postListTitleSide highlight">{v.mainTitle}</h3>
                <h4 className="postListSubTitleSide">{v.subTitle}</h4>
              </div>
              <h5 className="postListDateSide">{v.date}</h5>
            </a>
          ))}
        </div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
