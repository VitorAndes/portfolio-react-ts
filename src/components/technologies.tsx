import { DataTechnologies } from "@/data/dataTechnologies";

export function Technologies() {
	return (
		<>
			<div className="flex gap-x-5 p-4 mt-4">
				{DataTechnologies.map((Technologies) => {
					return (
						<img
							key={Technologies.name}
							alt={Technologies.name}
							src={Technologies.icon}
							draggable="false"
							className="w-8 md:w-15"
						/>
					);
				})}
			</div>
		</>
	);
}
