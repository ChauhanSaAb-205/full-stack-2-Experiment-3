import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={styles.nav}>
        <h2>TechConf 2026</h2>
        <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/details" style={styles.link}>Event Details</Link>
        </div>
        </nav>
    );
}

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 40px",
        background: "#1e1e2f",
        color: "white"
    },
    link: {
        color: "white",
        marginLeft: "20px",
        textDecoration: "none",
        fontWeight: "bold"
    }
};

export default Navbar;
