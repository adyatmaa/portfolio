import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { project } from "../data/project";
import Navbar from "../layouts/Navbar";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Footer from "../layouts/Footer";

export default function ProjectDetails() {
  const { id } = useParams();
  const record = project.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-teal-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-28 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex text-teal-500 font-mono items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            <ArrowLeft size={14} />
            Back to projects
          </Link>

          {/* Content */}
          <div className="max-w-4xl py-6 flex-col space-y-8">
            <p className="text-teal-500 mb-2 font-mono">Featured Project</p>
            <section className="flex flex-col">
              <p className="text-4xl font-bold mb-8">{record.name}</p>
              <img
                src={record.image}
                alt=""
                className="w-full object-cover rounded-xl"
              />
            </section>

            <section className="space-y-4">
              <p className="text-2xl font-semibold font-mono">Overview</p>
              <p className="text-gray-400">{record.overview}</p>
            </section>

            <section className="space-y-4">
              <p className="text-2xl font-semibold font-mono">The Problem</p>
              <p className="text-gray-400">{record.problem}</p>
            </section>

            <section className="space-y-4">
              <p className="text-2xl font-semibold font-mono">
                The Key Features
              </p>
              <ul className="space-y-2">
                {record.features.map((item) => {
                  return (
                    <li
                      key={item}
                      className="flex gap-3 items-start text-gray-400"
                    >
                      <CheckCircle2 className="h-5 w-5 text-teal-500" />
                      {item}
                    </li>
                  );
                })}
              </ul>
            </section>

            <section className="space-y-4">
              <p className="text-2xl font-semibold font-mono">Tech Stack</p>
              <div className="flex flex-wrap gap-3">
                {record.stack.map((item) => (
                  <p
                    key={item}
                    className="text-md mb-4 text-gray-400 bg-gray-900 py-2 px-4 rounded-xl"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <p className="text-2xl font-semibold font-mono">Role</p>
              <p className="text-gray-400">{record.role}</p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
