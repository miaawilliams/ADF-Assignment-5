import './Header.css';
import { Link } from "react-router-dom";

function Header({ cartCount = 0 }) {
    return (
        <header className='app-header'>
            <h1 className='logo'>ComponentCorner</h1>

            <nav className='nav-menu'>
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/products" className='nav-link'>Products</Link>
                <Link to="/cart" className='nav-link'>Cart</Link>
            </nav>

            <div className='cart-container' aria-label={`Cart with ${cartCount} items`}>
                <Link to="/cart" className='cart-icon' aria-hidden='true'>🛒</Link>
                {cartCount > 0 && <span className='cart-badge'>{cartCount}</span>}
            </div>
        </header>
    ); 
}

export default Header;   