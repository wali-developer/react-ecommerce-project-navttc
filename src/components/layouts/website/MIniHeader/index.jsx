import React from "react";

export const MiniHeader = () => {
  return (
    <section className="bg-black h-12">
      <div className="resContainer h-full">
        <div className="flex items-center h-full">
          <div className="flex-1 flex items-center gap-x-2 justify-center">
            <p className="text-sm text-white text-center">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <button className="text-sm font-semibold text-white underline">
              ShopNow
            </button>
          </div>
          <div>
            <select className="bg-transparent text-white text-sm font-normal focus:outline-none">
              <option className="text-black">English</option>
              <option className="text-black">Urdu</option>
              <option className="text-black">Pashto</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};
