"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden">

            {/* Glow principal */}
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
        absolute
        left-1/2
        top-24
        h-[700px]
        w-[700px]
        -translate-x-1/2
        rounded-full
        bg-cyan-500/20
        blur-[220px]
        "
            />

            {/* Glow secundario */}
            <motion.div
                animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
        absolute
        right-0
        top-40
        h-[500px]
        w-[500px]
        rounded-full
        bg-blue-500/10
        blur-[180px]
        "
            />

            {/* Glow inferior */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
        absolute
        bottom-0
        left-0
        h-[400px]
        w-[400px]
        rounded-full
        bg-sky-400/10
        blur-[160px]
        "
            />

            <div
                className="
        section-container
        relative
        z-10
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        text-center
        "
            >

                <div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="
            mb-8
            inline-flex
            rounded-full
            border
            border-white/10
            bg-white/5
            px-4
            py-2
            text-sm
            backdrop-blur-xl
            "
                    >
                        Fabricación • Reparación • Instalación
                    </motion.div>

                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="
            max-w-6xl
            text-6xl
            font-bold
            leading-tight
            md:text-8xl
            "
                    >
                        Soluciones en
                        <span className="gradient-text">
                            {" "}lonas de alta resistencia
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 0.4,
                            duration: 0.8,
                        }}
                        className="
            mx-auto
            mt-8
            max-w-3xl
            text-lg
            text-white/60
            md:text-xl
            "
                    >
                        Diseñamos y fabricamos lonas para transporte,
                        industrias, comercios, piscinas, galpones y
                        proyectos especiales en todo el país.
                    </motion.p>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.6,
                        }}
                        className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-4
            "
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                            className="
              rounded-full
              bg-white
              px-8
              py-4
              font-semibold
              text-black
              shadow-xl
              "
                        >
                            Solicitar presupuesto
                        </motion.button>

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-8
              py-4
              backdrop-blur-xl
              "
                        >
                            Ver trabajos
                        </motion.button>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}