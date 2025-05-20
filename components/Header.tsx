import { Icons } from "./Icons";
import { Section } from "./Section";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 bg-background border-b">
      <Section className="flex items-center gap-5">
        <h1 className="text-lg font-bold text-primary">shasor.github.io</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Icons name="github" />
          <Icons name="linkedin" />
        </ul>
      </Section>
    </header>
  );
};
