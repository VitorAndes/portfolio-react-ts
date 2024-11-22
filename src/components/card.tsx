import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ICardProps extends ComponentProps<"div"> {
  cardProjects?: boolean;
}

export function Card({ cardProjects, ...card }: ICardProps) {
  return (
    <div
      {...card}
      className={twMerge(
        "bg-zinc-950/80 p-8 rounded-lg shadow shadow-white hover:shadow-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-200 hover:bg-zinc-900 mb-4",
        cardProjects
          ? "lg:max-w-[800px] h-full lg:max-h-[940px] lg:overflow-y-scroll "
          : "w-full lg:max-w-96 h-full"
      )}
    />
  );
}
