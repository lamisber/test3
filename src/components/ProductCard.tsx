import { Link } from "react-router-dom";
import type { Product } from "../types/Product";

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

            <button>Add To Cart</button>
        </div>

</>
    );
}

export default ProductCard;