import { createChatBotMessage } from "react-chatbot-kit";

import ChatbotOption from "../../components/Chatbot/ChatbotOption";
import ContactOption from "../../components/Chatbot/ContactOption";

const config = {
  initialMessages: [
    createChatBotMessage(`Well, hello there!👋`),
    createChatBotMessage('How can this humble bot help you?', { delay: 1000, widget: "chatbotOption" })
  ],
  widgets: [
    {
      widgetName: "chatbotOption",
      widgetFunc: (props) => <ChatbotOption {...props} />
    },
    {
      widgetName: "contactOption",
      widgetFunc: (props) => <ContactOption {...props} />
    }
  ]
}

export default config