import { useSelector } from 'react-redux'
import Form from '../Form';
import { SauceCard } from '../pages/SauceCard'
import { PizzaCard } from '../pages/PizzaCard'

const Order = () => {
    const pizzaOrdered = useSelector(state => state.orderedPizzas)
    const saucesOrdered = useSelector(state => state.orderedSauces)

    return (
        <>
            {
                pizzaOrdered.length > 0 || saucesOrdered.length > 0 ?
                    <>
                        {pizzaOrdered.length > 0 ?
                            <>
                                <div className='homeBox'>
                                    <p>PIZZA</p>
                                </div>
                                <div className='pizzaListDiv'>
                                    {pizzaOrdered.map((pizza, idx) => (<PizzaCard order={true} key={idx} pizza={pizza} idx={idx} />))}
                                </div>
                            </>
                            : ""}
                        {saucesOrdered.length > 0 ?
                            <>
                                <div className='homeBox'>
                                    <p>SAUCES</p>
                                </div>
                                <div className='pizzaListDiv'>
                                    {saucesOrdered.map((sauce, idx) => <SauceCard key={idx} sauce={sauce} idx={idx} />)}
                                </div>
                            </>
                            : ""}
                        <h1>ORDER INFO</h1>
                        <Form />
                    </>
                    : <div className='homeBox'>
                        <p>THERE IS NOTHING TO ORDER</p>
                    </div>}
        </>
    )
}

export default Order;