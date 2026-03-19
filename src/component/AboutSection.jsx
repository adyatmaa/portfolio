import { motion } from "framer-motion";
import { BrainCircuit, Lightbulb, Users } from "lucide-react";

export default function AboutSection() {
  const strengths = [
    {
      icon: BrainCircuit,
      title: "Eager Learner",
      desc: "I like to explore new things and have a eagerness to keep learning.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      desc: "I try to analyze the situation and find a suitable solution.",
    },
    {
      icon: Users,
      title: "Collaborations",
      desc: "I do collaborate and sharing each other experiences with my teams.",
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
                into development started in college when I write a simple script
                that return the list of records i have in my database.
              </p>
              <p>
                Over the past few years, I've been learning how to make some
                project fundamentally and how to apply it into the real world
                problem.
              </p>
              <p>
                While I'm not doing codes, you'll find me exploring and learning
                something new that i found interesting. I try my best to become
                someone who knows a lot of things, not only konws, but also kind
                of understands those things.
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
