// import { useState } from "react";
import { Link } from "react-router-dom";

// const listOfCustomers = [
//   {
//     firstName: "Marko",
//     lastName: "Markovic",
//     date_of_birth: new Date().toDateString(),
//   },
//   {
//     firstName: "Petar",
//     lastName: "Petrovic",
//     date_of_birth: new Date().toDateString(),
//   },
//   {
//     firstName: "Sabina",
//     lastName: "Milinovic",
//     date_of_birth: new Date().toDateString(),
//   },
//   {
//     firstName: "Arsen",
//     lastName: "Vukasinovic",
//     date_of_birth: new Date().toDateString(),
//   },
//   {
//     firstName: "Vukasin",
//     lastName: "Milenkovic",
//     date_of_birth: new Date().toDateString(),
//   },
// ];

// const AppCustomers = () => {
//   const [customers, setCustomers] = useState(listOfCustomers);

//   const [state, setState] = useState({
//     firstName: "",
//     lastName: "",
//     date_of_birth: "",
//   });

const AppCustomers = ({ customers, onRemove }) => {
  return (
    <table className="table container mt-5">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date Of Birth</th>
          <th>App Purchases</th>
          <th>Delete Customer</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, index) => (
          <tr key={index}>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.date_of_birth}</td>
            <td>
              <Link
                className="btn btn-outline-light"
                to={`/customers/${index}`}
              >
                App Purchases
              </Link>
            </td>
            <td>
              <button
                onClick={() => onRemove(customer.firstName)}
                className="btn btn-outline-light"
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppCustomers;
