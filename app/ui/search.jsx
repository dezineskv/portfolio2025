"use client";

import { Search } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchBar({ placeholder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term) {
    console.log(term);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0 justify-end">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-[200px] rounded-lg border-1 border-gray-600 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <Search className="absolute top-5 right-[170px] inline-flex h-[18px] w-[18px] -translate-y-1/2 justify-end text-gray-600 peer-focus:text-gray-900" />
    </div>
  );
}
