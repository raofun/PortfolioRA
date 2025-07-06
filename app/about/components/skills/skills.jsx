"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ActivityIcon, CodepenIcon, WebhookIcon,  MobileIcon, ExtraSkillIcon } from "./icons"
import PropTypes from "prop-types";

const skillCategories = {
	lang: {
		title: "Familiar Languages",
		icon: CodepenIcon,
		description: "Knowledge About programming languages.",
		languages: [
			
			"C",
			"C++",
			"Java",
			"Dart",
			"MySQL",
			
		],
		tools: ["Visual Studio Code", "Git", "Github"],
	},

    
	cyber: {
		title: "Cyber Security",
		icon: WebhookIcon,
		description: "Creating robust and scalable backend services",
		languages: [
			"Linux",
		],
		tools: ["Linux","Cmd", "Git", "Github"],
	},
    
	ai: {
		title: "AI Integration",
		icon: ActivityIcon,
		description: "Developing intelligent solutions with AI",
		languages: [
			"C",
            "C++",
            "Java",
			
			
		],
		tools: [
			"OpenAI ChatGPT",
			"Google Gemini",
			"Grok",
			"DeepSeek",
			"Copilot",
		],
	},
	mobile: {
		title: "Mobile Development",
		icon: MobileIcon,
		description: "Basic Cross-platform mobile app development",
		languages: [
			"Dart",
			"Flutter",
		],
		tools: [
			"Android Studio",
			
		],
	},

    extra: {
        title: "Extra Skills",
        icon: ExtraSkillIcon,
        description: "Additional skills and tools I work with",
        languages: [
            "Virtual Assistant",
            "Data Entry",
            "Lead Generation",
            "Dropshipping",
            "Data Scraping",
            "Database Management",
            "Social Media Management",


            
        ],
        tools: [
            "Canva",
            "Microsoft Office",
            "Site Scrapper",
            "Data Formatter",
            "Google Workspace",
            
        ],
    },
};

function SkillCard({ skill, isSelected, onMouseEnter }) {
	const Icon = skill.icon;

	return (
		<motion.div
			onMouseEnter={onMouseEnter}
			className={`relative cursor-pointer group p-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 ${
				isSelected
					? "bg-black border-gray-700 border-2 shadow-lg"
					: "bg-gray-100 border-gray-300 hover:bg-gray-200 hover:border-gray-400"
			}`}
			whileHover={{
				scale: 1.05,
				rotateY: 5,
			}}
			whileTap={{ scale: 0.95 }}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				type: "spring",
				stiffness: 300,
				damping: 20,
			}}>
			{/* Glow effect - removed for selected state */}
			{!isSelected && (
				<div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-50 bg-gray-300 blur-xl" />
			)}

			<div className="relative z-10 flex flex-col items-center text-center space-y-4">
				<div
					className={`p-4 rounded-xl transition-all duration-300 ${
						isSelected ? "bg-gray-800" : "bg-gray-200 group-hover:bg-gray-300"
					}`}>
					<Icon className={`w-8 h-8 ${isSelected ? "text-white" : "text-black"}`} />
				</div>
				<div>
					<h3 className={`font-semibold text-lg mb-2 ${isSelected ? "text-white" : "text-black"}`}>
						{skill.title}
					</h3>
					<p className={`text-sm leading-relaxed ${isSelected ? "text-gray-300" : "text-gray-600"}`}>
						{skill.description}
					</p>
				</div>
			</div>
		</motion.div>
	);
}

SkillCard.propTypes = {
	skill: PropTypes.shape({
		icon: PropTypes.node,
		title: PropTypes.string,
		description: PropTypes.string,
	}),
	isSelected: PropTypes.bool.isRequired,
	onMouseEnter: PropTypes.func.isRequired,
};

function SkillDetails({ selectedSkill }) {
	if (!selectedSkill) return null;

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.5 }}
			className="mt-12 space-y-8">
			{/* Languages & Frameworks */}
			<motion.div
				className="backdrop-blur-lg bg-black border border-gray-700 rounded-2xl p-8"
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.2 }}>
				<h3 className="text-2xl font-semibold text-white mb-6 text-center">
					Languages & Expertise
				</h3>
				<div className="flex flex-wrap justify-center gap-3">
					{selectedSkill.languages.map((lang, index) => (
						<motion.span
							key={lang}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.3 + index * 0.1 }}
							className="px-4 py-2 bg-gray-800 
									 border border-gray-600 rounded-full text-white font-medium
									 backdrop-blur-sm hover:scale-105 transition-transform cursor-default
									 hover:bg-gray-700">
							{lang}
						</motion.span>
					))}
				</div>
			</motion.div>

			{/* Tools */}
			<motion.div
				className="backdrop-blur-lg bg-black border border-gray-700 rounded-2xl p-8"
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.4 }}>
				<h3 className="text-2xl font-semibold text-white mb-6 text-center">
					Tools & Technologies
				</h3>
				<div className="flex flex-wrap justify-center gap-3">
					{selectedSkill.tools.map((tool, index) => (
						<motion.span
							key={tool}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.5 + index * 0.1 }}
							className="px-4 py-2 bg-gray-800 
									 border border-gray-600 rounded-full text-white font-medium
									 backdrop-blur-sm hover:scale-105 transition-transform cursor-default
									 hover:bg-gray-700">
							{tool}
						</motion.span>
					))}
				</div>
			</motion.div>
		</motion.div>
	);
}

SkillDetails.propTypes = {
	selectedSkill: PropTypes.shape({
		languages: PropTypes.arrayOf(PropTypes.string),
		tools: PropTypes.arrayOf(PropTypes.string),
	}),
};

export default function Skills() {
	const [selectedCategory, setSelectedCategory] = useState("web");
	return (
		<div className="relative">
			<div className="mx-auto container px-6 py-20">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center space-y-4 mb-16">
					<h2 className="text-5xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
						Skills & Expertise
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
						Explore my technical skills across different domains. Click on any
						category to see the specific technologies and tools I work with.
					</p>
				</motion.div>

				{/* Skill Categories Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
					{Object.entries(skillCategories).map(([key, skill], index) => (
						<motion.div
							key={key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}>
							<SkillCard
								skill={skill}
								isSelected={selectedCategory === key}
								onMouseEnter={() => setSelectedCategory(key)}
							/>
						</motion.div>
					))}
				</div>

				{/* Skill Details */}
				<AnimatePresence mode="wait">
					<SkillDetails selectedSkill={skillCategories[selectedCategory]} />
				</AnimatePresence>
			</div>
		</div>
	);
}
