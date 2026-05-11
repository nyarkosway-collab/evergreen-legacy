import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Users, School } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-emerald-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 mr-2"></span>
              NGO in Techiman, Ghana
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-950 leading-tight mb-6">
              Empowering the <span className="text-emerald-600">Voiceless</span>, Building a Brighter Future
            </h1>
            <p className="text-lg text-emerald-800 mb-8 max-w-xl">
              Ellen White Sustainable Foundation is dedicated to mobilizing and building the knowledge of women, girls, and boys to counter abuse, violence, and gender-based discrimination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 h-14 text-lg">
                Support Our Mission
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-full px-8 h-14 text-lg">
                Learn More
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-emerald-100 pt-8">
              <div>
                <div className="text-3xl font-bold text-emerald-900 mb-1">100+</div>
                <div className="text-sm text-emerald-700 font-medium">Child Marriages Foiled</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-900 mb-1">500+</div>
                <div className="text-sm text-emerald-700 font-medium">Girls Back in School</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-900 mb-1">1k+</div>
                <div className="text-sm text-emerald-700 font-medium">People Mentored</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/57cf08d4-ce94-4ca2-a003-4e17d3e84e86/community-empowerment-571ca114-1778513554802.webp"
                alt="Empowered Ghanaian women and girls"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent"></div>
            </div>

            {/* Floating Info Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-emerald-50 hidden sm:flex items-center space-x-3"
            >
              <div className="bg-amber-100 p-2 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-emerald-900">Child Protection</div>
                <div className="text-xs text-emerald-600">Rights & Safety First</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-12 -right-6 bg-white p-4 rounded-xl shadow-lg border border-emerald-50 hidden sm:flex items-center space-x-3"
            >
              <div className="bg-emerald-100 p-2 rounded-lg">
                <School className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-emerald-900">Education</div>
                <div className="text-xs text-emerald-600">Empowering Through Knowledge</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;