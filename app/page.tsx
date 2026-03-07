import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollAnimations from "@/components/ScrollAnimations";
import FeatureOrbit from "@/components/FeatureOrbit";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import WhyMedhaverse from "@/components/WhyMedhaverse";
import MeetFounders from "@/components/MeetFounders";
import MeetOurMembers from "@/components/MeetOurMembers";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollAnimations>
          <div data-scroll-section>
            <FeatureOrbit />
          </div>
          <div data-scroll-section>
            <About />
          </div>
          <div data-scroll-section>
            <Products />
          </div>
          <div data-scroll-section>
            <Services />
          </div>
          <div data-scroll-section>
            <Philosophy />
          </div>
          <div data-scroll-section>
            <WhyMedhaverse />
          </div>
          <div data-scroll-section>
            <MeetFounders />
          </div>
          <div data-scroll-section>
            <MeetOurMembers />
          </div>
          <div data-scroll-section>
            <CTA />
          </div>
          <div data-scroll-section>
            <Footer />
          </div>
        </ScrollAnimations>
      </main>
    </>
  );
}
