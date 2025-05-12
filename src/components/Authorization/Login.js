import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // No logic here, only UI
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={submitHandler} autoComplete="off">
        <h2 className="form-title">Sign In</h2>

        <div className="input-group">
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
            placeholder="Email"
            className="input-field"
          />
          <Mail className="input-icon" size={18} />
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            placeholder="Password"
            className="input-field"
          />
          <Lock className="input-icon" size={18} />
        </div>

        <button type="submit" className="submit-btn">
          Login
        </button>

        <p className="form-link">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Create account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;