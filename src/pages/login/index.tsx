import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Login data:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-yellow-600">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md">
        <img
          src="image copy.png"
          alt="logo"
          className="w-24 h-24 mx-auto object-contain mb-4"
        />
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Account Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username or Email address"
            value={form.username}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white bg-opacity-20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white bg-opacity-20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          <div className="flex items-center justify-between text-white text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="form-checkbox text-orange-300"
              />
              <span>Remember Me</span>
            </label>
            <button
              type="button"
              className="hover:underline"
              onClick={() => console.log("Forgot password clicked")}
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-orange-800 text-white rounded hover:bg-orange-900"
          >
            Login
          </button>
        </form>

        {/* Social Login */}
        <div className="mt-6 text-center text-white">
          <p className="mb-2">Or login with</p>
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              className="bg-white p-2 rounded-full"
              onClick={() => console.log("Login with Facebook")}
            >
              <img src="fb..png" alt="Facebook" className="w-6 h-6" />
            </button>
            <button
              type="button"
              className="bg-white p-2 rounded-full"
              onClick={() => console.log("Login with Twitter")}
            >
              <img src="Twitter.png" alt="Twitter" className="w-6 h-6" />
            </button>
            <button
              type="button"
              className="bg-white p-2 rounded-full"
              onClick={() => console.log("Login with Google")}
            >
              <img src="gg.png" alt="Google" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-white text-sm">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => navigate(`/register`)}
            className="font-semibold hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
