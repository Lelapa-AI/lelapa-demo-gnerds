import PropTypes from "prop-types";
import { Back, SubHeading } from "../common";

export const PageLayout = ({ children, hasBack = false, title='' }) => {
  return (
    <section className="flex flex-col gap-3 px-4 py-1">
    <section className="flex items-center gap-4">
      {hasBack && <Back />}
      <section className="w-2/3">
      {title && <SubHeading title={title}/>}
      </section>
      </section>
      {children}
    </section>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  hasBack: PropTypes.bool,
  title: PropTypes.string,
};
