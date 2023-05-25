import { useState } from "react";

const AppProducts = ({
  products,
  addQuantity,
  decreaseQuantity,
  handleSearch,
}) => {
  const [state, setState] = useState({
    search: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <form className="d-flex mt-3" style={{ width: "500px" }} role="search">
        <input
          value={state.search}
          id="mySearch"
          name="search"
          onChange={handleInputChange}
          className="form-control me-2"
          type="search"
          placeholder="Search Products"
          aria-label="Search"
        />
        <button
          onClick={(e) => handleSearch(e, state.search)}
          className="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
      </form>
      <table id="myTable" className="table container mt-5">
        <thead>
          <tr>
            <th>Product name</th>
            <th>Price</th>
            <th></th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td style={{ width: "10px" }}>
                <button
                  onClick={() => addQuantity(index)}
                  className="btn btn-outline-light"
                >
                  +
                </button>
              </td>
              <td style={{ width: "10px", textAlign: "center" }}>
                {product.quantity}
              </td>
              <td style={{ width: "10px" }}>
                <button
                  onClick={() => decreaseQuantity(index)}
                  className="btn btn-outline-light"
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppProducts;
