import React from "react";
import { Typography } from "../../common";
import { categories } from "../../../utils/data";
import { appImages } from "../../../assets/appImages";
import Slider from "react-slick";

export const HomeHeroBlock = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="mt-8">
      <div class="resContainer">
        <div class="flex h-[344px] gap-x-10">
          <ul class="list-none flex shrink-0 flex-col gap-5 border-3 h-full w-[250px] border-r border-black/10">
            {categories.map((cat, index) => (
              <li class="w-full h-5">
                <Typography>{cat.name}</Typography>
              </li>
            ))}
          </ul>
          <div class="w-full h-full">
            <div class="h-full ">
              <Slider {...settings}>
                <div class="w-full h-full overflow-hidden bg-gray-100">
                  <img
                    src={appImages.headerAd1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div class="w-full h-full overflow-hidden bg-gray-100">
                  <img
                    src={appImages.headerAd1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div class="w-full h-full overflow-hidden bg-gray-100">
                  <img
                    src={appImages.headerAd1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
