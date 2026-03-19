import { ArrowUp, Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="rounded-lg shadow-sm m-4">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2026{" "}
          <a href="https://v3.flowbite.com/" className="hover:underline">
            Adyatma
          </a>
        </span>
        <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
          <a
            href="https://github.com/adyatmaa"
            target="_blank"
            className="hover:text-teal-500 transition-all me-2 md:me-1"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:adyatmaa001@gmail.com"
            target="_blank"
            className="hover:text-teal-500 transition-all me-2 md:me-1"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/adyatmaa/"
            target="_blank"
            className="hover:text-teal-500 transition-all me-2 md:me-1"
          >
            <Linkedin size={18} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="ml-4 p-2 rounded-lg border hover:scale-105 cursor-pointer transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
