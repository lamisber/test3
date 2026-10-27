import type { CartItem } from "./CartItem";

export interface Order {
    id: number;
    customerName: string;
    email: string;
    address: string;
    phone: string;
    products: CartItem[];
    total: number;
    date: string;
}