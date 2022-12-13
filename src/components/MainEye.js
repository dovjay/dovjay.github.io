import { motion } from "framer-motion";

function MainEye(props) {
    return (
        <motion.div 
            className="relative w-full h-full"
            animate={{
                scale: [1, 1, 1, 1, 1, 1, 1, 1, 3.2, 3.2, 1],
                translateY: [0, 5, 0, 5, 0, 5, 0, 5, 60, 60, 0]
            }}
            transition={{
                ease: "easeOut",
                duration: 15,
                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, 0.96, 1],
                repeat: Infinity
            }}
        >
            <div className="w-6 aspect-[1/3] bg-white absolute rounded-full m-auto inset-0 -translate-y-28 -translate-x-28 -rotate-45" />
            <div className="w-6 aspect-[1/3] bg-white absolute rounded-full m-auto inset-0 -translate-y-36" />
            <div className="w-6 aspect-[1/3] bg-white absolute rounded-full m-auto inset-0 -translate-y-28 translate-x-28 rotate-45" />
            <div className="h-40 aspect-[3/2] bg-white rounded-ellipse absolute m-auto inset-0">
                <motion.div 
                    className="w-2/6 bg-black aspect-square rounded-full absolute m-auto inset-0"
                    animate={{
                        scale: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, .8, .8, .8, 1],
                        translateX: [0, 0, 0, 50, 50, 50, 50, 0, 0, 0, 0, 0, 40, 40, -40, 0],
                        translateY: [0, 0, 0, 0, -20, 0, 20, 0, 0, -40, 0, 0, 40, 40, 40, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity
                    }}
                />
            </div>
        </motion.div>
    );
}

export default MainEye;