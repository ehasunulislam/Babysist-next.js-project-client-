"use client";
import React from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Logo from "../Logo/Logo";
import { TiHomeOutline } from "react-icons/ti";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import Links from "../Links/Links";
import RegisterButton from "../Button/RegisterButton";
import useAuthInfo from "@/Hooks/useAuthInfo";
import Image from "next/image";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, signOutUser } = useAuthInfo();

  // handle SignOut functionality
  const handleSignOutFunction = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Log out Successfully",
          icon: "success",
          draggable: true,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.message,
          text: "Something went wrong!",
        });
      });
  };

  const nav = (
    <>
      <li>
        <Links href={"/"}>
          <TiHomeOutline size={25} />
        </Links>
      </li>

      <li>
        <Links href={"/services"}>
          <RiUserSettingsLine size={25} />
        </Links>
      </li>

      <li>
        <Links href={"/booking"}>
          <IoBookOutline size={25} />
        </Links>
      </li>
    </>
  );

  return (
    <div className="navbar px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <HiMiniBars3BottomRight />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {nav}
          </ul>
        </div>
        <div className="logo-sec">
          <Logo />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={user.photoURL}
                width={40}
                height={40}
                alt="user image"
                className="object-cover w-full h-full"
              />
            </div>

            <div>
              <button className="btn ms-3" onClick={handleSignOutFunction}>Log Out</button>
            </div>
          </div>
        ) : (
          <div className="flex gap-3 items-center">
            <Links href={"/login"} className="btn">
              Login
            </Links>

            <div className="ms-3">
              <RegisterButton buttonText={"Sign up"} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
