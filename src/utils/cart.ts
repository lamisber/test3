import type { Product } from "../types/Product";
import type { CartItem } from "../types/CartItem";

const CART_KEY = "cart";

// جلب المنتجات الموجودة بالسلة
export function getCart(): CartItem[] {
    try {
        const storedCart = localStorage.getItem(CART_KEY);

        return storedCart
            ? (JSON.parse(storedCart) as CartItem[])
            : [];
    } catch {
        return [];
    }
}

// إضافة منتج إلى السلة
export function addToCart(product: Product): void {
    const cart = getCart();

    // هل المنتج موجود بالسلة من قبل؟
    const existingItem = cart.find(
        (item) => item.id === product.id
    );

    if (existingItem) {
        // إذا موجود، منزيد الكمية
        existingItem.quantity += 1;
    } else {
        // إذا مو موجود، منضيفه بكمية 1
        cart.push({
            ...product,
            quantity: 1,
        });
    }

    // حفظ السلة بالمتصفح
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}