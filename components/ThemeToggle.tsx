"use client";

import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";

type ThemeToggleProps = {
  className?: string;
};

export const ThemeToggle = ({ className = "size-8 text-accent-foreground" }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} className={cn(buttonVariants({ variant: "outline" }), className)} aria-label="Toggle theme">
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
};
