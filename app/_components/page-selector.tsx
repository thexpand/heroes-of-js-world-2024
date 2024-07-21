"use client";

import { usePathname, useRouter } from "next/navigation";
import { type ChangeEventHandler } from "react";

const options: {
  value: string;
  label: string;
}[] = [
  { value: "/", label: "Home" },
  { value: "/slow-loading-page", label: "Slow Page" },
  { value: "/dashboard", label: "Dashboard" },
  { value: "/dashboard/settings", label: "Settings" },
];

export const PageSelector = () => {
  const pathname = usePathname();

  const router = useRouter();

  const handleSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    if (event.target.value) {
      router.push(event.target.value);
    }
  };

  const value = options.map((option) => option.value).includes(pathname)
    ? pathname
    : "";

  return (
    <select value={value} onChange={handleSelect}>
      <option value="" disabled>
        Select a page
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
