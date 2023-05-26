import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Welcome from "./components/Welcome";
import CustomerPurchase from "./pages/CustomerPurchase";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import AddCustomers from "./pages/AddCustomers";
import BuyProducts from "./pages/BuyProduct";

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

const listOfProducts = [
  {
    name: "T-shirt",
    price: 12.5,
    quantity: 0,
  },
  {
    name: "Jumper",
    price: 25.0,
    quantity: 0,
  },
  {
    name: "Jeans",
    price: 27.5,
    quantity: 0,
  },
  {
    name: "Blouse",
    price: 8.75,
    quantity: 0,
  },
  {
    name: "Dress",
    price: 17.5,
    quantity: 0,
  },
];

function App() {
  const [customers, setCustomers] = useState(listOfCustomers);
  const [products, setProducts] = useState(listOfProducts);

  const handleSearch = (event) => {
    event.preventDefault();
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };

  const addQuantity = (index) => {
    setProducts((prevState) =>
      prevState.map((product, id) => {
        if (id === index) {
          product.quantity = product.quantity + 1;
        }
        return product;
      })
    );
  };

  const decreaseQuantity = (index) => {
    setProducts((prevState) =>
      prevState.map((product, id) => {
        if (id === index && product.quantity > 0) {
          product.quantity = product.quantity - 1;
        }
        return product;
      })
    );
  };

  const onRemove = (firstName) => {
    setCustomers((prevState) =>
      prevState.filter((customer) => customer.firstName !== firstName)
    );
  };

  const handleSubmit = (event, state) => {
    event.preventDefault();

    let newCustomer = {
      firstName: state.firstName,
      lastName: state.lastName,
      date_of_birth: state.date_of_birth,
    };
    console.log(state);

    setCustomers((prevState) => (prevState = [...prevState, newCustomer]));
  };

  const handleChange = ({ target }) => {
    this.setCustomers({
      selectedOption: target.customers,
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Welcome />}></Route>
      <Route
        path="customers"
        element={<Customers customers={customers} onRemove={onRemove} />}
      ></Route>
      <Route
        path="products"
        element={
          <Products
            products={products}
            addQuantity={addQuantity}
            decreaseQuantity={decreaseQuantity}
            handleSearch={handleSearch}
          />
        }
      ></Route>
      <Route
        path="addCustomer"
        element={<AddCustomers handleSubmit={handleSubmit} />}
      ></Route>
      <Route
        path="customers/:id"
        element={<CustomerPurchase customers={customers} />}
      ></Route>
      <Route
        path="products/:id"
        element={
          <BuyProducts products={products} handleChange={handleChange} />
        }
      ></Route>
    </Routes>
  );
}

export default App;
