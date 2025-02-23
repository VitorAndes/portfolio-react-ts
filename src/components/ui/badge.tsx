import type { ReactNode } from "react";

interface BadgeProps {
	children: ReactNode;
}

export function Badge(props: BadgeProps) {
	return (
		<div
			className="bg-violet-600 px-5 h-9 font-Bree-serif rounded-md flex items-center hover:bg-violet-400"
			{...props}
		/>
	);
}
