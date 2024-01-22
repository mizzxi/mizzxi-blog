import React, { useState, useEffect } from "react";
import "../assets/css/postListBottom.css";
import data from "../assets/post/post.json";

export default function PostListBottom({ title }) {
  let { mainTitle, subTitle, date, img } = data.project;

  useEffect(() => {
    mainTitle.forEach((text, i) => {
      let postList = document.createElement("a");
      let postListHorizontal = document.createElement("div");
      let postListBox = document.createElement("div");
      let postListImg = document.createElement("img");
      let postListTitle = document.createElement("h3");
      let postListSubTitle = document.createElement("h4");
      let postListDate = document.createElement("h5");

      postListTitle.innerHTML = text;
      postListSubTitle.innerHTML = subTitle[i];
      postListDate.innerHTML = date[i];
      postListImg.src = img[i];

      postListHorizontal.className = "listHorizontal";
      postListTitle.className = "postListTitleBottom";
      postListSubTitle.className = "postListSubTitleBottom";
      postListDate.className = "postListDateBottom";
      postListImg.className = "postListImgBottom";

      postListBox.appendChild(postListTitle);
      postListBox.appendChild(postListSubTitle);
      postListHorizontal.appendChild(postListImg);
      postList.appendChild(postListHorizontal);
      postList.appendChild(postListBox);
      postList.appendChild(postListDate);

      let postListMain = document.getElementById("postListMain");
      if (postListMain) {
        postListMain.appendChild(postList);
      }
    });
  }, [mainTitle, subTitle, date, img]);
  return (
    /* jshint ignore:start */
    <>
      <div className="listTitleBottom">
        &#128195;카테고리 - {title}의 다른 글
      </div>
      <div className="postListBottom">
        <div className="postListMain" id="postListMain">
          {/* <a>
            <div className="listHorizontal">
              <img
                className="postListImgBottom"
                src="/mizzxi-blog/static/media/main_graph.de0731c66a32cc04b351.jpg"
              />
            </div>
            <div>
              <h3 className="postListTitleBottom">제목 test</h3>
              <h4 className="postListSubTitleBottom">부제목 test</h4>
            </div>
            <h5 className="postListDateBottom">2000.03.11</h5>
          </a> */}
        </div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
