import ContactWindow from "./ContactWindow";
import ChatbotWindow from "./ChatbotWindow";
import ChatButton from "./ChatButton";

function Chatbot(props) {
    return (
        <>
            <ContactWindow />
            <ChatbotWindow />
            <ChatButton />
        </>
    );
}

export default Chatbot;