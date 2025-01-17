import About from "./components/about";
import Contact from "./components/contact";
import Features from "./components/features";
import Hero from "./components/hero";
import NavBar from "./components/navbar";
import FloatingImage from "./components/story";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <FloatingImage />
      <Contact />
    </main>
  );
};

export default App;
