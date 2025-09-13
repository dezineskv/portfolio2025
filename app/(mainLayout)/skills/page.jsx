import Header from "@/components/components/Header";
import Footer from "@/components/components/Footer";
import RectCards from "@/components/components/Featured";
import React, { Suspense } from "react";
import Skills from "@/components/components/Skills";

function page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Skills />
      </Suspense>
      <Footer />
    </>
  );
}

export default page;
