import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import '../styles/header.css';

function Header() {
  return (
    <div className="header-container">
      <nav className='nav-bar'>
        <Link className="nav-items" to="/">Home</Link>  
        <Link className="nav-items" to="/shop">Shop</Link>
        <Link className="nav-items"  to="/Contact">Contact us</Link>
        <Link className="nav-items" to="/about">About</Link>
        <Link className="nav-items basket" to="/basket"><FaShoppingBasket/></Link>
      </nav>
    </div>
  );
}

export default Header;
