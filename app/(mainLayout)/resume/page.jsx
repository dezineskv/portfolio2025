import Header from "@/components/components/Header";
import Footer from "@/components/components/Footer";
import RectCards from "@/components/components/Featured";
import React, { Suspense } from "react";
import Resume from "@/components/components/Resume";

function page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Resume />
      </Suspense>
      <Footer />
    </>
  );
}

export default page;
