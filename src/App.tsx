import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Navigation } from "./components/navigation";
import { Projects } from "./components/projects";
import { Technologies } from "./components/technologies";

export default function App() {
	return (
		<div className="flex flex-col items-center">
			<main>
				<section
					id="About"
					className="bg-[url('./public/bg-about.webp')] rounded-b-[50px] bg-cover h-screen flex flex-col justify-center items-center gap-5 w-full"
				>
					<About />
				</section>
				<section className="flex justify-center m-auto p-4">
					<Technologies />
				</section>
				<section id="Projects" className="bg-zinc-950 rounded-t-[50px]">
					<Projects />
				</section>
				<section id="Contact" className="">
					<Contact />
				</section>
			</main>
			<Navigation />
		</div>
	);
}
