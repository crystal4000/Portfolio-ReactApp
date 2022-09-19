import React from "react";
import "./about.css";
import ME from "../../assets/grad.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small></small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
          </div>

          <p>
            Enthusiastic front-end developer, skilled in Boostrap and React.
            Seeking to deliver high-quality web development projects.
            Contributed to some GitHub projects and completed 10+ personal
            front-end development projects with 95% client satisfaction.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
