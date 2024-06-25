import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "../styles/homePage.scss";

export default function Particlesbackground() {
     const particlesInit = useCallback(async (engine) => {
          await loadSlim(engine);
     }, []);

     return (
          <Particles
               id="tsparticles"
               init={particlesInit}
               options={{
                    fpsLimit: 120,
                    interactivity: {
                         events: {
                              onClick: {
                                   enable: true,
                                   mode: "push",
                              },
                              onHover: {
                                   enable: true,
                                   mode: "repulse",
                              },
                              resize: true,
                         },
                         modes: {
                              push: {
                                   quantity: 1,
                              },
                              repulse: {
                                   distance: 100,
                                   duration: 0.8,
                              },
                         },
                    },
                    particles: {
                         color: {
                              value: "#007cb9",
                         },
                         links: {
                              color: "#007cb9",
                              distance: 150,
                              enable: true,
                              opacity: 0.5,
                              width: 1,
                         },
                         move: {
                              direction: "none",
                              enable: true,
                              outModes: {
                                   default: "bounce",
                              },
                              random: true,
                              speed: 0.2,
                              straight: false,
                         },
                         number: {
                              density: {
                                   enable: true,
                                   area: 800,
                              },
                              value: 100,
                         },
                         opacity: {
                              value: 0.5,
                         },
                         shape: {
                              type: "circle",
                         },
                         size: {
                              value: { min: 1, max: 1 },
                         },
                    },
                    detectRetina: true,
                    fullScreen: {
                         enable: false,
                         zIndex: -5,
                    },
               }}
          />
     );
}
