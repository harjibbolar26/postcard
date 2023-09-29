import React from "react";
import { Input } from "./Input";
import Image from "next/image";
import search from "../icons/magnifying-glass.svg";
import heroVector from "../vectors/HeroSectionVector.png";

export const Hero = () => {
  return (
    <div className="px-auto text-center">
      <Image
        src={heroVector}
        height="100"
        width="1300"
        className="bg-[#f3f5ff]"
      />
      <div className="absolute left-[35%] top-[35%] z-50 bg-[#f3f5ff] w-[30%] h-[40%] mx-auto">
        <div className="font-[600] text-[40px] mb-5">Check My Postcard</div>
        <div className="text-[16px] mb-14 w-full mx-auto">
          Get started by searching for a postcard or place name.
        </div>
        <div className="flex items-center rounded-full border border-solid border-[#4457ff] mx-auto py-2 px-2 w-full shadow-[0px_16px_24px_2px_#00000024]">
          <Image src={search} width="20" height="20" />
          <Input
            inputClass="rounded outline-none w-[300px] ml-2 bg-inherit"
            name="check-postcard"
          />
        </div>
      </div>
    </div>
  );
};
