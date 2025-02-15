export function Navigation() {
	return (
		<nav className="sticky bottom-0 lg:bottom-2 w-full lg:w-96 bg-zinc-950/40 backdrop-blur-lg p-4 lg:rounded-3xl shadow shadow-violet-600 hover:shadow-zinc-200 transition-all duration-200">
			<ul className="flex font-AveriaSerif items-center justify-center gap-9">
				<li className="hover:text-violet-600 font-bold">
					<a href="#About">About</a>
				</li>
				<li className="hover:text-violet-600 font-bold">
					<a href="#Projects">Projects</a>
				</li>
				<li className="hover:text-violet-600 font-bold">
					<a href="#Contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
}
