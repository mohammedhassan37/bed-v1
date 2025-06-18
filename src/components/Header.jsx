import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <div className="header-container">
      <nav className='nav-bar'>
        <Link className="nav-items" to="/">Home</Link>
        <Link className="nav-items" to="/about">About</Link>
        <Link className="nav-items" to="/shop">Shop</Link>
        <Link className="nav-items"  to="/randoms">Randoms</Link> {/* same plural path */}
      </nav>
    </div>
  );
}

export default Header;
