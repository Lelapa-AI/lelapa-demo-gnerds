import PropTypes from "prop-types";
import { Back } from "../common";

export const PageLayout = ({ children, hasBack = false }) => {
  return (
    <section className="flex flex-col gap-3 px-10 py-4">
      {hasBack && <Back />}
      {children}
    </section>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  hasBack: PropTypes.bool,
};
