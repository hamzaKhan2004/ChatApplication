// eslint-disable-next-line no-unused-vars
import React from "react";
import Conversation from "./Conversations.jsx";
import SearchInput from "./SearchInput.jsx";
import LogoutButton from "./LogoutButton.jsx";
const Sidebar = () => {
  return (
    <div className="px-2">
      <SearchInput />
      <div className="divider px-3 h-1" />
      <Conversation />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
