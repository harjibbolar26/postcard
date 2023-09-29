import React from "react";
import dropDown from "../icons/bold.svg";
import Image from "next/image";

export const Dropdown = (drop) => {
  return (
    <div className="relative">
      <ul>
        <li className="flex items-center mr-4" onMouseOver={drop.hover}>
          {drop.title} <Image src={dropDown} width={20} className="mt-[-2px]"/>
        </li>
      </ul>
    </div>
  );
};
