"use client";

import { useState } from "react";

const faq = [
    {
        q: "¿Realizan trabajos a medida?",
        a: "Sí, fabricamos según necesidad."
    },
    {
        q: "¿Trabajan para empresas?",
        a: "Sí, trabajamos con industrias y comercios."
    },
    {
        q: "¿Hacen envíos?",
        a: "Sí, enviamos a todo el país."
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section
            id="faq"
            className="py-32"
        >

            <div className="section-container max-w-4xl">

                <h2 className="text-center text-5xl font-bold">
                    Preguntas frecuentes
                </h2>

                <div className="mt-16 space-y-4">

                    {faq.map((item, index) => (

                        <div
                            key={item.q}
                            className="glass rounded-3xl p-6"
                        >

                            <button
                                onClick={() =>
                                    setOpen(
                                        open === index
                                            ? null
                                            : index
                                    )
                                }
                                className="
                flex
                w-full
                justify-between
                text-left
                text-lg
                font-semibold
                "
                            >
                                {item.q}
                                <span>
                                    {open === index ? "-" : "+"}
                                </span>
                            </button>

                            {open === index && (
                                <p className="mt-4 text-white/60">
                                    {item.a}
                                </p>
                            )}

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}