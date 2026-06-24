import { Appeal } from "./components/Appeal";
import { Bypass } from "./components/Bypass";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Story } from "./components/Story";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Bypass />
        <Gallery />
        <Appeal />
      </main>
      <Footer />
    </div>
  );
}
