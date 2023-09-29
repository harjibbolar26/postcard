import Image from "next/image";
import React from "react";
import footer from "./vectors/FooterVector.png";

export const Test = () => {
  return(
    <div className="flex flex-col text-white bg-[#4457ff] bg-[url('./vectors/FooterVector.svg')] bg-[length:1280px_320px] px-16 pt-20 pb-10">
       <div className="flex justify-between mb-10">
        <div className="flex flex-col">
          <a href="#" className="mb-2">
            Search
          </a>
          <a href="#" className="mb-2">
            Postcode by Country
          </a>
          <a href="#" className="mb-2">
            Postcode by Introduction Date
          </a>
          <a href="#" className="mb-2">
            Postcode Near Me
          </a>
          <a href="#" className="mb-2">
            Postcode Lottery
          </a>
        </div>
        <div className="flex flex-col">
          <a href="#" className="mb-2">
            Postcode Map by User Type
          </a>
          <a href="#" className="mb-2">
            Postcode Map by Use Category
          </a>
          <a href="#" className="mb-2">
            Postcode Map by Council Tax Band
          </a>
        </div>
        <div className="flex flex-col">
          <a href="#" className="mb-2">
            About this Website
          </a>
          <a href="#" className="mb-2">
            Discalimer and Limitation
          </a>
          <a href="#" className="mb-2">
            Privacy Policy
          </a>
        </div>
      </div>
    {/* <Image src={footer} /> */}
    </div>
  ) ;
};
