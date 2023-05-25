import { useParams } from "react-router-dom";
import CustomerId from "../components/CustomerId";

const CustomerPurchase = ({ customers }) => {
  const { id } = useParams();
  return <CustomerId customers={customers} index={id} />;
};

export default CustomerPurchase;
