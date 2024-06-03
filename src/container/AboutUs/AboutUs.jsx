import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">À Propos De Nous</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          On vous invite à déguster nos délicieux plats et pizzas...vous allez
          également vous régaler avec nos <br />
          - Restaurant <br />
          <a href="https://www.google.com/maps/place/Pimpim/@36.7593005,3.4701741,16z/data=!4m10!1m2!2m1!1sQF57%2BWMP,+Unnamed+Road,+Boumerdes!3m6!1s0x128e693d0f797ef7:0x5994702123325167!8m2!3d36.75983!4d3.4641893!15sCiFRRjU3K1dNUCwgVW5uYW1lZCBSb2FkLCBCb3VtZXJkZXNaISIfcWY1NyB3bXAgdW5uYW1lZCByb2FkIGJvdW1lcmRlc5IBCnJlc3RhdXJhbnSaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTnRkamN0VWtkbkVBReABAA!16s%2Fg%2F11gy8hgrtr?entry=ttu">
            - L'albatros , Boumerdès, Bou-Merdes, Algeria
          </a>
          - oussama.soumiamakh@gmail.com
        </p>
        <button type="button" className="custom__button">
          apprendre encore plus
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Notre histoire</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Nous sommes fiers de notre longue et passionnante histoire dans le
          monde de l'hôtellerie et de la gastronomie. Notre voyage a commencé il
          y a des années et depuis lors, nous sommes heureux d'offrir des
          expériences exceptionnelles à nos clients.
        </p>
        <button type="button" className="custom__button">
          apprendre encore plus
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
