import { ScrollProgress } from "./components/ScrollProgress";
import { Nav } from "./components/Nav";
import { HeroProduct } from "./components/HeroProduct";
import { SupervisionWall } from "./components/SupervisionWall";
import { ExtremeFocus } from "./components/ExtremeFocus";
import { Reasons } from "./components/Reasons";
import { Business } from "./components/Business";
import { News } from "./components/News";
import { AboutBand } from "./components/AboutBand";
import { FounderMessage } from "./components/FounderMessage";
import { Company } from "./components/Company";
import { ContactBand } from "./components/ContactBand";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Nav />
      <main>
        <HeroProduct />
        <SupervisionWall />
        <ExtremeFocus />
        <Reasons />
        <Business />
        <News />
        <AboutBand />
        <FounderMessage />
        <Company />
        <ContactBand />
      </main>
      <Footer />
    </div>
  );
}

export default App;
