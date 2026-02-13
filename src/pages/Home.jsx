function Home() {
    return (
        <div style={styles.container}>
        <div style={styles.content}>
        <h1>Welcome to Tech Conference 2026</h1>
        <p>
        Join the biggest tech conference featuring AI, Cloud Computing,
        Cybersecurity and Web Development.
        </p>

        <div style={styles.cardContainer}>
        <div style={styles.card}>
        <h3>Date</h3>
        <p>March 20, 2026</p>
        </div>

        <div style={styles.card}>
        <h3>Location</h3>
        <p>Delhi Convention Center</p>
        </div>
        </div>
        </div>
        </div>
    );
}

const styles = {
    container: {
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    content: {
        maxWidth: "700px"
    },
    cardContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px",
        flexWrap: "wrap"
    },
    card: {
        background: "rgba(255,255,255,0.1)",
        padding: "20px",
        borderRadius: "10px",
        backdropFilter: "blur(10px)",
        width: "250px",
        color: "white",
        border: "1px solid rgba(255,255,255,0.2)"
    }
};

export default Home;
