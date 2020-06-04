const initialState = [];

const payments = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PAYMENT':
            return [
                ...state,
                {
                    id: action.id,
                    user: action.user,
                    amount: action.amount,
                    splitBetween: action.splitBetween
                }
            ]
        case 'REMOVE_PAYMENT':
            const idxToDelete = state.findIndex(payment => payment.id === action.id);
            return [
                ...state.slice(0, idxToDelete),
                ...state.slice(idxToDelete + 1)
            ]
        default:
            return state
    }
}

export default payments;