import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Info } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-emerald-950 mb-4"
          >
            About Our Foundation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-emerald-700 max-w-2xl mx-auto"
          >
            Legally incorporated NGO based in Techiman, Bono East Region, Ghana.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100"
          >
            <div className="bg-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Info className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-emerald-950 mb-4">Who We Are</h3>
            <p className="text-emerald-800 leading-relaxed">
              We mobilize and build the knowledge of women, girls, boys, and other voiceless persons to counter the growing threat of abuse, violence, and gender-based discrimination.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-amber-50 p-8 rounded-2xl border border-amber-100"
          >
            <div className="bg-amber-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Eye className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-emerald-950 mb-4">Our Vision</h3>
            <p className="text-emerald-800 leading-relaxed">
              To promote, protect and enhance the rights, interests and welfare of women, adolescent girls and boys, and children for a society devoid of abuse and violence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100"
          >
            <div className="bg-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-emerald-950 mb-4">Our Mission</h3>
            <p className="text-emerald-800 leading-relaxed">
              To ensure a society free from all forms of abuse, discrimination, and gender-based violence against women, girls, children, and other voiceless groups.
            </p>
          </motion.div>
        </div>

        <div className="mt-20">
          <div className="bg-emerald-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Core Objectives</h3>
                <ul className="space-y-4">
                  {[
                    "Empower vulnerable individuals on GBV and discrimination.",
                    "Increase personal development through health and education programs.",
                    "Partner with Chiefs, Queen Mothers, and Faith-Based leaders to change social norms.",
                    "Provide livelihood skills training for GBV survivors and child mothers.",
                    "Advocate for national policies addressing marginalized groups."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="bg-emerald-500 rounded-full p-1 mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-emerald-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/57cf08d4-ce94-4ca2-a003-4e17d3e84e86/girls-education-305c0030-1778513554858.webp"
                  alt="Education empowerment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative background circle */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-800 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;