/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return <span className={cn("bg-accent/40 hover:bg-accent/80 font-mono transition-colors border border-accent p-1 rounded-sm text-primary", className)} {...props} />;
};

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-8">
      <div className="flex-[2] flex flex-col gap-2">
        <h2 className="font-caption text-4xl">Adam GONÇALVES</h2>
        <h3 className="font-caption text-2xl">Full-Stack developer</h3>
        <p>
          {/* Use Code Component */}
          Passionné par l&apos;informatique et en pleine formation en <Code>développement</Code> d&apos;applications et web, je maîtrise les bases de la programmation et aime relever des défis techniques. Curieux et motivé, j&apos;apprends rapidement et cherche à développer des solutions innovantes. Mon objectif ? Allier créativité et performance pour concevoir des applications efficaces et ergonomiques.
        </p>
      </div>
      <div className="flex-1 max-md:m-auto ml-auto">
        <img src="adam-picture.jpeg" className="w-full h-auto max-w-sm rounded-full max-md:w-56" alt="adam's picture" />
      </div>
    </Section>
  );
};
