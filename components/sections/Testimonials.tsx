"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Juan Pérez",
        company: "Transporte JP",
        text: "Excelente calidad y cumplimiento."
    },
    {
        name: "Carlos Gómez",
        company: "Logística CG",
        text: "Muy buena atención y materiales."
    },
    {
        name: "María Fernández",
        company: "Piscinas MF",
        text: "Resultado impecable y rápido."
    }
];

export default function Testimonials() {
    return (
        <section className="py-32">

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
                    Clientes satisfechos
                </motion.h2>

                <div
                    className="
          mt-16
          grid
          gap-6
          md:grid-cols-3
          "
                >

                    {testimonials.map(
                        (item, index) => (

                            <motion.div
                                key={item.name}
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: index * 0.15,
                                }}
                                whileHover={{
                                    y: -10,
                                }}
                                className="
                glass
                rounded-3xl
                p-8
                "
                            >

                                <div
                                    className="
                  mb-4
                  text-4xl
                  "
                                >
                                    ⭐⭐⭐⭐⭐
                                </div>

                                <p className="text-white/70">
                                    "{item.text}"
                                </p>

                                <div className="mt-6">

                                    <h4 className="font-bold">
                                        {item.name}
                                    </h4>

                                    <p className="text-white/50">
                                        {item.company}
                                    </p>

                                </div>

                            </motion.div>

                        )
                    )}

                </div>

            </div>

        </section>
    );
}