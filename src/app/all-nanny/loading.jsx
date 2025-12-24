import React from "react";

const NannyLoading = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex flex-col gap-2 animate-pulse">
            <div className="skeleton h-40 w-full rounded-lg bg-gray-200"></div>
            <div className="skeleton h-4 w-3/4 bg-gray-200 rounded"></div>
            <div className="skeleton h-4 w-full bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NannyLoading;
