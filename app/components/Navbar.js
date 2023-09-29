import Image from "next/image";
import React from "react";
import home from "../icons/home.svg";
import { Input } from "./Input";
import search from "../icons/magnifying-glass.svg";
import { Dropdown } from "./Dropdown";
import geo from "../icons/map-pin.svg"

export const Navbar = () => {

    // const listDropDown = () => {
    //     const list = document.querySelector(".list");

    //     list.style.display = "block"
    // }
  return (
    <div className="flex items-center justify-between px-[70px] py-10 shadow-[0px_16px_24px_2px_#00000024] fixed bg-white top-0 z-1000">
      <div className="flex justify-between w-1/5">
        <Image src={home} width={30} />
        <span className="flex items-center rounded-full border border-solid border-[#000] mx-auto  px-2 w-[85%] shadow-[0px_16px_24px_2px_#00000024] ml-6">
          <Image src={search} width="15" height="20" />
          <Input
            inputClass="rounded outline-none w-[300px] ml-2 bg-inherit text-xs"
            name="check-postcard"
            placeholder="Postcode or place name"
          />
        </span>
      </div>
      <div className="flex text-xs items-center ml-6">
        <Dropdown
            title="Postcode Lists"
            // hover={listDropDown}
        />
        <div className="absolute hidden list">
            <ul className="shadow-[0px_16px_24px_2px_#00000024] text-[#4457ff] px-1 py-3 ml-[-15px] mt-20 ">
                <li className="h-5">By Country</li>
                <li className="h-5">By Introduction date</li>
            </ul>
        </div>
        <Dropdown
            title="Postcode Maps"
            // hover={mapsDropDown}
        />
        <a href="/" className="mr-4">Nearest Postcode</a>
        <a href="/" className="mr-4">Postcode Lottery</a>
        <Dropdown
            title="Help and Information"
            // hover={helpDropDown}
        />
      </div>
      <div className="flex items-center rounded-full text-white py-2 px-4 text-xs bg-[#4457ff] shadow-[0px_16px_24px_2px_#00000024]">
        <Image src={geo} width={20}/> Use My Geolocation
      </div>
    </div>
  );
};
