import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header>
            <h1>Shop Flow</h1>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/favorites">Favorites</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/checkout">Checkout</Link>
            </nav>
        </header>
    );
}

export default Header;