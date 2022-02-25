import React, { useRef, useState, useEffect } from "react";
import { nav_links } from "../data";

const Navbar = () => {
  const linkContent = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [linkheight, setLinkheight] = useState(0);

  const navToggle = () => {
    setToggle(!toggle);
    let btn = document.getElementsByClassName("nav-toggle")[0];
    let link = document.getElementsByClassName("nav-content")[0];
    btn.classList.toggle("toggle-active");

    if (!toggle) {
      link.style.top = "54px";
    } else {
      link.style.top = `-${linkheight}px`;
    }
  };

  useEffect(() => {
    setLinkheight(linkContent.current.getBoundingClientRect().height);
  }, []);

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-header">
          <p className="logo">logo</p>
          <div className="nav-toggle " onClick={navToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          className="nav-content"
          style={{ top: "-500px" }}
          ref={linkContent}
        >
          <ul>
            {nav_links.map((link) => {
              return <LinkA key={link.id} {...link} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

// eslint-disable-next-line react/prop-types
const LinkA = ({ url, name }) => {
  return (
    <li>
      <a href={url}>{name}</a>
    </li>
  );
};

export default Navbar;
