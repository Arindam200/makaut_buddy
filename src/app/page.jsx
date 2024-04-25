import FAQ from "./components/FAQ/FAQ";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Stat from "./components/Stat/Stat";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stat />
      <Features />
      <FAQ />
      <Footer />
    </>
  );
}
