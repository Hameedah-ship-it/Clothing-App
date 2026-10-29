
import { useParams, Link } from "react-router";

function Product({ products }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Loading product...</h2>;
  }

  return (
    <>
      <div>
        <Link to="/products" className="back-button">
          Back to Products
        </Link>
      </div>

      <div className="product-details">
        <img src={product.image} alt={product.title} />

        <div>
          <h2>{product.title}</h2>
          <h3>${product.price.toFixed(2)}</h3>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
        </div>
      </div>
    </>
  );
}

export default Product;
