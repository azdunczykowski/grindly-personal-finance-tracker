"use client";

import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import Snippets from "@/components/Snippets";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";

const Home = () => {
  return (
    <SessionProvider>
      <div>
        <Hero />
        <Feature />
        <Snippets />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </SessionProvider>
  );
};

export default Home;
