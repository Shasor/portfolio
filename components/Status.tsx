/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight, Gamepad2, LucideIcon, MessageCircleMore, Network, Waypoints } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";
import { Card } from "./ui/card";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col gap-8 items-center">
      <div className="flex-[3] w-full">
        <Card className=" flex flex-col p-4 gap-2 w-full">
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
          <ContactCard img="github-pp.jpeg" mdImg="github-logo.jpeg" name="@Shasor" description="Discover my projects!" />
          <ContactCard img="adam-picture.jpeg" mdImg="linkedin-logo.png" name="@goncalves-adam" description="More about my professional life" />
          <ContactCard img="gmail-profile-picture.jpg" mdImg="gmail-logo.png" name="@shasor" description="E-mail me!" />
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Network, // to change
    title: "Real-Time-Forum",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    url: "https://github.com/Shasor/real-time-forum",
  },
  {
    Logo: Gamepad2,
    title: "Make-Your-Game",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    url: "https://github.com/Shasor/make-your-game",
  },
  {
    Logo: Waypoints, // to change
    title: "Lem-In",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    url: "https://github.com/Shasor/lem-in",
  },
  {
    Logo: MessageCircleMore,
    title: "Net-Cat",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
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
    <Link href={props.url} target="_blank" className="inline-flex items-center group gap-4 hover:bg-accent/80 transition-colors p-2 rounded">
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} className="group-hover:animate-spin-once pointer-events-none" />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
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
    <Link href={props.url} target="_blank" className="inline-flex items-center gap-4 hover:bg-accent/80 transition-colors p-2 rounded">
      <img src={props.img} alt={props.title} className="w-10 h-10 border object-contain rounded-md" />
      <div className="mr-auto max-w-36 lg:max-w-48">
        <p className="text-lg font-semibold">{props.title}</p>
        <p title={props.role} className="text-xs text-muted-foreground truncate">
          {props.role}
        </p>
      </div>
      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};

type ContactCardProps = {
  img: string;
  mdImg: string;
  name: string;
  description: string;
};

const ContactCard = (props: ContactCardProps) => {
  return (
    <Card className="p-3 hover:bg-accent/80 transition-colors group flex flex-row items-center gap-4">
      <div className="relative">
        <img src={props.img} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
        <img src={props.mdImg} alt={props.name} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain" />
      </div>
      <div className="mr-auto">
        <p className="text-lg font-semibold">{props.name}</p>
        <p title={props.description} className="text-xs text-muted-foreground truncate">
          {props.description}
        </p>
      </div>
      <ArrowUpRight size={16} className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" />
    </Card>
  );
};
