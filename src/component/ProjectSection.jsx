import { project } from "../data/project";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function ProjectSection() {
  return (
    <section id="projects" className="pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-2">
            <span className="text-teal-600 text-lg font-mono mr-2">03.</span>
            Projects
          </h2>
          <div className="w-24 h-1 bg-teal-600/80 rounded-full mb-12" />
          <div className="grid sm:grid-cols-2 gap-4">
            {project.map((item, i) => {
              return <ProjectCard key={item.name} index={i} project={item} />;
            })}
          </div>
        </motion.div>
        {/* <Link className="group text-teal-500 text-sm font-mono flex items-center gap-1 hover:gap-2 transition-all">
          See all projects
          <ChevronRight size={18} />
        </Link> */}
      </div>
    </section>
  );
}
