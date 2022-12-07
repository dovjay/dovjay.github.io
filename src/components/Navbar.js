import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDribbble, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Eye from "./Eye";

function Navbar() {
    return (
        <section className="w-full text-white sticky top-0 bg-slate-900/90 backdrop-blur-lg z-20">
            <div className="w-full flex p-8 absolute pointer-events-none">
                <Eye />
            </div>
            <div className="flex justify-between p-4 w-3/4 mx-auto">
                <div className="flex font-medium text-lg">
                    <Link className="link px-8 py-2" to="/">Works</Link>
                    <Link className="link px-8 py-2" to="/about">About</Link>
                    <Link className="link px-8 py-2">Contacts</Link>
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
    );
}

export default Navbar;