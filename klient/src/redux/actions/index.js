export const orderPizza = (pizza) => {
    return{
        type: 'ORDER_PIZZA',
        data: pizza
    }
}

export const orderSauce = (sauce) => {
    console.log(sauce)
    return{
        type: 'ORDER_SAUCE',
        data: sauce
    }
}

export const deleteOrderedPizza = (pizzaId) => {
    return{
        type: 'DELETE_PIZZA',
        index: pizzaId
    }
}

export const removeIngredientFromPizza = (pizzaId, ingId, price) => {
    console.log(`${pizzaId} ${ingId} ${price}`)
    return{
        type: 'REMOVE_INGREDIENT',
        index: pizzaId,
        indexIng: ingId,
        price: price
    }
}

export const addIngredientFromPizza = (pizzaId, ingredient, price) => {
    return{
        type: 'ADD_INGREDIENT',
        index: pizzaId,
        ingredient: ingredient,
        price: price
    }
}

export const deleteOrderedSauce = (sauce, sauceId) => {
    return{
        type: 'DELETE_SAUCE',
        index: sauceId,
        sauce: sauce
    }
}

export const addSauces = (sauces) => {
    return{
        type: 'ADD_SAUCES',
        data: sauces
    }
}

export const addIngredients = (ingredients) => {
    return{
        type: 'ADD_INGREDIENTS',
        data: ingredients
    }
}

export const addPizzas = (pizzas) => {
    return{
        type: 'ADD_PIZZA',
        data: pizzas
    }
}

export const addToOrder = (price) => {
    return{
        type: 'ADD_TO_ORDER',
        data: price
    }
}

export const removeFromOrder = (price) => {
    return{
        type: 'REMOVE_FROM_ORDER',
        data: price
    }
}

export const payForOrder = () => {
    return{
        type: 'PAY_FOR_ORDER',
        data: 0
    }
}

export const removePizzas = () => {
    return{
        type: 'REMOVE_PIZZAS',
    }
}

export const removeSauces = () => {
    return{
        type: 'REMOVE_SAUCES',
    }
}