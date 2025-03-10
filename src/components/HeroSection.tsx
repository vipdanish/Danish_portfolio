import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Twitter,
  Instagram,
  Code,
  Sparkles,
  Download,
  CheckCircle2,
  Briefcase,
} from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

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

  // Text animation characters
  const nameChars = "SYED DANISH ISHAQUE".split("");
  const titleChars = "B.Tech CSE Final Year Student".split("");

  return (
    <motion.div
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(8px)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
              rotate: [0, Math.random() * 360, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 10 + 10,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 grid grid-cols-12 gap-4">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="h-full w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100%", opacity: 0.3 }}
              transition={{ duration: 2, delay: i * 0.1 }}
            />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 gap-4">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 0.3 }}
              transition={{ duration: 2, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16 md:py-24 max-w-4xl mx-auto">
        {/* Animated name with character animation */}
        <motion.div
          ref={textRef}
          className="relative mb-2 overflow-hidden"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        >
          <div className="flex justify-center overflow-hidden">
            {nameChars.map((char, index) => (
              <motion.span
                key={index}
                className="text-4xl md:text-6xl lg:text-7xl font-bold relative inline-block font-koho"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.03,
                  ease: [0.33, 1, 0.68, 1],
                }}
                whileHover={{
                  scale: 1.2,
                  color: "#60a5fa",
                  rotate: Math.random() * 10 - 5,
                  transition: { duration: 0.2 },
                }}
                style={{
                  textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  color: char === " " ? "transparent" : undefined,
                }}
              >
                {char === " " ? "\u00A0" : char}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            ))}
          </div>

          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mt-2 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
          />
        </motion.div>

        {/* Animated title with character animation */}
        <motion.div
          className="mb-10"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
        >
          <motion.div
            className="relative py-2 px-4 mb-2 inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-md -z-10"
              animate={{
                background: [
                  "linear-gradient(to right, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1))",
                  "linear-gradient(to right, rgba(124, 58, 237, 0.1), rgba(37, 99, 235, 0.1))",
                  "linear-gradient(to right, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1))",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="flex flex-wrap justify-center">
              {titleChars.map((char, index) => (
                <motion.span
                  key={index}
                  className="text-lg md:text-xl relative inline-block font-koho font-semibold"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.8 + index * 0.02,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    color: "#60a5fa",
                    scale: 1.1,
                    transition: { duration: 0.1 },
                  }}
                  style={{
                    color: "var(--text-secondary, #d1d5db)",
                    textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-md border border-blue-500/20 -z-10"
              animate={{
                borderColor: [
                  "rgba(59, 130, 246, 0.2)",
                  "rgba(139, 92, 246, 0.2)",
                  "rgba(59, 130, 246, 0.2)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Animated social icons with 3D effect */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -20]),
            rotate,
          }}
        >
          {[
            {
              icon: <Github className="w-5 h-5" />,
              href: "https://github.com/vipdanish",
              color: "#6366f1",
              label: "GitHub",
            },
            {
              icon: <Linkedin className="w-5 h-5" />,
              href: "https://www.linkedin.com/in/techdanish/",
              color: "#3b82f6",
              label: "LinkedIn",
            },
            {
              icon: <Briefcase className="w-5 h-5" />,
              href: "https://www.upwork.com/freelancers/~014daf472f0b2ba1af?mp_source=share",
              color: "#6FDA44",
              label: "Upwork",
            },
            {
              icon: <Mail className="w-5 h-5" />,
              href: "mailto:techdanish001@gmail.com",
              color: "#8b5cf6",
              label: "Email",
            },
            {
              icon: <Twitter className="w-5 h-5" />,
              href: "https://twitter.com/tech__danish",
              color: "#1DA1F2",
              label: "Twitter",
            },
            {
              icon: <Instagram className="w-5 h-5" />,
              href: "https://www.instagram.com/vip_danish_",
              color: "#E1306C",
              label: "Instagram",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-3 rounded-full w-12 h-12 transition-all duration-300 group hover-lift flex flex-col items-center justify-center"
              style={{
                background: "var(--section-bg, rgba(17, 24, 39, 0.5))",
                borderColor: "var(--section-border, rgba(31, 41, 55, 1))",
                perspective: "1000px",
                border: `2px solid ${social.color}40`,
              }}
              whileHover={{
                scale: 1.15,
                rotate: 360,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0, rotate: -90 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: { delay: 1 + index * 0.1, type: "spring" },
              }}
            >
              <div className="relative z-10">{social.icon}</div>

              {/* Label tooltip */}
              <motion.div
                className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900/80 px-2 py-1 rounded text-xs whitespace-nowrap"
                initial={{ y: 10, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {social.label}
              </motion.div>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background: `radial-gradient(circle, ${social.color}40 0%, transparent 70%)`,
                  boxShadow: `0 0 20px ${social.color}80`,
                }}
                whileHover={{ opacity: 0.8 }}
              />

              {/* Circular border animation */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent z-0"
                animate={{
                  borderColor: [
                    `${social.color}00`,
                    `${social.color}80`,
                    `${social.color}00`,
                  ],
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              />

              {/* Particle effect */}
              <motion.div
                className="absolute -inset-4 pointer-events-none"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  repeatType: "loop",
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      background: social.color,
                    }}
                    animate={{
                      x: [0, (Math.random() - 0.5) * 50],
                      y: [0, (Math.random() - 0.5) * 50],
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: Math.random() * 2,
                      repeatType: "loop",
                    }}
                  />
                ))}
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Animated resume button with advanced effects */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          whileHover={{ scale: 1.05, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -10]) }}
        >
          <Button
            size="lg"
            className="relative overflow-hidden group bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-600 hover:to-blue-600 transition-all duration-500 px-8 py-6 text-lg"
            onClick={() => {
              const simulateDownload = () => {
                setIsDownloading(true);
                let progress = 0;
                const interval = setInterval(() => {
                  progress += 5;
                  setDownloadProgress(progress);
                  if (progress >= 100) {
                    clearInterval(interval);
                    setDownloadComplete(true);
                    setTimeout(() => {
                      window.open(
                        "https://drive.google.com/file/d/15ZL1gQhz3NjHDGH4ASbB5oNX51w9NqC6/view?usp=sharing",
                        "_blank",
                      );
                      setTimeout(() => {
                        setIsDownloading(false);
                        setDownloadProgress(0);
                        setDownloadComplete(false);
                      }, 1500);
                    }, 500);
                  }
                }, 100);
              };
              simulateDownload();
            }}
          >
            {/* Animated gradient overlay */}
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

            {/* Button text with icon */}
            <motion.span
              className="flex items-center justify-center relative z-10 font-koho"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, rotate: -5 }}
            >
              {isDownloading ? (
                <>
                  {downloadComplete ? (
                    <>
                      <CheckCircle2 className="mr-2 h-6 w-6 text-green-300" />
                      Downloaded!
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-6 w-6 animate-pulse" />
                      <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
                          style={{ width: `${downloadProgress}%` }}
                        />
                      </div>
                      <span className="ml-2">{downloadProgress}%</span>
                    </>
                  )}
                </>
              ) : (
                <>
                  <FileText className="mr-2 h-6 w-6" />
                  Download Resume
                </>
              )}
            </motion.span>

            {/* Sparkle effects */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: i * 0.3,
                    repeatType: "loop",
                  }}
                >
                  <Sparkles className="text-white/80 w-4 h-4" />
                </motion.div>
              ))}
            </motion.div>

            {/* Hover glow effect */}
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

            {/* Background glow */}
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

          {/* 3D shadow effect */}
          <motion.div
            className="absolute -inset-1 rounded-lg -z-20 opacity-0 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(45deg, #7928ca88, #ff008088, #ffba0088)",
              filter: "blur(20px)",
              transform: "translateY(10px) scale(0.95)",
            }}
            whileHover={{ opacity: 0.7 }}
          />
        </motion.div>

        {/* Floating code elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-500/20 text-4xl font-mono"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.2,
              }}
              initial={{ y: -100, opacity: 0 }}
              animate={{
                y: 500,
                opacity: [0, 0.2, 0],
                rotate: Math.random() * 360,
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 20 + 10,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            >
              <Code size={Math.random() * 30 + 20} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 mx-auto"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1"
          whileHover={{ scale: 1.2 }}
        >
          <motion.div
            className="w-1 h-2 bg-white/50 rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
        <motion.p
          className="text-xs text-white/50 mt-2 text-center font-koho"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
