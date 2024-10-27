import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'; // Import Link for routing

const SignUp = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [hover, setHover] = useState(false);

  const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (input.password !== input.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const dataToSend = {
      name: input.name,
      email: input.email,
      phone: input.phone,
      password: input.password
    };

    try {
      const response = await fetch('http://localhost:8080/SignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        alert("Successfully registered!");
      } else {
        alert("Registration failed: " + result.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Error during signup. Please try again.");
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
      color: '#333',
      padding: '20px',
    },
    formWrapper: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '12px',
      padding: '40px',
      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
      maxWidth: '400px',
      width: '100%',
      textAlign: 'center',
      transform: hover ? 'scale(1.02)' : 'scale(1)',
      transition: 'transform 0.3s ease-in-out',
    },
    title: {
      fontSize: '2.2rem',
      fontWeight: 'bold',
      color: '#2575fc',
      marginBottom: '20px',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      fontSize: '1.1rem',
      color: '#333',
      marginBottom: '8px',
      display: 'block',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '1rem',
      outline: 'none',
      transition: 'border-color 0.3s ease',
    },
    inputFocus: {
      borderColor: '#6a11cb',
    },
    button: {
      padding: '12px 20px',
      fontSize: '1rem',
      backgroundColor: '#2575fc',
      border: 'none',
      color: '#fff',
      borderRadius: '25px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#6a11cb',
      transform: 'scale(1.05)',
    },
    loginLink: {
      marginTop: '15px',
      display: 'block',
      fontSize: '0.9rem',
      color: '#2575fc',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    loginLinkHover: {
      color: '#6a11cb',
    }
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <div
          style={styles.formWrapper}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <h2 style={styles.title}>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Name</label>
              <input
                type="text"
                name="name"
                style={styles.input}
                value={input.name}
                onChange={inputHandler}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                style={styles.input}
                value={input.email}
                onChange={inputHandler}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Phone</label>
              <input
                type="text"
                name="phone"
                style={styles.input}
                value={input.phone}
                onChange={inputHandler}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                name="password"
                style={styles.input}
                value={input.password}
                onChange={inputHandler}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                style={styles.input}
                value={input.confirmPassword}
                onChange={inputHandler}
                required
              />
            </div>
            <button
              type="submit"
              style={hover ? { ...styles.button, ...styles.buttonHover } : styles.button}
            >
              Register
            </button>
          </form>
          {/* Login Link */}
          <Link
            to="/Signin"
            style={styles.loginLink}
            onMouseEnter={(e) => (e.target.style.color = styles.loginLinkHover.color)}
            onMouseLeave={(e) => (e.target.style.color = styles.loginLink.color)}
          >
            Already have an account? Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
