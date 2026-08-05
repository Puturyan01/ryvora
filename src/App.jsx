import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portofolio";
import Process from "./components/Process";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FadeInSection>
      <Services />
      </FadeInSection>
      <FadeInSection>
      <Portfolio />
      </FadeInSection>
      <FadeInSection>
      <Process />
      </FadeInSection>
      <FadeInSection>
      <About />
      </FadeInSection>
      <FadeInSection>
      <CTA />
      </FadeInSection>
      <Footer />
      </>
  );
}

export default App;