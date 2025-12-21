import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaSearch } from "react-icons/fa";
import { GiRoundStar } from "react-icons/gi";

const Header = () => {
  return (
    <div className="text-black flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-4 lg:px-0">
      {/* LEFT SIDE */}
      <section className="left-side w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold">
          Childcare you can rely on
        </h2>

        <p className="text-lg md:text-[1.3rem] font-semibold mt-3">
          Trusted by 7+ million babysitters
        </p>

        {/* INPUT */}
        <div className="max-w-full md:max-w-xl mt-9 mx-auto lg:mx-0">
          <div className="flex items-center border border-[#2f3a40] rounded-full px-4 md:px-6 py-2 shadow-md">
            <div className="flex-1 text-left">
              <p className="text-sm font-semibold mb-1">
                Quickly find a babysitter
              </p>
              <input
                type="text"
                placeholder="City or postal code"
                className="w-full bg-transparent text-gray-600 placeholder-gray-400 outline-none text-base"
              />
            </div>

            <button className="ml-2 md:ml-4 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#4f8f96] hover:bg-[#437e84] transition">
              <FaSearch className="text-white text-lg" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center lg:justify-start">
          <div className="badge bg-teal-600 text-white py-5 px-6 rounded-2xl mt-5">
            Get Started for free
          </div>
        </div>

        {/* MARQUEE */}
        <Marquee className="max-w-full md:max-w-xl mt-10" gradient={false}>
          <Image
            src="/assets/alicon.webp"
            className="mx-4"
            width={100}
            height={30}
            alt="logo"
          />
          <Image
            src="/assets/cbc.webp"
            className="mx-4"
            width={100}
            height={30}
            alt="logo"
          />
          <Image
            src="/assets/green.webp"
            className="mx-4"
            width={100}
            height={30}
            alt="logo"
          />
          <Image
            src="/assets/cbc.webp"
            className="mx-4"
            width={100}
            height={30}
            alt="logo"
          />
        </Marquee>

        {/* RATING */}
        <div className="flex gap-2 items-center mt-4 justify-center lg:justify-start">
          <div className="flex gap-1">
            <GiRoundStar className="text-yellow-300" />
            <GiRoundStar className="text-yellow-300" />
            <GiRoundStar className="text-yellow-300" />
            <GiRoundStar className="text-yellow-300" />
            <GiRoundStar className="text-yellow-300" />
          </div>
          <p className="font-semibold text-gray-400">4.7 / 5</p>
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="right-side w-full lg:w-1/2 flex justify-center">
        <Image
          src="/assets/header.webp"
          width={400}
          height={400}
          alt="header"
          className="w-[280px] md:w-[380px] lg:w-[500px]"
          priority
        />
      </section>
    </div>
  );
};

export default Header;
