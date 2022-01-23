const PaymentReducer = (state = 0, action) => {
    switch(action.type){
        case 'ADD_TO_ORDER':
            return state + action.data
        case 'REMOVE_FROM_ORDER':
            return state - action.data
        case 'PAY_FOR_ORDER':
            return action.data
        default:
            return state
    }
}

export default PaymentReducer;