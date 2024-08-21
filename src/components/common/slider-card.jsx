import PropTypes from "prop-types";
import { Heading } from "./heading";
import { Link } from "@tanstack/react-router";

export const SliderCard = ({ title, description, image, route }) => (
  <section>
    <Link to={route}>
      <section className="flex flex-col gap-2 items-center">
        <div className="h-56 w-full bg-primary rounded-2xl flex justify-center">
          <img src={image} alt={title} />
        </div>
        <Heading title={title} />
        <h4 className="text-light-white text-sm">{description}</h4>
      </section>
    </Link>
  </section>
);

SliderCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired, // Add the route prop to the propTypes
};
