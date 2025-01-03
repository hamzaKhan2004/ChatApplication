// eslint-disable-next-line no-unused-vars
import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col h-96 mb-5 overflow-auto">
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIndex={index === conversation.length - 1}
        />
      ))}
      {loading ? <span className="loading loading-spinner mx-auto" /> : null}
    </div>
  );
};

export default Conversations;
