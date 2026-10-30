
import { useState,useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Categories from "./components/categories";
import ProductCard from "./components/productcard";
import Cart from "./components/cart";
import Login from "./components/login";



function App() {
  const [cartItems, setCartItems] = useState(() => {
  const savedCart = localStorage.getItem("shopzee-cart");

  return savedCart ? JSON.parse(savedCart) : [];
});
useEffect(() => {
  localStorage.setItem(
    "shopzee-cart",
    JSON.stringify(cartItems)
  );
}, [cartItems]);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  

  const products = [
    { name: "Nike Sneakers", price: 2999, image: "nike.jpg" },
    { name: "iPhone", price: 79999, image: "phone.jpg" },
    { name: "Headphones", price: 4999, image: "headphone.jpg" },
    { name: "Perfumes", price: 6999, image: "perfume.jpg" },
  ];

  const addToCart = (product) => {
  setCartItems((prevItems) => {
    const existingProduct = prevItems.find(
      (item) => item.name === product.name
    );

    if (existingProduct) {
      return prevItems.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prevItems, { ...product, quantity: 1 }];
  });
};

const cartCount = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
   <Navbar
    cartCount={cartCount}
    search={search}
    setSearch={setSearch}
    />

      <Hero />

<Categories />

{/* Featured Products */}
{selectedProduct && (
  <section className="product-details">

    <h2>Product Details</h2>

    <img
      src={`/images/${selectedProduct.image}`}
      alt={selectedProduct.name}
    />

    <h3>{selectedProduct.name}</h3>

    <p>
      Price: ₹{selectedProduct.price.toLocaleString("en-IN")}
    </p>

    <p>
      High-quality product available at ShopZee.
    </p>

    <button
      onClick={() => addToCart(selectedProduct)}
    >
      Add To Cart
    </button>

    <button
      onClick={() => setSelectedProduct(null)}
    >
      Close
    </button>

  </section>
)}

<section className="products" id="products">

  <div className="section-title">
    <h2>Featured Products</h2>
    <p>Most popular products</p>
  </div>

  <div className="products-container">

    {filteredProducts.length > 0 ? (
      filteredProducts.map((product) => (
        <ProductCard
        key={product.name}
        product={product}
        onAddToCart={addToCart}
        onViewDetails={setSelectedProduct}
      />
      ))
    ) : (
      <p>No products found.</p>
    )}

  </div>
</section>

       <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
       />

        <div className="offer-banner">
          <h2>Mega Sale 50% OFF</h2>
          <p>Limited time offer on premium collections</p>

          <button
            type="button"
            onClick={() =>
              document.getElementById("products").scrollIntoView({
                behavior: "smooth"
              })
            }
          >
            Explore Deals
          </button>
        </div>


      {/* Features */}
      <section className="features">
        <div className="section-title">
          <h2>Why Choose Us</h2>
        </div>

        <div className="features-container">
          <div className="feature-card">
            <h3>Fast Delivery</h3>
            <p>Quick delivery at your doorstep</p>
          </div>

          <div className="feature-card">
            <h3>Secure Payment</h3>
            <p>100% safe payment methods</p>
          </div>

          <div className="feature-card">
            <h3>Easy Returns</h3>
            <p>Simple and easy return policy</p>
          </div>

          <div className="feature-card">
            <h3>24/7 Support</h3>
            <p>Customer support anytime</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Subscribe Us!</h2>
          <p>Get latest updates and offers</p>

          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="button">Subscribe</button>
          </div>
        </div>
      </section>

      <section id="login">
        <Login />
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-box">
            <h3>ShopZee</h3>
            <p>Your trusted online shopping partner.</p>
          </div>

          <div className="footer-box">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#categories">Categories</a>
          </div>

          <div className="footer-box">
            <h3>Support</h3>
            <a href="#home">Help Center</a>
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms</a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 ShopZee. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default App;