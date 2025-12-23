import Image from "next/image";
import React from "react";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const DownloadApps = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center my-15">
      <section className="text-center space-y-3">
        <h3 className="font-semibold text-3xl">
          Childcare is always within reach with our app
        </h3>
        <p className="text-gray-300">
          Quickly view the babysitting jobs and available babysitters or nannies
          in your <br /> area via our app!
        </p>

        <div className="flex gap-3 justify-center">
            <button className="flex gap-2 items-center bg-sky-300 text-white px-3 py-3 rounded-[5px] cursor-pointer "><FaApple />App Store</button>
            <button className="flex gap-2 items-center bg-sky-300 text-white px-3 py-3 rounded-[5px] cursor-pointer "><FaGooglePlay />Google Play</button>
        </div>
      </section>

      <section>
        <Image src={"/assets/app.webp"} width={500} height={300} alt="download image" />
      </section>
    </div>
  );
};

export default DownloadApps;
