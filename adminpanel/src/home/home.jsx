import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Home() {
  const percentage = 78;
  const total = "2k";

  // for date
  const week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const today = new Date();
  const weekday = today.getDay();
  const day = today.getDate();

  return (
    <section className=" bg-[#434343] w-full h-full p-7 relative">
      <div className="flex">
        <img src="img/Ellipse-1.png" />
        <h2 className="text-white pt-7 pl-3 text-[35px] leading-9">
          Good evening <span className="font-medium ">Sculbio</span>
        </h2>
      </div>
      <div className="text-white md:relative sm:hidden md:block">
        <button>
          <i className="las la-shopping-cart absolute 2xl:left-5 xl:top-[300px] text-4xl md:right-2 md:-top-16 xl:right-auto xl:left-0 2sm:bottom-0"></i>
        </button>
        <button>
          <i className="las la-home absolute 2xl:left-5 xl:top-[250px] text-4xl md:right-14 md:-top-16 xl:right-auto xl:left-0 2sm:bottom-0"></i>
        </button>
      </div>
      <div className="2xl:px-24 xl:px-14 grid md:grid-cols-2 lg:grid-cols-3 gap-10 2sm:col-span-1 sm:ml-32 md:ml-0">
        <div className=" text-white max-h-80 w-80 rounded-lg gap-10">
          <div className="bg-[#535353] h-[47%] rounded-lg px-4 py-2 card-hover">
            <div className="flex">
              <h3 className=" text-2xl mr-24">Earnings</h3>
              <span className=" text-base pt-2">22% more</span>
            </div>
            {/*here is the place of earning money */}
            <h2 className=" text-5xl mt-7">
              +$3206<i className="las la-angle-up text-green-500"></i>
            </h2>
          </div>
          <Link to="/users">
            <div className="bg-[#535353] h-[47%] mt-5 rounded-lg px-4 py-2 card-hover">
              <div className="flex">
                <h3 className="text-2xl mr-40 mt-3">Users</h3>
                <a
                  href=""
                  className="text-3xl mt-2 bg-white rounded-full h-12 w-12 text-black p-2 user-panel">
                  <i class="las la-user-cog"></i>
                </a>
              </div>
              <img src="img/user-graph.png" className=" mt-4" />
            </div>
          </Link>
        </div>
        <div className=" bg-[#E9EC67] text-black h-80 w-80 rounded-lg px-4 py-4 card-hover">
          <div className="flex">
            <h3 className="text-2xl mr-32">Website Traffic</h3>
            <span className="text-base mt-2">more</span>
          </div>
          <div
            className="d ml-16"
            style={{
              width: 170,
              height: 170,
              background: { fill: "#000000" },
            }}>
            {/* <CircularProgressbar className="" value={percentage} text={total} styles={{background:{fill: '#000000'}}}/> */}
            <CircularProgressbar
              value={percentage}
              text={total}
              styles={{
                // Customize the root svg element
                root: {},
                // Customize the path, i.e. the "completed progress"
                path: {
                  // Path color
                  stroke: `rgba(0, 0, 0, ${percentage / 100})`,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  // Customize transition animation
                  transition: "stroke-dashoffset 0.5s ease 0s",
                  // Rotate the path
                  transform: "rotate(0.25turn)",
                  transformOrigin: "center center",
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                  // Trail color
                  stroke: "#A59F9F",
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  // Rotate the trail
                  transform: "rotate(0.25turn)",
                  transformOrigin: "center center",
                },
                // Customize the text
                text: {
                  // Text color
                  fill: "#000000",
                  // Text size
                  fontSize: "16px",
                },
                // Customize background - only used when the `background` prop is true
                background: {
                  fill: "#000000",
                },
              }}
            />
          </div>
          <div>
            <div className="flex">
              <div className="w-3 h-3 mt-[7px] bg-black rounded-sm mr-2"></div>
              <h3 className="text-lg mr-28">social media</h3>
              <span className="text-right">78%</span>
            </div>
            <hr className="bg-[#C5C5C5]" />
            <div className="flex">
              <div className="w-3 h-3 mt-[7px] bg-[#A59F9F] rounded-sm mr-2"></div>
              <h3 className="text-lg mr-24">organic search</h3>
              <span className="text-right">22%</span>
            </div>
          </div>
        </div>
        <Link to="/Orders">
          <div className=" bg-[#9C9C9C] text-black h-80 w-80 rounded-lg p-4 card-hover">
            <div className=" flex">
              <h2 className="text-2xl mr-36 mt-3">Orders</h2>
              <a
                href=""
                className="text-3xl bg-white rounded-full h-12 w-12 text-black p-2 mt-2 user-panel">
                <i class="las la-chart-line"></i>
              </a>
            </div>
            <div className="flex mt-6">
              <div className="border rounded-lg py-4 px-4 text-xl mx-4">
                <span>{week[weekday - 1]}</span>
                <h4 className="text-3xl ">{day - 1}</h4>
              </div>
              <div className="border rounded-lg py-4 px-4 text-xl mx-4 active-date">
                <span>{week[weekday]}</span>
                <h4 className="text-3xl ">{day}</h4>
              </div>
              <div className="border rounded-lg py-4 px-4 text-xl mx-4">
                <span>{week[weekday + 1]}</span>
                <h4 className="text-3xl ">{day + 1}</h4>
              </div>
            </div>
            <div className="flex mt-8 ml-8">
              <h3 className="text-2xl mr-3">3 new Orders</h3>
              <div className=" border-l pl-4 text-sm">
                <span>+50%</span>
                <h5>since last day</h5>
              </div>
            </div>
          </div>
        </Link>
        <Link className=" bg-[#9C9C9C] text-black h-80 w-80 rounded-lg p-4 relative card-hover" to="/category">
          <h2 className="text-2xl">Add category</h2>
          <img
            src="img/add-category.png"
            className="mt-10 ml-5"
            alt="category"
          />
          <a
            href=""
            className="bg-white h-12 w-12 px-2 py-1 rounded-full text-3xl absolute right-7 bottom-7">
            <i class="las la-plus"></i>
          </a>
        </Link>
        <Link to="/Product" className=" bg-[#E9EC67] text-black h-80 w-80 rounded-lg p-4 relative card-hover">
          <h2 className="text-2xl">Add product</h2>
          <img
            src="img/add-product.png"
            className="mt-10 ml-5"
            alt="category"
          />
          <a
            href=""
            className="bg-white h-12 w-12 px-2 py-1 rounded-full text-3xl absolute right-7 bottom-7">
            <i class="las la-plus"></i>
          </a>
        </Link>
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

export default Home;
