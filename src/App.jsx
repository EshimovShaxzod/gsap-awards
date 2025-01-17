import About from "./components/about";
import Features from "./components/features";
import Hero from "./components/hero";
import NavBar from "./components/navbar";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
    </main>
  );
};

export default App;
