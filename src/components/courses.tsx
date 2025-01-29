import { DataCourses } from "@/data/dataCourses";

export function Courses() {
	return (
		<>
			<h1 className="font-bold text-xl text-white">Courses</h1>
			<ol className="relative border-r border-gray-200">
				{DataCourses.map((courses) => {
					return (
						<li
							key={courses.name}
							className="flex flex-col gap-1 border border-white shadow shadow-violet-600 rounded-md p-4 max-w-xl mb-10 ms-4"
						>
							{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
							<div className="absolute w-3 h-3 bg-zinc-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
							<time className="mb-1 text-sm font-normal leading-none text-zinc-400">
								{courses.time}
							</time>

							<h1 className="text-white text-lg font-semibold">
								{courses.name}
							</h1>
							<a
								href={courses.href}
								target="_blank"
								rel="noreferrer"
								className="text-base text-slate-300 hover:text-violet-600"
							>
								{courses.description}
							</a>
						</li>
					);
				})}
			</ol>
		</>
	);
}
