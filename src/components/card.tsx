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
				"bg-zinc-950/80 p-8 rounded-lg shadow-sm shadow-violet-600 hover:shadow-zinc-200 hover:shadow-md transition-all duration-200  mb-4",
				cardProjects
					? "lg:max-w-[800px] h-full pb-14"
					: "w-full lg:max-w-96 h-full",
			)}
		/>
	);
}
