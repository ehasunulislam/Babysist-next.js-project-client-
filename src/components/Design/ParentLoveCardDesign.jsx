import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const ParentLoveCardDesign = ({ name, description }) => {
  return (
    <div>
      <div className="card card-dash h-70 border border-gray-300 bg-transparent">
        <div className="card-body">
          <div>
            <RiDoubleQuotesL className="text-[#F8A1BC]" size={25} />
          </div>
          <h2 className="card-title text-[1.1rem]">{description}</h2>
          <p className="text-gray-500 font-semibold">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default ParentLoveCardDesign;
