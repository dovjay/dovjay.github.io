import ProjectCard from '../components/ProjectCard';

import projectCoverA from '../img/25+5_clock.png';
import projectCoverB from '../img/calculator.png';
import projectCoverC from '../img/drumpads.png';
import projectCoverD from '../img/markdownpreviewer.png';
import projectCoverE from '../img/randomquotegenerator.png';

function Home() {
    return (
        <div className="w-5/6 mx-auto">
            <section className="flex justify-between">
                <div className="-mt-40 w-5/12 grid content-center">
                    <h1 
                        className="font-serif max-w-fit text-7xl font-bold text-transparent bg-clip-text leading-snug bg-gradient-to-r from-orange-300 via-purple-500 to-cyan-300"
                    >
                        Hi. I'm Dovjay. <br/>
                        A Developer.
                    </h1>
                    <p className="text-white text-xl tracking-wide leading-relaxed mt-8">
                        Enjoy working in Front-End with <span className="font-bold">React</span>, 
                        prototyping many games with <span className="font-bold">Unity</span>, 
                        and designing UI/UX with <span className="font-bold">Figma</span>.
                    </p>
                </div>
                <div className="w-6/12">
                    <div className="flex justify-between">
                        <div className="bg-gradient-to-b from-orange-300 to-pink-400 w-1/6 aspect-square rounded-xl"></div>
                        <div className="bg-gradient-to-b from-purple-400 to-cyan-300 w-1/6 aspect-square rounded-xl"></div>
                    </div>
                    <div className="mx-auto w-4/6 aspect-square bg-slate-800/50 rounded-2xl relative overflow-hidden">
                        <div className="w-2/3 aspect-[3/2] bg-white rounded-ellipse absolute m-auto inset-0">
                            <div className="w-1/4 bg-black aspect-square rounded-full absolute m-auto inset-0"></div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="bg-gradient-to-b from-pink-300 to-purple-400 w-1/6 aspect-square rounded-xl"></div>
                        <div className="bg-gradient-to-b from-orange-300 to-pink-400 w-1/6 aspect-square rounded-xl"></div>
                    </div>
                    <div className="flex">
                        <div className="opacity-0 w-1/6 aspect-square"></div>
                        <div className="bg-gradient-to-b from-purple-400 to-cyan-300 w-1/6 aspect-square rounded-xl"></div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col my-20 gap-10 h-fit">
                {works.map(project => (
                    <ProjectCard project={project} />
                ))}
            </section>
        </div>
    );
}

const works = [
    {
        projectName: "25 + 5 Clock",
        projectURL: "https://codepen.io/dovjay/pen/XWYoxGa",
        organization: "FCC Front End Challenge",
        projectThumbnail: projectCoverA
    },
    {
        projectName: "Calculator",
        projectURL: "https://codepen.io/dovjay/pen/ExRGxvO",
        organization: "FCC Front End Challenge",
        projectThumbnail: projectCoverB
    },
    {
        projectName: "Drumpads",
        projectURL: "https://codepen.io/dovjay/pen/QWxJzVP",
        organization: "FCC Front End Challenge",
        projectThumbnail: projectCoverC
    },
    {
        projectName: "Markdown Previewer",
        projectURL: "https://codepen.io/dovjay/pen/XWYyRqV",
        organization: "FCC Front End Challenge",
        projectThumbnail: projectCoverD
    },
    {
        projectName: "Random Quote Generator",
        projectURL: "https://codepen.io/dovjay/pen/xxzQRdY",
        organization: "FCC Front End Challenge",
        projectThumbnail: projectCoverE
    },
]

export default Home;