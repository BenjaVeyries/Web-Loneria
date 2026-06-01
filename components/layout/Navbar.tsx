export default function Navbar() {
    return (
        <nav
            className="
      fixed top-0 z-50 w-full
      border-b border-white/10
      bg-black/40
      backdrop-blur-xl
      "
        >
            <div className="section-container flex h-20 items-center justify-between">

                <h1 className="text-xl font-bold">
                    Lonera Premium
                </h1>

                <div className="hidden gap-8 md:flex">

                    <a href="#productos">
                        Productos
                    </a>

                    <a href="#trabajos">
                        Trabajos
                    </a>

                    <a href="#faq">
                        FAQ
                    </a>

                </div>

                <button
                    className="
          rounded-full
          bg-white
          px-5
          py-2
          text-black
          "
                >
                    WhatsApp
                </button>

            </div>
        </nav>
    );
}