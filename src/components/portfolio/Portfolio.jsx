import React, { useState } from "react";
import List from "./components/List";
import Items from "./components/Items";
import { projects } from "../../data";
import "./portfolio.css";

const allNavList = [
  "all",
  ...new Set(projects.map((projects) => projects.category)),
];

const Portfolio = () => {
  const [projectsItems, setProjectsItems] = useState(projects);
  const [navList, setNavLink] = useState(allNavList);

  const filterItems = (category) => {
    const NewProjectItems = projects.filter(item => item.category === category);
    category === "all"
    ? setProjectsItems(projects)
    : setProjectsItems(NewProjectItems);
  }

  return (
    <section className="portfolio section" id="work">
      <h2 className="section__title text-cs">Portfolio</h2>
      <p className="section__subtitle">
        My <span>Cases</span>
      </p>

      <List list={navList} filterItems={filterItems} />

      <div className="portfolio__container container grid">
        <Items projectsItems={projectsItems} />
      </div>
    </section>
  );
};

export default Portfolio;
