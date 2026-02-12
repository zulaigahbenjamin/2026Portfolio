import React from "react";
import { motion } from "framer-motion";
import { Code2, Rocket, Users } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code is my obsession",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Shipping quality products on time, every time",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaboration and communication are key to success",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-pink-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl blur-xl" />
              <div className="relative bg-white border border-pink-200 rounded-2xl p-8 shadow-lg">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  I'm a passionate developer with over 5 years of experience building web applications.
                  I specialize in creating seamless user experiences and robust backend systems.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  From concept to deployment, I thrive on turning ideas into reality. I'm constantly
                  learning new technologies and best practices to stay at the cutting edge of development.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex gap-4 items-start bg-white border border-pink-200 rounded-xl p-6 hover:border-pink-400 transition-all shadow-md"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}