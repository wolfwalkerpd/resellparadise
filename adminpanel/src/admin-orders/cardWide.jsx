import { useState } from "react";
import React from "react";
import {Link} from "react-router-dom"

function CardWide() {
  return (
    <>
      <div className="bg-[#B7B5E4] rounded-xl p-4 md:block xl:flex sm:flex items-start justify-between gap-4 my-7 first-letter:xl:w-auto lg:w-[300px] xl:w-[500px]">
        <div>
          <img src="../img/2.png" alt="" />
        </div>
        <div className="">
          <p className=" text-base font-medium">
            Airpods pro (second generation)
          </p>
          <p className=" text-xs font-normal">Quantity 2</p>
          <Link to="/product" className=" bg-black text-white text-xs font-normal text-center py-2 px-12 rounded-md md:mt-5 lg:mt-5 sm:mt-20 xl:mt-20">
            Checkout this
          </Link>
        </div>
        <div>
          <p className="text-[23px] font-medium mt-2">
          $100.00
          </p>
        </div>
      </div>
    </>
  );
}

export default CardWide;
