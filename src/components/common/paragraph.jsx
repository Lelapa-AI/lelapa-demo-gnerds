import PropTypes from "prop-types";

export const P = ({ children }) => {
  return <p className="text-xs">{children}</p>;
};

P.propTypes = {
  children: PropTypes.node.isRequired,
};
