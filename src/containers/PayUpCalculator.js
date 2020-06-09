import React from 'react';
import PropTypes from 'prop-types';
import {calculatePayups} from '../actions';
import {connect} from 'react-redux';

const PayUpCalculator = (props) =>
    (<div>
        <button onClick={() => props.calculatePayups(props.payments, props.users)}>
            PAY UP!
        </button>
    </div>);

PayUpCalculator.propTypes = {
    users: PropTypes.arrayOf(String).isRequired,
    payments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        amount: PropTypes.number.isRequired,
        user: PropTypes.string.isRequired,
        splitBetween: PropTypes.arrayOf(String).isRequired,
    }).isRequired).isRequired,
}

const mapStateToProps = (state) => {
    return {
        payments: state.payments,
        users: state.users
    }
}

const mapDispatchToProps = dispatch => ({
    calculatePayups: (payments, users) => dispatch(calculatePayups(payments, users))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PayUpCalculator);