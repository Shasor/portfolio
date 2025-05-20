/* eslint-disable @next/next/no-img-element */
import { Code } from "./Code";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-8">
      <div className="flex-[2] flex flex-col gap-2">
        <h2 className="font-caption text-4xl">Adam GONÇALVES</h2>
        <h3 className="font-caption text-2xl">Full-Stack developer</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Passionné par l&apos;informatique et actuellement en formation de concepteur d&apos;applications et logicielles, je possède de solides connaissances en programmation et prends plaisir à relever des défis techniques. J&apos;ai déjà exploré plusieurs langages comme <Code icon="js">JavaScript</Code> pour le front-end,{" "}
          <Code url="https://go.dev" icon="golang">
            Golang
          </Code>{" "}
          pour des services performants côté serveur, ainsi que{" "}
          <Code url="https://isocpp.org/" icon="cpp">
            C++
          </Code>{" "}
          pour des applications plus proches du système. Curieux et déterminé, j&apos;apprends rapidement et m&apos;investis pleinement dans chaque projet afin de concevoir des solutions à la fois innovantes, robustes et adaptées aux besoins des utilisateurs. Mon objectif : allier créativité et efficacité pour créer des applications performantes, intuitives et bien pensées.
        </p>
      </div>
      <div className="flex-1 max-md:m-auto ml-auto">
        <img src="adam-picture.jpeg" className="w-full h-auto max-w-sm rounded-full max-md:w-56" alt="adam's picture" />
      </div>
    </Section>
  );
};
