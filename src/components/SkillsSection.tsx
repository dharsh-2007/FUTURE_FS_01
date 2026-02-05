import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Database, 
  Wrench,
  FileCode,
  Palette,
  Braces,
  Server,
  GitBranch,
  Monitor
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "HTML", icon: FileCode },
      { name: "CSS", icon: Palette },
      { name: "JavaScript", icon: Braces },
      { name: "React.js", icon: Code2 },
    ],
  },
  {
    title: "Backend / Database",
    icon: Database,
    skills: [
      { name: "DBMS", icon: Server },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "VS Code", icon: Monitor },
      { name: "GitHub", icon: GitBranch },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">My Skills</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="bg-card border border-border rounded-2xl p-6 hover:box-glow-green transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/30">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/50 hover:box-glow-green transition-all duration-300 cursor-default"
                    >
                      <skill.icon className="w-8 h-8 text-primary" />
                      <span className="text-sm text-muted-foreground font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
