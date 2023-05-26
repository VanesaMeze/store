const CustomerId = ({ customers, index }) => {
  const customer = customers[index];
  return (
    <div className="container">
      {customer.firstName} {customer.lastName}
    </div>
  );
};

export default CustomerId;
