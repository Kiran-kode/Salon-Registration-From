import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="w-full flex  ">
        <div className="bg-amber-100 w-1/2 hidden md:block ">
          <img src="https://cutxpress.life/asset/image/login_page.jpg" className="w-full  object-fill h-[100vh]" /></div>
        <div className="flex items-center w-full mx-3  md:w-1/2 justify-center ">

          <div style={{ animation: 'slideInFromLeft 1s ease-out' }} className="max-w-md w-full bg-gradient-to-r from-cyan-500 to-cyan-800 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8">
            <h2 style={{ animation: 'appear 2s ease-out' }} className="text-center text-4xl font-extrabold text-white">
              Sign in to Continue
            </h2>
            <p style={{ animation: 'appear 3s ease-out' }} className="text-center text-gray-200">
              Find and book Hair Cut, Massage, Spa, Waxing, Coloring services anytime.
            </p>
            <form method="POST" action="#" className="space-y-6">
              <div className="relative">
                <input placeholder="john@example.com" className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-black" required id="email" name="email" type="email" />
                <label className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm" htmlFor="email">Email address</label>
              </div>
              <div className="relative">
                <input placeholder="Password" className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-black" required id="password" name="password" type="password" />
                <label className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm" htmlFor="password">Password</label>
              </div>
              <div className="flex items-center justify-between">
                {/* <label className="flex items-center text-sm text-white">
            <input className="form-checkbox h-4 w-4 text-cyan-700 bg-gray-800 border-gray-300 rounded" type="checkbox" />
            <span className="ml-2">Remember me</span>
          </label> */}
                <a className="text-sm text-purple-200 hover:underline" href="#">Forgot your password?</a>
              </div>
              <button className="w-full py-2 px-4 bg-cyan-700 hover:bg-cyan-800 rounded-md shadow-lg text-white font-semibold transition duration-200" type="submit">
                Continue
              </button>
            </form>
            <div className="text-center text-gray-300">
              New User?
              <a className="text-purple-300 hover:underline">
                <Link to="/signup">Register Here</Link>
              </a>
            </div>
          </div>


        </div>
      </div>
















    </>
  );
};

export default Login;