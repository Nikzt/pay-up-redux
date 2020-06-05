import React from 'react';
import PropTypes from 'prop-types';

const PayUp = (fromUser, toUser, amount) => (
    <div>
       {fromUser} pays {amount} to {toUser}
    </div>
);

PayUp.propTypes = {
    fromUser: PropTypes.string.isRequired,
    toUser: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
}

export default PayUp;