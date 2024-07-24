import React, { useState } from "react";
import './login.css';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="Login">
      <form className="form" method='POST'>
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Enter the username</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter email address"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Enter password"
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={toggleShowPassword}
            />
            Show password
          </label>
        </div>
        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
}
