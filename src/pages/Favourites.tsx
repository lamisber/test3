import { useState } from "react";
import type { FavoriteItem } from "../types/FavoriteItem";
import "./Favorites.css";
import {
    getFavorites,
    removeFromFavorites,
} from "../utils/favorites";

function Favorites() {
    const [favorites, setFavorites] = useState<FavoriteItem[]>(
        getFavorites()
    );

    // حذف منتج من المفضلة
    function handleRemove(id: number) {
        removeFromFavorites(id);

        setFavorites((previousFavorites) =>
            previousFavorites.filter((item) => item.id !== id)
        );
    }

    return (
        <div className="favorites-page">
            <h2>My Favorites ❤️</h2>

            {favorites.length === 0 ? (
                <p>No favorite products yet.</p>
            ) : (
                <div className="favorites-container">
                    {favorites.map((product) => (
                        <div
                            className="favorite-card"
                            key={product.id}
                        >
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                            />

                            <h3>{product.title}</h3>

                            <p>Price: ${product.price}</p>

                            <p>Rating: {product.rating} ⭐</p>

                            <button
                                onClick={() =>
                                    handleRemove(product.id)
                                }
                            >
                                Remove ❤️
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorites;