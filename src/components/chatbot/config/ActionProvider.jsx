import React from 'react';
import MessageProvider from './messageProvider';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const {handleHello} = MessageProvider(createChatBotMessage, setState)
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;