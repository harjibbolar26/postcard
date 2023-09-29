import React from "react";
import { Input } from "./Input";
import Image from "next/image";
import guest from "../icons/user-group.svg";
import bk1 from "../images/booking1.png";
import bk2 from "../images/booking2.png";
import bk3 from "../images/booking3.png";
import norway from "../images/norway.png";
import france from "../images/france.png";
import greece from "../images/greece.png";
import italy from "../images/italy.png";
import spain from "../images/spain.png";
import uk from "../images/uk.png";
import search from "../icons/magnifying-glass.svg";

export const Booking = () => {
  return (
    <div className="w-3/4 mx-auto mt-6">
      <div className="flex justify-between items-center">
        <p className="text-xl text-[#4457ff] font-bold">Booking.com</p>
        <div className="flex items-center shadow-[0px_16px_24px_2px_#00000024] p-2 w-[82%]">
          <Input
            inputClass="border border-solid border-black h-[25px] mr-3 text-xs px-2"
            placeholder="e.g, city, region, district"
            type="text"
          />
          <div className="inline-flex items-center border border-solid border-black px-1  w-[200px] h-[25px] mr-3">
            <Input inputClass="w-[90px] h-[20px] text-xs" type="date" />
            <span className="px-[2px]">|</span>
            <Input inputClass="w-[90px] h-[20px] text-xs" type="date" />
          </div>
          <button className="bg-[#4457ff] text-white outline-none text-center px-5 py-1 text-sm h-[25px]">
            Search
          </button>

          <button className="flex justify-evenly items-center border border-solid border-[#4457ff] text-[#4457ff] px-3 py-1 text-xs ml-44">
            {" "}
            <Image src={guest} width={15} height={15} />
            Guests
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-8">
        <div className="shadow-[0px_16px_24px_2px_#00000024] p-4 w-fit rounded relative">
          <Image src={bk1} width={200} />
          <div className="bg-[#0b0a33] w-fit text-white p-2 absolute top-8 left-7">
            <p className="flex items-center text-xs">
              <span className="mr-1">Trondheim</span>{" "}
              <span>
                <Image src={norway} width={15} height={10} />{" "}
              </span>
            </p>
            <p className="text-xs">45 properties</p>
          </div>
        </div>
        <div className="shadow-[0px_16px_24px_2px_#00000024] p-4 w-fit rounded relative">
          <Image src={bk2} width={200} />
          <div className="bg-[#3b3f42] w-fit text-white p-2 absolute top-8 left-7">
            <p className="flex items-center text-xs">
              <span className="mr-1">Sixt</span>{" "}
              <span>
                <Image src={france} width={15} height={10} />{" "}
              </span>
            </p>
            <p className="text-xs">21 properties</p>
          </div>
        </div>
        <div className="shadow-[0px_16px_24px_2px_#00000024] p-4 w-fit rounded relative">
          <Image src={bk1} width={200} />
          <div className="bg-[#6b7276] w-fit text-white p-2 absolute top-8 left-7">
            <p className="flex items-center text-xs">
              <span className="mr-1">Bransgore</span>{" "}
              <span>
                <Image src={uk} width={15} height={10} />{" "}
              </span>
            </p>
            <p className="text-xs">4 properties</p>
          </div>
        </div>
        <div className="shadow-[0px_16px_24px_2px_#00000024] p-4 rounded w-[232px]">
            <a href="/" className="flex justify-between items-center text-xs text-[#4457ff] h-[25px]"> <Image src={norway} width={15} height={10} className="mr-1"/> Trondheim <span className="">from</span></a>
            <a href="/" className="flex justify-between items-center text-xs text-[#4457ff] h-[25px]"> <Image src={france} width={15} height={10} className="mr-1"/> Sixt <span className="">from</span></a>
            <a href="/" className="flex justify-between items-center text-xs text-[#4457ff] h-[25px]"> <Image src={uk} width={15} height={10} className="mr-1"/> Bransgore <span className="">from</span></a>
            <a href="/" className="flex justify-between items-center text-xs text-[#4457ff] h-[25px]"> <Image src={spain} width={15} height={10} className="mr-1"/> Cala Anguila <span className="">from</span></a>
            <a href="/" className="flex justify-between items-center text-xs text-[#4457ff] h-[25px]"> <Image src={italy} width={15} height={10} className="mr-1"/> Chiusanico <span className="">from</span></a>
            <a href="/" className="flex justify-between items-center text-xs text-[#4457ff] h-[25px]"> <Image src={greece} width={15} height={10} className="mr-1"/> Kavousion <span className="">from</span></a>
            <a href="/" className="flex justify-between items-center text-xs text-[#4457ff] h-[25px]"> <Image src={italy} width={15} height={10} className="mr-1"/> Pieve Di Ledro <span className="">from</span></a>
            <a href="/" className="flex justify-between items-center text-xs text-[#4457ff] h-[25px]"> <Image src={france} width={15} height={10} className="mr-1"/> Vierville-sur-Mer <span className="">from</span></a>
            <div className="bg-[#4457ff] shadow-[0px_16px_24px_2px_#00000024] rounded-sm">
            <button className="mt-1 flex items-center text-sm mx-auto  py-1 text-white"> <Image src={search} width={15}/>  Discover</button>
            </div>
        </div>
      </div>
    </div>
  );
};
