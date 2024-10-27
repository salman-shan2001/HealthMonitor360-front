import React from 'react';
import Navbar from './Navbar';
import healthImage from './images/health3.jpg'; // Replace with the path to your health-related image

const Home = () => {
  const styles = {
    container: {
      background: 'linear-gradient(to right, #76c7c0, #a9dfbf)',
      minHeight: '100vh',
      color: '#333',
      textAlign: 'center',
      padding: '20px',
    },
    title: {
      fontSize: '2.8rem',
      fontWeight: 'bold',
      color: '#006064',
      marginTop: '30px',
    },
    subtitle: {
      fontSize: '1.3rem',
      color: '#555',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1.1rem',
      backgroundColor: '#009688',
      border: 'none',
      color: '#fff',
      borderRadius: '20px',
      transition: 'transform 0.3s ease, background-color 0.3s ease',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#00796b',
      transform: 'scale(1.05)',
    },
    section: {
      backgroundColor: '#ffffffaa',
      borderRadius: '12px',
      padding: '20px',
      margin: '10px 0',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'box-shadow 0.3s ease',
    },
    sectionHover: {
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)',
    },
    sectionTitle: {
      color: '#00796b',
      fontWeight: 600,
      fontSize: '1.8rem',
      marginBottom: '15px',
    },
    listItem: {
      fontSize: '1.1rem',
      margin: '10px 0',
      color: '#333',
    },
    image: {
      width: '80%',
      height: 'auto',
      maxWidth: '500px',
      borderRadius: '20px',
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.15)',
      transition: 'transform 0.3s ease',
    },
    imageHover: {
      transform: 'scale(1.02)',
    },
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <div className="container text-center mt-5">
        <h1 style={styles.title}>Welcome to HealthMonitor Dashboard</h1>
        <p style={styles.subtitle}>Track your health metrics and receive real-time alerts for critical conditions.</p>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Learn More
        </button>

        {/* Health Tips and Features Section */}
        <div className="row mt-4">
          <div className="col-md-6" style={styles.section}>
            <h2 style={styles.sectionTitle}>Health Tips</h2>
            <ul className="list-unstyled">
              <li style={styles.listItem}>🏃‍♂️ Stay active: Aim for at least 30 minutes of physical activity each day.</li>
              <li style={styles.listItem}>🥗 Eat balanced meals: Include fruits, vegetables, and whole grains in your diet.</li>
              <li style={styles.listItem}>💧 Stay hydrated: Drink plenty of water throughout the day.</li>
              <li style={styles.listItem}>😴 Prioritize sleep: Aim for 7-9 hours of quality sleep each night.</li>
              <li style={styles.listItem}>🧘‍♀️ Manage stress: Practice mindfulness, meditation, or yoga.</li>
            </ul>
          </div>

          <div className="col-md-6" style={styles.section}>
            <h2 style={styles.sectionTitle}>Features of HealthMonitor</h2>
            <ul className="list-unstyled">
              <li style={styles.listItem}>📊 Real-time health tracking</li>
              <li style={styles.listItem}>🔔 Instant alerts for critical conditions</li>
              <li style={styles.listItem}>📈 Comprehensive health reports</li>
              <li style={styles.listItem}>🌐 User-friendly interface</li>
              <li style={styles.listItem}>💬 Connect with healthcare professionals</li>
            </ul>
          </div>
        </div>

        {/* Health Image Section */}
        <div className="mt-5">
          <img
            src={healthImage}
            alt="Health Monitoring"
            style={styles.image}
            onMouseEnter={(e) => (e.target.style.transform = styles.imageHover.transform)}
            onMouseLeave={(e) => (e.target.style.transform = '')}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
