"use client";

import { Search } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar({ placeholder }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  //   function handleSearch(term) {
  //     console.log(term);
  //     const params = new URLSearchParams(searchParams);
  //     if (term) {
  //       params.set("query", term);
  //     } else {
  //       params.delete("query");
  //     }
  //     replace(`${pathname}?${params.toString()}`);
  //     setResults(data.results);
  //   }
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("Search failed");
      const data = await res.json();
      console.log(data); // Debug: see what the API returns
      setResults(data.results);
    } catch (err) {
      setError("Error searching. Please try again.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative flex flex-1 flex-shrink-0 justify-end">
      <form
        onSubmit={handleSearch}
        className="mt-4 flex items-center gap-2 sm:ml-6 sm:pl-6"
      >
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="peer block w-[200px] rounded-lg border-1 border-gray-600 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <Search className="absolute top-5 right-[170px] inline-flex h-[18px] w-[18px] -translate-y-1/2 justify-end text-gray-600 peer-focus:text-gray-900" />
      </form>
      <div>
        {results.map((item) => (
          <div key={item._id}>
            <Link href={`/products/${item._id}`}>
              <span className="underline">{item.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
