import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { CartItem } from "../types/CartItem";
import { getCart } from "../utils/cart";
import "./Checkout.css";
import type { Order } from "../types/Order";
import { saveOrder } from "../utils/orders";

function Checkout() {
    const navigate = useNavigate();

    const [cart] = useState<CartItem[]>(getCart());

    const [customerName, setCustomerName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

  function handleCheckout(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newOrder: Order = {
        id: Date.now(),
        customerName,
        email,
        address,
        phone,
        products: cart,
        total,
        date: new Date().toLocaleString(),
    };

    saveOrder(newOrder);

    localStorage.removeItem("cart");

    alert("Your order has been placed successfully!");

    navigate("/orders");
}

    return (
        <div className="checkout-page">
            <h2>Checkout 💳</h2>

            {cart.length === 0 ? (
                <div className="empty-checkout">
                    <p>Your cart is empty!</p>
                    <button onClick={() => navigate("/products")}>
                        Continue Shopping
                    </button>
                </div>
            ) : (
                <div className="checkout-container">
                    <form onSubmit={handleCheckout}>
                        <h3>Customer Information</h3>

                        <label htmlFor="customerName">Full Name</label>
                        <input
                            id="customerName"
                            type="text"
                            value={customerName}
                            onChange={(event) =>
                                setCustomerName(event.target.value)
                            }
                            required
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            required
                        />

                        <label htmlFor="address">Address</label>
                        <input
                            id="address"
                            type="text"
                            value={address}
                            onChange={(event) =>
                                setAddress(event.target.value)
                            }
                            required
                        />

                        <label htmlFor="phone">Phone Number</label>
                        <input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(event) =>
                                setPhone(event.target.value)
                            }
                            required
                        />

                        <button type="submit">
                            Place Order
                        </button>
                    </form>

                    <div className="checkout-summary">
                        <h3>Order Summary</h3>

                        {cart.map((item) => (
                            <div
                                className="checkout-item"
                                key={item.id}
                            >
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                />

                                <div>
                                    <h4>{item.title}</h4>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>
                                        Price: $
                                        {(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <h3>Total: ${total.toFixed(2)}</h3>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Checkout;