import React from "react";
import "../../assets/css/footer.css";

export default function footer() {
  const footer_style = {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontSize: "0.8em",
  };
  return (
    /* jshint ignore:start */
    <>
      <div className="footerStyle">
        <a style={footer_style} href="https://github.com/mizzxi" target="blank">
          MADE BY MIZZXI | github ID
        </a>
      </div>
    </>
    /* jshint ignore:end */
  );
}
