import type { Product } from "../types/Product";
import type { FavoriteItem } from "../types/FavoriteItem";

const FAVORITES_KEY = "favorites";

// جلب المنتجات المفضلة
export function getFavorites(): FavoriteItem[] {
    try {
        const storedFavorites = localStorage.getItem(FAVORITES_KEY);

        return storedFavorites
            ? (JSON.parse(storedFavorites) as FavoriteItem[])
            : [];
    } catch {
        return [];
    }
}

// إضافة منتج للمفضلة
export function addToFavorites(product: Product): void {
    const favorites = getFavorites();

    const alreadyExists = favorites.some(
        (item) => item.id === product.id
    );

    if (!alreadyExists) {
        favorites.push(product);
        localStorage.setItem(
            FAVORITES_KEY,
            JSON.stringify(favorites)
        );
    }
}

// حذف منتج من المفضلة
export function removeFromFavorites(id: number): void {
    const favorites = getFavorites();

    const updatedFavorites = favorites.filter(
        (item) => item.id !== id
    );

    localStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify(updatedFavorites)
    );
}