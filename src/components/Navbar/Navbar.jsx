import React from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Logo from "../Logo/Logo";
import { TiHomeOutline } from "react-icons/ti";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import Links from "../Links/Links";
import RegisterButton from "../Button/RegisterButton";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <Links href={"/"}><TiHomeOutline size={25} /></Links>
      </li>

      <li>
        <Links href={"/services"}><RiUserSettingsLine size={25} /></Links>
      </li>

      <li>
        <Links href={"/booking"}><IoBookOutline size={25} /></Links>
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
        <ul className="menu menu-horizontal px-1">
         {nav}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>

        <div className="ms-3">
          <RegisterButton buttonText={"Sign up"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
