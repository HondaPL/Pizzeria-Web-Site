import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
    const total = useSelector(state => state.total)

    return (
        <div className='NavBar'>
            <ul>
                <li>
                    <Link className='navbar-item' to="/" >HOME</Link>
                </li>
                <li>
                    <Link className='navbar-item' to="/pizzas" >PIZZAS</Link>
                </li>
                <li>
                    <Link className='navbar-item' to="/sauces" >SAUCES</Link>
                </li>
                <li>
                    <Link className='navbar-item' to="/order" >ORDER {total} zł</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;