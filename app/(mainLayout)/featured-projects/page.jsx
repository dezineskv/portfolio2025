import Header from "@/components/components/Header";
import Footer from "@/components/components/Footer";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Featured from "@/components/components/Featured";

function page() {
  return (
    <>
      <Header />
      {/* <h1 className="text-background mb-4 pt-8 text-center text-5xl font-bold dark:text-white">
        My Projects
      </h1> */}
      <Featured />
      <Footer />
    </>
  );
}

export default page;
