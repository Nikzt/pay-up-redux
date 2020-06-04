const initialState = [];

const users = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                action.userName
            ]
        case 'REMOVE_USER':
            const idxToDelete = state.findIndex(userName => userName === action.userName);
            return [
                ...state.slice(0, idxToDelete),
                ...state.slice(idxToDelete + 1)
            ]
        default:
            return state
            
    }
}

export default users;