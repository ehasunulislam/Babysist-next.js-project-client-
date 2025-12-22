"use client";
import AllNaniCardDesign from "@/components/Design/AllNaniCardDesign";
import Title from "@/components/Title/Title";
import useAxios from "@/Hooks/useAxios";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const AllNanny = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    axios
      .get("/all-nanny")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [axios]);

  return (
    <div className="my-15">
      <div className="header">
        <Title text1={"Find a sitter your kids will love"} />
      </div>

      {/* Custom Navigation buttons */}
      <div className="flex justify-end mb-12 px-3 relative z-10">
        <div className="flex gap-3 absolute right-0 top-0">
          <button
            ref={prevRef}
            className="bg-[#98ccd2] rounded-full h-[35px] w-[35px] flex items-center justify-center text-white cursor-pointer"
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            ref={nextRef}
            className="bg-[#98ccd2] rounded-full h-[35px] w-[35px] flex items-center justify-center text-white cursor-pointer"
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex flex-col gap-2 animate-pulse">
              <div className="skeleton h-40 w-full rounded-lg bg-gray-200"></div>
              <div className="skeleton h-4 w-3/4 bg-gray-200 rounded"></div>
              <div className="skeleton h-4 w-full bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          modules={[Navigation, Autoplay]} // All modules in one array
          spaceBetween={20}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="mySwiper"
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Link href={"/"}>
                  <AllNaniCardDesign
                    name={item.name}
                    img={item.img}
                    location={item.location}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}

      <div className="flex justify-center items-center mt-4">
        <Link href={"/"} className="btn btn-outline border border-gray-200 rounded-2xl">
          Find Your Nanny
        </Link>
      </div>
    </div>
  );
};

export default AllNanny;
