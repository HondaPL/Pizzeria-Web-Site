const SauceReducer = (state = [], action) => {
    switch (action.type) {
        case 'ORDER_SAUCE':
            action.data.count++
            if (action.data.count === 1)
                return ([...state, action.data])
            return ([...state])
        case 'DELETE_SAUCE':
            action.sauce.count--
            if (action.sauce.count === 0)
                state = [...state].filter((x, index) => {
                    console.log(x)
                    return (x.id !== action.sauce.id)
                })
            return [...state];
        case 'REMOVE_SAUCES':
            return []
        default:
            return state
    }
}

export default SauceReducer;