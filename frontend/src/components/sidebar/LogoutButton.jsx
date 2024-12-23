// eslint-disable-next-line no-unused-vars
import React from "react";
import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  return (
    <div className="mt-auto">
      <BiLogOut className="w-7 h-7 text-white cursor-pointer hover:text-red-600 transition ease-in-out" />
    </div>
  );
};

export default LogoutButton;
