import { useState } from "react";

function ChatbotOption(props) {
    const [hideWidget, setHideWidget] = useState(false);

    const options = [
        { 
            text: "😏 Just wanted to say hello", 
            handler: () => {
                setHideWidget(true);
                props.actionProvider.handleSayHello();
            }, 
            id: 1
        },
        { 
            text: "🤓 Interested in mentorship", 
            handler: () => {
                setHideWidget(true);
                props.actionProvider.handleMentorship();
            }, 
            id: 2 
        },
        { 
            text: "💼 I'd like to hire you!", 
            handler: () => {
                setHideWidget(true);
                props.actionProvider.handleHiring();
            }, 
            id: 3 
        }
    ]

    const optionsMarkup = options.map((option, index) => (
        index + 1 !== props.payload?.hiddenId &&
        <button
            className="bg-blue-800 hover:bg-blue-700 w-fit py-3 px-6 rounded-full mx-4 text-white transition duration-500"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));

    return (
        <div className={"flex flex-col gap-4 my-4" + (hideWidget ? " hidden" : "") }>
            {optionsMarkup}
        </div>
    )
}

export default ChatbotOption;