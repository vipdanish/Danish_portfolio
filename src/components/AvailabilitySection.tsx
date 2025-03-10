import { Calendar, Briefcase, Mail, Linkedin } from "lucide-react";
import SectionContainer from "./SectionContainer";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const AvailabilitySection = () => {
  return (
    <SectionContainer
      title="Availability"
      icon={<Calendar />}
      value="availability"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h3
          className="text-2xl font-bold mb-4 text-white font-koho"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Open to Work Opportunities
        </motion.h3>

        <motion.div
          className="mb-6 p-4 rounded-lg bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-gray-300 mb-4">
            I am currently available for internships and job opportunities in
            the following areas:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <motion.div
              className="p-3 rounded-md bg-blue-900/20 border border-blue-800/30 flex items-center"
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(30, 64, 175, 0.3)",
              }}
              transition={{ duration: 0.2 }}
            >
              <Briefcase className="w-5 h-5 mr-2 text-blue-400" />
              <span className="text-blue-300 font-koho">DevOps Engineer</span>
            </motion.div>

            <motion.div
              className="p-3 rounded-md bg-purple-900/20 border border-purple-800/30 flex items-center"
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(126, 34, 206, 0.3)",
              }}
              transition={{ duration: 0.2 }}
            >
              <Briefcase className="w-5 h-5 mr-2 text-purple-400" />
              <span className="text-purple-300 font-koho">Web Developer</span>
            </motion.div>
          </div>

          <p className="text-gray-300 mb-4">
            Looking for both remote and on-site opportunities. Available for
            full-time positions starting July 2025 after graduation, and
            part-time/internship roles immediately.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700"
            onClick={() =>
              window.open(
                "mailto:techdanish001@gmail.com?subject=Job Opportunity",
                "_blank",
              )
            }
          >
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </Button>

          <Button
            className="bg-[#0A66C2] hover:bg-[#004182] text-white"
            onClick={() =>
              window.open("https://www.linkedin.com/in/techdanish/", "_blank")
            }
          >
            <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
          </Button>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};

export default AvailabilitySection;
