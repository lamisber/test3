import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { CartItem } from "../types/CartItem";
import { getCart } from "../utils/cart";
import"./Cart.css";

function Cart() {
    const navigate = useNavigate();
    const [cart, setCart] = useState<CartItem[]>(getCart());

    // حفظ التغييرات بالسلة
    function updateCart(updatedCart: CartItem[]) {
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    // زيادة الكمية
    function increaseQuantity(id: number) {
        const updatedCart = cart.map((item) =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );

        updateCart(updatedCart);
    }

    // تقليل الكمية
    function decreaseQuantity(id: number) {
        const updatedCart = cart
            .map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter((item) => item.quantity > 0);

        updateCart(updatedCart);
    }

    // حذف المنتج
    function removeProduct(id: number) {
        const updatedCart = cart.filter(
            (item) => item.id !== id
        );

        updateCart(updatedCart);
    }

    // حساب السعر الإجمالي
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="cart-page">
            <h2>Shopping Cart 🛒</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                width="120"
                            />

                            <h3>{item.title}</h3>

                            <p>Price: ${item.price}</p>

                            <div>
                                <button 
                                    onClick={() =>
                                        decreaseQuantity(item.id)
                                    }
                                >
                                    -
                                </button>

                                <span> {item.quantity} </span>

                                <button className="n"
                                    onClick={() =>
                                        increaseQuantity(item.id)
                                    }
                                >
                                    +
                                </button>
                            </div>

                            <p>
                                Subtotal: $
                                {(item.price * item.quantity).toFixed(2)}
                            </p>

                            <button
                                onClick={() => removeProduct(item.id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))}

                    <h3>Total: ${total.toFixed(2)}</h3>
                </>
            )}
        </div>
    );
}

export default Cart;