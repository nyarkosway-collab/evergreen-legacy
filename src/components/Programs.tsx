import React from "react";
import { motion } from "framer-motion";
import { Scissors, HeartPulse, MessageCircle, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Programs = () => {
  const programs = [
    {
      title: "Livelihood Skills Training",
      description: "Providing training for basic school girls, GBV survivors, and child mothers in sewing, crafts, and other vocational skills to increase self-reliance.",
      icon: <Scissors className="w-8 h-8 text-emerald-600" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/57cf08d4-ce94-4ca2-a003-4e17d3e84e86/skills-training-ea357708-1778513554505.webp"
    },
    {
      title: "Health & Wellness",
      description: "Regular screening of vulnerable women for breast cancer and education on health, nutrition, and hygiene in the community.",
      icon: <HeartPulse className="w-8 h-8 text-emerald-600" />,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Advocacy & Campaigns",
      description: "Media campaigns and advocacy for national policies that address abuse, discrimination, and GBV against marginalized groups.",
      icon: <MessageCircle className="w-8 h-8 text-emerald-600" />,
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Mentorship & Education",
      description: "Mentoring adolescent girls and boys, helping child mothers get back to school, and providing basic needs for vulnerable students.",
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-emerald-950 mb-4"
          >
            Our Programs
          </motion.h2>
          <p className="text-emerald-700 max-w-2xl mx-auto">
            Strategic initiatives designed to create lasting change and sustainable development for the most vulnerable members of our society.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full border-emerald-50 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg flex flex-col overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader className="pt-6">
                  <div className="mb-4">{program.icon}</div>
                  <CardTitle className="text-xl text-emerald-900">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-emerald-700 leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;