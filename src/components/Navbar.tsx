interface NavbarProps {
	currentPath: string;
}

const navLinks = [
	{ href: "/", label: "alexgaudon.dev", isBrand: true },
	{ href: "/projects", label: "Projects" },
	{ href: "/uses", label: "Uses" },
];

const Navbar = ({ currentPath }: NavbarProps) => {
	return (
		<nav className="p-4">
			<div className="w-full md:w-1/2 mx-auto flex justify-between items-center">
				{navLinks
					.filter((link) => link.isBrand)
					.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-lg font-bold relative transition-colors duration-300 flex items-center gap-2"
						>
							<span className="hover:underline relative">
								{link.label}
								<span
									className={`absolute left-0 -bottom-1 w-full h-0.5 bg-current transition-all duration-300 ${
										currentPath === link.href
											? "opacity-100 scale-x-100"
											: "opacity-0 scale-x-0"
									}`}
									style={{
										transformOrigin: "left",
										transitionProperty: "opacity, transform",
										transform:
											currentPath === link.href ? "scaleX(1)" : "scaleX(0)",
									}}
									aria-hidden="true"
								/>
							</span>
						</a>
					))}
				<div className="flex items-center space-x-4">
					<ul className="flex space-x-4">
						{navLinks
							.filter((link) => !link.isBrand)
							.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										className="relative transition-colors duration-300"
									>
										<span className="hover:underline relative">
											{link.label}
											<span
												className={`absolute left-0 -bottom-1 w-full h-0.5 bg-current transition-all duration-300 ${
													currentPath === link.href
														? "opacity-100 scale-x-100"
														: "opacity-0 scale-x-0"
												}`}
												style={{
													transformOrigin: "left",
													transitionProperty: "opacity, transform",
													transform:
														currentPath === link.href
															? "scaleX(1)"
															: "scaleX(0)",
												}}
												aria-hidden="true"
											/>
										</span>
									</a>
								</li>
							))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
