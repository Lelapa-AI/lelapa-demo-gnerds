import PropTypes from "prop-types";

export const AppLayout = ({ children }) => {
  return (
    <section className="w-screen h-screen bg-background text-light-white">
      {children}
    </section>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
