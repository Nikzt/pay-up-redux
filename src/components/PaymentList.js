import React from 'react';
import Payment from './Payment';
import PropTypes from 'prop-types';

const PaymentList = ({payments, removePayment}) => (
    <ul>
        {payments.map(payment => (
            <Payment 
                key={payment.id}
                amount={payment.amount}
                user={payment.user}
                splitBetween={payment.splitBetween}
                onClick={() => removePayment(payment.id)}
            />
        ))}
    </ul>
);

PaymentList.propTypes = {
    payments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        amount: PropTypes.number.isRequired,
        user: PropTypes.string.isRequired,
        splitBetween: PropTypes.arrayOf(String).isRequired,
    }).isRequired).isRequired,
    removePayment: PropTypes.func.isRequired
}

export default PaymentList;