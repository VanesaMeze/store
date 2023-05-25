import AppCustomers from "../components/AppCustomers";

const Customers = ({ customers, onRemove }) => {
  return <AppCustomers customers={customers} onRemove={onRemove} />;
};

export default Customers;
