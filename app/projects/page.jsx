"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";

// images
import ReactChat1 from "@/public/image/projects/web/grocery/Picture1.jpg";
import ReactChat2 from "@/public/image/projects/web/grocery/Picture2.jpg";
import ReactChat3 from "@/public/image/projects/web/grocery/Picture3.jpg";
import ProjectAll from "@/public/image/projects.png";

import Hr from "@/components/Hr";
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function Page() {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<main className="overflow-hidden">
				<FixedButon href="/#projects">
					<FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
				</FixedButon>
				<div className="relative h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
					<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
						<motion.div
							initial={{ scale: 1 }}
							animate={{ scale: 1.6 }}
							transition={{ duration: 1, ease: "circOut" }}
							className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 ">
							<Image
								src={ProjectAll}
								alt="Raofun"
								layout="fill"
								objectFit="cover"
								placeholder="blur"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none md:backdrop-filter-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
						<h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md-px-0 text-black text-5xl md:text-8xl font-bold">
							My Projects
						</h1>
						<Hr />
						<p className="title  text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
							List of my projects that I have done and{" "}
							<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
								{" "}
								currently working on.
							</span>
						</p>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "circOut" }}
							onClick={() => {
								window.scrollTo({
									top: 1000,
									behavior: "smooth",
								});
							}}
							className="mb-3">
							<Button variation="primary">Scroll Down</Button>
						</motion.div>
					</div>
				</div>
				<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<Hr variant="long"></Hr>
						<h1 className="text-3xl font-bold mt-3">Hightlight</h1>
					</div>
				</div>
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							<div className="absolute top-28 left-10 h-[40%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="w-full h-full shadow-lg">
									<Image
										src={ReactChat1}
										alt="Raofun"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
										className="rat"
									/>
								</motion.div>
							</div>
							<div className="absolute top-16 right-28 h-[30%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{ delay: 0.3 }}
									className="w-full h-full shadow-lg ">
									<Image
										src={ReactChat3}
										alt="Raofun"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
										objectPosition="0% 0%"
									/>
								</motion.div>
							</div>
							<div className="absolute bottom-16 right-20 h-[35%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{
										delay: 0.5,
									}}
									className="w-full h-full shadow-lg">
									<Image
										src={ReactChat2}
										alt="Raofun"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
									/>
								</motion.div>
							</div>
						</div>
					</div>
					<motion.div
						className="flex justify-center items-start flex-col mb-5 md:px-10"
						initial={{
							opacity: 0,
							x: 200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,
							type: "spring",
						}}>
						<h2 className="text-2xl font-bold tracking-wider mb-3">
							Grocerry Shop Management System
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
							Developed a full-featured management system to digitize grocery store operations, 
                            focusing on inventory control, sales tracking, billing, and customer management. 
                            The system allows store managers to add, update, and delete products, process sales and returns, 
                            and automatically update stock in real time. It also generates invoices, sales reports, and low-stock 
                            alerts to support decision-making. Role-based access control and encrypted login ensure data security. 
                            Designed with scalability in mind, the system improves operational efficiency, customer satisfaction, 
                            and profitability by reducing manual workload and enabling data-driven insights.
						</p>{" "}
						<div className="mt-3">
							<Button variation="primary">
								<Link href="projects/trivia">More</Link>
							</Button>
							<Button variation="secondary">
								<a
									href="https://grocery-shop-management-system.vercel.app/"
									target="_blank"
									rel="noopener noreferrer">
									Preview
								</a>
							</Button>
						</div>
					</motion.div>
				</div>
				{/* Commented out Other Note Worthy Projects section
				<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start">
						<Hr variant="long"></Hr>
						<motion.h1
							className="text-3xl font-bold mt-3"
							initial={{
								opacity: 0,
								x: -200,
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.7,
								type: "spring",
							}}>
							Other Note Worthy Projects
						</motion.h1>
					</div>
				</div>

				{/* choose category */}
				{/*
				<motion.div
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						type: "spring",
					}}
					className="flex flex-row justify-center items-start flex-wrap gap-3 md:gap-5 my-5 ">
					{Object.keys(category).map((key, index) => (
						<button
							key={index}
							className={`px-2 md:px-4 py-2 rounded-lg cursor-pointer transition-all ease duration-300 focus:bg-gray-300 focus:text-black focus:ring focus:ring-slate-500 ${
								activeCategory === key
									? "bg-gray-300 text-black hover:bg-gray-700 hover:text-white"
									: "bg-gray-700 text-white hover:bg-gray-300 hover:text-black"
							}`}
							onClick={() => setActiveCategory(key)}>
							{category[key]}
						</button>
					))}
				</motion.div>

				{/* projects */}
				{/*
				<div className="w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10 cursor-pointer">
					{projects.map((project, index) => (
						<ProjectCard
							project={project}
							key={index}
							activeCategory={activeCategory}
						/>
					))}
				</div>

				{/* view in archive btn - moved to bottom */}

				{/* PDF Resume Section */}
				<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start">
						<Hr variant="long"></Hr>
						<motion.h1
							className="text-3xl font-bold mt-3"
							initial={{
								opacity: 0,
								x: -200,
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.7,
								type: "spring",
							}}>
							Another Design Project
						</motion.h1>
					</div>
				</div>

				{/* AlumniConnect Project Description */}
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<motion.div
						className="flex justify-center items-start flex-col mb-5 md:px-10 order-2 md:order-1"
						initial={{
							opacity: 0,
							x: -200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,
							type: "spring",
						}}>
						<h2 className="text-2xl font-bold tracking-wider mb-3">
							AlumniConnect NextGen Relationship & Fundraising System
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
							A comprehensive web-based platform designed to strengthen connections between universities and their alumni. 
							The system facilitates networking opportunities, career development, and ongoing engagement through features like 
							alumni directory, event management, job portal, and mentorship programs. Built with modern web technologies, 
							it enables alumni to update their profiles, share achievements, participate in university events, and contribute 
							to current students&apos; success. The platform also provides analytics for university administrators to track alumni 
							engagement and measure the impact of various programs, fostering a vibrant alumni community.
						</p>
						<div className="mt-3">
							<Button variation="primary">
								<a 
									href="/docs/AlumniConnect_Project_Report.pdf" 
									target="_blank"
									rel="noopener noreferrer"
								>
									View Full Report
								</a>
							</Button>
							<Button variation="secondary">
								<a
									href="#alumniconnect-pdf"
									onClick={(e) => {
										e.preventDefault();
										document.querySelector('.pdf-viewer')?.scrollIntoView({ 
											behavior: 'smooth' 
										});
									}}
								>
									View Details
								</a>
							</Button>
						</div>
					</motion.div>
					
					<motion.div
						className="flex justify-center items-center flex-col mb-5 order-1 md:order-2"
						initial={{
							opacity: 0,
							x: 200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.3,
							type: "spring",
						}}>
						<div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 w-full aspect-square flex items-center justify-center shadow-lg">
							<div className="text-center text-white">
								<div className="text-4xl mb-4">🎓</div>
								<h3 className="text-2xl font-bold mb-2">AlumniConnect</h3>
								<p className="text-lg opacity-90">University Alumni Management</p>
								<div className="mt-4 flex justify-center space-x-2">
									<span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">Web Development</span>
								</div>
								<div className="mt-4 flex justify-center space-x-2">
									<span className="px-2 py-1 bg-white bg-opacity-20 rounded text-xs">React</span>
									<span className="px-2 py-1 bg-white bg-opacity-20 rounded text-xs">Node.js</span>
									<span className="px-2 py-1 bg-white bg-opacity-20 rounded text-xs">MongoDB</span>
								</div>
							</div>
						</div>
					</motion.div>
				</div>

				{/* PDF Viewer */}
				<motion.div
					initial={{
						opacity: 0,
						y: 50,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						delay: 0.3,
						type: "spring",
					}}
					className="w-full max-w-4xl mx-auto px-10 mb-10 pdf-viewer">
					<div className="bg-white rounded-lg shadow-lg overflow-hidden">
						<div className="h-[600px] md:h-[800px] w-full">
							<iframe
								src="/docs/AlumniConnect_Project_Report.pdf"
								className="w-full h-full border-0"
								title="AlumniConnect Project Report PDF"
								style={{
									minHeight: '600px',
								}}
							/>
						</div>
						<div className="p-4 bg-gray-50 flex justify-center">
							<p className="text-sm text-gray-600 mr-4">
								Can&apos;t see the PDF? 
							</p>
							<Button variation="secondary">
								<a 
									href="/docs/AlumniConnect_Project_Report.pdf" 
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2"
								>
									Open in New Tab
								</a>
							</Button>
						</div>
					</div>
				</motion.div>

				{/* Project Details and Github Links Section */}
				<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start">
						<Hr variant="long"></Hr>
						<motion.h1
							className="text-3xl font-bold mt-3"
							initial={{
								opacity: 0,
								x: -200,
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.7,
								type: "spring",
							}}>
							Project Details and Github Links
						</motion.h1>
					</div>
				</div>

				{/* view in archive btn - moved to bottom */}
				<motion.div
					initial={{
						opacity: 0,
					}}
					whileInView={{
						opacity: 1,
					}}
					className="flex justify-center items-center flex-col my-5 self-start ">
					<Button variation="primary">
						<Link href="projects/archive">View In Archive</Link>
					</Button>
				</motion.div>
			</main>
		</>
	);
}
