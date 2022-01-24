import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { addToOrder, orderPizza, removeIngredientFromPizza, removeFromOrder, deleteOrderedPizza } from '../../redux/actions'
import '../styles/App.scss'
import { AddIngredientForm } from './AddIngredientForm';
export const PizzaCard = (pizza, idx, order) => {
    const dispatch = useDispatch();
    const ingredients = useSelector(state => state.ingredients)

    return (
        <>
            <figure className="pizza">
                <div className="pizza__hero">
                    <img src="https://images.unsplash.com/photo-1474600056930-615c3d706456?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80" alt="pizza" className="pizza__img" />
                </div>
                <div className="pizza__content">
                    <div className="pizza__title">
                        <h1 className="pizza__heading">{pizza.pizza.name}</h1>
                    </div>
                    <div className="pizza__description">
                        {pizza.pizza.ingredients.map((ing, idx2) => {
                            if (ingredients.length > 0) {
                                return (
                                    <div key={idx2} className='ing'>
                                        {!pizza.order
                                            ? ingredients.find(x => x.id === ing).name
                                            : <Button style={{ color: "red" }} className='deleteIng' onClick={() => { dispatch(removeIngredientFromPizza(pizza.idx, idx2, ingredients.find(x => x.id === ing).price)); dispatch(removeFromOrder(ingredients.find(x => x.id === ing).price)) }} variant="text">{ingredients.find(x => x.id === ing).name}</Button>
                                        }
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className="pizza__details">
                        {!pizza.order
                            ? <Button className='pizza__button' onClick={() => { dispatch(orderPizza(pizza.pizza)); dispatch(addToOrder(pizza.pizza.price)); }} variant="text" color="success">ORDER PIZZA</Button>
                            : <>
                                <div>
                                    <AddIngredientForm pizza={pizza} />
                                </div>
                                <Button onClick={() => { dispatch(deleteOrderedPizza(pizza.idx)); dispatch(removeFromOrder(pizza.pizza.price)) }} variant="text" color="error">Delete from order</Button>
                            </>
                        }
                    </div>
                </div>
                <div className="pizza__price">{pizza.pizza.price} zł</div>
            </figure >
        </>
    )
}