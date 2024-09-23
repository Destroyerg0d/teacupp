"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './login.module.css'; // Import CSS

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // To show error messages
  const [successMessage, setSuccessMessage] = useState(''); // To show success messages
  

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (response.ok) {
      // Redirect to dashboard on successful login
      window.location.href = '/dashboard';
    } else {
      const data = await response.json();
      setErrorMessage(data.message || 'Login failed. Please try again.');
    }
  };
  
  
  return (
    <div className={styles['login-container']}>
      <div className={styles['login-box']}>
        <Image src="/tea_cup.png" alt="Teacup Logo" width={100} height={100} />
        <h2 className={styles.heading}>Welcome to Teacup</h2>
        <p className={styles['login-subtitle']}>Talk to your bandhu</p>

        <form onSubmit={handleLogin}>
          <div className={styles['input-container']}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles['input-container']}>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles['login-btn']}>Login</button>
        </form>

        <div className={styles['action-buttons']}>
          <button className={styles['link-btn']}>Forgot Password?</button>
          <a href="/signup" className={styles['link-btn']}>Sign Up</a>
        </div>
      </div>
    </div>
  );
};


export default LoginPage;

