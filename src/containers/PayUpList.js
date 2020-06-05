import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PayUp from '../components/PayUp'

class PayUpList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>PAY UP BITCHES</h2>
                <div>
                    {this.props.payUps.map(payUp => (
                        <div key={payUp.fromUser + payUp.toUser}>{payUp.fromUser} pays {payUp.amount} to {payUp.toUser}</div>
                    ))}
                </div>
            </div>
        )
    }
}

const calculatePayUps = (payments, users) => {
    if (payments.length < 1 && users.length < 2)
        return [];

    let userPaymentTotals = users.map(user => {
        return {
            user: user,
            total: payments
                .filter(payment => payment.user === user)
                .map(payment => payment.amount)
                .reduce((a, b) => a + b, 0)
        }
    });

    let balancedPaymentAmount = userPaymentTotals
        .map(x => x.total)
        .reduce((a, b) => a + b, 0) / users.length;

    let userIdx = 0;
    let amountsOwedPerUser = userPaymentTotals
        .map(userTotal => {
            return {
                user: userTotal.user,
                owes: balancedPaymentAmount - userTotal.total,
                idx: userIdx++
            }
        });

    const getLargestOwes = (owedPerUser) => {
        if (owedPerUser.length < 1)
            return null;
        else if (owedPerUser.length < 2)
            return owedPerUser[0];
        else
            return owedPerUser.reduce((prev, current) => (prev.owes > current.owes) ? prev : current);
    }
    const getLargestOwed = (owedPerUser) => {
        if (owedPerUser.length < 1)
            return null;
        else if (owedPerUser.length < 2)
            return owedPerUser[0];
        else
            return owedPerUser.reduce((prev, current) => (prev.owes < current.owes) ? prev : current);
    }
    let payUps = [];
    while (amountsOwedPerUser.filter(userOwes => userOwes.owes < 0).length > 0) {
        let largestOwes = getLargestOwes(amountsOwedPerUser);
        let largestOwed = getLargestOwed(amountsOwedPerUser);
        payUps.push({
            fromUser: largestOwes.user,
            toUser: largestOwed.user,
            amount: largestOwes.owes
        });
        amountsOwedPerUser[largestOwed.idx].owes += amountsOwedPerUser[largestOwes.idx].owes;
        console.log(amountsOwedPerUser);
    }
    return payUps;
}

const mapStateToProps = state => {
    return {payUps: calculatePayUps(state.payments, state.users)}
}

export default connect(mapStateToProps)(PayUpList)
