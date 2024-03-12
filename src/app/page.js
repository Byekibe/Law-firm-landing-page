import Header from "@/components/header/Header";
import Image from "next/image";
import Hero from "@/components/hero/Hero";
import MainContent from "@/components/mainSection/Main";
import About from "../components/about/About.jsx";
import Testimonial from "@/components/testimonial/Testimonial.jsx";
import Footer from "@/components/footer/Footer.jsx";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <MainContent />
      <About />
      <Testimonial />
      <Footer />
    </main>
  );
}
