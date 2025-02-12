import { DataTechnologies } from "@/data/dataTechnologies";

export function Technologies() {
	return (
		<>
			<div className="flex gap-x-1 lg:gap-x-12 p-4">
				{DataTechnologies.map((Technologies) => {
					return (
						<img
							key={Technologies.name}
							alt={Technologies.name}
							src={Technologies.icon}
							draggable="false"
							className="w-24 lg:w-40"
						/>
					);
				})}
			</div>
		</>
	);
}
