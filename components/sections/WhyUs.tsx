const benefits = [
    "Materiales de primera calidad",
    "Atención personalizada",
    "Trabajos a medida",
    "Garantía de fabricación",
];

export default function WhyUs() {
    return (
        <section className="py-32">

            <div className="section-container">

                <h2 className="text-center text-5xl font-bold">
                    ¿Por qué elegirnos?
                </h2>

                <div
                    className="
          mt-16
          grid
          gap-6
          md:grid-cols-2
          "
                >

                    {benefits.map((item) => (

                        <div
                            key={item}
                            className="
              glass
              rounded-3xl
              p-8
              text-xl
              "
                        >
                            {item}
                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}