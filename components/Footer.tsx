import Link from "next/link";
import { Section } from "./Section";

export const Footer = () => {
  return (
    <footer className="bg-card">
      <Section className="py-4 flex max-md:flex-col justify-between items-center text-sm text-muted-foreground">
        <p>© 2025 Adam Gonçalves</p>
        <p>Open Source · MIT License</p>
        <div className="flex gap-2">
          <Link href="https://github.com/Shasor/portfolio" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Code source
          </Link>
          <span>|</span>
          <Link href="https://github.com/Melvynx" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Inspiré par Melvynx
          </Link>
        </div>
      </Section>
    </footer>
  );
};
