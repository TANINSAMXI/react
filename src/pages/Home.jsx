import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../api/productsApi";
import PaginationComponent from "../components/Pagination.jsx";

const Home = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  const totalPages = Math.ceil(products?.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentProducts = products?.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage,
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Row>
        {currentProducts?.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
