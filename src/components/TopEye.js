import React from "react";
import { motion } from "framer-motion";

import Vector from "../utils/Vector";

class TopEye extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eyeZoneX: 0,
            eyeZoneY: 0,
            eyeZoneDiameter: 0,
            isHover: false,
            mouseX: 0,
            mouseY: 0
        };

        this.updateMousePos = this.updateMousePos.bind(this);
        this.hoverEye = this.hoverEye.bind(this);
        this.clamp = this.clamp.bind(this);
    }

    componentDidMount() {
        const sclera = document.getElementById("sclera");
        const scleraZone = sclera.getBoundingClientRect();
        this.setState({
            eyeZoneX: scleraZone.x,
            eyeZoneY: scleraZone.y,
            eyeZoneDiameter: scleraZone.height / 3
        })

        window.addEventListener('mousemove', this.updateMousePos);
        window.addEventListener('touchmove', this.updateMousePos);
        window.addEventListener('mouseover', this.hoverEye);
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.updateMousePos);
        window.removeEventListener('touchmove', this.updateMousePos);
        window.removeEventListener('mouseover', this.hoverEye);
    }

    updateMousePos(e) {
        let moveX = this.clamp(
                            e.x - this.state.eyeZoneX - (this.state.eyeZoneDiameter * 2), 
                            -this.state.eyeZoneDiameter, this.state.eyeZoneDiameter
                         );
        let moveY = this.clamp(
                            e.y - this.state.eyeZoneY - (this.state.eyeZoneDiameter * 2), 
                            -this.state.eyeZoneDiameter / 3, this.state.eyeZoneDiameter / 3
                         );

        const mouseVector = new Vector(moveX, moveY);
        mouseVector.normalize();

        this.setState(state => ({
            mouseX: mouseVector.x * state.eyeZoneDiameter * .75,
            mouseY: mouseVector.y * state.eyeZoneDiameter * .5
        }))
    }

    clamp(num, min, max) {
        return Math.min(Math.max(num, min), max);
    }

    hoverEye(e) {
        this.setState({ isHover: e.target.classList.contains('link') || e.target.parentNode.classList.contains('link') });
    }

    render() {
        return (
            <div className="link m-auto px-5 py-1 pointer-events-auto relative flex justify-center items-center">
                <motion.div 
                    className="absolute h-2.5 w-1 rounded-full bg-white opacity-0"
                    animate={{
                        translateX: this.state.isHover ? -12 : 0,
                        translateY: this.state.isHover ? -18 : 0,
                        rotate: -24,
                        opacity: 1
                    }}
                ></motion.div>
                <motion.div 
                    className="absolute h-2.5 w-1 rounded-full bg-white opacity-0"
                    animate={{
                        translateY: this.state.isHover ? -20 : 0,
                        opacity: 1
                    }}
                ></motion.div>
                <motion.div 
                    className="absolute h-2.5 w-1 rounded-full bg-white opacity-0"
                    animate={{
                        translateX: this.state.isHover ? 12 : 0,
                        translateY: this.state.isHover ? -18 : 0,
                        rotate: 28,
                        opacity: 1
                    }}
                ></motion.div>
                <motion.div
                    id="sclera"
                    className="link mx-auto w-8 aspect-[3/2] bg-white rounded-ellipse relative"
                >
                    <motion.div
                        id="pupil"
                        className="link bg-black w-2.5 aspect-square rounded-full absolute m-auto inset-0"
                        animate={{ 
                            scale: this.state.isHover ? 1.4 : 1, 
                            translateX: this.state.mouseX, 
                            translateY: this.state.mouseY
                        }}
                        transition={{
                            ease: "linear"
                        }}
                    />
                </motion.div>
            </div>
        );
    }
}

export default TopEye;