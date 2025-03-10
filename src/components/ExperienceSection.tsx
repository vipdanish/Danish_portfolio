import { Briefcase, ExternalLink } from "lucide-react";
import SectionContainer from "./SectionContainer";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  const experiences = [
    {
      position: "Freelance Web Developer",
      company: "Upwork",
      duration: "May 2023 - Present",
      description:
        "Working as a part-time freelancer on Upwork, delivering web development solutions to clients globally. Specialized in React.js, Node.js, and responsive design. Successfully completed multiple projects with positive client feedback. Managed project timelines independently while maintaining high-quality standards. Developed strong client communication skills and adapted to diverse project requirements.",
      link: "https://www.upwork.com/freelancers/~014daf472f0b2ba1af?mp_source=share",
      linkText: "View Upwork Profile",
      linkIcon: "ExternalLink",
    },
    {
      position: "Python Developer Intern",
      company: "CCA Pvt Ltd",
      duration: "April 2023 - April 2023",
      description:
        "Completed a 4-week offline internship as a Data Analyst. Utilized Python for data analysis, processing, and interpretation, ensuring efficient handling of datasets. Extracted valuable insights through statistical analysis and data visualization techniques. Demonstrated strong analytical skills to support decision-making and business strategies. Collaborated in a professional work environment, meeting deadlines and delivering impactful results.",
    },
    {
      position: "Frontend Developer Intern",
      company: "CCA Pvt Ltd",
      duration: "Dec 2022 - Dec 2022",
      description:
        "Completed a 4-week intensive offline internship as a Frontend Web Developer. Developed dynamic and responsive web interfaces using HTML, CSS, and JavaScript. Collaborated with cross-functional teams to deliver high-quality web projects. Showcased adaptability and problem-solving skills in real-world development scenarios. Gained hands-on experience in frontend development best practices and UI/UX principles.",
    },
  ];

  return (
    <SectionContainer
      title="Work Experience"
      icon={<Briefcase />}
      value="experience"
    >
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-l-2 border-purple-500 pl-4 py-1"
          >
            <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
            <div className="flex justify-between items-center mb-2">
              <p className="text-purple-400">{exp.company}</p>
              <span className="text-sm text-gray-400">{exp.duration}</span>
            </div>
            <p className="text-gray-300">{exp.description}</p>
            {exp.link && (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                {exp.linkText} <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
