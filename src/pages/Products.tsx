import { useState, useEffect } from "react";
import type { Product } from "../types/Product";
import ProductCard from "../components/ProductCard";
import "./Products.css";
function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const[search,setSearch] = useState("");
    const[category,setCategory]=useState("");
    const[currentPage,setCurrentPage]=useState(1);
    const productsPerPage = 9;

    useEffect(() => {
    setCurrentPage(1);
}, [search, category]);

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await fetch(
                    "https://dummyjson.com/products"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await response.json();

                setProducts(data.products);
            } catch {
                setError("Something went wrong. Please try again.");
            } finally {
                setLoading(false);
            }
        }

        getProducts();
    }, []);

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
        category === "" || product.category === category;

    return matchesSearch && matchesCategory;
});

const indexOfLastProduct = currentPage * productsPerPage;

const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
);

const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
);


const categories = [...new Set(
    products.map((product) => product.category)
)];

return (
    <div className="products-page">
        <h2>Our Products</h2>

        <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

        <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
>
    <option value="">All Categories</option>

    {categories.map((cat) => (
        <option key={cat} value={cat}>
            {cat}
        </option>
    ))}
</select>

        <div className="products-container">
          {currentProducts.map((product) => (
    <ProductCard
        key={product.id}
        product={product}
    />
))}
        </div>
{filteredProducts.length > 0 && (
    <div className="pagination">

        <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
        >
            Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
            <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={
                    currentPage === index + 1 ? "active" : ""
                }
            >
                {index + 1}
            </button>
        ))}

        <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
        >
            Next
        </button>

    </div>
)}
        {filteredProducts.length === 0 && (
            <p>No products found.</p>
        )}
    </div>
);
}

export default Products;