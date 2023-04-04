import React, {useState} from 'react';
import {useSession} from 'next-auth/react';
import axios from 'axios';

import AppTitle from '../components/AppTitle';
import Description from '../components/Description';
import ThemeSwitch from '../components/ThemeSwitch';
import LoginButton from '../components/LoginButton';
import ChatArea from '../components/ChatArea';
import ChatInput from '../components/ChatInput';
import Footer from '../components/Footer';
import Header from './header';

const Home = () => {
  const {data: session, status} = useSession();
  const [messages, setMessages] = useState([]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  const handleLoginSuccess = async (response) => {
    try {
      // To replace with backend API URL
      const apiUrl = 'https://your-backend-endpoint/api/save-user';
      const userData = {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name,
        image: session.user.image,
        accessToken: session.accessToken,
      };

      await axios.post(apiUrl, userData);
    } catch (error) {
      console.error('Error saving user data to backend:', error);
    }
  };

  const handleSendMessage = (message) => {
    setMessages([...messages, { sender: 'user', content: message }]);
    // TO-DO: Send message to the server, and update messages with the server's response
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <AppTitle />
      {session ? (
        <>
          <ThemeSwitch />
          <ChatArea messages={messages} />
          <ChatInput onSendMessage={handleSendMessage} />
        </>
      ) : (
        <>
          <LoginButton onLoginSuccess={handleLoginSuccess} />
          <Description />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Home;
