"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import useAuthInfo from "@/Hooks/useAuthInfo";
import useAxios from "@/Hooks/useAxios";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { signInWithGoogle, loginUserFunctionality } = useAuthInfo();
  const axiosSecure = useAxios();
  const [showPassword, setShowPassword] = useState(false);

  // redirect
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect") || "/";

  const onSubmit = async (data) => {
    try {
      await loginUserFunctionality(data.email, data.password);
      Swal.fire({
        title: "Login Successful 🎉",
        text: `Welcome back ${data.email}!`,
        icon: "success",
      });
      reset();
      router.push(redirect);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
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
        router.push(redirect);
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
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-full max-w-md shadow-2xl bg-base-100 p-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="input input-bordered w-full mt-1"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2 mb-4 w-full">
            <label className="label text-gray-700">Password</label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                className={`input w-full pr-10 border p-2 rounded ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="password"
                {...register("password", {
                  required: "Password is required",
                  // pattern: { value: passwordRegex, message: passwordMessage },
                })}
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 z-10"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button className="btn bg-black text-white w-full mt-2">Login</button>
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
            Dont have an account ?
            <Link href="/register" className="text-blue-500 font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
