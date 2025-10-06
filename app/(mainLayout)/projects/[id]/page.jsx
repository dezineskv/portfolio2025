import React from "react";
import { notFound } from "next/navigation";
import { items } from "@/lib/items.json";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Thumbnails from "@/components/components/Thumbnails";
import Header from "@/components/components/Header";
import Footer from "@/components/components/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "lucide-react";
import Image from "next/image";

async function page({ params }) {
  const { id } = await params;

  const project = items.find((item) => item.id === id);

  if (!project) return notFound();
  console.log(project.description);

  return (
    <>
      <Header />

      <div className="bg-secondary-foreground w-full py-10">
        <Breadcrumb className="pl-9">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-background py-8 text-center text-5xl font-bold dark:text-gray-300">
          Featured Projects
        </h1>
        <div className="pb-8 sm:mx-auto sm:w-full sm:px-6 md:w-5xl md:pt-6">
          <Card className="border-t-lg border-r-lg border-b-lg border-l-lg flex border-2 border-gray-300 pb-10 text-xl sm:flex-col">
            <CardHeader className="">
              <CardTitle>
                <div className="py-6 text-center text-2xl">{project.title}</div>
                <br />
                <p className="text-xl">Project Background/Specs</p>
              </CardTitle>
              <CardDescription>
                <p className="text-xl">{project.description}</p>
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
                  <AccordionItem value="item2">
                    <AccordionTrigger>
                      <p className="text-xl">Tech Stack</p>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-xl text-balance">
                      <p className="text-xl text-[#99a1af]">{project.stack}</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      <p className="text-xl">Frontend Features</p>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p className="text-xl text-[#99a1af]">
                        {project.features}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      <p className="text-xl">Links</p>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      {project?.link && (
                        <p className="flex text-xl text-[#99a1af]">
                          <Link />
                          &nbsp; <a href={project.link} target="_blank">{project.link}</a>
                        </p>
                      )}
                      {project?.gitlink && (
                        <p className="flex text-xl text-[#99a1af]">
                          <Image
                            src="https://i.ibb.co/spy4N7Zq/github.png"
                            alt="github"
                            width={32}
                            height={31}
                          />
                          &nbsp; <a href={project.gitlink} target="_blank">{project.gitlink}</a>
                        </p>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      <p className="text-xl">Additional notes</p>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p className="text-xl text-[#99a1af]">{project.notes}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
            <CardFooter>
              {/* send props to thumbnails then map */}
              <Thumbnails
                image={project.image}
                images={project.images}
                includes={project.includes}
                title={project.title}
              />
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
