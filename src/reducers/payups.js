const initialState = [];

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

    let balancedPaymentAmount = (userPaymentTotals
        .map(x => x.total)
        .reduce((a, b) => a + b, 0) / users.length).toFixed(2);

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
    let payUpId = 0;
    while (amountsOwedPerUser.filter(userOwes => userOwes.owes < 0).length > 0) {
        const largestOwes = getLargestOwes(amountsOwedPerUser);
        const largestOwed = getLargestOwed(amountsOwedPerUser);
        const oweDiff = Math.abs(amountsOwedPerUser[largestOwed.idx].owes);
        amountsOwedPerUser[largestOwed.idx] = {
            user: amountsOwedPerUser[largestOwed.idx].user,
            owes: amountsOwedPerUser[largestOwed.idx].owes + oweDiff,
            idx: amountsOwedPerUser[largestOwed.idx].idx
        }
        amountsOwedPerUser[largestOwes.idx] = {
            user: amountsOwedPerUser[largestOwes.idx].user,
            owes: amountsOwedPerUser[largestOwes.idx].owes - oweDiff,
            idx: amountsOwedPerUser[largestOwes.idx].idx
        }
        payUps.push({
            fromUser: largestOwes.user,
            toUser: largestOwed.user,
            amount: oweDiff.toFixed(2),
            id: payUpId++
        });
    }
    return payUps;
}

const payups = (state = initialState, action) => {
    switch (action.type) {
        case 'CALCULATE_PAYUPS':
            return calculatePayUps(action.payments, action.users);
        default:
            return [];
    }
}

export default payups;