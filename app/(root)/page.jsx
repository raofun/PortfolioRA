"use client";
import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Link from "next/link";

// components
import Button from "@/components/Button";
import Me from "@/public/image/piel.jpg";
import MeAbout from "@/public/image/piel2.jpg";
import Setup from "@/public/image/setup.jpg";
import ProjectAll from "@/public/image/projects.png";
import Hr from "@/components/Hr";
// icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const COLORS = {
	primary: "#1e293b", // slate-800
	secondary: "#64748b", // slate-500
	accent: "#6366f1", // indigo-500
	bg: "#f8fafc", // slate-50
	card: "#ffffff", // white
	text: "#0f172a", // slate-900
	muted: "#94a3b8", // slate-400
	success: "#10b981", // green-500
	error: "#ef4444", // red-500
	warning: "#f59e0b", // amber-500
	info: "#3b82f6", // blue-500
	light: "#e5e7eb", // gray-200
	dark: "#111827", // gray-900
	bal: "#f16300",
};

const MyPage = () => {
	const fullpageOptions = {
		anchors: ["home", "about", "projects", "contact"],
		scrollingSpeed: 500,
		licenseKey: "gplv3-license",
		menu: "#sidebar",
		lockAnchors: false,
	};

	return (
		<div style={{ background: COLORS.bg }}>
			<ReactFullpage
				render={() => (
					<ReactFullpage.Wrapper>
						{/* HOME */}
						<div className="section" style={{ background: COLORS.bg }}>
							<div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-8 p-10 md:px-24">
								<motion.div
									className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
									initial={{ x: -100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{ type: "spring" }}
								>
									<div className="block md:hidden col-span-1 mx-auto my-10">
										<div
											className="rounded-full h-60 w-60 shadow-lg border-4 border-indigo-200 overflow-hidden"
											style={{
												background: COLORS.card,
												transition: "filter 0.3s",
												filter: "grayscale(80%)",
											}}
										>
											<Image
												src={Me}
												width={500}
												height={500}
												className="rounded-full w-full h-full object-cover"
												alt="Raofun"
												placeholder="blur"
												style={{ filter: "grayscale(80%)" }}
												onMouseOver={e => (e.currentTarget.style.filter = "none")}
												onMouseOut={e => (e.currentTarget.style.filter = "grayscale(80%)")}
											/>
										</div>
									</div>
									<motion.h3
										className="uppercase text-lg mb-2 font-medium tracking-[.3em]"
										style={{ color: COLORS.accent, letterSpacing: ".3em" }}
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.2, type: "tween" }}
									>
										Raofun Azad Piel
									</motion.h3>
									<motion.h1
										className="text-5xl md:text-6xl lg:text-7xl font-extrabold my-2 md:my-5"
										style={{
											color: COLORS.text,
											lineHeight: 1.1,
											textShadow: "0 2px 8px rgba(99,102,241,0.08)",
										}}
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.3, type: "spring" }}
									>
										Software Engineering Student
									</motion.h1>
									<motion.p
										className="text-lg mt-4 tracking-wide"
										style={{ color: COLORS.secondary, maxWidth: 600 }}
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.4, type: "spring" }}
									>
										Hi! I am Raofun, a passionate Software engineering student dedicated to learning and delivering quality work. I thrive in collaborative environments and value strong communication.
									</motion.p>
									<motion.div
										className="flex flex-row justify-center items-center space-x-4 mt-10"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.5, type: "spring" }}
									>
										<Button variation="primary" style={{
											background: COLORS.accent,
											color: "#fff",
											border: "none",
											fontWeight: "bold",
											boxShadow: "0 2px 8px rgba(99,102,241,0.15)"
										}}>
											<Link
												href={"/docs/Raofun_CV.pdf"}
												target="_blank"
												rel="noopener noreferrer"
												download
											>
												Resume
											</Link>
										</Button>
										<Button variation="secondary" style={{
											background: COLORS.card,
											color: COLORS.accent,
											border: `2px solid ${COLORS.accent}`,
											fontWeight: "bold"
										}}>
											<a href="#contact">Contact Me</a>
										</Button>
									</motion.div>
								</motion.div>
								<motion.div
									className="hidden md:flex col-span-1 mx-auto justify-center items-center"
									initial={{ x: 100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{ delay: 0.7, type: "spring" }}
								>
									<div
										className="rounded-full shadow-xl border-4 border-indigo-200 overflow-hidden"
										style={{
											background: COLORS.card,
											padding: "2rem",
											filter: "grayscale(80%)",
											transition: "filter 0.3s",
										}}
										onMouseOver={e => (e.currentTarget.style.filter = "none")}
										onMouseOut={e => (e.currentTarget.style.filter = "grayscale(80%)")}
									>
										<Image
											src={Me}
											width={400}
											height={550}
											placeholder="blur"
											alt="Raofun"
											className="rounded-full w-full h-full object-cover"
										/>
									</div>
								</motion.div>
							</div>
						</div>
						{/* ABOUT */}
						<div className="section" style={{ background: COLORS.bg }}>
							<div className="relative md:h-screen w-screen gap-4 flex justify-center items-center flex-col overflow-hidden">
								<div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
									<motion.div
										className="rounded-xl shadow-2xl overflow-hidden"
										style={{
											background: COLORS.card,
											height: "400px",
											width: "80vw",
											maxWidth: "500px",
											border: `4px solid ${COLORS.accent}`,
										}}
										initial={{ x: 300, opacity: 0, z: -100 }}
										whileInView={{ x: 0, opacity: 1, z: 0 }}
										transition={{
											delay: 0.5,
											type: "spring",
											stiffness: 100,
											damping: 20,
										}}
									>
										<Image
											src={MeAbout}
											layout="fill"
											className="object-cover"
											alt="Raofun"
											placeholder="blur"
										/>
									</motion.div>
								</div>
								<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start text-start px-10 py-5">
									<motion.h1
										className="text-5xl md:text-7xl font-extrabold"
										style={{ color: COLORS.text }}
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.1, type: "spring" }}
									>
										About Me
									</motion.h1>
									<Hr />
									<motion.p
										className="text-xl mt-4 tracking-wide"
										style={{ color: COLORS.secondary, maxWidth: 600 }}
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.2, type: "spring" }}
									>
										A brief introduction about me and my interest in software engineering.
									</motion.p>
									<motion.div
										initial={{ y: 40, opacity: 0 }}
										whileInView={{ y: 0, opacity: 1 }}
										transition={{ delay: 0.3, type: "spring" }}
									>
										<Button variation="primary" style={{
											background: COLORS.accent,
											color: "#fff",
											border: "none",
											fontWeight: "bold"
										}}>
											<Link href="/about">Learn More</Link>
										</Button>
									</motion.div>
								</div>
							</div>
						</div>
						{/* PROJECTS */}
						<div className="section" style={{ background: COLORS.bg }}>
							<div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
								<div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
									<motion.div
										className="rounded-xl shadow-2xl overflow-hidden"
										style={{
											background: COLORS.card,
											height: "400px",
											width: "80vw",
											maxWidth: "500px",
											border: `4px solid ${COLORS.accent}`,
										}}
										initial={{ x: 300, opacity: 0, z: -100 }}
										whileInView={{ x: 0, opacity: 1, z: 0 }}
										transition={{
											delay: 0.5,
											type: "spring",
											stiffness: 100,
											damping: 20,
										}}
									>
										<Image
											src={ProjectAll}
											layout="fill"
											className="object-cover"
											alt="Raofun"
											placeholder="blur"
										/>
									</motion.div>
								</div>
								<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start text-start px-10 py-5">
								
									<motion.h1
										className="text-5xl md:text-7xl font-extrabold"
										style={{ color: COLORS.text }}
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.1, type: "spring" }}
									>
										My Projects
									</motion.h1>
									<Hr />
									<motion.p
										className="text-xl mt-4 tracking-wide"
										style={{ color: COLORS.secondary, maxWidth: 600 }}
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.2, type: "spring" }}
									>
										Here are some of my projects, including those I am currently working on.
									</motion.p>
									<motion.div
										initial={{ y: 40, opacity: 0 }}
										whileInView={{ y: 0, opacity: 1 }}
										transition={{ delay: 0.3, type: "spring" }}
									>
										<Button variation="primary" style={{
											background: COLORS.accent,
											color: "#fff",
											border: "none",
											fontWeight: "bold"
										}}>
											<Link href="/projects">Learn More</Link>
										</Button>
									</motion.div>
								</div>
							</div>
						</div>
						{/* CONTACT */}
						<div className="section" style={{ background: COLORS.bg }}>
							<div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
								<div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
									<motion.div
										className="rounded-xl shadow-2xl overflow-hidden"
										style={{
											background: COLORS.card,
											height: "400px",
											width: "80vw",
											maxWidth: "500px",
											border: `4px solid ${COLORS.accent}`,
										}}
										initial={{ x: 300, opacity: 0, z: -100 }}
										whileInView={{ x: 0, opacity: 1, z: 0 }}
										transition={{
											delay: 0.5,
											type: "spring",
											stiffness: 100,
											damping: 20,
										}}
									>
										<Image
											src={Setup}
											layout="fill"
											className="object-cover"
											alt="Raofun"
											placeholder="blur"
										/>
									</motion.div>
								</div>
								<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start text-start px-10 overflow-hidden">
									<motion.h1
										className="text-5xl md:text-7xl font-extrabold mb-3"
										style={{ color: COLORS.text }}
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.1, type: "spring" }}
									>
										Get In Touch
									</motion.h1>
									<Hr />
									<motion.p
										className="text-xl mt-4 tracking-wide"
										style={{ color: COLORS.secondary, maxWidth: 600 }}
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.2, type: "spring" }}
									>
										Feel free to contact me if you have any questions or just want to say hi.
									</motion.p>
									<motion.p
										className="text-xl mt-4 tracking-wide mb-5"
										style={{ color: COLORS.bal, fontWeight: "bold" }}
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.3, type: "spring" }}
									>
										<a href="mailto:raofun.azad15@gmail.com?subject=Hello&body=Hello Raofun,">
											raofun.azad15@gmail.com <br />
											01936312510
										</a>
									</motion.p>
									{/* icons */}
									<div className="flex justify-center items-center space-x-4 mt-2">
										<motion.a
											href="mailto:raofun.azad15@gmail.com?subject=Hello&body=Hello Raofun,"
											className="flex justify-center items-center w-14 h-14 rounded-full"
											style={{
												background: COLORS.accent,
												color: "#fff",
												boxShadow: "0 2px 8px rgba(210, 247, 151, 0.53)",
												fontSize: "1.7rem",
												transition: "background 0.2s",
											}}
											initial={{ y: 40, opacity: 0 }}
											whileInView={{ y: 0, opacity: 1 }}
											transition={{
												y: { delay: 0.1 },
												opacity: { delay: 0.2 },
											}}
										>
											<FontAwesomeIcon icon={faEnvelope} />
										</motion.a>
										<motion.a
											href="https://github.com/raofun"
											target="_blank"
											rel="noopener noreferrer"
											className="flex justify-center items-center w-14 h-14 rounded-full"
											style={{
												background: COLORS.primary,
												color: "#fff",
												fontSize: "1.7rem",
												transition: "background 0.2s",
											}}
											initial={{ opacity: 0, y: 40 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{
												y: { delay: 0.2 },
												opacity: { delay: 0.3 },
											}}
										>
											<FontAwesomeIcon icon={faGithub} />
										</motion.a>
										<motion.a
											href="https://www.facebook.com/piel.bhuyian"
											target="_blank"
											rel="noopener noreferrer"
											className="flex justify-center items-center w-14 h-14 rounded-full"
											style={{
												background: "#3077e1",
												color: "#fff",
												fontSize: "1.7rem",
												transition: "background 0.2s",
											}}
											initial={{ opacity: 0, y: 40 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{
												y: { delay: 0.3 },
												opacity: { delay: 0.4 },
											}}
										>
											<FontAwesomeIcon icon={faFacebook} />
										</motion.a>
										<motion.a
											href="https://www.linkedin.com/in/raofun-azad15"
											target="_blank"
											rel="noopener noreferrer"
											className="flex justify-center items-center w-14 h-14 rounded-full"
											style={{
												background: "#0a66c2",
												color: "#fff",
												fontSize: "1.7rem",
												transition: "background 0.2s",
											}}
											initial={{ opacity: 0, y: 40 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{
												y: { delay: 0.4 },
												opacity: { delay: 0.5 },
											}}
										>
											<FontAwesomeIcon icon={faLinkedin} />
										</motion.a>
										<motion.a
											href="https://discord.com/users/828995672081694730"
											target="_blank"
											rel="noopener noreferrer"
											className="flex justify-center items-center w-14 h-14 rounded-full"
											style={{
												background: "#5865F2",
												color: "#fff",
												fontSize: "1.7rem",
												transition: "background 0.2s",
											}}
											initial={{ opacity: 0, y: 40 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{
												y: { delay: 0.5 },
												opacity: { delay: 0.6 },
											}}
										>
											<FontAwesomeIcon icon={faDiscord} />
										</motion.a>
									</div>
								</div>
							</div>
						</div>
					</ReactFullpage.Wrapper>
				)}
				{...fullpageOptions}
			/>
		</div>
	);
};

export default MyPage;