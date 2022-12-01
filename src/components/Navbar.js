import { Link } from "react-router-dom";

function Navbar() {
    return (
        <section className="w-full text-white sticky top-0 bg-slate-900/90 backdrop-blur-lg z-10">
            <div className="w-full flex p-8 absolute pointer-events-none">
                <div className="mx-auto w-8 aspect-[3/2] bg-white rounded-ellipse relative pointer-events-auto">
                    <div className="bg-black w-2.5 aspect-square rounded-full absolute m-auto inset-0"></div>
                </div>
            </div>
            <div className="flex justify-between p-8 w-3/4 mx-auto">
                <div className="flex gap-16 font-medium text-lg">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/works">Works</Link>
                </div>
                <div>
                    <span>Icon</span>
                </div>
            </div>
        </section>
    );
}

export default Navbar;