import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
      <div className='homeBox'>
        <p>
          PAGE NOT FOUND
          <br></br>
          <Link className='return-home' to="/" >RETURN HOME</Link>
        </p>
      </div>
    )
  }

export default NotFound