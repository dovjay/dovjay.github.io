import React from "react";
import { motion } from "framer-motion";

const containerMotion = {
    rest: {
        y: 0,
        transition: {
            duration: .25,
            ease: "easeIn"
        }
    },
    hover: {
        y: -10,
        transition: {
            duration: .25,
            ease: "easeOut"
        }
    }
};

const thumbnailMotion = {
    rest: {
        y: 0,
        transition: {
            duration: .25,
            type: "tween",
            ease: "easeOut"
        }
    },
    hover: {
        y: -10,
        transition: {
            duration: .25,
            type: "tween",
            ease: "easeIn"
        }
    }
}

function ProjectCard(props) {
    const { projectURL, projectName, projectThumbnail, organization } = props.project;
    return (
        <motion.div 
            initial="rest" whileHover="hover" animate="rest"
            className="link w-full lg:h-screen max-lg:aspect-square my-6"
        >
            <motion.a 
                href={projectURL}
                target="_blank" rel="noreferrer" 
                className="link w-full h-full relative bg-slate-800 rounded-2xl block"
                variants={containerMotion}
            >
                <motion.div className="link absolute lg:right-16 lg:top-16 right-12 top-12 z-10">
                    <h3 className="link text-gray-500 text-xl text-right font-semibold mb-2">{organization}</h3>
                    <h1 className="link text-white lg:text-4xl text-3xl ml-4 font-black font-serif tracking-wider text-right drop-shadow-md">{projectName}</h1>
                </motion.div>
                <motion.div 
                    className='link w-3/4 h-full lg:py-40 py-20 mx-auto'
                    variants={thumbnailMotion}
                >
                    <img className="link w-full h-full max-md:aspect-square object-cover rounded-xl drop-shadow-lg" src={projectThumbnail} alt={projectName} />
                </motion.div>
            </motion.a>
        </motion.div>
    );
}

export default ProjectCard;