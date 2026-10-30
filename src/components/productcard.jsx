function ProductCard({ product, onAddToCart,onViewDetails}) {

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

        <button
          type="button"
          onClick={() => onViewDetails(product)}
        >
          View Details
        </button>

      </div>

    </div>
  );
}

export default ProductCard;