import React, { useState, useEffect } from "react";
import "../assets/css/postList.css";
import data from "../assets/post/post.json";
import { useLocation } from "react-router-dom";

export default function SearchPostList() {
  const location = useLocation();
  const search = location.state.title.toLowerCase();

  const filteredData = data.all.filter(
    (item) => item.mainTitle.includes(search) || item.subTitle.includes(search)
  );

  return (
    /* jshint ignore:start */
    <>
      <div className="listTitle">&#128195; : '{search}'</div>
      <div className="postList">
        <div className="postListMain" id="postListMain">
          {filteredData.map((v, i) => (
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
