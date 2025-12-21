import Title from "@/components/Title/Title";
import Image from "next/image";
import React from "react";

const Care = () => {
  return (
    <div className="my-15 ">
      <div className="header">
        <Title
          text1={"Find the care that fits your family best. Anytime, anywhere."}
        />
      </div>

      <div className="mx-20 flex justify-center gap-25 mt-11">
        <section>
          <Image src="/assets/care.webp" alt="care" width={350} height={300} />
        </section>

        <section>
          <div className="card w-120 border border-gray-200 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">
                We’ve got your babysitter covered. Now it your turn to shine.✨
              </h2>

              <ul className="font-semibold">
                <li>. Make some fun plans</li>
                <li>. Tackle those important to do</li>
                <li>. Or simply take a moment to relax</li>
              </ul>
            </div>
          </div>

          <div className="card w-120 border border-gray-200 shadow-sm mt-4">
            <div className="card-body">
              <h2 className="card-title">Always reply to messages for free</h2>
              <p>
                Basic features free for all members. Parents get extra benefits
                with Premium.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Care;
