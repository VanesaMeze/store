import { useState } from "react";
import { Link } from "react-router-dom";

const AddCustomer = ({ handleSubmit }) => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    date_of_birth: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="container mt-5"
      style={{ width: "300px" }}
      onSubmit={(event) => handleSubmit(event, state)}
    >
      <h1 className="label">Create new customer:</h1>

      <div className="form-floating mt-3">
        <input
          name="firstName"
          value={state.firstName}
          onChange={handleInputChange}
          type="text"
          className="form-control"
        />
        <label>First Name</label>
      </div>
      <div className="form-floating mt-3">
        <input
          name="lastName"
          value={state.lastName}
          onChange={handleInputChange}
          type="text"
          className="form-control"
        />
        <label>Last Name</label>
      </div>
      <br></br>
      <div className="input">
        <input
          type="date"
          name="date_of_birth"
          value={state.date_of_birth}
          onChange={handleInputChange}
        />
      </div>
      <br></br>
      <hr></hr>
      <button className="btn btn-outline-dark" type="submit">
        <Link
          to={`/customers`}
          onClick={(event) => handleSubmit(event, state)}
          className="nav-link active"
        >
          Create
        </Link>
      </button>
    </form>
  );
};

export default AddCustomer;
