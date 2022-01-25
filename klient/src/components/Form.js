import { useSelector, useDispatch } from 'react-redux'
import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, Controller } from 'react-hook-form';
import { API } from './App';
import './styles/Form.scss'
import { payForOrder, removePizzas, removeSauces, addSauces } from '../redux/actions'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';

const Form = ({ handleClose }) => {
    const form = useRef()
    const { handleSubmit, control } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const pizzaOrdered = useSelector(state => state.orderedPizzas)
    const sauces = useSelector(state => state.sauces)
    let saucesOrdered = useSelector(state => state.orderedSauces)
    const totalPrice = useSelector(state => state.total)

    const sendEmail = (e) => {
        form.current.pizzas.value = orderInfo.pizzas
        form.current.sauces.value = orderInfo.sauces
        form.current.total.value = orderInfo.total

        return (emailjs.sendForm('service_94vvkol', 'template_00b90xv', form.current, 'user_7oN9nUxs4dwbfDLBbFvqa')
            .then((result) => {
                return true
            }, (error) => {
                alert(error.text);
                return false
            }))
    };

    const date = {
        order: {
            sauce: saucesOrdered,
            total: totalPrice,
            pizza: pizzaOrdered
        }
    }

    const createOrderInfo = () => {
        const orderInfo = {
            pizzas: "",
            sauces: "",
            total: `TOTAL PRICE IS: ${date.order.total} zł`
        }
        if (date.order.pizza.length > 0) {
            orderInfo.pizzas += "PIZZAS: "
        }
        date.order.pizza.map((pizza, idx) => (
            orderInfo.pizzas += `${pizza.name} for ${pizza.price} zł `
        ))
        if (date.order.sauce.length > 0) {
            orderInfo.sauces += "SAUCES: "
        }
        date.order.sauce.map((sauce, idx) => (
            orderInfo.sauces += `Sauce ${sauce.name} for ${sauce.price} zł \n`
        ))
        return (orderInfo)
    }

    const orderInfo = createOrderInfo()

    const onSubmit = (dataForm) => {
        if (date.order.sauce)
            if (date.order.sauce.length === 0) {
                date.order.sauce = null;
            }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(date.order)
        };
        fetch(`${API}order`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.message === "Order accepted!") {
                    if (sendEmail(dataForm)) {
                        dispatch(payForOrder())
                        dispatch(removePizzas())
                        dispatch(removeSauces())
                        dispatch(addSauces(sauces))
                        navigate('/')
                    }
                    else {
                        alert('Problems with sending an e-mail')
                    }
                } else {
                    alert(JSON.stringify(data))
                }
            });
    };

    return (
        <>
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <div className='formBox'>
                    <div className='column1'>
                        <input readOnly hidden label="myMail" type="text" name="myMail" value="order.adamopizza@gmail.com" />
                        <input readOnly hidden type="text" name="pizzas" />
                        <input readOnly hidden type="text" name="sauces" />
                        <input readOnly hidden type="text" name="total" />
                        <Controller
                            className='formElement'
                            name="firstName"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    className='formElementText'
                                    label="First Name"
                                    name="firstName"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                            rules={{ required: 'First name required' }}
                        />
                        <Controller
                            className='formElement'
                            name="lastName"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    className='formElementText'
                                    name="lastName"
                                    label="Last Name"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                            rules={{ required: 'Last name required' }}
                        />
                        <Controller
                            className='formElement'
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    className='formElementText'
                                    name="email"
                                    label="Email"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    type="email"
                                />
                            )}
                            rules={{ required: 'Email required' }}
                        />
                        <Controller
                            className='formElement'
                            name="tel"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    className='formElementText'
                                    label="Phone"
                                    name="phone"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    type="tel"
                                />
                            )}
                            rules={{ required: 'Phone required' }}
                        />
                    </div>
                    <div className='column2'>
                        <Controller
                            className='formElement'
                            name="Street name"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    className='formElementText'
                                    label="Street name"
                                    name="street"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    type="text"
                                />
                            )}
                            rules={{ required: 'Street name required' }}
                        />
                        <Controller
                            className='formElement'
                            name="Apartment number"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    className='formElementText'
                                    label="Apartment number"
                                    name="apartment"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    type="text"
                                />
                            )}
                        />
                        <Controller
                            className='formElement'
                            name="Postcode"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    className='formElementText'
                                    label="Postcode"
                                    name="postcode"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    type="text"
                                />
                            )}
                            rules={{ required: 'Postcode required' }}
                        />
                        <Controller
                            className='formElement'
                            name="City"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    className='formElementText'
                                    label="City"
                                    name="city"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    type="text"
                                />
                            )}
                            rules={{ required: 'City required' }}
                        />
                    </div>
                </div>
                <div className='buttonBox'>
                    <Button className='formButton' type="submit" variant="contained" color="primary">
                        <p>Order</p>
                    </Button>
                </div>
            </form>
        </>
    );
};

export default Form;