import PropTypes from "prop-types";

export const AppLayout = ({ children }) => (
  <section className="h-screen bg-background text-light-white">
    {children}
  </section>
);

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
