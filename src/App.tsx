import { Nav } from "./components/Nav";
import { HeroCarousel } from "./components/HeroCarousel";
import { News } from "./components/News";
import { Business } from "./components/Business";
import { ArcheHighlight } from "./components/ArcheHighlight";
import { AboutBand } from "./components/AboutBand";
import { Company } from "./components/Company";
import { ContactBand } from "./components/ContactBand";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <HeroCarousel />
        <News />
        <Business />
        <ArcheHighlight />
        <AboutBand />
        <Company />
        <ContactBand />
      </main>
      <Footer />
    </div>
  );
}

export default App;
