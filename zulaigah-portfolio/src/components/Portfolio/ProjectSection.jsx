import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Real-Time Chat Application",
      description: "WebSocket-based messaging platform with end-to-end encryption and file sharing capabilities.",
      tech: ["Next.js", "Socket.io", "MongoDB", "AWS S3"],
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Business intelligence tool with predictive analytics, data visualization, and automated reporting.",
      tech: ["Vue.js", "Python", "TensorFlow", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-pink-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-pink-200 rounded-2xl overflow-hidden hover:border-pink-400 transition-all shadow-lg">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-300/30 to-pink-400/30 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-pink-100 border border-pink-300 rounded-full text-pink-600 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        className="border-pink-400 text-pink-500 hover:bg-pink-50"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button
                        className="bg-gradient-to-r from-pink-400 to-pink-600 text-white"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}