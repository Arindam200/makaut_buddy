import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const Stat = lazy(() => import("./components/Stat/Stat"));
const Features = lazy(() => import("./components/Features/Features"));
const FAQ = lazy(() => import("./components/FAQ/FAQ"));
const Footer = lazy(() => import("./components/Footer/Footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <Stat />
        <Features />
        <FAQ />
        <Footer />
      </Suspense>
    </>
  );
}
