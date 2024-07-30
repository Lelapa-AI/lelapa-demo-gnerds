import PropTypes from "prop-types";

export const Heading = ({ title }) => {
  return <h1 className="font-extrabold text-6xl py-1">{title}</h1>;
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};
