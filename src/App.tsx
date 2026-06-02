import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Mission } from "./components/Mission";
import { Products } from "./components/Products";
import { Features } from "./components/Features";
import { Showcase } from "./components/Showcase";
import { Pricing } from "./components/Pricing";
import { Story } from "./components/Story";
import { Company } from "./components/Company";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        {/* 会社（Sourirette） */}
        <Hero />
        <Mission />
        <Products />
        {/* プロダクト（Arche）の詳細 */}
        <Features />
        <Showcase />
        <Pricing />
        {/* 会社 */}
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
