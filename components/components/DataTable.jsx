"use client";

import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

const data = [
  {
    id: "1",
    amount: 1,
    title: "Coffee Shop App",
    stack: "NextJs, Typescript, TailwindCSS, Node.js, MongoDB, Vercel",
    image: "https://i.ibb.co/rKgZnWb2/coffeeshop-homepage.png",
  },
  {
    id: "2",
    amount: 1,
    title: "Ecomm Site",
    stack: "NextJs, Typescript, TailwindCSS, Node.js, MongoDB, Vercel",
    image: "https://i.ibb.co/jpCDLTg/next-app-productpage.jpg",
  },
  {
    id: "3",
    amount: 1,
    title: "Todos Tracker App",
    stack: "React, Vite, TailwindCSS, Node.js, LocalStorage, Google Pages",
    image: "https://i.ibb.co/20ddL0PW/tracker-add.jpg",
  },
  {
    id: "4",
    amount: 1,
    title: "Veggie Site",
    stack: "React, Vite, TailwindCSS, Node.js, MongoDB, Google Pages",
    image: "https://i.ibb.co/hFDmw2n5/veggie-detailpage.png",
  },
  {
    id: "5",
    amount: 1,
    title: "Produce & Login Site",
    stack: "React, Vite, TailwindCSS, Node.js",
    image: "https://i.ibb.co/zKt2gDK/organicshomepage.jpg",
  },
  {
    id: "6",
    amount: 1,
    title: "UI features",
    stack: "NextJs, TailwindCSS, Node.js",
    image: "https://i.ibb.co/y2M2hBk/ui-homepage.png",
  },
  {
    id: "7",
    amount: 1,
    title: "Weather App",
    stack: "HTML, CSS, JavaScript, API",
    image: "https://i.ibb.co/N2df0Yqd/weatherapp.png",
  },
  {
    id: "8",
    amount: 1,
    title: "Music App",
    stack: "HTML, CSS, JavaScript, API",
    image: "https://i.ibb.co/JjfVg7gn/music-1.jpg",
  },
  {
    id: "9",
    amount: 1,
    title: "Bank page",
    stack: "HTML, CSS, JavaScript",
    image: "https://i.ibb.co/21tkG84P/bank-full.jpg",
  },
  {
    id: "10",
    amount: 1,
    title: "OpenAI, Snowflake",
    stack: "Snowflake, OpenAI",
    image:
      "https://i.ibb.co/v6N4Ky71/ee7859-3da1a27d28024c8eae9f676af329340d-mv2.jpg",
  },
  {
    id: "11",
    amount: 1,
    title: "AWS",
    stack: "AWS, HTML",
    image: "https://i.ibb.co/DPLRmY4j/awspage-2.jpg",
  },
  ,
  {
    id: "12",
    amount: 1,
    title: "Sass/Figma",
    stack: "React, Vite, Sass, Node.js",
    image:
      "https://i.ibb.co/v6N4Ky71/ee7859-3da1a27d28024c8eae9f676af329340d-mv2.jpg",
  },
  {
    id: "13",
    amount: 1,
    title: "Portfolio Site",
    stack: "NextJs, TailwindCSS, Node.js, Vercel",
    image: "https://i.ibb.co/4RnC7Gwn/portfolio-1.png",
  },
];

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Project Title",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "stack",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-extrabold"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tech Stack
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="pl-4 lowercase">{row.getValue("stack")}</div>
    ),
  },
  {
    accessorKey: "image",
    header: "Project Image",
    cell: ({ row }) => (
      <div className="">
        <img
          src={row.getValue("image")}
          alt="image"
          className="max-h-[240px] max-w-[300px]"
        />
      </div>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right font-extrabold">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      //   const formatted = new Intl.NumberFormat("en-US", {
      //     style: "currency",
      //     currency: "USD",
      //   }).format(amount);

      return <div className="text-right font-medium">{amount}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy ID
            </DropdownMenuItem>
            {/* <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function DataTable() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="bg-background mx-auto md:w-full">
      <div className="my-container mx-auto px-10 pb-10">
        <h1 className="mb-4 text-4xl font-bold">Projects</h1>
        <p>Filter projects</p>
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter by stack..."
            value={table.getColumn("stack")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("stack")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns View <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="h-full">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="whitespace-pre-wrap">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="text-muted-foreground flex-1 text-sm">
            {table.getFilteredSelectedRowModel().rows.length} of
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
          <Link href="/">
            <Button className="text-md md:max-w-1/2 rounded-md bg-gray-900 py-6 text-white shadow-lg transition-all hover:scale-105 sm:mx-6 sm:w-[100px] md:px-10">
              Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
