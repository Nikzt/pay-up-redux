let nextPaymentId = 0;
export const addPayment = (amount, user, splitBetween) => ({
    type: 'ADD_PAYMENT',
    id: nextPaymentId++,
    amount,
    user,
    splitBetween
});

export const removePayment = (id) => ({
    type: 'REMOVE_PAYMENT',
    id 
});

export const addUser = (userName) => ({
    type: 'ADD_USER',
    userName
});

export const removeUser = (userName) => ({
    type: 'REMOVE_USER',
    userName
});