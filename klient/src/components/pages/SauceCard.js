import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { addToOrder, orderSauce, removeFromOrder, deleteOrderedSauce } from '../../redux/actions'

export const SauceCard = (sauce, idx) => {
    const dispatch = useDispatch();
    const saucesOrdered = useSelector(state => state.orderedSauces)

    return (
        <>
            <figure className="pizza">
                <div className="pizza__hero">
                    <img src="https://media.istockphoto.com/photos/various-dip-sauces-picture-id576594466?k=20&m=576594466&s=612x612&w=0&h=DPD-z8zuOoB6e2c3hJbitGFrhkDzXAiblBYuru0PQtA=" alt="pizza" className="pizza__img" />
                </div>
                <div className="pizza__content">
                    <div className="pizza__title">
                        <h1 className="pizza__heading">{sauce.sauce.name}</h1>
                    </div>
                    <div className="sauce__description">
                        {(saucesOrdered.find(x => x.id === sauce.sauce.id) ? saucesOrdered.find(x => x.id === sauce.sauce.id).count : 0) > 0
                            ? <Button onClick={() => { dispatch(deleteOrderedSauce(sauce.sauce, idx)); dispatch(removeFromOrder(sauce.sauce.price)) }} variant="text">-</Button>
                            : <Button disabled onClick={() => { dispatch(deleteOrderedSauce(sauce.sauce, idx)); dispatch(removeFromOrder(sauce.sauce.price)) }} variant="text">-</Button>}
                        <Button onClick={() => { dispatch(orderSauce(sauce.sauce)); dispatch(addToOrder(sauce.sauce.price)); }} variant="text">+</Button>
                    </div>
                    <div className="pizza__details">
                        <h1>{saucesOrdered.find(x => x.id === sauce.sauce.id) ? saucesOrdered.find(x => x.id === sauce.sauce.id).count : 0}</h1>
                    </div>
                </div>
                <div className="pizza__price">{sauce.sauce.price} zł</div>
            </figure >
        </>
    )
}