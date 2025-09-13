import Header from "@/components/components/Header";
import Footer from "@/components/components/Footer";
import React, { Suspense } from "react";
import AllProjects from "@/components/components/AllProjects"

function page() {
  return (
    <>
      <Header /> <Suspense fallback={<div>Loading...</div>}>
      <AllProjects /></Suspense>
      <Footer />
    </>
  );
}

export default page;
