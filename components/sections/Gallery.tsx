"use client";

import { motion } from "framer-motion";

const works = [
    "Lona para Camión",
    "Cobertor para Piscina",
    "Toldo Comercial",
    "Galpón Industrial",
    "Evento Corporativo",
    "Proyecto Especial",
];

export default function Gallery() {
    return (
        <section
            id="trabajos"
            className="py-32"
        >
            <div className="section-container">

                <motion.h2
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="
          text-center
          text-5xl
          font-bold
          "
                >
                    Trabajos realizados
                </motion.h2>

                <p className="mt-4 text-center text-white/60">
                    Calidad comprobada en cientos de proyectos.
                </p>

                <div
                    className="
          mt-16
          grid
          gap-6
          md:grid-cols-3
          "
                >

                    {works.map((work, index) => (

                        <motion.div
                            key={work}
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            whileHover={{
                                y: -10,
                            }}
                            className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              "
                        >

                            <div
                                className="
                h-72
                bg-gradient-to-br
                from-cyan-500/20
                to-blue-500/10
                transition-all
                duration-700
                group-hover:scale-110
                "
                            />

                            <div className="p-6">

                                <h3
                                    className="
                  text-xl
                  font-semibold
                  "
                                >
                                    {work}
                                </h3>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}