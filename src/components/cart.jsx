function Cart({ cartItems, setCartItems }) {

  // Increase quantity
  const increaseQuantity = (name) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (name) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove product
  const removeItem = (name) => {
    setCartItems((prev) =>
      prev.filter((item) => item.name !== name)
    );
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-section" id="cart">

      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.name}>

              <img
                src={`/images/${item.image}`}
                alt={item.name}
              />

              <div>
                <h3>{item.name}</h3>

                <p>
                  ₹{item.price.toLocaleString("en-IN")}
                </p>

                <button
                  type="button"
                  onClick={() => decreaseQuantity(item.name)}
                >
                  -
                </button>

                <span> {item.quantity} </span>

                <button
                  type="button"
                  onClick={() => increaseQuantity(item.name)}
                >
                  +
                </button>

                <button
                  type="button"
                  onClick={() => removeItem(item.name)}
                >
                  Remove
                </button>

              </div>
            </div>
          ))}

          <h3>
            Total: ₹{totalPrice.toLocaleString("en-IN")}
          </h3>
        </>
      )}

    </section>
  );
}

export default Cart;