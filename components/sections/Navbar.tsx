"use client";

import { motion } from "framer-motion";

const products = [
    "Lonas para Camiones",
    "Cobertores para Piscinas",
    "Toldos Comerciales",
    "Lonas Industriales",
    "Galpones",
    "Proyectos Especiales",
];

export default function Products() {
    return (
        <section
            id="productos"
            className="py-32"
        >
            <div className="section-container">

                <h2 className="text-center text-5xl font-bold">
                    Servicios
                </h2>

                <div
                    className="
          mt-16
          grid
          gap-8
          md:grid-cols-3
          "
                >
                    {products.map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                            className="
              glass
              rounded-3xl
              p-8
              transition-all
              duration-300
              hover:-translate-y-2
              hover:scale-[1.02]
              "
                        >
                            <div
                                className="
                mb-6
                h-48
                rounded-2xl
                bg-gradient-to-br
                from-cyan-500/20
                to-blue-500/10
                "
                            />

                            <h3 className="text-2xl font-semibold">
                                {item}
                            </h3>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}