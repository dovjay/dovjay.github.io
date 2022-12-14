import bookCoverOne from '../img/game-programming-patterns.jpg';
import bookCoverTwo from '../img/41lZKXt1+ML._AC_SY580_.jpg';
import bookCoverThree from '../img/41I0fK0G9kL._AC_SY1000_.jpg';
import me from '../img/me.jpg';

function About() {
    return (
        <div className="xl:w-10/12 w-11/12 mx-auto">
            <section className="xl:w-3/4 lg:mx-auto w-full sm:my-40 my-20 flex max-lg:flex-col gap-12 max-lg:items-center">
                <div className="lg:w-1/2 w-full">
                    <img 
                        className="lg:h-[28rem] lg:w-[28rem] h-full ml-auto rounded-xl bg-slate-300 object-cover -rotate-90 mix-blend-luminosity" 
                        src={me}
                        alt="Person" 
                    />
                </div>
                <div className="lg:w-1/2 mx-auto">
                    <h2 className="text-3xl text-white font-bold font-serif leading-normal tracking-wide">
                        I'm Dovjay, or Dovan Sanjaya. <br/> A Software Developer currently lives in Indonesia 
                        <span className="h-4 aspect-video bg-black inline-block ml-3 rounded-sm overflow-hidden">
                            <div className="h-1/2 bg-red-600"></div>
                            <div className="h-1/2 bg-white"></div>
                        </span>
                    </h2>
                    <p className="text-white mt-8 text-lg tracking-wide">
                        These past 3 years, I've been exploring on what's gonna my career choice. 
                        Learning all of the things that I would like to do in the future like:
                        UI/UX design in Figma, creating many game prototypes in Unity, 
                        studying 3D in Blender, and many more that I can't really decide to which
                        I'm gonna pick for my starting point onward.
                    </p>
                    <p className="text-white mt-4 text-lg tracking-wide">
                        With that said, I'm open for any interesting project that you have.
                        Or if you need someone to guide you in any skill that I do, let's do together.
                    </p>
                </div>
            </section>
            <h2 className="w-3/4 mx-auto mt-40 text-4xl font-medium font-serif text-white">
                A brief history
            </h2>
            <section className="mt-16 mb-40 flex flex-col gap-4">
                <div>
                    <div className="ml-auto bg-slate-800 lg:w-2/12 w-full p-6 flex justify-between items-center rounded-xl">
                        <div>
                            <p className="text-white text-lg font-semibold">
                                Now
                            </p>
                            <p className="text-white">
                                Freelancer
                            </p>
                        </div>
                        <h4 className="font-bold text-white text-2xl lining-nums">
                            3~
                        </h4>
                    </div>
                </div>
                <div className="flex">
                    <div className="lg:w-7/12"></div>
                    <div className="bg-slate-800 lg:w-3/12 w-full p-6 flex justify-between items-center rounded-xl">
                        <div>
                            <p className="text-white text-lg font-semibold">
                                UI/UX Designer
                            </p>
                            <p className="text-white">
                                Whitebox
                            </p>
                        </div>
                        <h4 className="font-bold text-white text-2xl lining-nums">
                            2-2.5
                        </h4>
                    </div>
                </div>
                <div className="flex">
                    <div className="lg:w-4/12"></div>
                    <div className="bg-slate-800 lg:w-4/12 w-full p-6 flex justify-between items-center rounded-xl">
                        <div>
                            <p className="text-white text-lg font-semibold">
                                FullStack Developer
                            </p>
                            <p className="text-white">
                                ConceptX
                            </p>
                        </div>
                        <h4 className="font-bold text-white text-2xl lining-nums">
                            1-2
                        </h4>
                    </div>
                </div>
                <div>
                    <div className="bg-slate-800 lg:w-4/12 w-full p-6 flex justify-between items-center rounded-xl">
                        <div>
                            <p className="text-white text-lg font-semibold">
                                FullStack Developer
                            </p>
                            <p className="text-white">
                                Red Eye
                            </p>
                        </div>
                        <h4 className="font-bold text-white text-2xl lining-nums">
                            0-1
                        </h4>
                    </div>
                </div>
            </section>
            <h2 className="w-3/4 mx-auto mt-40 text-4xl font-medium font-serif text-white">
                Currently reading
            </h2>
            <section className="mt-16 mb-40 flex max-lg:flex-col lg:mx-auto justify-center items-center gap-12">
                <div>
                    <img 
                        className="w-72 aspect-[5/7] object-scale-down mix-blend-luminosity" 
                        src={bookCoverOne}
                        alt="Book Cover" 
                    />
                    <h5 className="text-white font-semibold text-xl mt-4">
                        Game Programming Patterns
                    </h5>
                    <p className="text-white">
                        Robert Nystrom
                    </p>
                </div>
                <div>
                    <img 
                        className="w-72 aspect-[5/7] object-scale-down mix-blend-luminosity" 
                        src={bookCoverTwo}
                        alt="Book Cover" 
                    />
                    <h5 className="text-white font-semibold text-xl mt-4">
                        Sapiens <br/>
                        A Brief History of Humankind
                    </h5>
                    <p className="text-white">
                        Yuval Noah Harari
                    </p>
                </div>
                <div>
                    <img 
                        className="w-72 aspect-[5/7] object-scale-down mix-blend-luminosity" 
                        src={bookCoverThree}
                        alt="Book Cover" 
                    />
                    <h5 className="text-white font-semibold text-xl mt-4">
                        Thinking, Fast and Slow
                    </h5>
                    <p className="text-white">
                        Daniel Kahneman
                    </p>
                </div>
            </section>
        </div>
    );
}

export default About;