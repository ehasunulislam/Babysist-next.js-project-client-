"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Link from "next/link";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showPass, setShowPass] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-2xl p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-8">Register Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Role */}
          <div>
            <label className="block mb-2 text-sm font-medium">Choose your role</label>
            <select
              {...register("role", { required: "Role is required" })}
              className="w-full border rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="user">User</option>
              <option value="nanny">Nanny</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                className="w-full border rounded-md px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPass ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Register Button */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Register
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google */}
        <div className="flex flex-col items-center gap-3">
          <button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100">
            <FcGoogle size={22} />
          </button>
          <p className="text-sm font-medium">Connect with socials</p>
          <p className="text-sm text-gray-500">
            Already have an account ?
            <Link href="/login" className="text-blue-500 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
