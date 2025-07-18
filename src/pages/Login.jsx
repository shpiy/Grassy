import React from "react";
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/auth/LoginForm';
import GrassyLogo from "../assets/images/grassy-logo.png";

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-white flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl w-full">

        {/* Left: Logo */}
        <div className="hidden lg:flex flex-col items-center w-1/2">
          <img
            src={GrassyLogo}
            alt="Grassy Logo"
            className="w-64 mb-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 border border-green-400"
          />
          <p className="text-gray-400 text-center px-4">
            Book your turf, play your game. Welcome to <span className="text-green-400 font-semibold">Grassy</span>.
          </p>
        </div>

        {/* Right: Login Box */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="bg-zinc-800 rounded-2xl shadow-xl p-8 w-full max-w-md">
            <h2 className="text-3xl font-bold text-center mb-4">Welcome Back</h2>
            <p className="text-center text-gray-400 mb-6">Sign in to continue</p>

            <LoginForm />

            {/* Divider */}
            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-600" />
              <span className="mx-2 text-gray-400">OR</span>
              <hr className="flex-grow border-gray-600" />
            </div>

            {/* Sign Up */}
            <p className="text-sm text-center text-gray-400 mt-6">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-purple-400 cursor-pointer hover:underline">
                  Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
