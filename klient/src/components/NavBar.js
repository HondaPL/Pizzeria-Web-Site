import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from '../LOGO.jpg'

const NavBar = () => {
    const total = useSelector(state => state.total)

    return (
        <div className='NavBarBox'>
            <img src={logo} alt="." />
            <div className='NavBar'>
                <ul>
                    <li>
                        <Link className='navbar-item' to="/" >HOME</Link>
                    </li>
                    <li>
                        <Link className='navbar-item' to="/pizzas" >PIZZA</Link>
                    </li>
                    <li>
                        <Link className='navbar-item' to="/sauces" >SAUCES</Link>
                    </li>
                    <li>
                        <Link className='navbar-item' to="/order" >ORDER {total} zł</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;