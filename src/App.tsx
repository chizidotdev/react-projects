import About from "./components/About";
import Footer from "./components/Footer";
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
        <Footer />
      </main>
    </>
  );
}

export default App;
