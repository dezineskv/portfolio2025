"use client";
import React from "react";
import { items } from "@/lib/items.json";
import FeaturedCarousel from "./FeaturedCarousel";
import Features from "./Features";
import Link from "next/link";

function Projects() {
  return (
    <>
      <div className="bg-secondary-foreground pt-10 w-full">
        <h1 className="text-5xl font-bold text-center text-background pt-8 dark:text-gray-300">
          Featured Projects
        </h1>
        
        <div className="sm:w-full sm:px-6 sm:mx-auto md:w-5xl pb-8 md:pt-6  ">
          {items.map((item) => (
            <div className="mt-8 mb-10" key={item.id}>
              <FeaturedCarousel item={item} />
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default Projects;
