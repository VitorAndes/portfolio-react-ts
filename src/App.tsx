import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Navigation } from "./components/navigation";
import { Projects } from "./components/projects";
import "./index.css";

export default function App() {
	return (
		<div className="flex flex-col items-center">
			<main className="w-full lg:max-w-7xl flex flex-col gap-12">
				<section
					id="About"
					className="bg-[url(@/assets/bg-about.webp)] rounded-b-[50px] bg-cover min-h-dvh md:min-h-screen w-full flex flex-col justify-center p-4"
				>
					<About />
				</section>

				<section
					id="Projects"
					className="bg-zinc-950 rounded-t-[50px] rounded-b-3xl flex flex-col justify-center items-center md:gap-32 lg:p-12"
				>
					<Projects />
				</section>
				<section
					id="Contact"
					className="relative flex flex-col lg:flex-row items-center gap-4 p-4 lg:p-12 "
				>
					<Contact />
				</section>
			</main>
			<Navigation />
		</div>
	);
}
