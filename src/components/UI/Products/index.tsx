import productsData from "./products.json";

const Products = () => (
  <section className="product-grid" aria-label="Products">
    {productsData.products.map((product) => (
      <article className="product-card" key={product.id}>
        <div className="product-card__image-wrap">
          <img
            className="product-card__image"
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
          />
          <span className="product-card__discount">
            {Math.round(product.discountPercentage)}% off
          </span>
        </div>
        <div className="product-card__content">
          <p className="product-card__category">{product.category}</p>
          <h2>{product.title}</h2>
          <p className="product-card__description">{product.description}</p>
          <div className="product-card__details">
            <span className="product-card__rating">
              ★ {product.rating.toFixed(1)}
            </span>
            <span>{product.stock} in stock</span>
          </div>
          <p className="product-card__price">${product.price.toFixed(2)}</p>
        </div>
      </article>
    ))}
  </section>
);

export default Products;
