import type { ReactNode } from "react";

interface BadgeProps {
	children: ReactNode;
}

export function Badge(props: BadgeProps) {
	return (
		<div
			className="bg-[#16161A] px-5 h-9 font-Bree-serif rounded-md flex items-center hover:bg-violet-600 transition-all shadow shadow-violet-600"
			{...props}
		/>
	);
}
