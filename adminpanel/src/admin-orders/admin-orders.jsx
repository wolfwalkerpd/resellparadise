import React from "react";
import "./admin-orders.css";
import CardWide from "./cardWide";

function AdminOrders() {
  const eyeToggle = (e) => {
    if (e == la - eye - slash) {
    }
  };
  return (
    <section className="bg-[#434343] h-full text-white p-7">
      <div className=" flex">
        <img src="/img/Ellipse-1.png" alt="statue" />
        <div className="">
          <i className="las la-long-arrow-alt-left text-7xl absolute right-10"></i>
        </div>
      </div>
      <div className="ml-32 flex gap-48">
        <div>
          <span className=" text-xl font-normal">cart code</span>
          <h2 className=" text-[80px] font-medium">FDR444</h2>
        </div>
        <div>
          <span className=" text-xl font-normal block">confirmation code</span>
          <h2 className=" text-[80px] font-medium inline-block mx-2">
            AD4G8da
          </h2>
          <button
            type="button"
            className="inline-block text-5xl text-[#E9EC67]"
            onClick={eyeToggle}>
            <i class="las la-eye-slash"></i>
          </button>
        </div>
      </div>
      <div className="text-white md:relative">
        <button>
          <i className="las la-shopping-cart absolute 2xl:left-5 xl:top-[300px] text-4xl md:right-2 md:-top-16 xl:right-auto xl:left-0 2sm:bottom-0"></i>
        </button>
        <button>
          <i className="las la-home absolute 2xl:left-5 xl:top-[250px] text-4xl md:right-14 md:-top-16 xl:right-auto xl:left-0 2sm:bottom-0"></i>
        </button>
      </div>
      {/* this */}
      <div className="grid grid-cols-2">
        <div className=" ms-32 mr-10">
          <h2>items</h2>
          <CardWide />
          <CardWide />
        </div>
        {/* this */}
        <div className=" border-l pl-10 border-[#979797] pr-5">
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
    </section>
  );
}
export default AdminOrders;
