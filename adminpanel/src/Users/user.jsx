import React from "react";
import User from "../database";
import {Link} from "react-router-dom"
import "./user.css";
function Users() {
  return (
    <section className="bg-[#434343] h-full p-7 text-white w-full">
      <section>
        <div>
          <img src="img/Ellipse-1.png" alt="statue" />
          <div className="text-white md:relative">
            <button>
              <i className="las la-shopping-cart absolute 2xl:left-5 xl:top-[300px] text-4xl md:right-2 md:-top-16 xl:right-auto xl:left-0 2sm:bottom-0"></i>
            </button>
            <button>
              <i className="las la-home absolute 2xl:left-5 xl:top-[250px] text-4xl md:right-14 md:-top-16 xl:right-auto xl:left-0 2sm:bottom-0"></i>
            </button>
            <div className=" absolute right-10 -top-14">
              <i className="las la-search absolute ml-[270px] text-xl  text-black"></i>
              <input
                type="text"
                name="search-user"
                className="rounded-full "
                placeholder="search"
              />
            </div>
          </div>
        </div>

        <div className="ml-32">
          <span className=" text-xl font-normal">user counts</span>
          <h2 className=" text-[80px] font-medium">2341</h2>
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

      <Link className=" text-[#E9EC67]" to="/users/Edit">
        Edit <i class="las la-pen"></i>
      </Link>
      <hr className="bg-red-300 h-3" />
    </div>
  );
};
export default Users;

