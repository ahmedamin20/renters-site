import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { config } from "./config/config";
import MessageParser from "./config/MessageParser";
import ActionProvider from "./config/ActionProvider";
import { TbMessageChatbot } from "react-icons/tb";

const Chat = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="sticky top-[5%] z-[20]">
      <button
        onClick={() => setShow(!show)}
        className={`absolute top-0  bg-primary p-2 rounded-full text-white`}
      >
        {<TbMessageChatbot size={30} />}
      </button>
      <br />
      <div
        className={`absolute ${
          show ? "left-0" : "left-[-50%]"
        } flex justify-center transition-all duration-[1s] items-center top-[3rem] `}
      >
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          headerText="Chatbot"
          placeholderText="Type something..."
          sendButtonText="Send"
          runInitialMessagesWithHistory
          disableScrollToBottom
        />
      </div>
    </div>
  );
};

export default Chat;
