import { Code, ExternalLink, Github } from "lucide-react";
import SectionContainer from "./SectionContainer";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Designed a personal portfolio with dark mode, animations, and projects showcase.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/vipdanish/Danish_portfolio",
      demo: "https://okdanish.netlify.app/",
    },
    {
      title: "Fruit Slice Game",
      description:
        "Interactive web-based game where players slice fruits as they appear on screen.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/vipdanish/Fruit-Slice-Game",
      demo: "https://vipdanish.github.io/Fruit-Slice-Game/",
    },
    {
      title: "90's CLI Portfolio",
      description:
        "Created a nostalgic 90's-style command-line interface portfolio with retro ASCII art, terminal animations, and interactive commands. Features custom shell emulation with classic DOS/Unix commands.",
      technologies: ["JavaScript", "CSS", "Terminal UI", "ASCII Art"],
      github: "https://github.com/vipdanish/danish_old_terminal",
      demo: "https://danish-cli.netlify.app/",
    },
  ];

  return (
    <SectionContainer title="Projects" icon={<Code />} value="projects">
      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg p-5 border transition-all duration-300 theme-transition hover-lift"
            style={{
              background: "var(--project-bg, rgba(31, 41, 55, 0.5))",
              borderColor: "var(--project-border, rgba(55, 65, 81, 1))",
              boxShadow:
                "var(--project-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06))",
            }}
            whileHover={{
              borderColor: "var(--accent-color, #60a5fa)",
              boxShadow:
                "var(--project-hover-shadow, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05))",
            }}
          >
            <div className="flex justify-between items-start mb-3">
              <h3
                className="text-xl font-semibold theme-transition"
                style={{ color: "var(--text-primary, #ffffff)" }}
              >
                {project.title}
              </h3>
              <div className="flex space-x-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={18} />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            <p
              className="mb-4 theme-transition"
              style={{ color: "var(--text-secondary, #d1d5db)" }}
            >
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="outline"
                  className="theme-transition"
                  style={{
                    background: "var(--badge-bg, rgba(30, 58, 138, 0.2))",
                    color: "var(--badge-text, #60a5fa)",
                    borderColor: "var(--badge-border, #1e40af)",
                  }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
