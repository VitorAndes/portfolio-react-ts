import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Navigation } from "./components/navigation";
import { Projects } from "./components/projects";

export default function App() {
	return (
		<div className="flex flex-col items-center">
			<main className="w-full lg:max-w-7xl">
				<section
					id="About"
					className="bg-[url('@/assets/bg-about.webp')] rounded-b-[50px] bg-cover h-screen flex flex-col lg:flex-row-reverse justify-center items-center gap-5 w-full mb-12"
				>
					<About />
				</section>

				<section
					id="Projects"
					className="bg-zinc-950 rounded-t-[50px] rounded-b-3xl flex flex-col m-auto justify-center items-center md:gap-32 lg:p-12"
				>
					<Projects />
				</section>
				<section
					id="Contact"
					className="flex flex-col lg:flex-row items-center gap-4 p-4 lg:p-12 mt-12"
				>
					<Contact />
				</section>
			</main>
			<Navigation />
		</div>
	);
}
