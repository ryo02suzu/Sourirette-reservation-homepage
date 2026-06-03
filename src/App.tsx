import { Nav } from "./components/Nav";
import { HeroCarousel } from "./components/HeroCarousel";
import { SupervisionWall } from "./components/SupervisionWall";
import { News } from "./components/News";
import { Business } from "./components/Business";
import { Reasons } from "./components/Reasons";
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
        <SupervisionWall />
        <News />
        <Business />
        <Reasons />
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
