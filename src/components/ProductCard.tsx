import { Link } from "react-router-dom";
import type { Product } from "../types/Product";
import { addToCart } from "../utils/cart";
import { addToFavorites } from "../utils/favorites";


interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    return (
        <>
        <div className="product-card">
            <img src={product.thumbnail} alt={product.title} />

            <h3>{product.title}</h3>

            <p>{product.description}</p>

            <p>Price: ${product.price}</p>

            <p>Rating: {product.rating} ⭐</p>

            <Link to={`/products/${product.id}`}>
                <button>View Details</button>
            </Link>
<button
    onClick={() => {
        addToCart(product);
        alert("Product added to cart!");
    }}
>
    Add To Cart
</button>

<button
    onClick={() => {
        addToFavorites(product);
        alert("Product added to Favorites!");
    }}
>
    ❤️ Add To Favorites
</button>
        </div>

</>
    );
}

export default ProductCard;