"use client";

import CountUp from "react-countup";

export default function Stats() {
    return (
        <section className="pb-24">

            <div
                className="
        section-container
        grid
        gap-6
        md:grid-cols-4
        "
            >

                <div className="glass rounded-3xl p-8 text-center">
                    <h3 className="text-4xl font-bold"><CountUp end={15} duration={3} />+</h3>
                    <p className="mt-2 text-white/60">
                        Años de experiencia
                    </p>
                </div>

                <div className="glass rounded-3xl p-8 text-center">
                    <h3 className="text-4xl font-bold">1200+</h3>
                    <p className="mt-2 text-white/60">
                        Clientes
                    </p>
                </div>

                <div className="glass rounded-3xl p-8 text-center">
                    <h3 className="text-4xl font-bold">24hs</h3>
                    <p className="mt-2 text-white/60">
                        Presupuestos
                    </p>
                </div>

                <div className="glass rounded-3xl p-8 text-center">
                    <h3 className="text-4xl font-bold">100%</h3>
                    <p className="mt-2 text-white/60">
                        A medida
                    </p>
                </div>

            </div>

        </section>
    );
}