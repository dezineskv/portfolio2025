import React, { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
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

// const data = [
//   {
//     id: "m5gr84i9",
//     amount: 316,
//     quantity: "bulk",
//     products: "latte",
//     stock: "In Stock",
//   },
//   {
//     id: "3u1reuv4",
//     amount: 242,
//     quantity: "bulk",
//     products: "double espresso",
//     stock: "In Stock",
//   },
//   {
//     id: "derv1ws0",
//     amount: 837,
//     quantity: "1",
//     products: "cappucino",
//     stock: "In Stock",
//   },
//   {
//     id: "5kma53ae",
//     amount: 874,
//     quantity: "bulk",
//     products: "espresso",
//     stock: "In Stock",
//   },
//   {
//     id: "bhqecj4p",
//     amount: 721,
//     quantity: "2",
//     products: "coffee beans",
//     stock: "Out of Stock",
//   },
//   {
//     id: "bhqecj4p",
//     amount: 123,
//     quantity: "bulk",
//     products: "coffee",
//     stock: "In Stock",
//   },
//   {
//     id: "gbhqecj4p",
//     amount: 500,
//     quantity: "3",
//     products: "coffee cake",
//     stock: "Out of Stock",
//   },
//   {
//     id: "bhqecj4pj",
//     amount: 250,
//     quantity: "bulk",
//     products: "breakfast sandwich",
//     stock: "In Stock",
//   },
//   {
//     id: "gbhq5ecj4p",
//     amount: 500,
//     quantity: "bulk",
//     products: "donut",
//     stock: "In Stock",
//   },
//   {
//     id: "bhq7ecj4pj",
//     amount: 250,
//     quantity: "bulk",
//     products: "drip coffee",
//     stock: "In Stock",
//   },
//   {
//     id: "bhqecj49pj",
//     amount: 250,
//     quantity: "bulk",
//     products: "iced coffee",
//     stock: "In Stock",
//   },
//   {
//     id: "b0hqecj49pj",
//     amount: 250,
//     quantity: "bulk",
//     products: "americano",
//     stock: "In Stock",
//   },
//   {
//     id: "b8hqecj49pj",
//     amount: 250,
//     quantity: "bulk",
//     products: "tea",
//     stock: "In Stock",
//   },
// ];

export function DataTable({ columns, data }) {
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
    <div className="bg-background mx-auto">
      <div className="my-container mx-auto px-10 pb-10">
        <h1 className="mb-4 text-4xl font-bold">Projects</h1>
        <p>Filter projects</p>
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter by products..."
            value={table.getColumn("products")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("products")?.setFilterValue(event.target.value)
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
                              header.getContext(),
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
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
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
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
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
            <Button className="text-md max-w-1/2 rounded-md bg-gray-900 py-6 text-white shadow-lg transition-all hover:scale-105 sm:mx-6 md:px-10">
              Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
