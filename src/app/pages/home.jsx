"use client"

import { useState, useEffect, memo } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const MainTitle = memo(() => (
    <div className="space-y-2 p-7" data-aos="fade-up" data-aos-delay="600">
      <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
        <span className="relative inline-block">
          <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
          <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
            Social
          </span>
        </span>
        <br />
        <span className="relative inline-block mt-2">
          <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
          <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
            Worker
          </span>
        </span>
      </h1>
    </div>
  ));
const TechStack = memo(({ tech }) => (
  <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-accent/5 backdrop-blur-sm border border-border text-xs sm:text-sm text-muted-foreground hover:bg-accent/10 transition-colors">
    {tech}
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[140px] sm:w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-10 sm:h-11 bg-background backdrop-blur-xl rounded-lg border border-border leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-primary/20 to-primary/50"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-xs sm:text-sm group-hover:gap-3 transition-all duration-300">
          <span className="text-foreground font-medium z-10">
            {text}
          </span>
          <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground ${text === 'Contact' ? 'group-hover:translate-x-1' : 'group-hover:rotate-45'} transform transition-all duration-300 z-10`} />
        </span>
      </div>
    </button>
  </a>
));

const SocialLink = memo(({ icon: Icon, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="group relative p-3">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
        <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
          <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </div>
      </button>
    </a>
  ));
  
const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ["hi i'am Matius Willams a social worker"];

const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/EkiZR" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/ekizr/" },
  { icon: Instagram, link: "https://www.instagram.com/ekizr_/?hl=id" }
];

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 50,
        duration: 750,
      });
    };

    initAOS();
    window.addEventListener('resize', initAOS);
    return () => window.removeEventListener('resize', initAOS);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isTyping) {
        if (charIndex < WORDS[wordIndex].length) {
          setText(prev => prev + WORDS[wordIndex][charIndex]);
          setCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsTyping(false), PAUSE_DURATION);
        }
      } else {
        if (charIndex > 0) {
          setText(prev => prev.slice(0, -1));
          setCharIndex(prev => prev - 1);
        } else {
          setWordIndex(prev => (prev + 1) % WORDS.length);
          setIsTyping(true);
        }
      }
    }, isTyping ? TYPING_SPEED : ERASING_SPEED);

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, wordIndex]);

  return (
    <div className="min-h-screen bg-background overflow-hidden transition-colors duration-300" id="Home">
      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-8 sm:gap-12 lg:gap-16 py-8 sm:py-12">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left"
              data-aos="fade-right"
              data-aos-delay="200">
              <div className="space-y-4 sm:space-y-6">
                <MainTitle />

                {/* Typing Effect */}
                <div className="h-8 flex items-center justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="800">
                  <span className="text-lg sm:text-xl md:text-2xl text-foreground font-light">
                    {text}
                  </span>
                  <span className="w-[2px] sm:w-[3px] h-5 sm:h-6 bg-primary ml-1 animate-blink"></span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-white md:text-lg text-muted-foreground max-w-xl leading-relaxed font-light mx-auto lg:mx-0"
                  data-aos="fade-up"
                  data-aos-delay="1000">
                  Creating innovative, functional, and user-friendly applications for digital solutions.
                </p>

                {/* Social Links */}
                <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="1600">
                  {SOCIAL_LINKS.map((social, index) => (
                    <SocialLink key={index} {...social} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="w-full lg:w-1/2 relative aspect-square max-w-[500px] lg:max-w-none lg:aspect-auto lg:h-[600px] xl:h-[700px]"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <div className="relative w-full h-full">
                <div className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl sm:rounded-3xl blur-2xl transition-all duration-700 ${
                  isHovering ? "opacity-50 scale-105" : "opacity-20 scale-100"
                }`} />

                <div className={`relative w-full h-full transform transition-all duration-500 ${
                  isHovering ? "scale-[1.02]" : "scale-100"
                }`}>
                  <div className="w-full h-full overflow-hidden rounded-xl sm:rounded-2xl">
                    <img
                      src="/mg3.jpg"
                      alt="Profile"
                      className={`object-cover object-center transition-all duration-500 ${
                        isHovering ? "scale-110" : "scale-100"
                      }`}
                    />
                  </div>
                </div>

                <div className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
                  isHovering ? "opacity-50" : "opacity-20"
                }`}>
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]
                    bg-gradient-to-br from-primary/10 to-primary/5 
                    blur-2xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] 
                    transition-all duration-700 ${
                    isHovering ? "scale-110" : "scale-100"
                  }`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);