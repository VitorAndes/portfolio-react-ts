import { DataTechnologies } from "@/data/dataTechnologies";

export function Technologies() {
	return (
		<>
			<div className="flex flex-wrap gap-x-12 p-4">
				{DataTechnologies.map((Technologies) => {
					return (
						<img
							key={Technologies.name}
							alt={Technologies.name}
							src={Technologies.icon}
							className="w-52 h-52 rounded-xl"
						/>
					);
				})}
			</div>
		</>
	);
}
