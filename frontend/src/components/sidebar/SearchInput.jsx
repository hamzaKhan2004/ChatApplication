// eslint-disable-next-line no-unused-vars
import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <div>
      <form className="flex m-2 mt-4">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered rounded-full"
        />
        <button
          type="submit"
          className="btn btn-circle bg-sky-500 text-white ml-2"
        >
          <CiSearch className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
