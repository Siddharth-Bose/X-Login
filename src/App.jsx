import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username === "user" && formData.password === "password") {
      setIsLoggedIn(true);
      setError(false);
    } else {
      setError(true);
      setIsLoggedIn(false);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>

      {error && (
        <p className="text-red-600 font-semibold">
          Invalid username or password
        </p>
      )}

      {!isLoggedIn && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}

      {isLoggedIn && <p className="text-green-600 font-bold">Welcome User</p>}
    </div>
  );
}

export default App;
