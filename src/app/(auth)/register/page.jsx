"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Link from "next/link";
import Swal from "sweetalert2";
import useAuthInfo from "@/Hooks/useAuthInfo";
import axios from "axios";
import useAxios from "@/Hooks/useAxios";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const [showPass, setShowPass] = useState(false);
  const { createUserFunction, updateUser, signInWithGoogle } = useAuthInfo();
  const axiosSecure = useAxios();

  const onSubmit = async (data) => {
    try {
      // image_bb host image
      const registerImg = data.photo[0];
      const fromData = new FormData();
      fromData.append("image", registerImg);

      const imageBB_api_key = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_BB_API_LINK}`;
      const imageRes = await axios.post(imageBB_api_key, fromData);
      const imageData = imageRes.data.data.url;

      // firebase user crate
      const registerFunction = await createUserFunction(
        data.email,
        data.password
      );
      const user = registerFunction.user;
      console.log(user);

      // update userProfile
      const updateUserProfile = await updateUser(data.name, imageData);

      // send to backend user data
      const userData = {
        name: data.name,
        email: data.email,
        img: imageData,
        role: data.role.toLowerCase(),
        status: "pending",
      };

      const res = await axiosSecure.post("/users", userData);

      if (res.data.insertedId) {
        Swal.fire({
          title: "Registration Successful! 🎉",
          text: "Please wait for admin approval.",
          icon: "success",
        });
        reset();
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: err.message,
      });
    }
  };

  /* handle google signIn functionality */
  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      const GoogleUser = user.user;

      const userData = {
        name: GoogleUser.displayName,
        email: GoogleUser.email,
        photoURL: GoogleUser.photoURL,
        role: "user",
        status: "pending",
      };

      const res = await axiosSecure.post("/users", userData);

      if (res.data.insertedId) {
        Swal.fire({
          title: "Login Successful! 🎉",
          text: "Welcome to BabySist",
          icon: "success",
        });
        // navigate(redirect, { replace: true });
      } else if (res.data.message === "user already exists") {
        Swal.fire({
          icon: "info",
          title: "Welcome Back!",
          text: "You already have an account.",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: err.message,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-2xl p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-8">Register Account</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
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
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Role */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Choose your role
            </label>
            <select
              {...register("role", { required: "Role is required" })}
              className="w-full border rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="user">User</option>
              <option value="nanny">Nanny</option>
            </select>
          </div>

          {/* File / Image Upload */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("photo", { required: "Image is required" })}
              className="file-input w-full border rounded-md  bg-white focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
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
                {showPass ? (
                  <IoEyeOffOutline size={20} />
                ) : (
                  <IoEyeOutline size={20} />
                )}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* confirm password */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Confirm Password"
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
                {showPass ? (
                  <IoEyeOffOutline size={20} />
                ) : (
                  <IoEyeOutline size={20} />
                )}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Register Button */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md font-semibold hover:opacity-90 transition cursor-pointer"
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
          <button
            className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100 cursor-pointer"
            onClick={handleGoogleSignIn}
          >
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
