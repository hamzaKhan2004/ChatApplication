// eslint-disable-next-line no-unused-vars
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form action="">
          <div>
            <label className="label p-2">
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

          <a
            href="#"
            className="text-sm pl-24 hover:underline hover:text-blue-500 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
