import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
        } else {
          alert("Error");
        }
      })
      .then((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center w-100">
      <div className="bg-white p-3 rounded">
        <h1 className="text-center"> Form Login</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3 label">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control rounded-0"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
          </div>
          <div className="mb-3 label">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control rounded-0"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-10">
            Sign In
          </button>
          <p className="mt-3 mb-0 label text-danger">*If You'r not register</p>
          <Link
            to="/register"
            className="btn btn-primary w-100 rounded-10 text-decoration-none"
          >
            Register
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
