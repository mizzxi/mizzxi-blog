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

  return (
    /* jshint ignore:start */
    <>
      <div className="listTitle">&#128195; : {category}의 모든 글</div>
      <div className="postList">
        <div className="postListMain" id="postListMain">
          {data[title].map((v, i) => (
            <a href={v.link} key={v.link}>
              <div>
                <h3 className="postListTitle">{v.mainTitle}</h3>
                <h4 className="postListSubTitle">{v.subTitle}</h4>
              </div>
              <h5 className="postListDate">{v.date}</h5>
            </a>
          ))}
        </div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
