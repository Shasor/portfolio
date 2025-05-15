// components/icons/icons.tsx
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { buttonVariants } from "./ui/button";

export const IconVariants = {
  github: {
    href: "https://github.com/Shasor",
    icon: (props: ComponentPropsWithoutRef<"svg">) => (
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" {...props}>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.84 1.32 3.53 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.91 0-1.3.47-2.36 1.24-3.2-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.22a11.4 11.4 0 0 1 6 0c2.28-1.54 3.28-1.22 3.28-1.22.67 1.65.25 2.87.13 3.17.77.84 1.23 1.9 1.23 3.2 0 4.6-2.82 5.61-5.5 5.9.43.37.81 1.1.81 2.22v3.3c0 .32.22.69.82.57C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" fill="currentColor" />
      </svg>
    ),
  },
  linkedin: {
    href: "https://www.linkedin.com/in/goncalves-adam/",
    icon: (props: ComponentPropsWithoutRef<"svg">) => (
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" {...props}>
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.7-1.2 2.3-2.5 4.8-2.5 5.1 0 6 3.3 6 7.6V24h-5v-7.1c0-1.7 0-3.9-2.4-3.9-2.4 0-2.7 1.9-2.7 3.8V24h-5V8z" fill="currentColor" />
      </svg>
    ),
  },
  // Ajoutez d'autres icônes ici
};

type IconProps = {
  name: keyof typeof IconVariants;
  className?: string;
};

export function Icons({ name, className = "size-10" }: IconProps) {
  const variant = IconVariants[name];

  if (!variant) return null;

  const { href, icon: IconComponent } = variant;

  return (
    <Link href={href} target="_blank" className={cn(buttonVariants({ variant: "outline", size: "sm" }), className)}>
      <IconComponent className="size-full" />
    </Link>
  );
}
