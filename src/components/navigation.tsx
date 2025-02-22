export function Navigation() {
	return (
		<nav className="sticky bottom-0 lg:bottom-2 w-full lg:w-96 bg-zinc-950/70 backdrop-blur-lg  lg:rounded-3xl shadow-sm p-1 shadow-violet-600 hover:shadow-zinc-200 transition-all duration-200 h-10">
			<ul className="flex font-Bree-serif font-semibold justify-center items-center h-full gap-9">
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
