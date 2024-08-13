import PropTypes from "prop-types";

export const SliderCard = ({ title, description, image }) => (
  <section className="flex flex-col gap-2 rounded-lg items-center">
    <div className="h-[30%] w-full bg-primary">
      <img src={image} alt={title} />
    </div>
    <h3 className="font-bold text-3xl text-primary">{title}</h3>
    <h4 className="text-light-white text-xs">{description}</h4>
  </section>
);

SliderCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
