"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Thumbnails from "./Thumbnails";
import { items } from "@/lib/items.json";
import FeaturedCarousel from "./FeaturedCarousel";

function Projects() {
  return (
    <>
      <div className="bg-secondary-foreground pt-10 w-full">
        <h1 className="text-5xl font-bold text-center text-background pt-8">
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
