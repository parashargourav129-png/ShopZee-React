import { useState } from "react";

function Login() {

  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="login-container">

      <h2>
        {isSignup ? "Create Account" : "Welcome to ShopZee"}
      </h2>

      <p>
        {isSignup ? "Sign up to get started" : "Login to your account"}
      </p>

      <form>

        {isSignup && (
          <input
            type="text"
            placeholder="Enter your name"
            required
          />
        )}

        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          required
        />

        <button type="submit">
          {isSignup ? "Sign Up" : "Login"}
        </button>

      </form>

      <p>
        {isSignup
          ? "Already have an account?"
          : "Don't have an account?"}

        <button
          type="button"
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup ? "Login" : "Sign Up"}
        </button>

      </p>

    </div>
  );
}

export default Login;