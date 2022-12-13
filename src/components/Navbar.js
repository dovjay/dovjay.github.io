import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDribbble, faTwitter } from '@fortawesome/free-brands-svg-icons';

import TopEye from "./TopEye";

import { ChatbotContext } from "./Chatbot/ChatbotContext";

function Navbar() {
    return (
        <ChatbotContext.Consumer>
            {({ setWindow }) => (
                <section className="w-full text-white fixed top-0 bg-slate-900/90 backdrop-blur-lg z-20">
                    <div className="w-full flex p-8 absolute pointer-events-none sm:opacity-100 opacity-0">
                        <TopEye />
                    </div>
                    <div className="flex justify-between p-4 2xl:w-10/12 w-11/12 mx-auto">
                        <div className="flex md:gap-16 gap-6 font-medium md:text-lg">
                            <div className="link py-2 group">
                                <Link className="link" to="/">Works</Link>
                                <hr className="link bg-gradient-to-r from-purple-500 to-pink-400 h-1 rounded-full border-0 mt-1 opacity-0 group-hover:opacity-100 transition" />
                            </div>
                            <div className="link py-2 group">
                                <Link className="link" to="/about">About</Link>
                                <hr className="link bg-gradient-to-r from-purple-500 to-pink-400 h-1 rounded-full border-0 mt-1 opacity-0 group-hover:opacity-100 transition" />
                            </div>
                            <div className="link py-2 group">
                                <button className="link" onClick={() => setWindow('chatbot')}>Contact</button>
                                <hr className="link bg-gradient-to-r from-purple-500 to-pink-400 h-1 rounded-full border-0 mt-1 opacity-0 group-hover:opacity-100 transition" />
                            </div>
                        </div>
                        <div className="flex md:gap-6 gap-4 text-gray-300 my-auto">
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