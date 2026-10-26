import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductsDetails";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favourites";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/products" element={<Products />} />

                    <Route
                        path="/products/:id"
                        element={<ProductDetails />}
                    />

                    <Route path="/cart" element={<Cart />} />

                    <Route path="/favorites" element={<Favorites />} />

                    <Route path="/checkout" element={<Checkout />} />

                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    );
}

export default App;