import { useSelector, } from 'react-redux'
import { PizzaCard } from '../pages/PizzaCard'
import LoadingCard from './LoadingCard'

const PizzaList = () => {
    const pizzaList = useSelector(state => state.pizzas)

    return (
        <>
            {pizzaList.length > 0 ?
                <>
                    <div className='homeBox'>
                        <p>PIZZA</p>
                    </div>
                    <div className='pizzaListDiv'>
                        {pizzaList.map((pizza, idx) => (<PizzaCard key={idx} pizza={pizza} idx={idx} />))}
                    </div>
                </>
                : <>
                    <div className='homeBox'>
                        <p>PIZZA</p>
                    </div>
                    <div className='pizzaListDiv'>
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                    </div>
                </>}
        </>
    )
}

export default PizzaList;