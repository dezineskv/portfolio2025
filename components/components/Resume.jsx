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
import { Mail } from "lucide-react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

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
                        <div className="flex flex-col gap-6">
                          <div>
                            <p>
                              <span className="font-bold">
                                Web & Email Developer&nbsp;
                              </span>
                              Intuitive Surgical (contractor)
                              <p className="mb-4">
                                DECEMBER 2024 - DECEMBER 2025 | Remote
                              </p>
                              <p>
                                ● Developed responsive, customized emails and
                                landing pages
                              </p>
                            </p>
                          </div>

                          <div>
                            <p>
                              <span className="font-bold">
                                Marketing Technology Developer&nbsp;
                              </span>
                              Marvel Marketers
                              <p className="mb-4">
                                APRIL 2022 - AUGUST 2023 | Remote
                              </p>
                              <p>
                                ● Marketing Automation API for Marketo using
                                REST ● Developed responsive, customized email
                                templates including media queries and developed
                                customized landing pages ● SQL list pulls via
                                'plx' for Google Cloud clients ● WordPress admin
                                for company site and won Superhero of the
                                Quarter Q12023
                              </p>
                            </p>
                          </div>

                          <div>
                            <p>
                              <span className="font-bold">
                                Marketing Automation Specialist&nbsp;
                              </span>
                              Meta (contractor)
                              <p className="mb-4">
                                APRIL 2021 - APRIL 2022 | Remote
                              </p>
                              <p>
                                ● Global Business Marketing department ● Marketo
                                email build, scheduling, Salesforce syncing &
                                reporting ● Collaboration with program managers
                                & stakeholders
                              </p>
                            </p>
                          </div>

                          <div>
                            <p>
                              <span className="font-bold">
                                Programs Manager&nbsp;
                              </span>
                              Google Cloud (contractor)
                              <p className="mb-4">
                                JULY 2018 - JULY 2020 | San Francisco, CA
                              </p>
                              <p>
                                ● Provisioned user roles & permissions via G
                                Suite, as super admin of a Cloud Community ●
                                Maintained confidential material access of
                                product roadmaps ● Initialized the database list
                                of all existing and new community users ●
                                Collaborated with engineers to configure
                                in-house email platform ● Created engagement
                                reporting from BigQuery & Google Analytics
                              </p>
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        Other Certificates Include
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                          Google Cloud: G Suite Administrator Fundamentals 2019
                          | Coursera Google Cloud: Managing Security in Google
                          Cloud Platform 2019 | Coursera Programming
                          Fundamentals with Javascript, HTML and CSS 2020 |
                          Coursera/Duke University Salesforce Certification:
                          Marketing Cloud Email Specialist 2020 | Salesforce ​
                          Javascript Fundamentals 2023| w3schools ​ Frontend
                          Fundamentals Bootcamp 2023 | OneCodeCamp ​ AWS Cloud
                          Essentials Practioner badge 2024 | AWS SkillsBuilder
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Location</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>San Francisco, CA or Remote</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>Contact Me</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <div className="flex flex-row gap-4">
                          <Link
                            href="mailto:kimbotickool@gmail.com"
                            target="_blank"
                            rel="noopener
              noreferrer"
                          >
                            <Mail className="" />
                          </Link>
                          <Link
                            href="https://github.com/dezineskv"
                            target="_blank"
                            rel="noopener
              noreferrer"
                          >
                            <IoLogoGithub className="text-2xl" />
                          </Link>
                          <Link
                            href="https://www.linkedin.com/in/kim-vidal"
                            target="_blank"
                            rel="noopener
              noreferrer"
                          >
                            <IoLogoLinkedin className="text-2xl" />
                          </Link>
                        </div>
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
