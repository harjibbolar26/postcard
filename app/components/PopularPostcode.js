import Image from "next/image";
import React from "react";
import PopPostVector from "../vectors/PopularPostcodesSectionVector.png";

export const PopularPostcode = () => {
  return (
    <div>
      {/* <Image
        src={PopPostVector}
        className="relative bg-[#f3f5ff]"
      /> */}
      <div className=" left-[25%] w-3/4 mx-auto mt-6">
        <div className="rounded-full px-4 py-2 my-2 mx-auto bg-[#f3f5ff] outline-none w-[9%]">
          <p className="text-[#4457ff] text-[11px]">Postcodes</p>
        </div>
        <p className="text-center text-[#000] text-xl m-2">Popular Postcode</p>
        <p className="text-center text-[#6b7276] text-xs w-[40%] mx-auto my-2">
          Easily find all the popular postcodes by clicking on any of the the
          displayed postcodes.
        </p>
        <div className="grid grid-cols-6 w-full mx-auto z-50 bg-[#fff] mt-20">
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-inherit">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center bg-[#f3f5ff]">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 px-4 text-center ">
            SA99 1DU
          </a>{" "}
          <a href="/" className="h-[40px] py-2 mx-4 text-center ">
            SA99 1DU
          </a>
        </div>
      </div>
    </div>
  );
};
