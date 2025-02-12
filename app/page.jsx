"use client";

import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import Snippets from "@/components/Snippets";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";

const Home = () => {
  return (
    <SessionProvider>
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <Hero />
          <Feature />
          <Snippets />
          <Pricing />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </SessionProvider>
  );
};

export default Home;
