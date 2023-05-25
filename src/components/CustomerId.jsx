const CustomerId = ({ customers, index }) => {
  const customer = customers[index];
  return <div className="container">{customer.firstName}</div>;
};

export default CustomerId;
