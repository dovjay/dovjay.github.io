import { useState } from "react";

import ContactWindow from "./ContactWindow";
import ChatbotWindow from "./ChatbotWindow";
import ChatButton from "./ChatButton";

function Chatbot() {
    const [isOpen, toggleWindow] = useState(true);

    return (
        <>
            <ContactWindow />
            <ChatbotWindow isOpen={isOpen} toggleWindow={() => toggleWindow(false)} />
            <ChatButton isOpen={isOpen} toggleWindow={() => toggleWindow(true)} />
        </>
    );
}

export default Chatbot;