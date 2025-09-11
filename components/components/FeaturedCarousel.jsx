import React from "react";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Thumbnails from "./Thumbnails";


function FeaturedCarousel({ item }) {
  return (
    <>
      {/* <div className="w-full text-center mx-8 p-8">
        <Carousel className="w-6xl mx-auto max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div> */}
      <div className="p-1">
        <Card className="flex sm:flex-col border-t-lg border-r-lg border-b-lg border-l-lg border-2 border-gray-300 pb-10 text-xl">
          <CardHeader className="">
            <CardTitle>
              <div className="text-center text-2xl py-6">{item.title}</div>
              <br />
              <p className="text-xl">Project Background/Specs</p>
            </CardTitle>
            <CardDescription>
              <p className="text-xl">{item.description}</p>
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
                  <AccordionTrigger>
                    <p className="text-xl">Tech Stack</p>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance text-xl">
                    <p className="text-xl text-[#99a1af]">{item.stack}</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <p className="text-xl">Frontend Features</p>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p className="text-xl text-[#99a1af]">{item.features}</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <p className="text-xl">Additional notes</p>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p className="text-xl text-[#99a1af]">{item.notes}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CardContent>
          <CardFooter>
            {/* // send props to thumbnails then map // */}
            <Thumbnails
              image={item.image}
              images={item.images}
              includes={item.includes}
              title={item.title}
            />
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default FeaturedCarousel;
