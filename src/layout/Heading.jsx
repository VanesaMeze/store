const Heading = () => {
  return (
    <header class="p-3 text-bg-light">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" class="nav-link px-2 text-secondary">
                Home
              </a>
            </li>
            <li>
              Products
              {/* <Link to={`/products`}>Products</Link> */}
            </li>
            <li>
              Customers
              {/* <Link to={`/customers`}>Customers</Link> */}
            </li>
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              class="form-control form-control-dark text-bg-light"
              placeholder="Search..."
              aria-label="Search"
            ></input>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Heading;
