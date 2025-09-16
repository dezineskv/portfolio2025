"use client";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/components/AppSidebar";
import { useState, useEffect, Suspense } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ChartPie from "@/components/components/Chart";
import { BarCharts } from "@/components/components/BarCharts";
import DataTable from "@/components/components/DataTable";

// async function getData() {
// Fetch data from API here.

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid h-full my-auto auto-rows-min gap-4 md:grid-cols-2">
            <div className="bg-muted/50 rounded-xl sm:w-full">
              <ChartPie />
            </div>
            <div className="bg-muted/50 flex-1 rounded-xl w-full">
              <BarCharts />
            </div>
          </div>
          <div className="bg-muted/50 flex-1 rounded-xl">
            <DataTable />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
