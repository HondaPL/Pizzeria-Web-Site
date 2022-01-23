import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { addToOrder, orderSauce, removeFromOrder, deleteOrderedSauce } from '../../redux/actions'

const SauceList = () => {
    const dispatch = useDispatch();
    const sauceList = useSelector(state => state.sauces)
    const saucesOrdered = useSelector(state => state.orderedSauces)

    return (
        <>
            {sauceList.length > 0 ?
                <div className='pizzaListDiv'>
                    {sauceList.map((sauce, idx) => {
                        return (
                            <div className='pizzaBox' key={idx}>
                                <p>{sauce.name}: {saucesOrdered.find(x => x.id === sauce.id) ? saucesOrdered.find(x => x.id === sauce.id).count : 0}</p>
                                <p>{sauce.price} zł</p>
                                {(saucesOrdered.find(x => x.id === sauce.id) ? saucesOrdered.find(x => x.id === sauce.id).count : 0) > 0
                                ? <Button onClick={() => { dispatch(deleteOrderedSauce(sauce, idx)); dispatch(removeFromOrder(sauce.price)) }} variant="text">-</Button>
                                 : <Button disabled onClick={() => { dispatch(deleteOrderedSauce(sauce, idx)); dispatch(removeFromOrder(sauce.price)) }} variant="text">-</Button>}
                                <Button onClick={() => {dispatch(orderSauce(sauce)); dispatch(addToOrder(sauce.price));}} variant="text">+</Button>
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

export default SauceList;