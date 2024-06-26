import React from "react";
import {
  AboutUs,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  SpecialMenu,
} from "../../container";
import { Navbar } from "../../components";
import "../../App.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Intro />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default Home;
