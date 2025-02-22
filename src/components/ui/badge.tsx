import type { ReactNode } from "react";

interface BadgeProps {
	children: ReactNode;
}

export function Badge(props: BadgeProps) {
	return <div {...props} />;
}
