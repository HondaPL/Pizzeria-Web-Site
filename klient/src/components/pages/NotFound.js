import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
      <div className='homeBox'>
        <p>PAGE NOT FOUND</p>
        <p><Link className='navbar-item' to="/" >RETURN HOME</Link></p>
      </div>
    )
  }

export default NotFound