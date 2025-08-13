import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Register data:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-yellow-600">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo */}
        <img
          src="image copy.png"
          alt="logo"
          className="w-16 h-16 mx-auto object-contain mb-4"
        />

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Account Register
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white bg-opacity-20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white bg-opacity-20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your phone"
            value={form.phone}
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Password confirmation"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white bg-opacity-20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 bg-orange-800 text-white rounded hover:bg-orange-900"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-white text-sm">
          Already a member?{" "}
          <span
            onClick={() => navigate("/login")}
            className="font-semibold hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
