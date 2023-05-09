import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ShapeTow from "../../../assets/shape-2.png"

const Items = ({ projectsItems }) => {
  return (
    <>
      {projectsItems.map((project) => {
        const { id, img, category, title, description } = project;
        return (
            <div className="portfolio__items card card__two" key={id}>
                <div className="portfolio__img-wrapper">
                    <img src={img} alt={title} className="portfolio__img" />
                </div>

                <span className="portfolio__category text-cs">{category}</span>
                <h3 className="portfolio__title">{title}</h3>
                <p className="portfolio__description">{description}</p>

                <a href="" className="link">
                    See Pricing
                    <FaArrowRight className="link__icon" />
                </a>

                <img src={ShapeTow} alt='shape' className="shape c__shape" />
            </div>
        )
      })}
    </>
  );
};

export default Items;
