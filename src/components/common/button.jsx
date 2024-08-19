import PropTypes from "prop-types";

export const Button = ({
  children,
  className = "",
  variant = "primary",
  ...rest
}) => {
  let _className = "";
  switch (variant) {
    case "outline":
      _className =
        "border border-primary text-light-white  px-4 py-2 rounded-md text-sm";
      break;
    case "text":
      _className = "text-primary text-sm w-fit";
      break;
    case "gradient":
      _className =
        "bg-gradient-to-r from-tertiary to-quaternary px-4 py-2 text-light-white rounded-md text-sm hover:from-quaternary hover:to-tertiary";
      break;
    case "primary":
      _className =
        "bg-primary text-light-white px-4 py-2 rounded-md text-sm hover:bg-secondary";
      break;
  }

  return (
    <button className={`${_className} ${className}`} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["outline", "text", "gradient", "primary"]),
  ButtonProps: PropTypes.object,
};
