import { User } from "lucide-react";
import SectionContainer from "./SectionContainer";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <SectionContainer title="About Me" icon={<User />} value="about">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">
          Hello! I'm Syed Danish Ishaque, a final year B.Tech CSE student
          passionate about creating innovative solutions through technology. My
          journey in computer science has equipped me with strong
          problem-solving skills and a deep understanding of software
          development principles.
        </p>
        <p className="mb-4">
          I specialize in full-stack development with expertise in React,
          Node.js, and cloud technologies. My academic background has provided
          me with a solid foundation in algorithms, data structures, and system
          design.
        </p>
        <p>
          When I'm not coding, you can find me exploring new technologies,
          contributing to open-source projects, or participating in hackathons.
          I'm always eager to take on new challenges and expand my knowledge in
          the ever-evolving tech landscape.
        </p>
      </motion.div>
    </SectionContainer>
  );
};

export default AboutSection;
