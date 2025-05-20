import { IconVariants } from "./Icons";
import { Section } from "./Section";
import { Card } from "./ui/card";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Card className="flex flex-col p-4 gap-2 w-full">
        <p className="text-lg text-muted-foreground">Skills</p>
        <div className="flex max-md:flex-col gap-4">
          <div className="flex flex-col gap-4">
            {IconVariants.golang.icon({ size: 42 })}
            <h3 className="mb-2 text-xl font-bold">Golang</h3>
            <p className="text-gray-500 dark:text-gray-400">Développement backend performant et concurrent grâce à Go.</p>
          </div>
          <div className="flex w-0.5 bg-accent/100 max-md:w-auto max-md:h-0.5" />
          <div className="flex flex-col gap-4">
            {IconVariants.js.icon({ size: 42 })}
            <h3 className="mb-2 text-xl font-bold">JavaScript</h3>
            <p className="text-gray-500 dark:text-gray-400">Création d&apos;interfaces dynamiques et interactives avec JS.</p>
          </div>
          <div className="flex w-0.5 bg-accent/100 max-md:w-auto max-md:h-0.5" />
          <div className="flex flex-col gap-4">
            {IconVariants.cpp.icon({ size: 42 })}
            <h3 className="mb-2 text-xl font-bold">C++</h3>
            <p className="text-gray-500 dark:text-gray-400">Programmation système et optimisation haute performance en C++.</p>
          </div>
        </div>
      </Card>
    </Section>
  );
};
