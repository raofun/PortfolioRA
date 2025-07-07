import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
// import Chat from "@/components/Chat"; // Removed unused import
import ClientTopProgressBar from "@/components/ClientTopProgressBar";
import PropTypes from "prop-types";

export const metadata = {
	title: "Raofun | Portfolio",

	description:
		"My name is Raofun Azad, I'm a software engineering student and I'm passionate about it. I'm currently studying at Daffodil International University.",

	author: "Raofun Azad",
	siteUrl: "https://www.raofun.vercel.app",
	applicationName: "Raofun",

	keywords: [
		"raofun",
		"raofun azad",
		"raofun portfolio",
		"raofun software engineer",
		"raofun developer",
		"raofun diu",
		"raofun daffodil",
		"raofun student",
		"raofun programming",
		"raofun web developer",
	],

	icons: {
		icon: "/favicon-code.svg",
		shortcut: "/favicon-code.svg",
		apple: "/favicon-code.svg",
	},

	openGraph: {
		type: "website",
		url: "https://www.raofun.vercel.app",
		title: "Raofun | Portfolio",
		site_name: "Raofun | Portfolio",
		description: "My name is Raofun Azad, This is my portfolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Raofun Portfolio",
			},
		],
	}
};

export default function RootLayout({ children }) {
	return (
        <>
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}

				<Analytics />
			</body>
		</html>
        </>
	);
}

RootLayout.propTypes = {
	children: PropTypes.node.isRequired,
};
