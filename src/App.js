import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import AppCustomers from "./components/AppCustomers";
import AppProducts from "./components/AppProducts";
import Footer from "./layout/Footer";
import Heading from "./layout/Heading";

function App() {
  return (
    <>
      <Heading /> <Footer />
      <Router>
        <Routes>
          <Route path="customers" element={<AppCustomers />}></Route>
          <Route path="products" element={<AppProducts />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
