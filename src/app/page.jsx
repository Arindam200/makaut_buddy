import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Stat from "./components/Stat/Stat";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stat />
      <FAQ />
      <Footer />
    </>
  );
}
