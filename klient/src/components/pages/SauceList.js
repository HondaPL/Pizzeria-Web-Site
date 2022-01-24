import { useSelector } from 'react-redux'
import { SauceCard } from '../pages/SauceCard'
import { LoadingCard } from './LoadingCard'

const SauceList = () => {
    const sauceList = useSelector(state => state.sauces)

    return (
        <>
            {sauceList.length > 0 ?
                <>
                    <div className='homeBox'>
                        <p>SAUCES</p>
                    </div>
                    <div className='pizzaListDiv'>
                        {sauceList.map((sauce, idx) => <SauceCard key={idx} sauce={sauce} idx={idx} />)}
                    </div>
                </>
                : <>
                    <div className='homeBox'>
                        <p>SAUCES</p>
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

export default SauceList;