import { About } from "./components/about";
import { Courses } from "./components/courses";
import { Projects } from "./components/projects";

export default function App() {
	return (
		<div className="flex flex-col items-center p-4">
			<header className="sticky z-10 top-4">
				<nav className="w-96 bg-zinc-950/40 backdrop-blur p-3 rounded-3xl shadow shadow-violet-600 hover:shadow-zinc-200 transition-all duration-200">
					<ul className="flex items-center justify-center gap-9">
						<li className="hover:text-violet-600 font-bold text-sm">
							<a href="#About">About</a>
						</li>
						<li className="hover:text-violet-600 font-bold text-sm">
							<a href="#Projects">Projects</a>
						</li>
						<li className="hover:text-violet-600 font-bold text-sm">
							<a href="#Courses">Courses</a>
						</li>
						<li className="hover:text-violet-600 font-bold text-sm">
							<a href="#Contact">Contact</a>
						</li>
					</ul>
				</nav>
			</header>
			<main className="flex flex-col  justify-center max-w-7xl p-8 mt-12">
				<section
					id="About"
					className=" h-screen flex items-center justify-between gap-3 w-full"
				>
					<About />
				</section>
				<section id="Projects" className="mt-12 pt-8">
					<Projects />
				</section>
				<section id="Courses" className="mt-12 pt-8">
					<Courses />
				</section>
			</main>
		</div>
	);
}
