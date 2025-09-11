import Header from "@/components/components/Header";
import Footer from "@/components/components/Footer";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Featured from "@/components/components/Featured";
import AllProjects from "@/components/components/AllProjects"

function page() {
  return (
    <>
      <Header />
      <AllProjects />
      <Footer />
    </>
  );
}

export default page;
