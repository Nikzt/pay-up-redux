import React from 'react';
import PropTypes from 'prop-types';

const User = ({onClick, userName}) => (
    <div>
        <li onClick={onClick}>
            {userName}
        </li>
    </div>
);

User.propTypes = {
    userName: PropTypes.string.isRequired,
}

export default User;