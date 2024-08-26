import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ICardProps extends ComponentProps<"div"> {
  cardProjcts?: boolean
}

export function Card({cardProjcts, ...card}: ICardProps) {
  return (
    <div
      {...card}
      className={twMerge(
        "bg-slate-950/30 p-8 rounded-lg shadow shadow-white hover:shadow-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-200 hover:bg-zinc-900",
        cardProjcts ? "w-72 h-[450px] lg:h-[800px] lg:w-80 xl:w-96 xl:h-[800px] overflow-y-scroll" : "w-72 xl:w-90"
      )}
    ></div>
  );
}
