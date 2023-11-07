import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div>
      <div className="w-full h-screen bg-gradient-to-r from-stone-300 via-stone-400 to-stone-500">
        <div className="fixed w-full px-4 py-24 z-50 ">
          <div className="max-w-[450px] h-[550px] mx-auto bg-black/60 text-white rounded-lg py-2">
            <div className="max-w-[350px] mx-auto my-7 py-16 px-2 bg-stone-500 rounded-sm">
              <h1 className="text-2xl font-light text-center">SIGN UP</h1>
              <form className="w-full flex flex-col justify-items-center">
                <input
                  className="p-3 my-2 rounded-md"
                  placeholder="Email"
                  type="email"
                  autoComplete="email"
                />
                <input
                  className="p-3 my-2 rounded-md"
                  placeholder="Password"
                  type="password"
                  autoComplete="password"
                />
                <button className="rounded border font-semibold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm my-2 text-gray-900">
                  <p className="cursor-pointer">Remember me</p>
                  <p className="cursor-pointer">Need Help?</p>
                </div>
                <p className="py-4">
                  <span>Already have a account?</span>{" "}
                  <Link to="/login" className="font-bold">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp