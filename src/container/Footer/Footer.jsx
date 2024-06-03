import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactez nous</h1>
        <p className="p__opensans">
          <a href="https://www.google.com/maps/place/Pimpim/@36.7593005,3.4701741,16z/data=!4m10!1m2!2m1!1sQF57%2BWMP,+Unnamed+Road,+Boumerdes!3m6!1s0x128e693d0f797ef7:0x5994702123325167!8m2!3d36.75983!4d3.4641893!15sCiFRRjU3K1dNUCwgVW5uYW1lZCBSb2FkLCBCb3VtZXJkZXNaISIfcWY1NyB3bXAgdW5uYW1lZCByb2FkIGJvdW1lcmRlc5IBCnJlc3RhdXJhbnSaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTnRkamN0VWtkbkVBReABAA!16s%2Fg%2F11gy8hgrtr?entry=ttu">
            L'albatros , Boumerdès, Bou-Merdes, Algeria
          </a>
        </p>
        <p className="p__opensans">+213 0554 70 39 37</p>
        <p className="p__opensans">+213 0554 70 39 37</p>
      </div>

      <div className="app__footer-links_logo text-center flex flex-col items-center">
        <img src={images.pim} alt="footer_logo" />
        <p className="p__opensans">
          &quot;.Une cuisine de qualité crée des ponts de souvenirs&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons flex">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Journée de travail</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 PimPim B.Yasser. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
