
import { Link } from "react-router";

function ProductList({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>

      <p>${product.price.toFixed(2)}</p>

      <Link to={`/${product.id}`}>
        View Details
      </Link>

      <button
        className="add-2-cart"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductList;
