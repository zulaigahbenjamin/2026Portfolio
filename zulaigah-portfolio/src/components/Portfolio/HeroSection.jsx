import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6 inline-block"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-4xl">👩‍💻</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
          >
            Hi, I'm a{" "}
            <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent glow-text">
              Full Stack Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            I craft elegant solutions to complex problems, building scalable applications
            that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center mb-12"
          >
            <Button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-8 py-6 text-lg font-semibold hover:shadow-lg hover:shadow-pink-300 transition-all"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="border-2 border-pink-400 text-pink-500 px-8 py-6 text-lg font-semibold hover:bg-pink-50"
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-6 justify-center"
          >
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border border-pink-300 flex items-center justify-center hover:border-pink-500 hover:text-pink-500 transition-all bg-white"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-pink-400" />
        </motion.div>
      </div>
    </section>
  );
}