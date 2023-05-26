import { useParams } from "react-router";
import ProductId from "../components/ProductId";

const BuyProducts = ({ products }) => {
  const { id } = useParams();
  return <ProductId products={products} index={id} />;
};

export default BuyProducts;
