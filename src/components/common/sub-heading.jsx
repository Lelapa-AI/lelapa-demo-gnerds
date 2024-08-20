import PropTypes from "prop-types";

export const SubHeading = ({ title }) => {
  return <h1 className="font-semibold text-2xl text-primary py-1 text-center">{title}</h1>;
};

SubHeading.propTypes = {
  title: PropTypes.string.isRequired,
};
