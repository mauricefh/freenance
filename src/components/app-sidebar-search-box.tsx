"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useDebounce } from "@/hooks/use-debounce";

export function AppSidebarSearchBox() {
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 400); // 400ms debounce

  useEffect(() => {
    if (debouncedInput.trim() === "") return;

    // Replace this with your actual search logic (e.g., API call or filter)
    console.log("Searching for:", debouncedInput);
  }, [debouncedInput]);

  return (
    <div className="relative">
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search 'last paycheck'"
        className="peer block w-full rounded-md border bg-white border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
      />
      <Search className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
