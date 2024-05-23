import { GoogleAi } from "./google";

const MessageProvider = (createChatBotMessage, setState) => {
  const handleHello = async (message) => {
    const botMessage = await createChatBotMessage(await GoogleAi(message));
    console.log(botMessage);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  return {
    handleHello,
  };
};

export default MessageProvider;
