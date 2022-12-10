import { useState } from "react";

function ContactOption(props) {
    const [hideWidget, setHideWidget] = useState(false);

    const options = [
        { 
            text: "💌 Send a message", 
            handler: () => {
              // should set state to hide the whole chat container  
            },
            id: 1
        },
        { 
            text: "🤔 Can I try something else?", 
            handler: () => {
                setHideWidget(true);
                props.actionProvider.handleSomethingElse();
            }, 
            id: 2 
        }
    ]

    const optionsMarkup = options.map((option) => (
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

export default ContactOption;