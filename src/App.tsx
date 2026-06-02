import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Showcase } from "./components/Showcase";
import { Solutions } from "./components/Solutions";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { Story } from "./components/Story";
import { Company } from "./components/Company";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-night-950">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Solutions />
        <HowItWorks />
        <Pricing />
        <Story />
        <Company />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
