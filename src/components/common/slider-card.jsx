import PropTypes from "prop-types";

export const SliderCard = ({ title, description, image }) => (
  <section>
    <section className="flex flex-col gap-2 items-center">
      <div className="h-56 w-full bg-primary rounded-2xl flex justify-center">
        <img src={image} alt={title} />
      </div>
      <h3 className="font-bold text-3xl text-primary">{title}</h3>
      <h4 className="text-light-white text-sm">{description}</h4>
    </section>
  </section>
);

SliderCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
