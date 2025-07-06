import Footer from "@/components/Footer";
import PropTypes from "prop-types";

export const metadata = {
  title: "Raofun | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
