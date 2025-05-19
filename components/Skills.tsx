import { IconVariants } from "./Icons";
import { Section } from "./Section";
import { Badge } from "./ui/badge";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">I work with :</h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-4">
          {IconVariants.golang.icon({ size: 42 })}
          <h3 className="mb-2 text-xl font-bold">Golang</h3>
          <p className="text-gray-500 dark:text-gray-400">Développement backend performant et concurrent grâce à Go.</p>
        </div>
        <div className="flex flex-col gap-4">
          {IconVariants.js.icon({ size: 42 })}
          <h3 className="mb-2 text-xl font-bold">JavaScript</h3>
          <p className="text-gray-500 dark:text-gray-400">Création d&apos;interfaces dynamiques et interactives avec JS.</p>
        </div>
        <div className="flex flex-col gap-4">
          {IconVariants.cpp.icon({ size: 42 })}
          <h3 className="mb-2 text-xl font-bold">C++</h3>
          <p className="text-gray-500 dark:text-gray-400">Programmation système et optimisation haute performance en C++.</p>
        </div>
      </div>
    </Section>
  );
};
