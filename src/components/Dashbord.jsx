// Dashboard.js

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  const [heartRate, setHeartRate] = useState(72);
  const [ecgData, setEcgData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeartRate = Math.floor(Math.random() * 40) + 60;
      setHeartRate(newHeartRate);

      setEcgData((prevData) => {
        const newData = [...prevData];
        newData.push(Math.sin(prevData.length * 0.5) * (Math.random() * 10 + 60));
        if (newData.length > 30) newData.shift();
        return newData;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const ecgChartData = {
    labels: ecgData.map((_, index) => index),
    datasets: [
      {
        label: 'ECG',
        data: ecgData,
        borderColor: 'rgba(50, 205, 50, 1)', // Vibrant green
        borderWidth: 3,
        fill: false,
        tension: 0.3,
      },
    ],
  };

  const ecgChartOptions = {
    responsive: true,
    scales: {
      x: { display: false },
      y: { suggestedMin: 50, suggestedMax: 100 },
    },
  };

  return (
    <div className="dashboard-container" style={styles.container}>
      <h2 style={styles.heading}>Patient Heart Rate Dashboard</h2>

      <div className="heart-rate-display" style={styles.heartRateDisplay}>
        <h3 style={styles.subHeading}>Current Heart Rate</h3>
        <div style={styles.heartRateValue}>
          {heartRate} <span style={styles.bpmLabel}>bpm</span>
        </div>
      </div>

      <div className="ecg-graph" style={styles.ecgGraph}>
        <h3 style={styles.subHeading}>ECG (Simulated)</h3>
        <Line data={ecgChartData} options={ecgChartOptions} />
      </div>
    </div>
  );
};

// Enhanced CSS styling
const styles = {
  container: {
    padding: '30px',
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: '#eef2f7',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    animation: 'fadeIn 1s ease-in-out',
  },
  heading: {
    fontSize: '2.8rem',
    color: '#3498db',
    marginBottom: '20px',
    fontWeight: 'bold',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
    animation: 'slideDown 1s ease-in-out',
  },
  subHeading: {
    fontSize: '1.8rem',
    color: '#34495e',
    fontWeight: '600',
  },
  heartRateDisplay: {
    background: 'linear-gradient(135deg, #ff6b6b, #ff9a9e)',
    borderRadius: '20px',
    padding: '30px',
    textAlign: 'center',
    marginBottom: '25px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  heartRateValue: {
    fontSize: '4.5rem',
    color: '#2d3436',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(255, 255, 255, 0.4)',
  },
  bpmLabel: {
    fontSize: '1.6rem',
    color: '#636e72',
    fontWeight: '500',
  },
  ecgGraph: {
    background: 'linear-gradient(135deg, #c9e8ff, #92d6ff)',
    borderRadius: '20px',
    padding: '20px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
    width: '100%',
    maxWidth: '700px',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  '@keyframes slideDown': {
    from: { transform: 'translateY(-20px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
  },
};

// Hover effects
styles.heartRateDisplay[':hover'] = {
  transform: 'scale(1.05)',
  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.25)',
};

styles.ecgGraph[':hover'] = {
  transform: 'scale(1.05)',
  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.25)',
};

export default Dashboard;
