function EventDetails() {
    return (
        <div style={styles.container}>
        <h1>Event Schedule & Speakers</h1>

        <div style={styles.section}>
        <h2>Schedule</h2>
        <ul>
        <li>10:00 AM – AI & Machine Learning</li>
        <li>12:00 PM – Cloud Computing</li>
        <li>2:00 PM – Cybersecurity Trends</li>
        <li>4:00 PM – React & Modern Web Apps</li>
        </ul>
        </div>

        <div style={styles.section}>
        <h2>Speakers</h2>
        <ul>
        <li>Dr. Raj Mehta – AI Researcher</li>
        <li>Anita Sharma – Cloud Architect</li>
        <li>Karan Verma – Security Analyst</li>
        </ul>
        </div>
        </div>
    );
}

const styles = {
    container: {
        minHeight: "90vh",
        padding: "60px 20px",
        textAlign: "center"
    },
    section: {
        background: "rgba(255,255,255,0.1)",
        padding: "20px",
        margin: "20px auto",
        maxWidth: "600px",
        borderRadius: "10px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.2)"
    }
};

export default EventDetails;
