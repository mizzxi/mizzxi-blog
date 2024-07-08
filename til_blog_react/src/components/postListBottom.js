import React, { useState, useEffect } from "react";
import "../assets/css/postListBottom.css";
import data from "../assets/post/post.json";

export default function PostListBottom({ title }) {
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
      <div className="listTitleBottom">
        &#128195;카테고리 - {category}의 다른 글
      </div>
      <div className="postListBottom">
        <div className="postListMain" id="postListMain">
          {data[title].map((v, i) => (
            <a href={v.link} key={v.link}>
              <div className="listHorizontal">
                <img className="postListImgBottom" src={v.img} />
              </div>
              <div>
                <h3 className="postListTitleBottom">{v.mainTitle}</h3>
                <h4 className="postListSubTitleBottom">{v.subTitle}</h4>
              </div>
              <h5 className="postListDateBottom">{v.date}</h5>
            </a>
          ))}
        </div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
