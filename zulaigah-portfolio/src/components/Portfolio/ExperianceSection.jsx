import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading development of cloud-native applications, mentoring junior developers, and architecting scalable solutions.",
      achievements: [
        "Reduced application load time by 60%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Built and maintained multiple client projects, focusing on React and Node.js development.",
      achievements: [
        "Delivered 15+ client projects",
        "Improved code quality by 40%",
        "Introduced testing practices",
      ],
    },
    {
      role: "Junior Developer",
      company: "StartUp Studios",
      period: "2019 - 2020",
      description: "Contributed to frontend development and learned modern web technologies in a fast-paced environment.",
      achievements: [
        "Developed reusable components",
        "Collaborated with design team",
        "Learned agile methodologies",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-pink-100/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-pink-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-pink-400 to-pink-600" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="bg-white border border-pink-200 rounded-2xl p-6 hover:border-pink-400 transition-all shadow-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-pink-500" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{exp.role}</h3>
                          <p className="text-pink-500">{exp.company}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-1.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-pink-400 border-4 border-pink-50" />
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}