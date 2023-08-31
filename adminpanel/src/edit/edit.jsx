import React from "react";
import "./edit.css";
import User from "../database"
import { useState } from "react";
function Edit() {
  const {CartValue,setCartValue} = useState();
  const EditToggle = () =>{
    return(
      <input type="text" className=" border-b" value={CartValue} onChange={(e)=>{
        setCartValue(e.target.value);
      }} />
    )
  }
  return (
    <section className="bg-[#434343] h-full text-white p-7">
        {/* this */}
      <div className=" flex">
        <div>
          <img src="/img/Ellipse-1.png" />
        </div>
        <div className="">
          <i className="las la-long-arrow-alt-left text-7xl absolute right-10"></i>
        </div>
      </div>
      {/* this */}
      <div className="text-white md:relative sm:hidden md:block">
        <button>
          <i className="las la-shopping-cart absolute 2xl:left-5 xl:top-[300px] text-4xl md:right-2 md:-top-16 xl:right-auto xl:left-0 2sm:bottom-0"></i>
        </button>
        <button>
          <i className="las la-home absolute 2xl:left-5 xl:top-[250px] text-4xl md:right-14 md:-top-16 xl:right-auto xl:left-0 2sm:bottom-0"></i>
        </button>
      </div>
      {/* this */}
        <div className="ml-52">
            <h4 className="text-2xl font-extralight">Username</h4>
            <h2 className=" text-[80px]">not you</h2>
        </div>
      {/* this */}
      <div className="ml-52 flex gap-5">
        <div className="bg-[#E9EC67] w-96 rounded-md text-black relative py-4 px-3">
            <h4 className="inline text-base">cart code</h4>
            <button className="absolute right-5 text-base" onClick={EditToggle}>Edit<i class="las la-pen"></i></button>
            <h2 className="block text-2xl my-5">{CartValue}</h2>
        </div>

        <div className="bg-[#EDEDED] w-96 rounded-md text-black relative py-4 px-3">
            <h4 className="inline text-base">confirmation code</h4>
            <button className="absolute right-5 text-base" onClick="">Edit<i class="las la-pen"></i></button>
            <h2 className="block text-2xl my-5">Uk7529h9IOY7</h2>
        </div>

        <div className="bg-[#535353] w-96 rounded-md relative py-4 px-3">
            <h4 className="inline text-base">User's password</h4>
            <button className="absolute right-5 text-base" onClick="">Edit<i class="las la-pen"></i></button>
            <h2 className="block text-2xl my-5">thisisanpassword</h2>
        </div>
      </div>
    {/* this */}
    <div>
        <h2>Orders</h2>
        <div>
            {User.map((data)=>{
                return(<List {...data} />)
            })}
        </div>
    </div>
    </section>
  );
}
const List =(props) =>{
    const {username,password,CartCode,confirm,date,id} = props;
    
        return(
            <div id={id}>
                <h3>{username}</h3>
                <h3>{password}</h3>
                <h3>{CartCode}</h3>
                <h3>{confirm}</h3>
                <button>Check <i class="las la-search"></i></button>
            </div>
        )
    
}
export default Edit;
