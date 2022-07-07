import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <About />
        <Newsletter />
      </main>
    </>
  );
}

export default App;
