import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar';

const Signin = () => {
  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataToSend = {
      email: input.email,
      password: input.password
    };

    try {
      const response = await fetch('http://localhost:8080/Signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        alert("Successfully signed in!");
        navigate('/Dashboard');
      } else {
        alert("Sign in failed: " + result.message);
      }
    } catch (error) {
      console.error("Error during sign in:", error);
      alert("Error during sign in. Please try again.");
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #4a90e2, #5a67d8)',
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
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#4a90e2',
      marginBottom: '20px',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      fontSize: '1rem',
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
      borderColor: '#4a90e2',
    },
    button: {
      padding: '12px 20px',
      fontSize: '1rem',
      backgroundColor: '#4a90e2',
      border: 'none',
      color: '#fff',
      borderRadius: '25px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#5a67d8',
      transform: 'scale(1.05)',
    },
    signupLink: {
      marginTop: '15px',
      display: 'block',
      fontSize: '0.9rem',
      color: '#4a90e2',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    signupLinkHover: {
      color: '#5a67d8',
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
          <h2 style={styles.title}>Sign In</h2>
          <form onSubmit={handleSubmit}>
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
            <button
              type="submit"
              style={hover ? { ...styles.button, ...styles.buttonHover } : styles.button}
            >
              Sign In
            </button>
          </form>
          {/* Sign Up Link */}
          <Link
            to="/signup"
            style={styles.signupLink}
            onMouseEnter={(e) => (e.target.style.color = styles.signupLinkHover.color)}
            onMouseLeave={(e) => (e.target.style.color = styles.signupLink.color)}
          >
            Don't have an account? Sign Up here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
