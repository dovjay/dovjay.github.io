import { ChatbotContext } from "./Chatbot/ChatbotContext";

function Footer() {
    return (
        <ChatbotContext.Consumer>
            {({ setWindow }) => (
                <section className="my-48 w-11/12 mx-auto">
                    <h1 className="text-center mx-auto font-serif max-w-fit lg:text-6xl text-4xl font-bold text-transparent bg-clip-text tracking-normal leading-tight bg-gradient-to-r from-orange-300 via-purple-500 to-cyan-300">
                        I'm open to take on <br className="hidden lg:inline" /> freelance opportunities.
                    </h1>
                    <p className="text-center text-white text-xl tracking-normal leading-relaxed mt-10">
                        Have an exciting project where you need some help? <br className="hidden md:inline" />
                        Send me over a message and 
                        <button 
                            onClick={() => setWindow('chatbot')}
                            className="underline underline-offset-8 ml-2 decoration-pink-500"
                        >
                            let's chat
                        </button>.
                    </p>
                </section>
            )}
        </ChatbotContext.Consumer>
    );
}

export default Footer;