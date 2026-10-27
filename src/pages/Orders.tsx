import { useState } from "react";
import type { Order } from "../types/Order";
import { getOrders } from "../utils/orders";
import "./Orders.css";

function Orders() {
    const [orders] = useState<Order[]>(getOrders());

    return (
        <div className="orders-page">
            <h2>My Orders 📦</h2>

            {orders.length === 0 ? (
                <p className="no-orders">
                    You haven't placed any orders yet.
                </p>
            ) : (
                orders.map((order) => (
                    <div className="order-card" key={order.id}>
                        <h3>Order #{order.id}</h3>

                        <p>
                            <strong>Customer:</strong>{" "}
                            {order.customerName}
                        </p>

                        <p>
                            <strong>Email:</strong> {order.email}
                        </p>

                        <p>
                            <strong>Address:</strong> {order.address}
                        </p>

                        <p>
                            <strong>Phone:</strong> {order.phone}
                        </p>

                        <p>
                            <strong>Date:</strong> {order.date}
                        </p>

                        <h4>Products:</h4>

                        {order.products.map((product) => (
                            <div
                                className="order-product"
                                key={product.id}
                            >
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                />

                                <div>
                                    <h4>{product.title}</h4>

                                    <p>
                                        Quantity: {product.quantity}
                                    </p>

                                    <p>
                                        Price: $
                                        {(
                                            product.price *
                                            product.quantity
                                        ).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <h3 className="order-total">
                            Total: ${order.total.toFixed(2)}
                        </h3>
                    </div>
                ))
            )}
        </div>
    );
}

export default Orders;