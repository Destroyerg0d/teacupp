"use client";

import React, { useState, useEffect } from 'react';
import styles from './dashboard.module.css'; // Dashboard CSS module

const Dashboard = () => {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user chat data from API when the component mounts
  useEffect(() => {
    const fetchChats = async () => {
      try {
        // Simulating an API call
        const response = await fetch('/api/chats');
        if (!response.ok) {
          throw new Error('Failed to fetch chats');
        }
        const data = await response.json();
        setChats(data); // Update the state with fetched chat data
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
  }, []);

  if (loading) {
    return <div className={styles.loader}>Loading chats...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      {/* Left Side - Chat List */}
      <div className={styles.chatList}>
        <div className={styles.chatListHeader}>
          <h2>Chats</h2>
          <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>

        {/* Chat Items */}
        <ul className={styles.chatItems}>
          {chats.map((chat, index) => (
            <li key={index} className={`${styles.chatItem} ${selectedChat === chat.name ? styles.activeChat : ''}`} onClick={() => setSelectedChat(chat)} >
              <div className={styles.chatInfo}>
                <h3>{chat.name}</h3>
                <p>{chat.lastMessage}</p>
              </div>
              <span className={styles.chatTime}>{chat.time}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Chat Window */}
      <div className={styles.chatWindow}>
        {selectedChat ? (
          <div className={styles.chatDetail}>
            <h2>{selectedChat.name}</h2>
            <p>{selectedChat.lastMessage}</p>
          </div>
        ) : (
          <div className={styles.welcomeMessage}>
            <h2>Welcome to Teacup Dashboard</h2>
            <p>Select a chat to start messaging.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
