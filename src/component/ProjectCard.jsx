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
      className="rounded-xl space-y-4 bg-primary border border-gray-500 flex flex-col"
    >
      <img
        src={project.image}
        alt=""
        className="w-full object-cover rounded-t-xl"
        // className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="py-1 px-6 flex flex-col flex-1">
        <p className="mb-4 font-mono leading-tight text-teal-400">
          Featured Project
        </p>
        <p className="text-lg font-bold mb-4 leading-tight">{project.name}</p>
        <p className="text-md mb-4 text-gray-400 flex-1">{project.desc}</p>

        <div className="flex flex-wrap gap-x-4">
          {project.stack.map((item, i) => {
            return (
              <span
                key={i}
                className="text-sm mb-4 text-gray-400 bg-gray-900 py-2 px-4 rounded-xl"
              >
                {item}
              </span>
            );
          })}
        </div>
        <div className="w-full py-6 border-t border-gray-400 flex flex-row justify-between">
          <div className="flex flex-row space-x-4 text-gray-400">
            <Github size={18} className="hover:cursor-not-allowed" />
            <ExternalLink size={18} className="hover:cursor-not-allowed" />
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
