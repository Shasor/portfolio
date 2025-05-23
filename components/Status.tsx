/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight, Gamepad2, LucideIcon, MessageCircleMore, Network, Waypoints } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";
import { Card } from "./ui/card";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col gap-8 items-center">
      <div className="flex-[3] w-full">
        <Card className="flex flex-col p-4 gap-2 w-full">
          <p className="text-lg text-muted-foreground">Training, fun projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject key={index} {...project} />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Works</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Works key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contact Me</p>
          {CONTACT_CARDS.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Network,
    title: "Real-Time-Forum",
    description: "Forum en temps réel avec posts, chat privé et login sécurisé.",
    url: "https://github.com/Shasor/real-time-forum",
  },
  {
    Logo: Gamepad2,
    title: "Make-Your-Game",
    description: "Jeu solo fluide à 60 FPS sans canvas, en pur JS et HTML.",
    url: "https://github.com/Shasor/make-your-game",
  },
  {
    Logo: Waypoints,
    title: "Lem-In",
    description: "Simulation d'une colonie de fourmis avec pathfinding en Go.",
    url: "https://github.com/Shasor/lem-in",
  },
  {
    Logo: MessageCircleMore,
    title: "Net-Cat",
    description: "Création d'un chat TCP interactif en Go, inspiré de NetCat.",
    url: "https://github.com/Shasor/net-cat",
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link href={props.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center group gap-4 hover:bg-accent/80 transition-colors p-2 rounded">
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} className="group-hover:animate-spin-once pointer-events-none" />
      </span>
      <div>
        <p className="text-lg text-foreground font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

const WORKS: WorksProps[] = [
  {
    img: "palatine.jpeg",
    title: "Banque Palatine",
    role: "Gestionnaire en Maintenance et Support Informatique",
    date: "2021 - 2023",
    url: "https://www.palatine.fr/",
  },
];

type WorksProps = {
  img: string;
  title: string;
  role: string;
  date: string;
  url: string;
};

const Works = (props: WorksProps) => {
  return (
    <Link href={props.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 hover:bg-accent/80 transition-colors p-2 rounded">
      <img src={props.img} alt={props.title} className="w-10 h-10 border object-contain rounded-md" />
      <div className="mr-auto max-w-36 lg:max-w-48">
        <p className="text-lg text-foreground font-semibold">{props.title}</p>
        <p title={props.role} className="text-xs text-muted-foreground truncate">
          {props.role}
        </p>
      </div>
      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};

const CONTACT_CARDS: ContactCardProps[] = [
  {
    img: "github-pp.jpeg",
    mdImg: "github-logo.jpeg",
    name: "@Shasor",
    description: "Discover my projects!",
    url: "https://github.com/Shasor",
  },
  {
    img: "adam-picture.jpeg",
    mdImg: "linkedin-logo.png",
    name: "@goncalves-adam",
    description: "More about my professional life",
    url: "https://www.linkedin.com/in/goncalves-adam/",
  },
  {
    img: "gmail-profile-picture.jpg",
    mdImg: "gmail-logo.png",
    name: "@shasor",
    description: "E-mail me!",
    url: "mailto:goncalvesadam@icloud.com?subject=Mail from your Portfolio",
  },
];

type ContactCardProps = {
  img: string;
  mdImg: string;
  name: string;
  description: string;
  url: string;
};

const ContactCard = (props: ContactCardProps) => {
  return (
    <Link href={props.url} target="_blank" rel="noopener noreferrer">
      <Card className="p-3 hover:bg-accent/80 transition-colors group flex flex-row items-center gap-4">
        <div className="relative w-10 h-10">
          <img src={props.img} alt={props.name} className="size-full rounded-full object-contain" />
          <img src={props.mdImg} alt={props.name} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain" />
        </div>
        <div className="flex-1">
          <p className="text-lg font-semibold">{props.name}</p>
          <p title={props.description} className="text-xs text-muted-foreground">
            {props.description}
          </p>
        </div>
        <ArrowUpRight size={16} className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" />
      </Card>
    </Link>
  );
};
