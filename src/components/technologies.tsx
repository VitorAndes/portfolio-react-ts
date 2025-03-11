import { DataTechnologies } from "@/data/dataTechnologies";
import { motion } from "motion/react";

export function Technologies() {
	const initial = {
		opacity: 0,
		translateX: -100,
	};

	const animate = { opacity: 1, scale: 1, translateX: 0 };

	return (
		<>
			<div className="flex gap-x-5 p-4 mt-4">
				{DataTechnologies.map((Technologies) => {
					return (
						<motion.img
							initial={initial}
							animate={animate}
							transition={Technologies.transition}
							key={Technologies.name}
							alt={Technologies.name}
							src={Technologies.icon}
							draggable="false"
							className="w-10 md:w-15"
						/>
					);
				})}
			</div>
		</>
	);
}
