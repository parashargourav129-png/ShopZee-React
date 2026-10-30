
function Navbar({ cartCount, search, setSearch }) {
  return (
    <header className="navbar">
      <div className="logo">ShopZee</div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#categories">Categories</a>
      </nav>

      <div className="nav-icons">
        <input
          type="text"
          placeholder="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="cart-btn">
          Cart ({cartCount})
        </button>

        <button type="button" onClick={() => {
        document.getElementById("login").scrollIntoView({
        behavior: "smooth"
        });
        }}>
           Login
        </button>
      </div>
    </header>
  );
}

export default Navbar;