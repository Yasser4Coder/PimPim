import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Vos opinions" />
      <h1 className="headtext__cormorant">votre avis sur nos services</h1>
      <p className="p__opensans">Nous avons hâte de lire tous vos messages</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Soumettez votre rapport" />
      <button type="button" className="custom__button">
        Envoyer
      </button>
    </div>
  </div>
);

export default Newsletter;
