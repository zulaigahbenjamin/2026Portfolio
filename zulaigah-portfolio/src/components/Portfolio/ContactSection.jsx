import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "developer@example.com",
      href: "mailto:developer@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-pink-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full" />
          <p className="text-gray-600 mt-6 text-lg">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 bg-white border border-pink-200 rounded-xl p-6 hover:border-pink-400 transition-all shadow-md"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{info.label}</p>
                  <p className="text-lg font-semibold">{info.value}</p>
                </div>
              </motion.a>
            ))}

            <div className="bg-white border border-pink-200 rounded-xl p-6 mt-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">Available for Opportunities</h3>
              <p className="text-gray-600 mb-4">
                I'm currently open to full-time positions, freelance projects, and consulting opportunities.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-400 animate-pulse" />
                <span className="text-pink-500 font-medium">Available Now</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white border border-pink-200 rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-pink-50 border-pink-200 focus:border-pink-400"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-pink-50 border-pink-200 focus:border-pink-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-pink-50 border-pink-200 focus:border-pink-400 min-h-[150px]"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white py-6 text-lg font-semibold hover:shadow-lg hover:shadow-pink-300 transition-all"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}