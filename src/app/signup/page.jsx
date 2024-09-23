"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './signup.module.css'; // Signup CSS module

const SignUpPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState({ day: '', month: '', year: '' });
  const [gender, setGender] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Perform sign-up logic (e.g., API call to sign up the user)
    console.log('Signing up:', { firstName, lastName, email, password, dob, gender });
  };

  return (
    <div className={styles['signup-container']}>
      <div className={styles['signup-box']}>
        <Image src="/tea_cup.png" alt="Teacup Logo" width={60} height={60} />
        <h2 className={styles.heading}>Sign Up</h2>
        <p className={styles['signup-subtitle']}>It's quick and easy</p>

        {/* Error message */}
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        <form onSubmit={handleSignUp}>
          {/* First Name and Last Name */}
          <div className={styles['input-container-row']}>
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className={styles['input-half']}
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className={styles['input-half']}
            />
          </div>

          {/* Email */}
          <div className={styles['input-container']}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password and Confirm Password */}
          <div className={styles['input-container']}>
            <input
              type="password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles['input-container']}>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Date of Birth */}
          <div className={styles['input-container']}>
            <label className={styles['label']}>Birthday</label>
            <div className={styles['dob-container']}>
              <select
                className={styles['input-dob']}
                onChange={(e) => setDob({ ...dob, day: e.target.value })}
                required
              >
                <option value="">Day</option>
                {[...Array(31)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                className={styles['input-dob']}
                onChange={(e) => setDob({ ...dob, month: e.target.value })}
                required
              >
                <option value="">Month</option>
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(
                  (month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  )
                )}
              </select>
              <select
                className={styles['input-dob']}
                onChange={(e) => setDob({ ...dob, year: e.target.value })}
                required
              >
                <option value="">Year</option>
                {[...Array(100)].map((_, i) => (
                  <option key={1920 + i} value={1920 + i}>
                    {1920 + i}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Gender */}
          <div className={styles['input-container']}>
            <label className={styles['label']}>Gender</label>
            <div className={styles['gender-container']}>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={(e) => setGender(e.target.value)}
                  required
                />{' '}
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={(e) => setGender(e.target.value)}
                  required
                />{' '}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  onChange={(e) => setGender(e.target.value)}
                  required
                />{' '}
                Custom
              </label>
            </div>
          </div>

          <button type="submit" className={styles['signup-btn']}>Sign Up</button>
        </form>

        <div className={styles['action-buttons']}>
          <a href="/login" className={styles['link-btn']}>Already have an account? Login</a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
