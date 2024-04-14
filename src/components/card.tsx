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
        "bg-[#5F374B]/30 p-8 rounded-lg shadow shadow-violet-200 hover:shadow-violet-600 hover:shadow-lg hover:scale-105 transition-all duration-200 hover:bg-[#7a3154]",
        cardProjcts ? "w-96 h-[800px] overflow-y-scroll" : "w-80"
      )}
    ></div>
  );
}
