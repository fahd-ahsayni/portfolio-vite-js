import React from "react";
import profileImg from "../../assets/profile-me.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTow from "../../assets/shape-2.png";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello, <span>My Name is</span>
          </p>

          <h1 className="home__title text-cs">
            <span>Fahd</span>
            {" AHSAYNI"}
          </h1>

          <p className="home__job">
            <span className="text-cs">I am</span>{" "}
            <b>Full Stack Web Developer</b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img
                src={profileImg}
                alt="image profile"
                className="home__profile"
              />
            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">
                {"12 "} <b>+</b>
              </span>
              <span className="text-cs text-sm">
                Years of <b>Experience</b>
              </span>
            </p>
            <p className="home__data home__data-tow">
              <span className="text-lg">330</span>
              <span className="text-cs text-sm">
                Complet <b>Projects</b>
              </span>
            </p>

            <img src={shapeOne} alt="shape one" className="shape shape__1" />
            <img src={shapeTow} alt="shape one" className="shape shape__2" />
            <img src={shapeTow} alt="shape one" className="shape shape__3" />
          </div>

          <p className="home__text">
            From Morocco, Laayoune, I Have rich experience in web design, also I
            am good at wordpress, I love to talk with you about our unique
          </p>

          <div className="home__socials">
            <a href="" className="home__social-link">
              <FaTwitter />
            </a>
            <a href="" className="home__social-link">
              <FaWhatsapp />
            </a>
            <a href="" className="home__social-link">
              <FaGithub />
            </a>
          </div>
          <div className="home__btns">
            <a href="" className="btn text-cs">
              Download CV
            </a>
            <a href="" className="hero__link text-cs">
              My Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
