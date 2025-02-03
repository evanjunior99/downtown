'use client'
import React, { useState, useEffect } from 'react';
import WelcomeScreen from './pages/welcomeScreen';
import Home from './pages/home';
import Navbar from './components/navbar/page';

import Contact from './pages/contact';

const App = () => {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  useEffect(() => {
    // Hide the WelcomeScreen after 3 seconds
    const timer = setTimeout(() => {
      setShowWelcomeScreen(false);
    }, 3000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showWelcomeScreen ? (
        <WelcomeScreen />
      ) : (
        <>
          <Navbar />
          <Home />
          <Contact />
        </>
      )}
    </>
  );
};

export default App;
