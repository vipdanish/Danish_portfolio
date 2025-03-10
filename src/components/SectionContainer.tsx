import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface SectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  value: string;
}

const SectionContainer = ({ title, icon, children, value }: SectionProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl mx-auto mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Accordion
        type="single"
        collapsible
        className="w-full rounded-lg border transition-all duration-300 shadow-lg relative overflow-hidden"
        style={{
          background: "var(--section-bg, rgba(17, 24, 39, 0.5))",
          borderColor: "var(--section-border, rgba(31, 41, 55, 1))",
          boxShadow: isHovered
            ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
            : "none",
        }}
        onValueChange={(value) => setIsExpanded(!!value)}
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "linear-gradient(45deg, rgba(125, 125, 255, 0), rgba(125, 125, 255, 0.3), rgba(125, 125, 255, 0))",
              backgroundSize: "200% 100%",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="absolute inset-0 border-2 border-transparent rounded-lg">
            <motion.div
              className="absolute inset-0 rounded-lg"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(125, 125, 255, 0.4), transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={{
                backgroundPosition: ["-100% 0%", "200% 0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
        <AccordionItem value={value} className="border-b-0">
          <AccordionTrigger
            className="px-6 py-4 rounded-t-lg text-lg font-medium transition-all"
            style={{
              color: "var(--text-primary, #ffffff)",
              background: isHovered
                ? "var(--section-hover, rgba(31, 41, 55, 0.5))"
                : "transparent",
            }}
          >
            <motion.div
              className="flex items-center"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span
                className="mr-3"
                style={{ color: "var(--accent-color, #60a5fa)" }}
                animate={{
                  rotate: isExpanded ? 360 : 0,
                  scale: isHovered ? 1.2 : 1,
                }}
                transition={{ duration: 0.4 }}
              >
                {icon}
              </motion.span>
              {title}
            </motion.div>
          </AccordionTrigger>
          <AccordionContent
            className="px-6 py-4"
            style={{ color: "var(--text-secondary, #d1d5db)" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
};

export default SectionContainer;
