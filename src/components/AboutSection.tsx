import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, MapPin, GraduationCap } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">About Me</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 box-glow-mixed hover:box-glow-green transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                  <User className="w-10 h-10 text-primary" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  P. Dharshini
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate web developer currently pursuing my B.Tech in
                  Information Technology at Sairam Engineering College (2024-2028).
                  I love creating beautiful, user-friendly web applications and
                  continuously learning new technologies to improve my skills.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span>B.Tech Information Technology</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span>Chennai, India</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
