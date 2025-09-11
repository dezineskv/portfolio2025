"use client";
import React, { useEffect, useState } from "react";
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
import data from "@/lib/items.json";

function AllProjects() {
  // filter data by category with default state set to all
  const [filter, setFilter] = useState("all");
  // filter data
  const [filteredData, setFilteredData] = useState(data.items);
  // function to set the filter to each category depending on the data value
  const handleFilteredData = () => {
    if (filter === "apps") {
      setFilteredData(data.items.filter((item) => item.category === "apps"));
    } else if (filter === "sites") {
      setFilteredData(data.items.filter((item) => item.category === "sites"));
    } else if (filter === "projects") {
      setFilteredData(
        data.items.filter((item) => item.category === "projects")
      );
    } else if (filter === "yes") {
      setFilteredData(data.items.filter((item) => item.featured === true));
    } else {
      setFilteredData(data.items);
    }
  };
  // call the function each time the setFilter activates the filtered values
  useEffect(handleFilteredData, [filter]);
  // set the style of the active button when that filter activates
  const isActive = (category, featured) => {
    return (
      category,
      featured === filter
        ? "bg-[#422ad5] text-white"
        : "bg-background text-gray-300"
    );
  };

  return (
    <div className="pb-8 bg-white dark:bg-gray-500">
      <h1 className="mb-4 text-5xl font-bold text-center text-background pt-8 pb-8">
        Projects
      </h1>
      {/* buttons to click by category */}
      <div className="md:max-w-2xl mx-auto pb-4">
        <div className="inline-flex justify-between items-center p-2 mr-6 rounded-lg gap-1 w-2xl mx-auto">
          <button
            className={`${isActive("all")} text-sm py-2 px-4 w-[90px] rounded-lg`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`${isActive("apps")} text-sm py-2 px-4 w-[90px] rounded-lg`}
            onClick={() => setFilter("apps")}
          >
            Apps
          </button>
          <button
            className={`${isActive("sites")} text-sm py-2 px-4 w-[90px] rounded-lg`}
            onClick={() => setFilter("sites")}
          >
            Sites
          </button>
          <button
            className={`${isActive("yes")} text-sm py-2 px-4 w-[120px] rounded-lg`}
            onClick={() => setFilter("yes")}
          >
            Featured
          </button>
          <button
            className={`${isActive("projects")} text-sm py-2 px-4 w-[180px] rounded-lg`}
            onClick={() => setFilter("projects")}
          >
            Projects/Features
          </button>
        </div>
      </div>
      {/* map through all projects here */}
      <div className="flex sm:flex-col md:flex-row justify-center md:flex-wrap md:w-6xl mx-auto gap-4 space-y-6 sm:px-6">
        {filteredData.map((item) => {
          return (
            <div key={item.id}>
              <Card className="flex-1 sm:flex-col md:w-[350px] md:h-[440px] border-t-lg border-r-lg border-b-lg border-l-lg border-2 border-black shadow-lg">
                <CardHeader className="w-[350px] mx-auto text-center">
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={item.logo}
                    alt="logos"
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center pt-6 text-md line-clamp-3 ">
                      {item.features}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-1 mt-auto">
                  <Link href={`/projects/${item.id}`}>
                    <Button className="">View</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
      <div className="mx-auto text-center pt-4 pb-10">
        <Link href="/filter">
          <Button className="text-white dark:text-black bg-foreground">
            Projects
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AllProjects;
