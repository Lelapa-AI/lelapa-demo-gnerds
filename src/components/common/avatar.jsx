import PropTypes from 'prop-types'

export const Avatar = ({name}) => (
    <img
    src={`https://eu.ui-avatars.com/api/?name=${name}&background=1E2D40&color=fff`}
    alt="profile"
    className="w-8 h-8 rounded-full"
/>);

Avatar.propTypes = {
    name: PropTypes.string.isRequired
}
