import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: { color: "#000000" },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                        onClick: { enable: true, mode: "push" },
                    },
                    modes: {
                        repulse: { distance: 100, duration: 0.4 },
                        push: { quantity: 4 },
                    },
                },
                particles: {
                    number: { value: 150, density: { enable: true, area: 800 } },
                    color: { value: "#92d8e8" }, 
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: { enable: true, speed: 1 },
                    shape: { type: "circle" },
                    opacity: { value: 0.7 },
                    size: { value: { min: 1, max: 3 } },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticleBackground;
