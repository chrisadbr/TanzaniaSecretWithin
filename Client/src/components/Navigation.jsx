/* eslint-disable react/react-in-jsx-scope */
import './Navigation.css'
import { Link } from 'react-router-dom'

// 
const Navigation = () => {
  return (
    <div className='nav__container'>
      <div className="nav__wrapper">
        <div className="nav__links">
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/about' className='nav-link'>About</Link>
            <Link to='/contact' className='nav-link'>Contact</Link>
            <Link to='/packages' className='nav-link'>Packages</Link>
            <Link to='/gallery' className='nav-link'>Gallery</Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation