import React from "react";

export const FindPostcard = () => {
  return (
    <div className="bg-[#f3f5ff] mt-6">
      <div className="rounded-full px-4 py-2 my-2 mx-auto bg-[#f3f5ff] outline-none w-[6%]">
        <p className="text-[#4457ff] text-[11px]">Benefits</p>
      </div>
      <p className="text-center text-[#000] text-xl m-2">
        Easily find a Postcode.
      </p>
      <p className="text-center text-[#6b7276] text-xs w-[30%] mx-auto my-2">
        Use Check My Postcard to find out all the useful information for your
        local postcodes.
      </p>
      <div className="grid grid-cols-3 gap-x-2 gap-y-8 items-center px-48 mt-10">
        <div className="border rounded-3xl border-solid shadow-[0px_16px_24px_2px_#00000024] w-3/4 mx-auto px-4 py-6 h-40">
          <h3 className="text-[#4457ff]">Organize your day</h3>
          <p className="text-[11px] leading-relaxed mt-2 text-[#6b7276]">
            Find our typical house prices, council tax bands and business
            rateable values.
          </p>
        </div>
        <div className="border rounded-3xl border-solid shadow-[0px_16px_24px_2px_#00000024] w-3/4 mx-auto px-4 py-6 h-40">
          <h3 className="text-[#4457ff]">Representation</h3>
          <p className="text-[11px] leading-relaxed mt-2 text-[#6b7276]">
            See who represents you in parliaments and your local councils, and
            dsicover how ofsted has rated local schools.
          </p>
        </div>
        <div className="border rounded-3xl border-solid shadow-[0px_16px_24px_2px_#00000024] w-3/4 mx-auto px-4 py-6 h-40">
          <h3 className="text-[#4457ff]">Superfast Broadband</h3>
          <p className="text-[11px] leading-relaxed mt-2 text-[#6b7276]">
            Check whether superfast broadband is available, and see how popular
            it is.
          </p>
        </div>
        <div className="border rounded-3xl border-solid shadow-[0px_16px_24px_2px_#00000024] w-3/4 mx-auto px-4 py-6 h-40">
          <h3 className="text-[#4457ff]">Map Location</h3>
          <p className="text-[11px] leading-relaxed mt-2 text-[#6b7276]">
            See where your postcode is on a map.
          </p>
        </div>
        <div className="border rounded-3xl border-solid shadow-[0px_16px_24px_2px_#00000024] w-3/4 mx-auto px-4 py-6 h-40">
          <h3 className="text-[#4457ff]">Nearest Postcode</h3>
          <p className="text-[11px] leading-relaxed mt-2 text-[#6b7276]">
            Find the nearest postcode to where you are right now.
          </p>
        </div>
        <div className="border rounded-3xl border-solid shadow-[0px_16px_24px_2px_#00000024] w-3/4 mx-auto px-4 py-6 h-40">
          <h3 className="text-[#4457ff]">Comments</h3>
          <p className="text-[11px] leading-relaxed mt-2 text-[#6b7276]">
            Read what other people have said about your postcode, and leave your
            own for others to read.
          </p>
        </div>
      </div>
      <hr className="m-20 border border-[#4457ff]" />
    </div>
  );
};
