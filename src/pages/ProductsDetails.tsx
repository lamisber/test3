import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import"./ProductsDetails.css";
import type { Product } from "../types/Product";
import { addToCart } from "../utils/cart";

function ProductDetails() {
    const { id } = useParams();

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getProductDetails() {
            try {
                const response = await fetch(
                   `https://dummyjson.com/products/${id}`
                );

                if (!response.ok) {
                    throw new Error("Product not found");
                }

                const data: Product = await response.json();

                setProduct(data);
            } catch {
                setError("Unable to load product details.");
            } finally {
                setLoading(false);
            }
        }

        getProductDetails();
    }, [id]);

    if (loading) {
        return <p>Loading product details...</p>;
    }

    if (error || !product) {
        return <p>{error || "Product not found."}</p>;
    }

    return (
        <div className="product-details">
            <img
                src={product.thumbnail}
                alt={product.title}
            />

            <div>
                <h2>{product.title}</h2>

                <p>{product.description}</p>

                <p>Category: {product.category}</p>

                <p>Price: ${product.price}</p>

                <p>Rating: {product.rating} ⭐</p>

             <button
    onClick={() => {
        addToCart(product);
        alert("Product added to cart!");
    }}
>
    Add To Cart
</button>
            </div>
        </div>
    );
}

export default ProductDetails;