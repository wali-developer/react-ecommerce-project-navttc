import React from "react";

export const Footer = () => {
  return (
    <footer class="w-full h-[400px] bg-black py-20 mt-20">
      <div class="resContainer h-full">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 h-full">
          <div class="w-52 h-full bg-white/20"></div>
          <div class="w-52 h-full bg-white/20"></div>
          <div class="w-52 h-full bg-white/20"></div>
          <div class="w-52 h-full bg-white/20"></div>
          <div class="w-52 h-full bg-white/20"></div>
        </div>
      </div>
    </footer>
  );
};
