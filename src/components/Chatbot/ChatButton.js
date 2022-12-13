import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

import { ChatbotContext } from './ChatbotContext';

function ChatButton(props) {
    return (
        <ChatbotContext.Consumer>
            {({ activeWindow, setWindow }) => (
                <button
                    onClick={() => setWindow('chatbot')}
                    className={
                        'bg-slate-800 w-16 aspect-square rounded-full drop-shadow-2xl text-white fixed bottom-8 right-8 z-20 hover:bg-slate-700 hover:-translate-y-1 transition duration-300' +
                        (activeWindow === "" ? "" : " opacity-0 ")
                    }
                >
                    <FontAwesomeIcon icon={faMessage} />
                </button>
            )}
        </ChatbotContext.Consumer>
    );
}

export default ChatButton;