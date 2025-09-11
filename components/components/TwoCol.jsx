import React from "react";
import MyCards from "./MyCards";
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

const TwoCol = () => {
  return (
    <>
      <div className="pt-18 w-full bg-secondary-foreground">
        <h2 className="font-bold text-background dark:text-gray-300 text-5xl mx-auto text-center w-full">
          About Me
        </h2>
        <div className="w-full flex flex-col md:flex-row justify-between pb-4 md:w-6xl mx-auto gap-4">
          <MyCards />
          <div className="sm:w-full sm:max-w-[450px] sm:px-6 sm:mx-auto md:w-[40%] pb-4 md:pt-10 md:pl-8 ">
            <div className="mt-10 mb-10">
              <Card className="flex sm:flex-col md:w-[400px] md:h-[368px] border-t-lg border-r-lg border-b-lg border-l-lg border-2 border-gray-300">
                <CardHeader className="w-[400px]">
                  <CardTitle>Kim</CardTitle>
                  <CardDescription>
                    I am a front-end developer with a passion for creating
                    visually appealing and user-friendly sites/apps. I
                    specialize in HTML, CSS and I am always eager to learn new
                    technologies and improve my skills.
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
                  <div className="flex flex-col gap-2">
                    <div className="grid gap-2 text-sm">
                      I recently completed my comprehensive bootcamp from
                      TechServe4U's Software Engineering program. As of
                      September, 2025 I have the fundamentals and am ready to
                      put them into action at a professional level. <br />
                      How my skills shine...
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-1 mb-4">
                  <Link href="/about">
                    <Button>Read More</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoCol;
