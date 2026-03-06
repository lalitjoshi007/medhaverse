import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import WhyMedhaverse from "@/components/WhyMedhaverse";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Philosophy />
        <WhyMedhaverse />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
