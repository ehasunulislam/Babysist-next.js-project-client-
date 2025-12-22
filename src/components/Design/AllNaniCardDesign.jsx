import Image from "next/image";
import React from "react";

const AllNaniCardDesign = ({ img, name, location }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm border border-gray-300">
        <figure className="px-10 pt-10">
          <Image src={img} alt={name} className="rounded-xl" width={150} height={120} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default AllNaniCardDesign;
