import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { addToOrder, orderPizza } from '../../redux/actions'

const PizzaList = () => {
    const dispatch = useDispatch();
    const pizzaList = useSelector(state => state.pizzas)
    const ingredients = useSelector(state => state.ingredients)

    return (
        <>
            {pizzaList.length > 0 ?
                <div className='pizzaListDiv'>
                    {pizzaList.map((pizza, idx) => {
                        return (
                            <div className='pizzaBox' key={idx}>
                                <p>{pizza.name}</p>
                                <p>{pizza.price} $</p>
                                {ingredients.length > 0 ?
                                    <div>
                                        {pizza.ingredients.map((ing, idx) => {
                                            return (
                                                <div key={idx} className='ing'>
                                                    {ingredients.find(x => x.id === ing).name}
                                                </div>
                                            )
                                        })}
                                    </div> : ""}
                                <Button onClick={() => {dispatch(orderPizza(pizza)); dispatch(addToOrder(pizza.price));}} variant="text">Add</Button>
                            </div>
                        )
                    })
                    }
                </div>
                : <div className='homeBox'>
                    LOADING
                </div>}
        </>
    )
}

export default PizzaList;