import React from "react";
import Header from "./components/Header";
import UsersTable from "./components/UsersTable";

const Users = () => {
  return (
    <div className="relative">
      <Header />
      <div className=" absolute left-[290px] top-[84px] lg:left-[250px] p-[40px]">
        <UsersTable />
      </div>
    </div>
  );
};

export default Users;
