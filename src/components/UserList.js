import React from 'react';
import PropTypes from 'prop-types';
import User from '../components/User';

const UserList = ({users, removeUser}) => (
    <ul>
        {users.map((user) => (
            <User key={user}
            userName={user}
            onClick={() => removeUser(user)}/>
        ))}
    </ul>
);

UserList.propTypes = {
    users: PropTypes.arrayOf(String).isRequired
}

export default UserList;