import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { items } from "@/lib/items.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Featured() {
  return (
    <>
      <div className="pt-10 bg-primary-foreground pb-20">
        <h1 className="mb-4 text-5xl font-bold text-center text-background dark:text-gray-300 pt-8">
          My Featured Apps
        </h1>
        {/* map through featured projects */}
        {items.map((item, index) => {
          if (item?.featured === true) {
            return (
              <div
                key={item.id}
                className="mx-auto mt-14 w-full max-w-sm rounded-lg md:max-w-4xl md:flex border-6 border-background shadow-lg bg-white"
              >
                <Carousel className="w-[280px] mx-auto max-w-sm my-auto py-auto px-6">
                  <CarouselContent>
                    {item.images.map((_, index) => (
                      <CarouselItem key={index}>
                        <Card className="h-[180px] w-[240px]">
                          <CardContent className="flex aspect-auto items-center justify-center my-0 p-0">
                            <Image
                              src={_}
                              alt="image"
                              width={240}
                              height={200}
                            />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="ml-5" />
                  <CarouselNext className="mr-5" />
                </Carousel>
                {/* end carousel */}
                <div className="flex flex-col justify-between gap-1 bg-white p-8 leading-normal md:rounded-r md:rounded-b-none  md:border-l-1-black md:border-background md:w-lg">
                  <div className="mb-8 sm:w-[250px] md:w-md">
                    <p className="flex items-center text-sm text-gray-600 ">
                      {item.icons.map((icon, index) => (
                        <Image
                          key={index}
                          src={icon}
                          alt="icons"
                          width={34}
                          height={34}
                          className="mr-2 hover:scale-150"
                        />
                      ))}
                    </p>
                    <div className="mb-2 sm:pt-2 text-xl font-bold text-gray-900">
                      {item.title}
                    </div>
                    <p className="text-base text-gray-700">
                      <span className="font-bold">Stack: </span> {item.stack}
                    </p>
                    <div className="text-base text-gray-700">
                      <span className="font-bold">Features: </span>
                      {item.features}
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-sm text-gray-600">
                        <Link href={`/projects/${item.id}`}>
                          <Button>View Project</Button>                        
                          </Link>                   
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
export default Featured;
