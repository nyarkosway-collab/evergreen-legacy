import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Heart, Globe, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Founder = () => {
  return (
    <section className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/57cf08d4-ce94-4ca2-a003-4e17d3e84e86/founder-portrait-df6516f0-1778513554173.webp"
                alt="Ellen White - Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-emerald-100">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <div className="font-bold text-emerald-950">JOYNEWS Impact Makers Award 2023</div>
              </div>
              <p className="text-sm text-emerald-700">Recognized for outstanding humanitarian work in Ghana.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4 px-4 py-1 border-none font-semibold">
              Founder & Executive Director
            </Badge>
            <h2 className="text-4xl font-bold text-emerald-950 mb-6">Meet Ellen White</h2>
            <p className="text-lg text-emerald-800 mb-8 leading-relaxed">
              Ellen White is a dedicated Child Rights Advocate, Activist, Philanthropist, and the Girls' Education Officer for Techiman Municipal. Her life's work is centered on protecting the vulnerable and ensuring every child has a voice.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-emerald-100 mt-1">
                  <GraduationCap className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950">Academic Excellence</h4>
                  <p className="text-emerald-700 text-sm">MPhil in Administration & Leadership, Certifications in Psychotherapy, Criminal Law, and Strategic Communication.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-emerald-100 mt-1">
                  <Search className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950">Research & Experience</h4>
                  <p className="text-emerald-700 text-sm">Research Assistant to Bielefeld University, Germany, on Child Abuse research in Techiman.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-emerald-100 mt-1">
                  <Globe className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950">Global Collaborations</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["UNFPA", "Oxfam", "EU", "Gender Centre"].map((p) => (
                      <span key={p} className="text-xs bg-white px-2 py-1 rounded border border-emerald-100 text-emerald-600 font-bold">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-emerald-200">
              <h4 className="font-bold text-emerald-950 mb-4">Key Achievements:</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Foiling Potential Child Marriages",
                  "Rescuing Child Marriage Victims",
                  "Helping Child Mothers Return to School",
                  "Breast Cancer Screening for Women"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-sm text-emerald-800">
                    <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;