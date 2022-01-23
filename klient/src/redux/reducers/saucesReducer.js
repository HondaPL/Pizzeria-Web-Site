const SaucesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SAUCES':
            action.data.map((sauce,idx) => (
                sauce.count = 0
            ))
            return [...action.data]
        default:
            return state
    }
}

export default SaucesReducer;