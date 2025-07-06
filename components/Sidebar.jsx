"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUser,
	faFolderOpen,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {
	const handleMoveToSection = (index) => {
		if (typeof window !== "undefined" && window.fullpage_api) {
			window.fullpage_api.moveTo(index);
		}
	};

	return (
		<div className="hidden md:flex fixed z-40 bg-gray-700 h-[40vh] w-12 flex-col justify-between items-center p-3 left-0 top-1/4 rounded-e-3xl">
			<ul
				id="sidebar"
				className="flex flex-col justify-evenly items-center h-full text-gray-50">
				<li data-menuanchor="home" className="active">
					<button
						onClick={() => handleMoveToSection(1)}
						className="hover:animate-pulse cursor-pointer"
					>
						<FontAwesomeIcon icon={faHome} className="text-xl" />
					</button>
				</li>
				<li data-menuanchor="about">
					<button
						onClick={() => handleMoveToSection(2)}
						className="hover:animate-pulse cursor-pointer"
					>
						<FontAwesomeIcon icon={faUser} className="text-xl" />
					</button>
				</li>
				<li data-menuanchor="projects">
					<button
						onClick={() => handleMoveToSection(3)}
						className="hover:animate-pulse cursor-pointer"
					>
						<FontAwesomeIcon icon={faFolderOpen} className="text-xl" />
					</button>
				</li>
				<li data-menuanchor="contact">
					<button
						onClick={() => handleMoveToSection(4)}
						className="hover:animate-pulse cursor-pointer"
					>
						<FontAwesomeIcon icon={faEnvelope} className="text-xl" />
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;