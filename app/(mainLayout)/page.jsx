import Hero from "@/components/components/Hero";
import MyCards from "@/components/components/MyCards";
import Ticker from "@/components/components/Ticker";
import Header from "@/components/components/Header";
import React, { Suspense } from "react";
import Featured from "@/components/components/Featured";
import Footer from "@/components/components/Footer";
import TwoCol from "@/components/components/TwoCol";
import AllProjects from "@/components/components/AllProjects";
import FeaturedCarousel from "@/components/components/FeaturedCarousel";
import Projects from "@/components/components/Projects";

function page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        {/* <FeaturedCarousel/> */}
        <Hero />
        <div className="bg-[#ffecf2]">
          <Ticker />
          <Featured />
          <AllProjects />
          <TwoCol />
        </div>
      </Suspense>
      <Footer />
    </>
  );
}

export default page;
