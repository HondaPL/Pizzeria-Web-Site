const IngredientsReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_INGREDIENTS':
            return [...action.data]
        default:
            return state
    }
}

export default IngredientsReducer;