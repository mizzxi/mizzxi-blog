import React, { useState, useEffect } from "react";
import "../assets/css/postList.css";
import data from "../assets/post/post.json";
import { useLocation } from "react-router-dom";

export default function SearchPostList() {
  const location = useLocation();
  const title = location.state.title.toLowerCase();

  useEffect(() => {
    let { mainTitle, subTitle, date, link } = JSON.parse(
      JSON.stringify(data["all"])
    );
    let deleteIndex = [];

    mainTitle.map((v, i) => {
      if (
        mainTitle[i].toLowerCase().includes(title) ||
        subTitle[i].toLowerCase().includes(title)
      ) {
      } else {
        deleteIndex.push(i);
      }
    });

    for (let i = deleteIndex.length - 1; i >= 0; i--) {
      let index = deleteIndex[i];
      mainTitle.splice(index, 1);
      subTitle.splice(index, 1);
      date.splice(index, 1);
      link.splice(index, 1);
    }

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
  }, [title]);
  return (
    /* jshint ignore:start */
    <>
      <div className="listTitle">&#128195;{title}</div>
      <div className="postList">
        <div className="postListMain" id="postListMain"></div>
      </div>
    </>
    /* jshint ignore:end */
  );
}
