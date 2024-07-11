import Hero from "./Components/Hero";
import Highlights from "./Components/Highlights";
import Nav from "./Components/Nav";

export default function App() {
  return (
    <main className="bg-black">
      <Nav />
      <Hero />
      <Highlights />
    </main>
  );
}
