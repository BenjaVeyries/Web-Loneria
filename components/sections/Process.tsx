const steps = [
    {
        title: "Consulta",
        desc: "Analizamos tu necesidad."
    },
    {
        title: "Presupuesto",
        desc: "Te enviamos una propuesta."
    },
    {
        title: "Fabricación",
        desc: "Producción a medida."
    },
    {
        title: "Entrega",
        desc: "Instalación o envío."
    },
];

export default function Process() {
    return (
        <section className="py-32">

            <div className="section-container">

                <h2 className="text-center text-5xl font-bold">
                    Nuestro proceso
                </h2>

                <div className="mt-16 grid gap-6 md:grid-cols-4">

                    {steps.map((step, index) => (

                        <div
                            key={step.title}
                            className="glass rounded-3xl p-8"
                        >

                            <div
                                className="
                mb-4
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-cyan-500
                font-bold
                "
                            >
                                {index + 1}
                            </div>

                            <h3 className="text-xl font-bold">
                                {step.title}
                            </h3>

                            <p className="mt-3 text-white/60">
                                {step.desc}
                            </p>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}