import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FounderStory from "./components/FounderStory";
import Benefits from "./components/Benefits";
import Programs from "./components/Programs";
import Instructor from "./components/Instructor";
import Differentiators from "./components/Differentiators";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <FounderStory />
        <Benefits />
        <Programs />
        <Instructor />
        <Differentiators />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
