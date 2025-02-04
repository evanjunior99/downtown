"use client";
import React, { useState, useEffect } from "react";
import WelcomeScreen from "./pages/welcomeScreen";
import Home from "./pages/home";
import Navbar from "./components/navbar/page";
import AboutPage from "./components/about/page";
import Contact from "./pages/contact";
import Footer from "./components/footer/page"; // Import Footer
import { ThemeProvider } from "./components/themeProvider";

const App = () => {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeScreen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {showWelcomeScreen ? (
        <WelcomeScreen />
      ) : (
        <>
          <Navbar />
          <Home />
          <AboutPage />
          <Contact />
          <Footer /> {/* Now using the Footer component */}
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
