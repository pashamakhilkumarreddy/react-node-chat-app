import React, { useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { HeaderWrapper } from "./styles";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <HeaderWrapper className="header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/">
            <img src="https://dragonball.guru/wp-content/uploads/2021/01/goku-dragon-ball-guru.jpg" alt="Header Logo" loading="lazy" decoding="async" />
          </NavLink>
          <span
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="mainNavbar"
            onClick={() => setShow((val) => !val)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>

        <div
          id="mainNavbar"
          className={clsx("navbar-menu", { "is-block": show })}
        >
          <div className="navbar-start">
            {/* <NavLink to="/" className="navbar-item">
              Home
            </NavLink> */}

            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink to="/" className="navbar-item">
                Home
              </NavLink>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a
                  href="https://www.npmjs.com/package/qrcode.react"
                  target="blank"
                  className="button is-primary"
                  rel="noopener noreferrer"
                >
                  QR Code Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
