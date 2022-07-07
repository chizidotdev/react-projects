import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="px-5">
        <Hero />
      </main>
    </>
  );
}

export default App;
