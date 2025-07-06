import Link from "next/link";
import PropTypes from "prop-types";

const FixedButton = ({ children, href = '/' }) => (
	<Link
		href={href}
		className="fixed top-2 -left-2 md:left-10 flex justify-center items-center  rounded-full p-4  transition duration-300 ease-in-out z-50 transparent">
		{children}
	</Link>
);

FixedButton.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.string.isRequired,
};

export default FixedButton;
