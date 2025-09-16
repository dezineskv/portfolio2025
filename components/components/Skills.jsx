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

function Skills() {
  return (
    <>
      <div className="bg-secondary-foreground pt-10 w-full">
        <h1 className="text-5xl font-bold text-center text-background pt-8">
          Skills
        </h1>
        <div className="sm:w-full sm:px-6 sm:mx-auto md:w-5xl pb-8 md:pt-6  ">
          <div className="mt-8 mb-10">
            <Card className="flex sm:flex-col border-t-lg border-r-lg border-b-lg border-l-lg border-2 border-gray-300">
              <CardHeader className="">
                <CardTitle>Background</CardTitle>
                <CardDescription>
                  VsCode, React, JavaScript, MERN, NextJs, Express, AWS, Heroku,
                  GitHub, GitPages, Vercel,Tailwind, Bootstrap, SASS, Postman,
                  API, OpenAI, Figma, Swagger, more...
                </CardDescription>
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
                      <AccordionTrigger>Frontend</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                          DOM manipulation, dynamic content, REST API, react hot
                          toast, routes, state, props, hooks, contextAPI,
                          ratings, params, modals, carousels, dark mode thems,
                          UI elements, more...
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Fullstack</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                          REST API, authentication, routes, state, props, hooks,
                          contextAPI, MVC, CRUD, shipping, more...
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Soft Skills</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                          HTML, CSS, JavaScript, ReactJs, NextJs, MERN | API,
                          UX, Branding, NodeJs, GitHub, Agile
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        Other Relevant Knowledge
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                          professional frontend dev, graphic design knowledge,
                          etc...
                        </p>
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

export default Skills;
