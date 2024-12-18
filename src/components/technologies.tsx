import { Separator } from "@/components/ui/separator";
import { DataTechnologies } from "@/data/dataTechnologies";

export function Technologies() {
	return (
		<>
			<h1 className="font-bold text-xl text-white">Technologies</h1>
			<Separator className="my-3" />
			<div className="flex flex-wrap gap-y-12 gap-x-4 p-4">
				{DataTechnologies.map((Technologies) => {
					return (
						<img
							key={Technologies.name}
							alt={Technologies.name}
							src={Technologies.icon}
							width={60}
							height={60}
							className="rounded-sm hover:shadow-lg hover:shadow-violet-600 hover:scale-105 transition-all"
						/>
					);
				})}
			</div>
		</>
	);
}
