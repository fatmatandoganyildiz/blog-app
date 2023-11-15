import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="w-full h-screen bg-gradient-to-r from-stone-300 via-stone-400 to-stone-500">
        <div className="fixed w-full px-4 py-24 z-50 ">
          <div className="max-w-[450px] h-[550px] mx-auto bg-black/60 text-white rounded-lg py-2">
            <div className="max-w-[350px] mx-auto my-7 py-16 px-2 bg-stone-500 rounded-sm">
              <h1 className="text-2xl font-light text-center">SIGN UP</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col justify-items-center"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 rounded-md  text-gray-950"
                  placeholder="Email"
                  type="email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 rounded-md text-gray-950"
                  placeholder="Password"
                  type="password"
                  autoComplete="password"
                />
                <button className="rounded border font-semibold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm my-2 text-gray-900">
                  <p>
                    <input type="checkbox" />
                    Remember me
                  </p>
                  <p className="cursor-pointer">Need Help?</p>
                </div>
                <p className="py-4">
                  <span>Already have a account?</span>{" "}
                  <Link to="/login" className="font-bold">
                    Sign In
                  </Link>
                </p>
                <p className="py-4">
                  <Link
                    to="/modal"
                    className="font-bold border px-2 py-1 rounded-md"
                  >
                    Read User Agreement
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
