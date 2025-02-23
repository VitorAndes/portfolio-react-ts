import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ToastProps extends ComponentProps<"div"> {}

export function Toast({ className, ...props }: ToastProps) {
	return (
		<div
			className={twMerge(
				"w-full lg:w-96 h-15 p-1 font-Bree-serif leading-none lg:absolute flex items-center justify-center bg-zinc-950/70 shadow-xs shadow-violet-600  text-white rounded-xl bottom-0 right-1",
				className,
			)}
			{...props}
		/>
	);
}
