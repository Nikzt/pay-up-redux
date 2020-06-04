import React from 'react';
import PropTypes from 'prop-types';

const Payment = ({onClick, amount, user, splitBetween}) => (
    <div>
        <ul onClick={onClick}>
            <li>{amount}$</li>
            <li>{user}</li>
            <li>{splitBetween}</li>
        </ul>
    </div>
);

Payment.propTypes = {
    onClick: PropTypes.func.isRequired,
    splitBetween: PropTypes.arrayOf(String).isRequired,
    user: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

export default Payment;