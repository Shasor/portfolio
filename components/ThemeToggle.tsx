"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";

type ThemeToggleProps = {
  className?: string;
};

export default function ThemeToggle({ className = "size-8" }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <Button className={cn(buttonVariants({ variant: "outline" }), className)} onClick={() => setIsDark(!isDark)}>
      {isDark ? "🔆" : "🌙"}
    </Button>
  );
}
