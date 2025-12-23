"use client"
import RegisterButton from "@/components/Button/RegisterButton";
import ParentLoveCardDesign from "@/components/Design/ParentLoveCardDesign";
import Title from "@/components/Title/Title";
import useAxios from "@/Hooks/useAxios";
import React, { useEffect, useState } from "react";
import { GiRoundStar } from "react-icons/gi";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ParentsLove = () => {
  const [data, setData] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    axios
      .get("/parent-love")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [axios]);

  return (
    <div>
      <div className="header flex flex-col justify-center items-center">
        <Title text1={"Babysits is the platform parents love most"} />

        {/* RATING */}
        <div className="flex gap-2 items-center mt-4 justify-center lg:justify-start">
          <div className="flex gap-1">
            <GiRoundStar className="text-yellow-300" size={25} />
            <GiRoundStar className="text-yellow-300" size={25} />
            <GiRoundStar className="text-yellow-300" size={25} />
            <GiRoundStar className="text-yellow-300" size={25} />
            <GiRoundStar className="text-yellow-300" size={25} />
          </div>
          <p className="font-semibold text-gray-400 text-[1.3rem]">4.7 / 5</p>
        </div>

        <p className="font-semibold pt-2">1000+ reviews</p>
      </div>

      <div className="card-sec mt-6">
        <Swiper
          modules={[Navigation, Autoplay]} 
          spaceBetween={20}
          onInit={(swiper) => {
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
                <ParentLoveCardDesign
                  name={item.name}
                  description={item.description}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="flex justify-center items-center mt-3">
        <RegisterButton buttonText={"sign me up !"} />
      </div>
    </div>
  );
};

export default ParentsLove;
