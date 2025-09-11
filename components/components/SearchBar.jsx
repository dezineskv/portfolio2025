"use client";

import { useState, useMemo } from "react";
import { items } from "@/lib/items.json";
import Link from "next/link";
import { Menu, ShoppingBag, X, Mail, Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const filteredResults = useMemo(() => {
    if (!query) return [];
    return items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="p-4 max-w-[200px] ml-6 mt-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-search-icon lucide-search absolute mt-2 ml-2 text-gray-600"
      >
        <path d="m21 21-4.34-4.34" />
        <circle cx="11" cy="11" r="8" />
      </svg>
      <input
        type="text"
        placeholder=" Search projects"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full text-sm py-2 rounded-lg border-1 border-gray-600 pl-8 pr-6 mb-[15px]"
      />

      <ul className="absolute z-50 space-y-1 text-sm">
        {filteredResults.map((item, index) => (
          <li key={index} className="px-2 bg-gray-100 rounded">
            <Link href={`/projects/${item.id}`}>{item.features}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
