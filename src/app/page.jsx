"use client"

import { useRef } from 'react'
import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Stat from "./components/Stat/Stat";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Features from "./components/Features/Features";

export default function Home() {
  const featureRef = useRef();

  return (
    <>
      <Navbar featureRef={featureRef} />
      <Hero />
      <Stat />
      <Features ref={featureRef} />
      <FAQ />
      <Footer />
    </>
  );
}
