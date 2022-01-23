const PizzaReducer = (state = [], action) => {
    switch (action.type) {
        case 'ORDER_PIZZA':
            state.push(action.data)
            return [...state]
        case 'DELETE_PIZZA':
            state.splice(action.index, 1)
            return [...state]
        case 'REMOVE_PIZZAS':
            return []
        case 'REMOVE_INGREDIENT':
            state[action.index] = {
                ...state[action.index],
                price: state[action.index].price - action.price,
                ingredients: [...state[action.index].ingredients]
                    .filter((x, index) => {
                        return (index !== action.indexIng)
                    })
            }
            return [...state];
        case 'ADD_INGREDIENT':
            state[action.index] = {
                ...state[action.index],
                price: state[action.index].price + action.price,
                ingredients: [...state[action.index].ingredients, action.ingredient]
            }
            return [...state];
        default:
            return state
    }
}

export default PizzaReducer;