function ProductCard({ product, onAddToCart }) {

  return (
    <div className="product-card">

      <div className="product-image">
        <img
          src={`/images/${product.image}`}
          alt={product.name}
        />
      </div>

      <div className="product-info">

        <h3>{product.name}</h3>

        <div className="price">
          ₹{product.price.toLocaleString("en-IN")}
        </div>

        <button
          type="button"
          onClick={() => onAddToCart(product)}
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;