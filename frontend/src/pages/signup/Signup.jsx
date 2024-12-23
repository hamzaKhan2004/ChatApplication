// eslint-disable-next-line no-unused-vars
import React from "react";
import GenderCheckBox from "./GenderCheckBox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-300 bg-clip-padding border border-zinc-800 hover:border-zinc-600 transition ease-in backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300 ">
          Signup
          <span className="text-sky-500 "> ChatApp</span>
        </h1>

        <form action="">
          <div>
            <label className="label p-2 ">
              <span className="label-text text-lg pt-2">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username "
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className=" label-text text-lg pt-2">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password "
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className=" label-text text-lg pt-2">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password "
              className="w-full input input-bordered h-10"
            />
          </div>

          {/*  {Gender Checkbox goes here} */}
          <GenderCheckBox />
          <a
            href="#"
            className="text-sm pl-24 hover:underline hover:text-blue-500 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 border bordare-slate-700 h-10">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
