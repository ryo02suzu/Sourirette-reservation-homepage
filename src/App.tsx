import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Problems } from "./components/Problems";
import { ValueProps } from "./components/ValueProps";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { Founder } from "./components/Founder";
import { Company } from "./components/Company";
import { Faq } from "./components/Faq";
import { Cta } from "./components/Cta";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Problems />
        <ValueProps />
        <Features />
        <HowItWorks />
        <Pricing />
        <Founder />
        <Company />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
