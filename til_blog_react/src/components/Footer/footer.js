import React from "react";
import "../../assets/css/footer.css";

export default function Footer() {
  const footer_style = {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontSize: "0.8em",
  };
  return (
    /* jshint ignore:start */
    <>
      <footer className="footerStyle">
        <a style={footer_style} href="https://github.com/mizzxi" target="blank">
          MADE BY MIZZXI | github ID
        </a>
      </footer>
    </>
    /* jshint ignore:end */
  );
}
