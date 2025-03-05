import { useGetProductsQuery } from "../store/apiSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { List, Button, Panel, Pagination, Grid, Row, Col } from "rsuite";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Filters from "../components/Filter";

const Catalog = () => {
  const { data: products = [], error, isLoading } = useGetProductsQuery();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: { min: 0, max: 1000 },
  });
  const itemsPerPage = 10;

  useEffect(() => {
    if (products.length > 0) {
      console.log(
        "Product Categories:",
        products.map((product) => product.category),
      );
    }
  }, [products]);

  const applyFilters = (products) => {
    return products.filter((product) => {
      const inCategory =
        filters.categories.length === 0 ||
        filters.categories.includes(product.category);
      const inPriceRange =
        product.price >= filters.priceRange.min &&
        product.price <= filters.priceRange.max;
      return inCategory && inPriceRange;
    });
  };

  const filteredProducts = applyFilters(products);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  const dispatch = useDispatch();

  if (isLoading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка завантаження товарів</p>;

  return (
    <Grid fluid>
      <Row>
        <Col xs={6}>
          <Filters onApplyFilters={setFilters} />
        </Col>
        <Col xs={18}>
          <List hover>
            {paginatedProducts.map((product) => (
              <Panel key={product.id} bordered style={{ marginBottom: 10 }}>
                <h5>{product.title}</h5>
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
                <Button
                  as={Link}
                  to={`/product/${product.id}`}
                  appearance="link"
                >
                  Детальніше
                </Button>
                <Button
                  onClick={() => dispatch(addToCart(product))}
                  color="green"
                >
                  Додати в кошик
                </Button>
              </Panel>
            ))}
          </List>
          <Pagination
            prev
            next
            first
            last
            maxButtons={5}
            size="md"
            layout={["total", "-", "pager"]}
            total={filteredProducts.length}
            limit={itemsPerPage}
            activePage={page}
            onChangePage={setPage}
          />
        </Col>
      </Row>
    </Grid>
  );
};

export default Catalog;
