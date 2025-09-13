import Header from "@/components/components/Header";
import Footer from "@/components/components/Footer";
import React, { Suspense } from "react";
import Featured from "@/components/components/Featured";

function page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Featured />
      </Suspense>
      <Footer />
    </>
  );
}

export default page;
