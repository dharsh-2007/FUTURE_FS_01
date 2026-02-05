import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Download, Calendar } from "lucide-react";

const education = [
  {
    title: "B.Tech Information Technology",
    institution: "Sairam Engineering College",
    period: "2024 - 2028",
    description: "Currently pursuing Bachelor's degree in Information Technology with focus on web development and software engineering.",
  },
];

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Resume</span>
          </h2>

          <p className="text-muted-foreground text-center mb-12">
            My educational background and professional experience
          </p>

          <div className="max-w-xl mx-auto mb-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/30">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Education
                </h3>
              </div>

              <div className="space-y-4">
                {education.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary box-glow-green" />
                    <div className="bg-card border border-border rounded-xl p-5 hover:box-glow-green transition-all duration-300">
                      <h4 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-primary text-sm mb-2">{item.institution}</p>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center"
          >
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity box-glow-mixed"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
