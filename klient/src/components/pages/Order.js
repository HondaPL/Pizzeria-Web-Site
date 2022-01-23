import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import Button from '@mui/material/Button';
import { deleteOrderedPizza, deleteOrderedSauce, removeFromOrder, removeIngredientFromPizza, addIngredientFromPizza, addToOrder } from '../../redux/actions'
import Form from '../Form';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


const Order = () => {
    const dispatch = useDispatch()
    const [ingredient, setIngredient] = useState("");

    const handleChange = (event) => {
        setIngredient(event.target.value);
    };

    const pizzaOrdered = useSelector(state => state.orderedPizzas)
    const saucesOrdered = useSelector(state => state.orderedSauces)
    const ingredients = useSelector(state => state.ingredients)

    return (
        <>
            {
                pizzaOrdered.length > 0 || saucesOrdered.length > 0 ?

                    <>
                        <>
                            {pizzaOrdered.length > 0 ?
                                <div className='pizzaListDiv'>
                                    <h1>PIZZAS</h1>
                                    {pizzaOrdered.map((pizza, idx) => {
                                        return (
                                            <div className='pizzaBox' key={idx}>
                                                <p>{pizza.name}</p>
                                                <p>{pizza.price} $</p>
                                                {ingredients.length > 0 ?
                                                    <div>
                                                        {pizza.ingredients.map((ing, idx2) => {
                                                            return (
                                                                <div key={idx2} className='ing'>
                                                                    <Button style={{ color: "red" }} className='deleteIng' onClick={() => { dispatch(removeIngredientFromPizza(idx, idx2, ingredients.find(x => x.id === ing).price)); dispatch(removeFromOrder(ingredients.find(x => x.id === ing).price)) }} variant="text">{ingredients.find(x => x.id === ing).name}</Button>
                                           gi                     </div>
                                                            )
                                                        })}
                                                    </div> : ""}
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Ingredient</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={ingredient}
                                                        label="Ingredient"
                                                        onChange={handleChange}
                                                    >
                                                        {ingredients.map((ing, idx) => <MenuItem key={idx} value={ing}>{`${ing.name} ${ing.price} zł`}</MenuItem>)}
                                                    </Select>
                                                </FormControl>
                                                <Button style={{ color: "green" }} onClick={() => { dispatch(addIngredientFromPizza(idx, ingredient.id, ingredient.price)); dispatch(addToOrder(ingredient.price)) }} variant="text">ADD INGREDIENT</Button>
                                                <Button onClick={() => { dispatch(deleteOrderedPizza(idx)); dispatch(removeFromOrder(pizza.price)) }} variant="text">Delete from order</Button>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                                : ""}
                        </>
                        <>
                            {saucesOrdered.length > 0 ?
                                <div className='pizzaListDiv'>
                                    <h1>SAUCES</h1>
                                    {saucesOrdered.map((sauce, idx) => {
                                        return (
                                            <div className='pizzaBox' key={idx}>
                                                <p>{sauce.name}</p>
                                                <p>{sauce.count}</p>
                                                <p>{sauce.price} $</p>
                                                <Button onClick={() => { dispatch(deleteOrderedSauce(sauce, idx)); dispatch(removeFromOrder(sauce.price)) }} variant="text">Delete from order</Button>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                                : ""}
                        </>
                        <Form />
                    </>
                    : <div className='homeBox'>
                        <p>THERE IS NOTHING TO ORDER</p>
                    </div>}
        </>
    )
}

export default Order;