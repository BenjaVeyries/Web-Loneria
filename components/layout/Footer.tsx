export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-12">

            <div
                className="
        section-container
        flex
        flex-col
        gap-6
        md:flex-row
        md:justify-between
        "
            >

                <div>
                    <h3 className="text-xl font-bold">
                        Lonera Premium
                    </h3>

                    <p className="mt-2 text-white/50">
                        Soluciones en lonas de alta resistencia.
                    </p>
                </div>

                <div className="text-white/50">
                    © 2026 Todos los derechos reservados.
                </div>

            </div>

        </footer>
    );
}