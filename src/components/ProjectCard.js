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
    const { projectURL, projectName, projectThumbnail, organization, id } = props.project;
    return (
        <motion.div 
            initial="rest" whileHover="hover" animate="rest"
            className="link w-full h-screen my-10" key={id}
        >
            <motion.a 
                href={projectURL}
                target="_blank" rel="noreferrer" 
                className="link w-full h-full relative bg-slate-800 rounded-2xl block"
                variants={containerMotion}
            >
                <motion.div className="link absolute right-16 top-16 z-10">
                    <h3 className="link text-gray-400 text-xl text-right font-semibold mb-2">{organization}</h3>
                    <h1 className="link text-white text-4xl font-black font-serif tracking-wider text-right drop-shadow-xl">{projectName}</h1>
                </motion.div>
                <motion.div 
                    className='link w-3/4 h-full py-40 mx-auto'
                    variants={thumbnailMotion}
                >
                    <img className="link w-full h-full object-cover rounded-xl drop-shadow-lg" src={projectThumbnail} alt={projectName} />
                </motion.div>
            </motion.a>
        </motion.div>
    );
}

export default ProjectCard;