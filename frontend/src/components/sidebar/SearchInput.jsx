// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { conversations } = useGetConversation();
  const { setSelectedConversation } = useConversation();
  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3)
      toast.error("Search term must be at least 3 characters long");

    const conversation = conversations.find((searchElem) =>
      searchElem.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <div>
      <form className="flex m-2 mt-4" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered rounded-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
