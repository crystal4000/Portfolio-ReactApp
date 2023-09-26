import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

//Using map method to loop through an array and display items

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Startup Website for Web Company with Bootstrap 5",
    github: "https://github.com/crystal4000/Startup",
    demo: "https://crystal4000.github.io/Startup/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Replication of Zuri Training Website with Boostrap 5",
    github: "https://github.com/crystal4000/Zuri--FinalProject",
    demo: "https://crystal4000.github.io/Zuri--FinalProject/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Registration Form With JavaScript",
    github: "https://github.com/crystal4000/Zuri-Training---Registration-Form",
    demo: "https://crystal4000.github.io/Zuri-Training---Registration-Form/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Food Application",
    github: "https://rococo-mermaid-0f7834.netlify.app/",
    demo: "https://app.netlify.com/sites/keen-capybara-50163b/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Crypto Currency Application",
    github: "https://github.com/Dark-wiz/coeral-frontend",
    demo: "http://coeral-frontend.herokuapp.com/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Movie Application with TMBD API",
    github: "https://github.com/crystal4000/ZurixHng/tree/main/tasktwo-movie",
    demo: "https://app.netlify.com/sites/capable-sawine-0e65ba/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Works</h5>
      <h2>Portfolio</h2>

      <div className=" portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
