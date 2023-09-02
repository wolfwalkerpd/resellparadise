import React from "react";
import { useState } from "react";
import "./admin-orders.css";
import CardWide from "./cardWide";

function AdminOrders() {
  const eyeToggle = (e) => {
    if (e == la - eye - slash) {
    }
  };
  const confimcode = "686fha5";
  const [show, setShow] = useState(false);
  return (
    <section className="bg-[#434343] h-full text-white p-7">
      <div className=" flex">
        <img src="/img/Ellipse-1.png" alt="statue" />
        <div className="">
          <i className="las la-long-arrow-alt-left text-7xl absolute right-10"></i>
        </div>
      </div>
      <div className="2sm:ml-5 md:ml-32 md:block lg:flex xl:gap-48 lg:gap-32">
        <div>
          <span className=" text-xl font-normal">cart code</span>
          <h2 className=" text-[80px] font-medium">FDR444</h2>
        </div>
        <div>
          <span className=" text-xl font-normal block mt-5">confirmation code</span>
          <div className=" relative w-[400px]">
            <input
              value={confimcode}
              className=" bg-transparent text-[70px] w-5/6"
              type={show ? "text" : "password"}
              disabled
            />
            <button
              type="button"
              className=" text-5xl text-[#E9EC67] w-1/6 absolute top-7"
              onClick={() => setShow(!show)}>
              <i className={show ? "las la-eye-slash" : "las la-eye"}></i>
            </button>
          </div>
        </div>
      </div>
      <div className="text-white md:relative lg:block  2sm:hidden">
        <button>
          <i className="las la-shopping-cart absolute 2xl:left-5 md:top-[300px] text-4xl md:right-auto md:left-0 2sm:bottom-0"></i>
        </button>
        <button>
          <i className="las la-home absolute 2xl:left-5 md:top-[250px] text-4xl md:right-auto md:left-0 2sm:bottom-0"></i>
        </button>
      </div>
      {/* this */}
      <div className="grid md:grid-cols-2 2sm:grid-cols-1">
        <div className=" 2xl:ms-32 xl:ms-20 lg:ms-24 mr-10">
          <h2>items</h2>
          <CardWide />
          <CardWide />
        </div>
        {/* this */}
        <div className=" md:border-l 2sm:border-l-0 2sm:border-t 2sm:pt-10 md:border-t-0 md:pl-10 border-[#979797] pr-5">
          <div className="flex relative">
            <h3 className="text-[#B6B6B6]">subtotal</h3>
            <span className=" absolute right-0">360$</span>
          </div>
          <div className="flex my-3 relative">
            <h3 className="text-[#B6B6B6]">Order confirmed</h3>
            <span className=" absolute right-0">positive</span>
          </div>

          <h3 className="text-[#B6B6B6]">shipping to:</h3>
          <h4 className="my-1">Hopo yolo</h4>
          <h4 className="my-1">streethood and some address</h4>
          <h4 className="my-1">Shopping express</h4>
          <h4 className="my-1">hopoyolo@gmail.com</h4>
          <h4 className="my-1">+44 346217612</h4>

          <h3 className="text-[#B6B6B6] my-6">
            estimate to arrive:
            <span className="text-white">August 4th 2023</span>
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 bg-[#434343] w-full text-center mx-auto text-white md:hidden sticky bottom-0">
        <button>
          <i className="las la-shopping-cart text-4xl mx-2"></i>
        </button>
        <button>
          <i className="las la-home text-4xl mx-2"></i>
        </button>
      </div>
    </section>
  );
}
export default AdminOrders;
