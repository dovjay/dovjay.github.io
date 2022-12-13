import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDribbble, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Eye from "./Eye";

import { ChatbotContext } from "./Chatbot/ChatbotContext";

function Navbar() {
    return (
        <ChatbotContext.Consumer>
            {({ setWindow }) => (
                <section className="w-full text-white sticky top-0 bg-slate-900/90 backdrop-blur-lg z-20">
                    <div className="w-full flex p-8 absolute pointer-events-none">
                        <Eye />
                    </div>
                    <div className="flex justify-between p-4 w-3/4 mx-auto">
                        <div className="flex font-medium text-lg">
                            <div className="link px-8 py-2 group">
                                <Link className="link" to="/">Works</Link>
                                <hr className="link bg-gradient-to-r from-purple-500 to-pink-400 h-1 rounded-full border-0 mt-1 opacity-0 group-hover:opacity-100 transition" />
                            </div>
                            <div className="link px-8 py-2 group">
                                <Link className="link" to="/about">About</Link>
                                <hr className="link bg-gradient-to-r from-purple-500 to-pink-400 h-1 rounded-full border-0 mt-1 opacity-0 group-hover:opacity-100 transition" />
                            </div>
                            <div className="link px-8 py-2 group">
                                <button className="link" onClick={() => setWindow('chatbot')}>Contact</button>
                                <hr className="link bg-gradient-to-r from-purple-500 to-pink-400 h-1 rounded-full border-0 mt-1 opacity-0 group-hover:opacity-100 transition" />
                            </div>
                        </div>
                        <div className="flex gap-8 text-gray-300 my-auto">
                            <a href="https://github.com/dovjay" target={"_blank"} rel="noreferrer" className="link h-fit">
                                <FontAwesomeIcon 
                                    icon={faGithub} size="lg" 
                                    className="hover:text-white link"
                                />
                            </a>
                            <a href="https://dribbble.com/dovjay" target={"_blank"} rel="noreferrer" className="link h-fit">
                                <FontAwesomeIcon 
                                    icon={faDribbble} size="lg" 
                                    className="hover:text-white link" 
                                />
                            </a>
                            <a href="https://twitter.com/dovjay_" target={"_blank"} rel="noreferrer" className="link h-fit group">
                                <FontAwesomeIcon 
                                    icon={faTwitter} size="lg" 
                                    className="hover:text-white link"
                                />
                            </a>
                        </div>
                    </div>
                </section>
            )}
        </ChatbotContext.Consumer>
    );
}

export default Navbar;