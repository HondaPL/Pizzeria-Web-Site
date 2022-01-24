import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import Button from '@mui/material/Button';
import { addIngredientFromPizza, addToOrder } from '../../redux/actions'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const AddIngredientForm = (pizza) => {
    const dispatch = useDispatch()
    const ingredients = useSelector(state => state.ingredients)

    const [ingredient, setIngredient] = useState("");

    const handleChange = (event) => {
        setIngredient(event.target.value);
    };


    return (
        <>
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
            <Button style={{ color: "green" }} onClick={() => {
                if (ingredient) {
                    dispatch(addIngredientFromPizza(pizza.pizza.idx, ingredient.id, ingredient.price));
                    dispatch(addToOrder(ingredient.price))
                } else {
                    alert("Please select an ingredient!")
                }
            }
            } variant="text">ADD INGREDIENT</Button>
        </>
    )
}
