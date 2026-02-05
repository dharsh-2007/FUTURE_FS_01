import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Cpu, Droplets } from "lucide-react";

const projects = [
  {
    title: "AI-Based Oil Spill Detection Using Bioremediation",
    description:
      "An innovative AI/IoT drone system designed to detect oil spills in water bodies and deploy bioremediation agents for environmental cleanup. The project combines machine learning algorithms with drone technology for real-time monitoring and response.",
    tags: ["AI/ML", "IoT", "Drone Technology", "Environmental"],
    icon: Droplets,
    links: {
      github: "#",
      demo: "#",
    },
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">My Projects</span>
          </h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-card border border-border rounded-2xl p-8 hover:box-glow-mixed transition-all duration-500 group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30 group-hover:border-primary/60 transition-colors">
                      <project.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.links.github}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                      </a>
                      <a
                        href={project.links.demo}
                        className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
