import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import Input from "../form/Input";
import Textarea from "../form/Textarea";
import Button from "../form/Button";
import { ChatbotContext } from "./ChatbotContext";

import me from "../../img/me.jpg";

const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

function ContactWindow(props) {
    const form = useRef();
    const [disableButton, setDisableButton] = useState(false);

    const sendEmail = e => {
        e.preventDefault();

        setDisableButton(true);

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                setDisableButton(false);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <ChatbotContext.Consumer>
            {({ activeWindow, setWindow }) => (
                <div 
                    className={
                        "fixed overflow-hidden rounded-md bottom-8 md:right-8 right-4 z-20 drop-shadow-lg transition duration-300" +
                        (activeWindow === 'contact' ? "" : " opacity-0 translate-y-full ")
                    }
                >
                    <div className="flex mb-2">
                        <button 
                            onClick={() => setWindow('')} 
                            className="ml-auto flex items-center bg-black/75 py-1 px-3 rounded-full"
                        >
                            <span className="text-white mr-2 text-sm">Close</span>
                            <FontAwesomeIcon icon={faClose} className="text-white" size="sm" />
                        </button>
                    </div>
                    <div className="rounded-t-md p-5 drop-shadow bg-slate-800 grid justify-center place-items-center">
                        <img className="object-cover w-20 aspect-square -rotate-90 rounded-full mb-4" src={me} alt="Me" />
                        <h3 className="font-bold text-md text-white mb-2">
                            Hello there!
                        </h3>
                        <h5 className="text-sm text-gray-400">
                            I'll get back to you shortly.
                        </h5>
                    </div>
                    <form 
                        ref={form} 
                        onSubmit={sendEmail}
                        className="grid gap-4 w-[22rem] max-h-96 overflow-y-auto text-gray-800 p-5 bg-white"
                    >
                        <Input label="Name" name="from_name" type="text" required={true} />
                        <Input label="Email" name="from_email" type="email" required={true} />
                        <Input label="Subject" name="subject" type="text" required={true} />
                        <Textarea label="Message" name="message" rows={4} required={true} />
                        <Button disabled={disableButton} name="Submit" type="submit" />
                    </form>
                </div>
            )}
        </ChatbotContext.Consumer>
    );
}

export default ContactWindow;