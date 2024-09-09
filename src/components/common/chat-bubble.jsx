import React from 'react'
import PropTypes from 'prop-types';

export const ChatBubble = ({ mode, text }) => {
    return (
        <div className={`chat-bubble ${mode}`}>
            {mode === 'to' && <div className="speaker-icon">🔊</div>}
            <div className="chat-text">{text}</div>
        </div>
    );
};

ChatBubble.propTypes = {
    mode: PropTypes.oneOf(['from', 'to']).isRequired,
    text: PropTypes.string.isRequired,
};

