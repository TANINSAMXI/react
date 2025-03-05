import { useParams } from "react-router-dom";
import { useGetProductQuery, useGetProductsQuery } from "../store/apiSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Button, Panel, List } from "rsuite";
import { Link } from "react-router-dom"; // ✅ Add this import

const ProductPage = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductQuery(id);
  const { data: products } = useGetProductsQuery();
  const dispatch = useDispatch();

  if (isLoading) return <p>Завантаження...</p>;

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id,
  );

  return (
    <div>
      <h3>{product.title}</h3>
      <img
        src={product.image}
        alt={product.title}
        style={{
          margin: "20px",
          width: "100px",
          height: "100px",
          objectFit: "contain",
        }}
      />
      <p>{product.description}</p>
      <p>Ціна: {product.price}$</p>
      <Button onClick={() => dispatch(addToCart(product))} appearance="primary">
        Додати в кошик
      </Button>
      <h3>Схожі товари</h3>
      <List hover>
        {relatedProducts.map((relatedProduct) => (
          <Panel key={relatedProduct.id} bordered style={{ marginBottom: 10 }}>
            <h5>{relatedProduct.title}</h5>
            <img
              src={relatedProduct.image}
              alt={relatedProduct.title}
              style={{
                margin: "20px",
                width: "100px",
                height: "100px",
                objectFit: "contain",
              }}
            />

            <p>{relatedProduct.price} $</p>
            <Button
              as={Link}
              to={`/product/${relatedProduct.id}`}
              appearance="link"
            >
              Детальніше
            </Button>
            <Button
              onClick={() => dispatch(addToCart(relatedProduct))}
              color="green"
            >
              Додати в кошик
            </Button>
          </Panel>
        ))}
      </List>
    </div>
  );
};

export default ProductPage;
