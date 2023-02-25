import ProjectCard from '../components/ProjectCard';

import projectCoverA from '../img/25+5_clock.png';
import projectCoverB from '../img/calculator.png';
import projectCoverC from '../img/drumpads.png';
import projectCoverD from '../img/markdownpreviewer.png';
import projectCoverE from '../img/randomquotegenerator.png';
import projectZenmore from '../img/projectZenmore.png';

import HeroBanner from '../components/HeroBanner';

function Home() {
    return (
        <div className="2xl:w-10/12 w-11/12 mx-auto">
            <HeroBanner />
            <section className="flex flex-col my-20 max-lg:gap-0 gap-8 h-fit">
                {works.map((project, key) => (
                    <ProjectCard project={project} key={key} />
                ))}
            </section>
        </div>
    );
}

const works = [
    {
        projectName: "Zenmore",
        projectURL: "https://zenmore.vercel.app",
        organization: "Re:Noir",
        projectThumbnail: projectZenmore
    },
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