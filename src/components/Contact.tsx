import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We will get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6">Get in Touch</h2>
            <p className="text-lg text-emerald-800 mb-8">
              Have questions or want to partner with us? We'd love to hear from you. Your support can change a life.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-600 p-3 rounded-full text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950">Location</h4>
                  <p className="text-emerald-700">Techiman, Bono East Region, Ghana</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-emerald-600 p-3 rounded-full text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950">Phone</h4>
                  <p className="text-emerald-700">+233 (0) XXX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-emerald-600 p-3 rounded-full text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950">Email</h4>
                  <p className="text-emerald-700">info@ewsfoundation.org</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-emerald-900 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-4">Support Our Work</h4>
              <p className="text-emerald-100 mb-6">
                Your donation helps us rescue victims of child marriage and provide skills training for survivors.
              </p>
              <Button className="bg-white text-emerald-900 hover:bg-emerald-100 w-full font-bold">
                Donate via Mobile Money / Card
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-emerald-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-emerald-900">First Name</label>
                  <Input placeholder="John" className="border-emerald-100 focus:border-emerald-600" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-emerald-900">Last Name</label>
                  <Input placeholder="Doe" className="border-emerald-100 focus:border-emerald-600" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-emerald-900">Email Address</label>
                <Input type="email" placeholder="john@example.com" className="border-emerald-100 focus:border-emerald-600" required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-emerald-900">Subject</label>
                <Input placeholder="How can we help?" className="border-emerald-100 focus:border-emerald-600" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-emerald-900">Message</label>
                <Textarea placeholder="Your message here..." className="min-h-[150px] border-emerald-100 focus:border-emerald-600" required />
              </div>

              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12 text-lg font-bold">
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;