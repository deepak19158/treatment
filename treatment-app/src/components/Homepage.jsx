import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import HealthCarousel from "./HealthCarousel/HealthCarousel";
import BedroomSection from "./BedroomSection/BedroomSection";
import Footer from "./Footer/Footer";

const Homepage = () => {
  return (
    <>
      <main className="px-6 pt-8 pb-16 sm:py-16 max-w-7xl mx-auto">
        <Hero />
        <Services />
        <div className="text-center mt-16">
          <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
            Get started
          </button>
        </div>
        <HealthCarousel />
      </main>
      <BedroomSection />
    </>
  );
};

export default Homepage;
