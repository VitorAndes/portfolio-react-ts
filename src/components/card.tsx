import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ICardProps extends ComponentProps<"div"> {
  cardProjects?: boolean;
}

export function Card({ cardProjects, ...card }: ICardProps) {
  return (
    <div
      {...card}
      className={twMerge(
        "bg-slate-950/30 p-8 rounded-lg shadow shadow-white hover:shadow-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-200 hover:bg-zinc-900",
        cardProjects
          ? "lg:h-full lg:max-w-[800px] overflow-y-scroll"
          : "max-w-96 h-full"
      )}
    ></div>
  );
}
