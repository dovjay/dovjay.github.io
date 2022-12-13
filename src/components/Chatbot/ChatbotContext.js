import { createContext } from "react"

export const ChatbotContext = createContext({
    activeWindow: '',
    changeWindow: () => {}
});