import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconVariants } from "./Icons";

type CodeProps = {
  icon?: keyof typeof IconVariants;
  url?: string;
  children: React.ReactNode;
};

export const Code = (props: CodeProps) => {
  const Icon = props.icon ? IconVariants[props.icon].icon : null;

  const content = (
    <span className={cn("inline-flex items-center bg-accent/30 hover:bg-accent/50 font-mono transition-colors border border-accent max-md:my-0.5 px-1 py-0.5 gap-1 rounded-lg text-primary whitespace-nowrap")}>
      {Icon && <Icon size={16} />}
      {props.children}
    </span>
  );

  return props.url ? (
    <Link href={props.url} target="_blank" rel="noopener noreferrer">
      {content}
    </Link>
  ) : (
    content
  );
};
