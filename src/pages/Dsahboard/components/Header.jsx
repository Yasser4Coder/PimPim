import React from "react";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import logo from "../../../assets/pim.png";

const header = () => {
  return (
    <div className="w-full fixed">
      <div className="navbar p-6 bg-slate-500">
        <div className="container mx-auto flex items-center justify-between">
          <div className="logo">
            <h1 className="text-3xl relative flex items-center gap-2 font-bold text-yellow-500">
              <img
                src={logo}
                alt=""
                width={50}
                className=" absolute sm:left-[-70px] left-[-50px]"
              />
              PimPim
            </h1>
          </div>
          <div className="profile text-2xl flex items-center gap-2">
            <IoNotifications />
            <div className="username">
              <h1 className="">Username</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="leftnav flex flex-col gap-10 pt-[50px] p-8 h-screen bg-slate-500 max-w-[250px] min-w-[200px]">
        <Link
          to="/dashboard"
          className="flex text-2xl text-b items-center gap-2"
        >
          <FaUsers />
          Dashboard
        </Link>
        <Link
          to="/dashboard/users"
          className="flex text-2xl text-b items-center gap-2"
        >
          <FaUsers />
          Users
        </Link>
      </div>
    </div>
  );
};

export default header;
