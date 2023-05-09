import React from "react";
import { services } from "../../data";
import { FaArrowRight } from "react-icons/fa";
import shapeTow from "../../assets/shape-2.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Navigation } from "swiper";

import "./services.css";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title text-cs">What I Do</h2>
      <p className="section__subtitle">
        My <span>Services</span>
      </p>

      <Swiper
        className="services__container container mySwiper"
        loop={true}
        centeredSlides={true}
        autoplay = {{
          delay: 2500,
          disableOnInteraction: false
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Navigation]}
      >
        {services.map(({ id, name, title, description }) => (
          <SwiperSlide
            key={id}
            className="services__item card swiper__wrapper card__one"
          >
            <span className="services__subtitle text-cs">{name}</span>
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>

            <a href="" className="link">
              see Pricing
              <FaArrowRight className="link__icon" />
            </a>

            <img src={shapeTow} alt="" className="shape c__shape" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
