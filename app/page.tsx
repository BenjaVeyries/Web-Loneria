import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Products from "@/components/sections/Products";
import WhyUs from "@/components/sections/WhyUs";
import Gallery from "@/components/sections/Gallery";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Products />
      <WhyUs />
      <Gallery />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
      <ScrollProgress />







    </main>
  );
}