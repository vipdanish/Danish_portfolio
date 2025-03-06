import { GraduationCap } from "lucide-react";
import SectionContainer from "./SectionContainer";
import { motion } from "framer-motion";

const EducationSection = () => {
  const education = [
    {
      degree:
        "BTech CSE (Bachelor of Technology in Computer Science Engineering)",
      institution: "Dr. Babasaheb Ambedkar Technological University",
      duration: "Dec 2021 - June 2025",
      description:
        "Maintained a CGPA of 7.43/10. Relevant Courses: Web Development, Machine Learning, DevOps, Cloud Computing.",
    },
    {
      degree: "12th (Higher Secondary Education)",
      institution: "Vilasrao Deshmukh Higher Secondary School",
      duration: "Feb 2020",
      description:
        "Completed with 57% under Maharashtra State Board of Secondary & Higher Secondary Education, Pune.",
    },
    {
      degree: "10th (Secondary Education)",
      institution: "Vilasrao Deshmukh Urdu High School",
      duration: "May 2018",
      description:
        "Completed with 84% under Maharashtra State Board of Secondary & Higher Secondary Education, Pune.",
    },
  ];

  return (
    <SectionContainer
      title="Education"
      icon={<GraduationCap />}
      value="education"
    >
      <div className="space-y-6">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-l-2 border-blue-500 pl-4 py-1"
          >
            <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
            <div className="flex justify-between items-center mb-2">
              <p className="text-blue-400">{item.institution}</p>
              <span className="text-sm text-gray-400">{item.duration}</span>
            </div>
            <p className="text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default EducationSection;
