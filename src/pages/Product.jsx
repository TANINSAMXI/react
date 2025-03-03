import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../api/productsApi";

const Product = () => {
  const { productId } = useParams();
  const { data: products, isLoading } = useGetProductsQuery();
  const product = products?.find((p) => p.id === parseInt(productId));

  if (isLoading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default Product;
