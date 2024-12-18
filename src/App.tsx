import { About } from "@/components/about";
import { Card } from "@/components/card";
import { Projects } from "@/components/projects";
import { motion } from "framer-motion";
import { Courses } from "./components/courses";
import { Technologies } from "./components/technologies";

export default function App() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-3 p-4 gap-4">
			{/* Card about */}
			<div className="col-span-1 md:grid md:grid-cols-2 lg:grid-cols-1 w-full gap-4 ">
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						duration: 1.8,
						delay: 0.8,
						ease: [0, 0.71, 0.2, 1.01],
					}}
				>
					<Card>
						<About />
					</Card>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						duration: 1.8,
						delay: 0.8,
						ease: [0, 0.71, 0.2, 1.01],
					}}
				>
					<img
						src="https://media1.tenor.com/m/kxiro8Eecb8AAAAd/coding.gif"
						className="w-full lg:w-72 xl:w-96 h-full rounded-lg shadow shadow-violet-600 hover:shadow-slate-200 hover:shadow-md  transition-all duration-200"
						alt="gif de notebook"
					/>
				</motion.div>
			</div>

			{/* Card tech and courses */}
			<div className="col-span-1 md:grid md:grid-cols-2 lg:grid-cols-1 gap-4 h-full">
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						duration: 1.8,
						delay: 0.8,
						ease: [0, 0.71, 0.2, 1.01],
					}}
				>
					<Card>
						<Technologies />
					</Card>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 300 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 1.8,
						delay: 1,
						ease: [0, 0.71, 0.2, 1.01],
					}}
				>
					<Card>
						<Courses />
					</Card>
				</motion.div>
			</div>
			{/* Card Projects */}
			<div className="col-span-1 row-span-3 lg:col-span-2 h-full">
				<motion.div
					initial={{ opacity: 0, y: -300 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 1.8,
						delay: 1,
						ease: [0, 0.71, 0.2, 1.01],
					}}
				>
					<Card cardProjects>
						<Projects />
					</Card>
				</motion.div>
			</div>
		</div>
	);
}
