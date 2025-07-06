"use client";
import PropTypes from "prop-types";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
	return (
		<>
			<Sidebar />
			{children}
		</>
	);
}

RootLayout.propTypes = {
	children: PropTypes.node.isRequired,
};
