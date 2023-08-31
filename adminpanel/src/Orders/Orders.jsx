import React from "react";
import User from "../database";
import {Link} from "react-router-dom"
import "./Orders.css";
function Orders() {
  return (
    <section className="bg-[#434343] h-full p-7 text-white w-full">
      <section>
        <div className=" flex">
          <img src="/img/Ellipse-1.png" alt="statue" />
          <div className="">
          <i className="las la-long-arrow-alt-left text-7xl absolute right-10"></i>
        </div>
        </div>

        <div className="ml-32">
          <span className=" text-xl font-normal">Orders</span>
          <h2 className=" text-[80px] font-medium">41l</h2>
        </div>
          <div className="text-white md:relative">
            <button>
              <i className="las la-shopping-cart absolute 2xl:left-5 xl:top-[300px] text-4xl md:right-2 md:-top-16 xl:right-auto xl:left-0 2sm:bottom-0"></i>
            </button>
            <button>
              <i className="las la-home absolute 2xl:left-5 xl:top-[250px] text-4xl md:right-14 md:-top-16 xl:right-auto xl:left-0 2sm:bottom-0"></i>
            </button>
          </div>

        <div className=" overflow-x-scroll">
          <div className="flex ml-20 mt-10">
            <h3 className=" text-[#B6B6B6] text-xl px-16">Username</h3>
            <h3 className="text-[#B6B6B6] text-xl px-16">Joined in</h3>
            <h3 className="text-[#B6B6B6] text-xl px-16">Cart code</h3>
            <h3 className="text-[#B6B6B6] text-xl px-16">Confirmation code</h3>
          </div>
          <div>
            <div>
              {User.map((data) => {
                return <ListStyle {...data} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
const ListStyle = (props) => {
  const { username, password, date, CartCode, confirm , id} = props;
  return (
    <div className="flex my-5 ml-24 border-b border-[#808080] pb-4 text-xl">
      <h3 className="text-xl mx-16">{username}</h3>
      <h3 className="text-xl mx-16">{date}</h3>
      <h3 className="text-xl mx-16">{CartCode}</h3>
      <h3 className="text-xl mx-16 mr-44">{confirm}</h3>

      <Link className=" text-[#E9EC67]" to="/Orders/admin">
        Check <i class="las la-search"></i>
      </Link>
      <hr className="bg-red-300 h-3" />
    </div>
  );
};
export default Orders;

