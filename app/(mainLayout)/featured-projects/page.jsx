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
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Featured />
      </Suspense>
      <Footer />
    </>
  );
}

export default page;
