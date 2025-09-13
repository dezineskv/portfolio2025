import Header from "@/components/components/Header";
import Footer from "@/components/components/Footer";
import RectCards from "@/components/components/Featured";
import React, { Suspense } from "react";
import About from "@/components/components/About";

function page() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
      <Footer />
    </>
  );
}

export default page;
