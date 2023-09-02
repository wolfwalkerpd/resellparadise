import React from "react";
import "./edit.css";
import User from "../database"
import { useState } from "react";
import {Link} from "react-router-dom"
function Edit() {
  const [CartValue,setCartValue] = useState("FDr444");
  const [confirmValue,setConfirmValue] = useState("Ghf4124jf4");
  const [passValue,setPassValue] = useState("thisisanpassword");

const [editcart, setEditcart] = useState(true);
const [editconfirm, setEditconfirm] = useState(true);
const [editpass, setEditpass] = useState(true);

  const cartChange =(e)=>{
    setCartValue(e.target.value);
  }
  const confirmChange =(e)=>{
    setConfirmValue(e.target.value);
  }
  const passChange =(e)=>{
    setPassValue(e.target.value);
  }

  return (
    <section className="bg-[#434343] h-full w-full text-white p-7">
        {/* this */}
      <div className=" flex">
        <div>
          <img src="/img/Ellipse-1.png" />
        </div>
        <Link className="" to="/users">
          <i className="las la-long-arrow-alt-left text-7xl absolute right-10"></i>
        </Link>
      </div>
      {/* this */}
      <div className="text-white md:relative 2sm:hidden xl:block">
        <button>
          <i className="las la-shopping-cart absolute 2xl:left-5 xl:top-[300px] text-4xl md:right-2 md:-top-16 xl:right-auto xl:left-0 2sm:bottom-0"></i>
        </button>
        <button>
          <i className="las la-home absolute 2xl:left-5 xl:top-[250px] text-4xl md:right-14 md:-top-16 xl:right-auto xl:left-0 2sm:bottom-0"></i>
        </button>
      </div>
      {/* this */}
        <div className="xl:ml-52 lg:ml-16">
            <h4 className="text-2xl font-extralight">Username</h4>
            <h2 className=" text-[80px]">not you</h2>
        </div>
      {/* this */}
      <div className="2xl:ml-52 sm:ml-20 xl:ml-32 md:flex 2sm:block gap-5">
        {/* --------------- */}
        <div className="bg-[#E9EC67] w-96 rounded-md text-black relative my-3 py-4 px-3">
            <h4 className="inline text-base">cart code</h4>
            <button className={editcart ? 'showeditbut' : 'hideeditbut'} onClick={()=>setEditcart(!editcart)} >Edit<i className="las la-pen"></i></button>
            <h2 className={editcart ? 'showh2': 'hideh2'}>{CartValue}</h2>
            <input type="text" className={editcart ? 'hideinput' : 'showinput'} value={CartValue} onChange={cartChange} />
            <button type="button" className={editcart ? 'hideicon' : 'showicon'} onClick={()=>setEditcart(!editcart)}><i className="las la-pen"></i></button>
        </div>

        <div className="bg-[#EDEDED] w-96 rounded-md text-black relative my-3 py-4 px-3">
        <h4 className="inline text-base">confirm code</h4>
            <button className={editconfirm ? 'showeditbut' : 'hideeditbut'} onClick={()=>setEditconfirm(!editconfirm)} >Edit<i className="las la-pen"></i></button>
            <h2 className={editconfirm ? 'showh2': 'hideh2'}>{confirmValue}</h2>
            <input type="text" className={editconfirm ? 'hideinput' : 'showinput'} value={confirmValue} onChange={confirmChange} />
            <button type="button" className={editconfirm ? 'hideicon' : 'showicon'} onClick={()=>setEditconfirm(!editconfirm)}><i className="las la-pen"></i></button>
        </div>

        <div className="bg-[#535353] w-96 rounded-md relative py-4 my-3 px-3">
        <h4 className="inline text-base">password</h4>
            <button className={editpass ? 'showeditbut' : 'hideeditbut'} onClick={()=>setEditpass(!editpass)} >Edit<i className="las la-pen"></i></button>
            <h2 className={editpass ? 'showh2': 'hideh2'}>{passValue}</h2>
            <input type="text" className={editpass ? 'hideinput' : 'showinput'} value={passValue} onChange={passChange} />
            <button type="button" className={editpass ? 'hideicon' : 'showicon'} onClick={()=>setEditpass(!editpass)}><i className="las la-pen"></i></button>
        </div>
      </div>
    {/* this */}
    <div className=" w-full">
        <h2 className=" text-[#B6B6B6] text-2xl md:ml-20 lg:ml-40 mt-5">Orders</h2>
        <div className=" overflow-x-scroll">
           <div>
            {User.map((UserList) => {
              return <UserEdit {...UserList} />;
            })}
          </div>
          
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
const UserEdit = (props) => {
  const { username, password, date, CartCode, confirm , id} = props;
  return (
    <div className="flex my-5 md:14 lg:ml-24 border-b w-max border-[#808080] pb-4 text-xl">
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
export default Edit;
