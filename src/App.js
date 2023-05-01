import Navbar from "../src/components/Navbar";
import FeaturedGames from "../src/components/FeaturedGames";
import LatestUpdates from "../src/components/LatestUpdates";
import Play from "../src/components/Play";
import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";

function App() {
  return (
    <div>
        <Hero />
        <Navbar />
        <FeaturedGames />
        <LatestUpdates />
        <Play />
        <Footer />
    </div>
  );
}

export default App;
