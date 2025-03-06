import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate profile picture based on mouse position
  useEffect(() => {
    controls.start({
      x: mousePosition.x * 20,
      y: mousePosition.y * 20,
      transition: { type: "spring", stiffness: 100, damping: 30 },
    });
  }, [mousePosition, controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center text-center px-4 py-16 md:py-24"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative mb-6 animate-float"
        whileHover={{ scale: 1.05 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={controls}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl"
          whileHover={{
            boxShadow:
              "0 0 25px rgba(255, 255, 255, 0.3), 0 0 10px rgba(255, 255, 255, 0.2)",
          }}
        >
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=danish"
            alt="Syed Danish Ishaque"
            className="w-full h-full object-cover bg-gray-200"
          />
        </motion.div>
        <motion.div
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-600/30 opacity-0 backdrop-blur-sm"
          animate={{
            opacity: isHovered ? 0.8 : 0,
            scale: isHovered ? 1.15 : 1,
            rotate: isHovered ? 15 : 0,
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      <motion.div
        className="relative mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold hover-lift relative z-10 theme-transition"
          style={{
            textShadow: "0 2px 10px rgba(0,0,0,0.2)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            backgroundImage:
              "var(--name-gradient, linear-gradient(to right, #ffffff, #d1d5db))",
          }}
          whileHover={{
            scale: 1.03,
            textShadow:
              "var(--name-shadow, 0 0 15px rgba(255,255,255,0.5), 0 0 10px rgba(255,255,255,0.3))",
          }}
        >
          Syed Danish Ishaque
        </motion.h1>
        <motion.span
          className="absolute -inset-2 rounded-lg opacity-0 z-0"
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 0.15,
            backdropFilter: "blur(4px)",
          }}
          style={{
            background: "linear-gradient(45deg, #ff00cc, #3333ff, #00ccff)",
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-lg md:text-xl mb-8 theme-transition"
        style={{ color: "var(--text-secondary, #d1d5db)" }}
      >
        B.Tech CSE Final Year Student
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex space-x-4 mb-10"
      >
        {[
          {
            icon: <Github className="w-5 h-5" />,
            href: "https://github.com/vipdanish",
            color: "#6366f1",
          },
          {
            icon: <Linkedin className="w-5 h-5" />,
            href: "https://www.linkedin.com/in/techdanish/",
            color: "#3b82f6",
          },
          {
            icon: <Mail className="w-5 h-5" />,
            href: "mailto:techdanish001@gmail.com",
            color: "#8b5cf6",
          },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-3 rounded-full transition-all duration-300 group hover-lift"
            style={{
              background: "var(--section-bg, rgba(17, 24, 39, 0.5))",
              borderColor: "var(--section-border, rgba(31, 41, 55, 1))",
            }}
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.8 + index * 0.2, type: "spring" },
            }}
          >
            {social.icon}
            <motion.span
              className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{
                background: `radial-gradient(circle, ${social.color}80 0%, transparent 70%)`,
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0, 0.7, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <Button
          size="lg"
          className="relative overflow-hidden group bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-600 hover:to-blue-600 transition-all duration-500"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/15ZL1gQhz3NjHDGH4ASbB5oNX51w9NqC6/view?usp=sharing",
              "_blank",
            )
          }
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          />
          <motion.span
            className="flex items-center justify-center relative z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
          >
            <FileText className="mr-2 h-5 w-5" />
            Download Resume
          </motion.span>

          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%)",
              mixBlendMode: "overlay",
            }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.4 }}
          />

          <motion.div
            className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300"
            style={{
              background: "linear-gradient(45deg, #7928ca, #ff0080, #ffba00)",
              filter: "blur(8px)",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
