import PropTypes from "prop-types";

export const Heading = ({ title }) => {
  return <h1 className="font-bold text-4xl text-primary py-1 text-center">{title}</h1>;
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};
