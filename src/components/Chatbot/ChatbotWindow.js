import Chatbot from "react-chatbot-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import me from "../../img/me.jpg"

import { ChatbotContext } from "./ChatbotContext";
import config from "../../utils/chatbot/config";
import ActionProvider from "../../utils/chatbot/ActionProvider";
import MessageParser from "../../utils/chatbot/MessageParser";

function ChatbotWindow(props) {
    return (
        <ChatbotContext.Consumer>
            {({ activeWindow, setWindow }) => (
                <div 
                    className={
                        "fixed bottom-8 md:right-8 right-4 z-20 drop-shadow-lg transition duration-300" +
                        (activeWindow === "chatbot" ? "" : " opacity-0 translate-y-full ")
                    }
                >
                    <div className="bg-slate-800 p-4 flex gap-3 items-center rounded-t-md drop-shadow">
                        <img className="w-12 h-12 rounded-full -rotate-90 object-cover" src={me} alt="Me" />
                        <div>
                            <h4 className="text-lg font-bold text-white">Dovjay Mk. II</h4>
                            <h6 className="text-sm text-gray-300">Ask me questions!</h6>
                        </div>
                        <button onClick={() => setWindow('')} className="ml-auto mr-2">
                            <FontAwesomeIcon icon={faClose} className="text-white" size="xl" />
                        </button>
                    </div>
                    <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
                </div>
            )}
        </ChatbotContext.Consumer>
    );
}

export default ChatbotWindow;