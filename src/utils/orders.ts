import type { Order } from "../types/Order";

const ORDERS_KEY = "orders";

// جلب الطلبات السابقة
export function getOrders(): Order[] {
    try {
        const storedOrders = localStorage.getItem(ORDERS_KEY);

        return storedOrders
            ? (JSON.parse(storedOrders) as Order[])
            : [];
    } catch {
        return [];
    }
}

// حفظ طلب جديد
export function saveOrder(order: Order): void {
    const orders = getOrders();

    orders.push(order);

    localStorage.setItem(
        ORDERS_KEY,
        JSON.stringify(orders)
    );
}