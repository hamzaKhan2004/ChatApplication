import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();
  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-300 bg-clip-padding border border-zinc-600 hover:border-zinc-500 transition ease-in-out backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300 ">
          Signup
          <span className="text-sky-500 "> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-1 ">
              <span className="label-text text-lg pt-2">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name "
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-1 ">
              <span className="label-text text-lg pt-2">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username "
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-1">
              <span className=" label-text text-lg pt-2">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password "
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
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
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          {/*  {Gender Checkbox goes here} */}
          <GenderCheckBox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to={"/Login"}
            className="text-sm pl-24 hover:underline hover:text-blue-500 mt-2 inline-block transition ease-in-out"
          >
            {"Already"} have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 border bordare-slate-700 h-10"
              disabled={loading}
              type="submit"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
