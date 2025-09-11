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

function Resume() {
  return (
    <>
      <div className="bg-secondary-foreground pt-10 w-full">
        <h1 className="text-5xl font-bold text-center text-background pt-8">
          Resume
        </h1>
        <div className="sm:w-full sm:px-6 sm:mx-auto md:w-5xl pb-8 md:pt-6  ">
          <div className="mt-8 mb-10">
            <Card className="flex sm:flex-col border-t-lg border-r-lg border-b-lg border-l-lg border-2 border-gray-300">
              <CardHeader className="w-4xl">
                <CardTitle>Background</CardTitle>
                <CardDescription>
                  I am a front-end developer with a passion for creating
                  visually appealing and user-friendly websites. I specialize in
                  HTML, CSS, JavaScript, and React, and I am always eager to
                  learn new technologies and improve my skills.
                </CardDescription>
                <CardAction className="ml-6">
                  <Link href="/skills">
                    <Button>Skills</Button>
                  </Link>
                </CardAction>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Education</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>TechServe4U: Software Engineering certificate</p>
                        <p>
                          University of California, Santa Cruz: Bachelors Degree
                          in Economics and Art History
                        </p>
                        <p>Platt College: Graphic Design AA</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        Professional Experience
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>frontend, email</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Location</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>San Francisco, CA | Remote</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Contact Me</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>Email, github, linkedin</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Link href="/projects">
                  <Button>Projects</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
