import { motion } from "framer-motion";
import { ChevronRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="rounded-xl space-y-4 p-4 bg-primary border border-gray-500 hover:border-teal-500/70 flex flex-col transition-colors duration-300"
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-96 object-cover rounded-md border border-gray-500 hover:border-teal-500/70 duration-300"
      />
      <div className="py-1 px-2 flex flex-col flex-1">
        <p className="mb-4 font-mono leading-tight text-teal-400">
          Featured Project
        </p>
        <p className="text-lg font-medium mb-4 leading-tight">{project.name}</p>
        <p className="text-sm mb-4 text-gray-400 flex-1">{project.desc}</p>

        <div className="flex flex-wrap gap-x-4">
          {project.stack.map((item, i) => {
            return (
              <span
                key={i}
                className="text-sm mb-4 text-gray-400 bg-gray-900 py-1.5 px-3 rounded-lg hover:scale-105 duration-300 cursor-default"
              >
                {item}
              </span>
            );
          })}
        </div>
        <div className="w-full py-6 border-t border-gray-400 flex flex-row justify-between">
          <div className="flex flex-row gap-4 text-gray-400">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                className="hover:text-teal-500 duration-100"
              >
                <Github size={18} className="" />
              </a>
            ) : (
              <Github size={18} className="hover:cursor-not-allowed" />
            )}
            {project.exLink ? (
              <a
                href={project.exLink}
                target="_blank"
                className="hover:text-teal-500 duration-100"
              >
                <ExternalLink size={18} className="" />
              </a>
            ) : (
              <ExternalLink size={18} className="hover:cursor-not-allowed" />
            )}
          </div>
          <Link
            to={`projects/${project.id}`}
            className="group text-teal-500 text-sm font-mono flex items-center gap-1 hover:gap-2 transition-all"
          >
            Details
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
