const PizzasReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_PIZZA':
            return [...action.data]
        default:
            return state
    }
}

export default PizzasReducer;