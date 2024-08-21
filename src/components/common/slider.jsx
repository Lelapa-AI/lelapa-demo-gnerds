import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { map } from "lodash";
import { SliderCard } from "./slider-card";

import PropTypes from "prop-types";

export const SliderCarousel = ({ cardsData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots",
    className: "flex gap-2 items-center",
    dotsColor: "red",
  };

  return (
    <Slider {...settings}>
      {map(cardsData, ({ title, image, description, route }, index) => (
        <SliderCard
          key={index}
          title={title}
          image={image}
          description={description}
          route={route}
        />
      ))}
    </Slider>
  );
};

SliderCarousel.propTypes = {
  cardsData: PropTypes.array.isRequired,
};
