// SearchResults.jsx
import { useLocation, Link } from "react-router-dom";
import { useGetProductsQuery } from "../store/apiSlice";
import { useDispatch } from "react-redux";
import { List, Button, Panel } from "rsuite";
import { addToCart } from "../store/cartSlice";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const { data: products = [], isLoading, error } = useGetProductsQuery();
  const dispatch = useDispatch();
  const query = useQuery().get("query").toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query),
  );

  if (isLoading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка завантаження товарів</p>;
  if (!filteredProducts.length) return <p>Немає результатів</p>;

  return (
    <List hover>
      {filteredProducts.map((product) => (
        <Panel key={product.id} bordered style={{ marginBottom: 10 }}>
          <h4>{product.title}</h4>
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
          <p>{product.price} $</p>
          <Button as={Link} to={`/product/${product.id}`} appearance="link">
            Детальніше
          </Button>
          <Button onClick={() => dispatch(addToCart(product))} color="green">
            Додати в кошик
          </Button>
        </Panel>
      ))}
    </List>
  );
};

export default SearchResults;
