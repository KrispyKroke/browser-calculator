

const calculationsReducer = (state = {}, action) => {
    if (action.type === 'SET_CALCULATIONS') {
        return action.payload;
    }
    return state;
}

export default calculationsReducer;