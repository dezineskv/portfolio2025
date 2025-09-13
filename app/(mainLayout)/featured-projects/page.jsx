import Header from "@/components/components/Header";
import Footer from "@/components/components/Footer";
import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Featured from "@/components/components/Featured";

function page() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <Featured /></Suspense>
      <Footer />
    </>
  );
}

export default page;
