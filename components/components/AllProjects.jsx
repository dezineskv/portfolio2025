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
      <div className="flex sm:flex-col flex-row  sm:w-[80%] sm:justify-center flex-wrap  md:max-w-2xl mx-auto pb-4">
        <div className="inline-flex sm:justify-center md:flex-row flex-wrap gap-2 items-center p-8 md:pr-6 rounded-lg md:w-2xl">
          <button
            className={`${isActive("all")} text-sm py-2 px-4 w-[90px] rounded-lg hover:bg-black`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`${isActive("apps")} text-sm py-2 px-4 w-[90px] rounded-lg hover:bg-black`}
            onClick={() => setFilter("apps")}
          >
            Apps
          </button>
          <button
            className={`${isActive("sites")} text-sm py-2 px-4 w-[90px] rounded-lg hover:bg-black`}
            onClick={() => setFilter("sites")}
          >
            Sites
          </button>
          <button
            className={`${isActive("yes")} text-sm py-2 px-4 w-[120px] rounded-lg hover:bg-black`}
            onClick={() => setFilter("yes")}
          >
            Featured
          </button>
          <button
            className={`${isActive("projects")} text-sm py-2 px-4 w-[180px] rounded-lg hover:bg-black`}
            onClick={() => setFilter("projects")}
          >
            Projects/Features
          </button>
        </div>
      </div>
      {/* map through all projects here */}
      <div className="flex sm:flex-col md:flex-row justify-center flex-wrap md:w-6xl sm:w-sm mx-auto sm:pl-14 gap-4 space-y-2">
        {filteredData.map((item) => {
          return (
            <div key={item.id} className="w-[260px] h-[420px] ">
              <div class="max-w-sm rounded-lg shadow-lg border-1 border-background bg-gray-100 h-[420px]">
                <Image
                  src={item.image}
                  alt="images"
                  width={258}
                  height={180}
                  className="w-[258px] min-h-[180px] max-h-[180px] h-[180px] overflow-hidden bg-cover hover:scale-150"
                />
                <div class="px-6 pt-4 pb-4">
                  <div class="font-bold text-xl mb-2 text-background">
                    {item.title}
                  </div>
                  <p class="text-gray-700 text-base line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div class="px-6 py-2 flex flex-row gap-1">
                  {item.pills.map((pill, index) => {
                    return (
                      <span
                        key={index}
                        class="bg-gray-200 dark:bg-gray-400 dark:text-white w-[100px] inline-flex items-center justify-center text-center rounded-full px-3 py-2 text-xs font-semibold text-gray-700 mx-auto mb-2"
                      >
                        {pill}
                      </span>
                    );
                  })}
                </div>
                <div class="px-6 pt-auto mt-auto pb-4">
                  <Link href={`/projects/${item.id}`}>
                    <Button className="">Details</Button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mx-auto text-center pt-3 pb-10">
        <Link href="/filter">
          <Button className="text-white dark:text-black bg-foreground">
            Projects Overview
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AllProjects;
