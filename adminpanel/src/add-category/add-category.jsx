import React from "react";
import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import "./add-category.css";
function AddCategory() {
  const [title,setTitle] = useState('title');
  const [descript,setDescript] = useState('description');
  const [img,setImg] = useState('');

  const toggleChangeTitle =(e)=>{
    setTitle(e.target.value);
  }
  const toggleChangedescript =(e)=>{
    setDescript(e.target.value);
  }

  return (
    <section className="bg-[#434343] h-full p-7 text-white">
      <div className=" sm:flex 2sm:block relative">
        <img src="/img/Ellipse-1.png" alt="statue" />
        <h2 className=" text-[40px] mt-3 pl-3 ">Add category</h2>
        <Link className="" to="/">
          <i className="las la-long-arrow-alt-left text-7xl absolute right-10 2sm:top-0"></i>
        </Link>
      </div>
      <div className="text-white md:relative 2sm:hidden lg:block">
        <button>
          <i className="las la-shopping-cart absolute 2xl:left-5 md:top-[300px] text-4xl md:right-auto md:left-0"></i>
        </button>
        <button>
          <i className="las la-home absolute 2xl:left-5 md:top-[250px] md:left-0 text-4xl"></i>
        </button>
      </div>
      {/* this */}
      <div className="2sm:block sm:ml-32 md:flex lg:ml-28 md:ml-10">
        <div className=" w-72 h-72 bg-[#757474] rounded-lg flex flex-col items-center justify-center mt-4">
          <span className=" block">Add image</span>
          <label for="file-input" className="text-[#E9EC67] text-4xl block cursor-pointer" > browse </label>
          <input type="file" className="text-[#E9EC67] hidden" id="file-input" />
        </div>
        <div className="md:ml-10 relative 2sm:mt-5 w-80">
          <input
            value={title}
            onChange={toggleChangeTitle}
            type="text"
            className=" border-b border-b-[#979797] text-[#979797]  bg-transparent my-3 outline-none w-full"
          />
          <input
            value={descript}
            onChange={toggleChangedescript}
            type="text"
            className=" border-b border-b-[#979797] text-[#979797] bg-transparent block my-4 outline-none w-full"
          />
          <label className="block mt-10 ">Card color</label>
          <input type="color" className=" rounded-lg border-none" />
          <input type="submit" value="add" className=" bg-[#E9EC67] text-black  md:ml-10 px-6 rounded-lg py-2 absolute right-0 cursor-pointer" />
        </div>
      </div>
      <div className="lg:flex 2sm:block mt-20 gap-10 md:ml-10 lg:ml-32 sm:ml-10 2sm:ml-0">
        <div className="">
          <h2 className=" text-[#B6B6B6] mb-3">Desktop</h2>
          <div className="bg-white sm:w-[469px] 2sm:w-[440px]  h-60 relative p-10 flex rounded-md">
            <div className="bg-[#D9D9D9] w-32 h-[116px] mt-5 top-1/2 bottom-1/2"><img src={img} /></div>
            <div className=" text-black ml-5 mt-10">
              <h3>{title}</h3>
              <h5 className=" text-[#707070]">{descript}</h5>
            </div>
          </div>
        </div>
        <div className=" w-[240px] h-[240px] md:my-5">
          <h2 className=" text-[#B6B6B6] mb-3">phone</h2>
          <div className="bg-white relative px-14 py-7 rounded-md 2sm:text-center">
            <div className="bg-[#D9D9D9] w-32 h-[116px] top-1/2 bottom-1/2"><img src={img} /></div>
            <div className=" text-black ml-5 mt-4">
              <h3>{title}</h3>
              <h5 className=" text-[#707070]">{descript}</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-5 bg-[#434343] w-full text-center mx-auto text-white lg:hidden sticky bottom-0">
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
export default AddCategory;
