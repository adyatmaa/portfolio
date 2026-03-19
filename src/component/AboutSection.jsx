import { motion } from "framer-motion";
import { Code2, Lightbulb, Users } from "lucide-react";

export default function AboutSection() {
  const strengths = [
    {
      icon: Code2,
      title: "Clean Code",
      desc: "I do write clean and manageable code",
    },
    { icon: Lightbulb, title: "Problem Solving", desc: "I do solve problems" },
    {
      icon: Users,
      title: "Collaborations",
      desc: "I do collaborate with my teams",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-2">
            <span className="text-teal-600 text-lg font-mono mr-2">01.</span>
            About Me
          </h2>
          <div className="w-24 h-1 bg-teal-600/80 rounded-full mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-start text-gray-400">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Adyatma, a junior developer with a passion for
                building digital products that make a difference. My journey
                into development started in college when I built a small tool to
                automate my class schedule — and I've been hooked ever since.
              </p>
              <p>
                Over the past few years, I've had the privilege of working at
                startups and agencies, building everything from e-commerce
                platforms to internal dashboards. I focus on writing clean,
                accessible code and creating intuitive user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring open-source
                projects, writing technical blog posts, or experimenting with
                new frameworks and tools.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              {strengths.map((item, index) => {
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: index * 0.15 }}
                    className="flex gap-4 p-5 rounded-xl border border-gray-700 hover:border-teal-500 transition-all duration-300"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-teal-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-300 mb-1">
                        {item.title}
                      </h3>
                      <h3 className="text-sm text-gray-400">{item.desc}</h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
