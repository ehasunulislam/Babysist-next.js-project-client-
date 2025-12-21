import Title from "@/components/Title/Title";
import Image from "next/image";
import React from "react";
import { MdOutlineCheck } from "react-icons/md";

const Safety = () => {
  return (
    <div>
      <div className="header">
        <Title text1={"With kids, safety always comes first"} />
      </div>

      <div className="mx-20 flex justify-center items-center gap-25 mt-11">
        <section>
          <div className="card w-120 border border-gray-200 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">
               Thats why safety is our priority
              </h2>

              <ul className="font-semibold">
                <li className="flex gap-2 items-center"><MdOutlineCheck /> Make some fun plans</li>
                <li className="flex gap-2 items-center"><MdOutlineCheck /> Tackle those important to do</li>
                <li className="flex gap-2 items-center"><MdOutlineCheck /> Or simply take a moment to relax</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <Image src="/assets/saftey.png" alt="care" width={250} height={300} />
        </section>
      </div>
    </div>
  );
};

export default Safety;
