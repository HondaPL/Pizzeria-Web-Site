import {combineReducers} from 'redux'
import pizzaOrderedReducer from './pizzaOrderedReducer'
import saucesReducer from './saucesReducer'
import ingredientsReducer from './ingredientsReducer'
import pizzasReducer from './pizzasReducer'
import sauceOrderedReducer from './sauceOrderedReducer'
import paymentReducer from './paymentReducer'

const allReducers = combineReducers({
    orderedPizzas: pizzaOrderedReducer,
    sauces: saucesReducer,
    ingredients: ingredientsReducer,
    pizzas: pizzasReducer,
    orderedSauces: sauceOrderedReducer,
    total: paymentReducer,
})

export default allReducers

