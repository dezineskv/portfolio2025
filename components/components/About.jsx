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

function About() {
  return (
    <>
      <div className="bg-secondary-foreground pt-10 w-full h-auto">
        <h1 className="text-5xl font-bold text-center text-background pt-8">
          About
        </h1>
        <div className="sm:w-full sm:px-6 sm:mx-auto md:w-5xl pb-8 md:pt-3 ">
          <div className="mt-8 mb-10">
            <Card className="flex sm:flex-col border-t-lg border-r-lg border-b-lg border-l-lg border-2 border-gray-300">
              <CardHeader className="border-b-1 border-pink-300 py-3">
                <CardTitle>Kim</CardTitle>
                <CardDescription>
                  I am a front-end developer with a passion for creating
                  visually appealing and user-friendly websites. I specialize in
                  HTML, CSS, JavaScript, and React, Next and I am always eager
                  to learn new technologies and improve my skills.
                </CardDescription>
                <CardAction>
                  <Image
                    src="https://i.ibb.co/HLvvv4gy/girl0.jpg"
                    alt="Kim"
                    width={100}
                    height={100}
                    className="rounded-full border-3 border-[#FFC0CB]"
                  />
                </CardAction>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    I recently completed my comprehensive bootcamp from
                    TechServe4U Software Engineering. As of September, 2025 I
                    have the fundamentals and am ready to put them into action
                    at a professional level.
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      My past profession has been Email Developer, where I could
                      implement frontend features with HTML and CSS. My skillset
                      has grown exponentially after participating in the TS4U
                      bootcamp, while also working, for the past year and a
                      half. I learned and practiced CSS for web and apps. I
                      learned and practiced JavaScript for DOM maniupulation. I
                      added several projects to my GitHub. And I learned and
                      practiced React and NextJs and tackled CRUD operations
                      plus MongoDB usage along with API consumption.
                    </div>
                  </div>
                  <div className="flex items-center">
                    I am professionally familiar with sprints and knowledgeable
                    about agile methodology. I've also used different project
                    management systems as a contributor to Marketing Operations
                    projects including UX deliverables and branded features. I'm
                    a fan of documentation, like Swagger for example. I am able
                    to present or discuss projects to non technical or to
                    technical peers. And I believe in the customer experience
                    and also in internal workflows that can improve as needed.
                  </div>
                  <div className="flex items-center">
                    As mentioned before, I am excited to learn and grow my
                    skills. I enjoy frontend development for web/apps and have a
                    passion for software engineering and its relation to the
                    frontend.
                  </div>
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

export default About;
