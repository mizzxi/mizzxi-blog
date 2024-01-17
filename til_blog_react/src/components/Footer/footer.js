import React, { useState } from "react";
import "../../assets/css/footer.css";
import UP from "../../assets/images/ico/up.png";
import UP2 from "../../assets/images/ico/up2.png";

export default function Footer() {
  const footer_style = {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontSize: "0.8em",
  };

  const [upIco, setUpIco] = useState(UP);

  const MoveToTop = () => {
    if (window.scrollY != 0) {
      setUpIco(UP2);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setUpIco(UP);
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
  };

  return (
    /* jshint ignore:start */
    <>
      <footer className="footerStyle">
        <a style={footer_style} href="https://github.com/mizzxi" target="blank">
          MADE BY MIZZXI | github ID
        </a>
      </footer>
      <button className="footerUP" onClick={MoveToTop}>
        <img id="up" src={upIco} />
      </button>
    </>
    /* jshint ignore:end */
  );
}
