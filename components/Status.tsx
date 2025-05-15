import { Gamepad2, LucideIcon, MessageCircleMore, Network, Waypoints } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";
import { Card } from "./ui/card";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-8">
      <div className="flex-[3] w-full">
        <Card className=" flex flex-col p-4 gap-2 w-full">
          <p className="text-lg text-muted-foreground">Training, fun projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject key={index} Logo={project.Logo} title={project.title} description={project.description} url={project.url} />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">Work</Card>
        <Card className="p-4 flex-1">Contact Me</Card>
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
    <Link href={props.url} target="_blank" className="inline-flex items-center gap-4 hover:bg-accent/100 transition-colors p-2 rounded">
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
