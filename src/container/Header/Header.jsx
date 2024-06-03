import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">PimPim est là</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        {" "}
        On vous invite à déguster nos délicieux plats et pizzas...vous allez
        également vous régaler avec nos{" "}
      </p>
      <button type="button" className="custom__button">
        Parcourir davantage
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
