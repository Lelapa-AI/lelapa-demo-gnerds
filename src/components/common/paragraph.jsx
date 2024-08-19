import PropTypes from "prop-types";

const Paragraph = () => {
    return <p className="font-semibold text-sm text-center">Now you can translate to South African Languages</p>;
};

Paragraph.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Paragraph;
