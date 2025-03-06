import { useRef, useEffect } from "react";

interface Background3DProps {
  isDarkTheme: boolean;
}

const Background3D = ({ isDarkTheme = true }: Background3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create canvas element
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    containerRef.current.appendChild(canvas);

    // Particle properties
    const particlesArray: Particle[] = [];
    const numberOfParticles = 150; // Increased number of particles
    let mouseX = 0;
    let mouseY = 0;
    let scrollY = 0;

    // Track scroll position
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      baseSize: number;
      speedX: number;
      speedY: number;
      color: string;
      baseColor: string;
      pulseSpeed: number;
      pulseAmount: number;
      pulseOffset: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseSize = Math.random() * 3 + 1;
        this.size = this.baseSize;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.pulseSpeed = Math.random() * 0.01 + 0.005;
        this.pulseAmount = Math.random() * 1 + 0.5;
        this.pulseOffset = Math.random() * Math.PI * 2;

        // Create colors based on theme
        if (isDarkTheme) {
          // Dark theme: blue/purple range
          const r = Math.floor(Math.random() * 50 + 50); // 50-100 (purple-ish)
          const g = Math.floor(Math.random() * 20); // 0-20 (low green for purple)
          const b = Math.floor(Math.random() * 100 + 155); // 155-255 (high blue)
          this.baseColor = `rgba(${r}, ${g}, ${b}`;
        } else {
          // Light theme: light blue/teal range
          const r = Math.floor(Math.random() * 30); // 0-30 (low red for blue)
          const g = Math.floor(Math.random() * 100 + 155); // 155-255 (high green for teal)
          const b = Math.floor(Math.random() * 100 + 155); // 155-255 (high blue)
          this.baseColor = `rgba(${r}, ${g}, ${b}`;
        }
        this.color = `${this.baseColor}, ${Math.random() * 0.5 + 0.3})`;
      }

      update(time: number) {
        // Pulse size effect
        this.size =
          this.baseSize +
          Math.sin(time * this.pulseSpeed + this.pulseOffset) *
            this.pulseAmount *
            0.5;

        // Move particles
        this.x += this.speedX;
        this.y += this.speedY;

        // Scroll effect - particles move slightly with scroll
        this.y -= scrollY * 0.01 * this.speedY;

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;

        // Enhanced mouse interaction
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          // Stronger effect when closer to mouse
          const force = (150 - distance) / 1500;
          this.speedX += dx * force * -1; // Move away from cursor
          this.speedY += dy * force * -1;

          // Limit max speed
          const maxSpeed = 2;
          const currentSpeed = Math.sqrt(
            this.speedX * this.speedX + this.speedY * this.speedY,
          );
          if (currentSpeed > maxSpeed) {
            this.speedX = (this.speedX / currentSpeed) * maxSpeed;
            this.speedY = (this.speedY / currentSpeed) * maxSpeed;
          }
        }

        // Gradually return to normal speed
        this.speedX *= 0.98;
        this.speedY *= 0.98;
      }

      draw(time: number) {
        if (!ctx) return;

        // Pulsing opacity effect
        const opacity =
          0.3 + Math.sin(time * this.pulseSpeed * 0.5 + this.pulseOffset) * 0.2;
        this.color = `${this.baseColor}, ${opacity})`;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Create particles
    const createParticles = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    createParticles();

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.x;
      mouseY = e.y;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Handle window resize
    const handleResize = () => {
      setCanvasSize();
    };
    window.addEventListener("resize", handleResize);

    // Animation loop with time parameter for animations
    let animationTime = 0;
    const animate = () => {
      animationTime += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connecting lines with pulsing opacity
      const lineOpacity = isDarkTheme
        ? 0.03 + Math.sin(animationTime * 0.5) * 0.02
        : 0.08 + Math.sin(animationTime * 0.5) * 0.03;

      ctx.strokeStyle = isDarkTheme
        ? `rgba(100, 100, 255, ${lineOpacity})`
        : `rgba(0, 150, 255, ${lineOpacity})`;
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Dynamic connection distance based on scroll position
          const connectionDistance = 150 + Math.sin(scrollY * 0.01) * 50;

          if (distance < connectionDistance) {
            // Fade lines based on distance
            ctx.globalAlpha = 1 - distance / connectionDistance;
            ctx.beginPath();
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(animationTime);
        particlesArray[i].draw(animationTime);
      }

      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (containerRef.current && containerRef.current.contains(canvas)) {
        containerRef.current.removeChild(canvas);
      }
    };
  }, [isDarkTheme]); // Re-run effect when theme changes

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-10 transition-colors duration-700"
      style={{
        background: isDarkTheme
          ? "linear-gradient(to bottom, #0a0a0a, #121212)"
          : "linear-gradient(to bottom, #f0f9ff, #e0f2fe)",
      }}
    />
  );
};

export default Background3D;
