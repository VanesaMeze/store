import { useState } from "react";
import { Link } from "react-router-dom";

const ProductId = ({ products, index }) => {
  const product = products[index];
  const listOfCustomers = [
    {
      firstName: "Marko",
      lastName: "Markovic",
      date_of_birth: new Date().toDateString(),
    },
    {
      firstName: "Petar",
      lastName: "Petrovic",
      date_of_birth: new Date().toDateString(),
    },
    {
      firstName: "Sabina",
      lastName: "Milinovic",
      date_of_birth: new Date().toDateString(),
    },
    {
      firstName: "Arsen",
      lastName: "Vukasinovic",
      date_of_birth: new Date().toDateString(),
    },
    {
      firstName: "Vukasin",
      lastName: "Milenkovic",
      date_of_birth: new Date().toDateString(),
    },
  ];
  const [customers, setCustomers] = useState(listOfCustomers);

  const onInputCustomerChange = (e) => {
    setCustomers(e.target.value);
  };

  const handleChange = ({ target }) => {
    this.setCustomers({
      selectedOption: target.customers,
    });
  };

  return (
    <form>
      <div>
        <span className="h2">Buy product</span>
      </div>
      <div className="text" style={{ width: "300px" }}>
        Product: {product.name} <br></br>
        Price: {product.price}$ <br></br>
        Quantity: {product.quantity}
      </div>
      <div className="col-md-5">
        <label htmlFor="customer" className="form-label">
          Customer:
        </label>
        <div className="mb-3">
          <select
            onSelect={onInputCustomerChange}
            className="form-select"
            required
            aria-label="select example"
          >
            <option value="">Choose...</option>
            {customers.map((customer) => (
              <option key={customer.firstName} onChange={handleChange}>
                {customer.firstName} {customer.lastName}
              </option>
            ))}
          </select>
        </div>
        <div className="invalid-feedback">Please select a customer.</div>
      </div>
      <div className="btns">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <button className="btn btn-outline-dark" type="confirm">
            Confirm
          </button>
          <Link className="btn btn-outline-dark" to={`/products`}>
            Cancel
          </Link>
        </div>
      </div>
    </form>
  );
};

export default ProductId;
