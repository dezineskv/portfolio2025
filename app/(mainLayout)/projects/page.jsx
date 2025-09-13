import Header from "@/components/components/Header";
import Footer from "@/components/components/Footer";
import React, { Suspense } from "react";
import AllProjects from "@/components/components/AllProjects"

function page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <AllProjects />
      </Suspense>
      <Footer />
    </>
  );
}

export default page;
