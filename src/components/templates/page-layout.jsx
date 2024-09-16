import PropTypes from "prop-types";
import { Back, SubHeading } from "../common";
import { useScreen } from "../../hooks";

export const PageLayout = ({
  children,
  hasBack = false,
  title = "",
  rightHeader = "",
}) => {
  const { isWeb } = useScreen();
  return (
    <section className="flex flex-col gap-3 px-4 py-1">
      {!isWeb && (
        <section className="flex items-center gap-4">
          {hasBack && <Back />}
          <section className="flex flex-col justify-center w-2/3">
            {title && <SubHeading title={title} />}
            {rightHeader && (
              <p className="text-xs text-center text-grey">In {rightHeader}</p>
            )}
          </section>
        </section>
      )}
      {children}
    </section>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  hasBack: PropTypes.bool,
  title: PropTypes.string,
  rightHeader: PropTypes.string || PropTypes.node,
};
