import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = UserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504261025028-554905831f45?q=80&w=3873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.9,
      }}
    >
      <div className="max-w-[600px] mx-auto bg-white bg-opacity-70 rounded-lg py-6 px-3">
        <div className="max-w-[400px] mx-auto my-7 py-10 px-4 bg-gray-100 rounded-sm">
          <h1 className="text-3xl font-light text-center mb-6">SIGN IN</h1>
          {error ? <p className="p-3 bg-red-500 my-3">{error}</p> : null}
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col justify-items-center"
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 my-2 rounded-md text-gray-800"
              placeholder="Email"
              type="email"
              autoComplete="email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 my-2 rounded-md text-gray-800"
              placeholder="Password"
              type="password"
              autoComplete="password"
            />
            <button disabled={!email || !password} className="rounded bg-blue-500 text-white font-semibold py-2">
              Sign In
            </button>
            <div className="flex justify-between items-center text-sm my-2 text-gray-800">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <p className="cursor-pointer">Need Help?</p>
            </div>
            <p className="py-4">
              <span>Don't you have an account?</span>{" "}
              <Link to="/signup" className="font-bold text-blue-500">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
