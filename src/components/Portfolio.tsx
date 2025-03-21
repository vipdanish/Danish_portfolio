import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import EducationSection from "./EducationSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import AvailabilitySection from "./AvailabilitySection";
import Background3D from "./Background3D";
import ThemeToggle from "./ThemeToggle";
import ScrollToTop from "./ScrollToTop";

const Portfolio = () => {
  // Heart animation function
  const animateHeart = useCallback(() => {
    const heart = document.querySelector(".heart-animation");
    if (heart) {
      heart.classList.remove("animate-heart");
      setTimeout(() => heart.classList.add("animate-heart"), 10);
    }
  }, []);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Set initial theme
    updateTheme(isDarkTheme);

    // Track scroll position for animations
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const updateTheme = (isDark: boolean) => {
    if (isDark) {
      document.body.style.backgroundColor = "#0a0a0a";
      document.body.style.color = "#fafafa";
      document.documentElement.classList.add("dark-theme");
      document.documentElement.classList.remove("light-theme");
    } else {
      document.body.style.backgroundColor = "#f0f9ff";
      document.body.style.color = "#1e293b";
      document.documentElement.classList.add("light-theme");
      document.documentElement.classList.remove("dark-theme");
    }
  };

  const handleThemeChange = (isDark: boolean) => {
    setIsDarkTheme(isDark);
    updateTheme(isDark);
  };

  // Animation variants for scroll reveal
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-700 ${isDarkTheme ? "dark-mode" : "light-mode"}`}
    >
      <Background3D isDarkTheme={isDarkTheme} />
      <ThemeToggle onThemeChange={handleThemeChange} />
      <ScrollToTop />

      <div className="container mx-auto px-4 py-10 relative z-10">
        <HeroSection />

        <div className="mt-10 space-y-8">
          <motion.div
            initial="hidden"
            animate={scrollY > 100 ? "visible" : "hidden"}
            custom={0}
            variants={sectionVariants}
          >
            <AboutSection />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={scrollY > 300 ? "visible" : "hidden"}
            custom={1}
            variants={sectionVariants}
          >
            <EducationSection />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={scrollY > 600 ? "visible" : "hidden"}
            custom={2}
            variants={sectionVariants}
          >
            <ProjectsSection />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={scrollY > 900 ? "visible" : "hidden"}
            custom={3}
            variants={sectionVariants}
          >
            <ExperienceSection />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={scrollY > 1200 ? "visible" : "hidden"}
            custom={4}
            variants={sectionVariants}
          >
            <AvailabilitySection />
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className={`mt-16 mb-8 text-center text-sm ${isDarkTheme ? "text-gray-400" : "text-gray-600"}`}
        >
          <p>
            © {new Date().getFullYear()} All rights reserved. Made with{" "}
            <motion.span
              className="text-red-500 inline-block cursor-pointer"
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                const heart = document.querySelector(".heart-animation");
                if (heart) {
                  heart.classList.remove("animate-heart");
                  setTimeout(() => heart.classList.add("animate-heart"), 10);
                }
              }}
            >
              ❤️
              <motion.div
                className="heart-animation fixed inset-0 pointer-events-none flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
              >
                <motion.div
                  className="text-9xl text-red-500 transform"
                  variants={{
                    animate: {
                      scale: [1, 5, 1],
                      opacity: [0, 1, 0],
                      rotate: [0, 20, -20, 0],
                    },
                  }}
                >
                  ❤️
                </motion.div>
              </motion.div>
            </motion.span>{" "}
            by{" "}
            <a
              href="https://www.linkedin.com/in/techdanish/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Danish
            </a>
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Portfolio;
