"use client";
import AllNaniCardDesign from "@/components/Design/AllNaniCardDesign";
import useAxios from "@/Hooks/useAxios";
import React, { useEffect, useState } from "react";

const NannyAll = () => {
  const [data, setData] = useState([]);
  const axiosSecure = useAxios();

  useEffect(() => {
    axiosSecure
      .get("/all-nanny")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [axiosSecure]);

  return (
    <div className="grid grid-cols-1 md:grid col-span-3 lg:grid-cols-4 gap-4 my-5">
      {data.map((item) => {
        return (
          <div key={item.id}>
            <AllNaniCardDesign      
              name={item.name}
              img={item.img}
              location={item.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default NannyAll;
