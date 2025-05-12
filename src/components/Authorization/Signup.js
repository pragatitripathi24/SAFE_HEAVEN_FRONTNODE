import React, { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import "./Signup.css";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const changeHandler = (e) => {
    const { name, type, value, checked } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={submitHandler}>
        <h2 className="form-title">Sign Up</h2>

        <div className="input-group">
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            placeholder="Name"
            className="input-field"
          />
          <User className="input-icon" size={18} />
        </div>

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

        <div className="input-group">
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            placeholder="Confirm Password"
            className="input-field"
          />
          <Lock className="input-icon" size={18} />
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            name="isAccepted"
            id="terms"
            checked={data.isAccepted}
            onChange={changeHandler}
            className="checkbox-input"
          />
          <label htmlFor="terms" className="checkbox-label">
            I accept terms of privacy policy
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Create Account
        </button>

        <p className="form-link">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;