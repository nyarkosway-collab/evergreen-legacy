import React from "react";
import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl text-white">EWS Foundation</span>
            </div>
            <p className="text-emerald-200 mb-8 max-w-md leading-relaxed">
              Mobilizing and building knowledge to counter abuse, violence, and gender-based discrimination in Ghana. Together, we build an inclusive and sustainable community.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="bg-emerald-900 p-3 rounded-full hover:bg-emerald-800 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["About Us", "Our Programs", "Impact Stories", "Volunteer", "Donate"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <span className="text-emerald-500">•</span>
                <span>Techiman, Bono East Region, Ghana</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-emerald-500">•</span>
                <span>+233 (0) XXX XXX XXX</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-emerald-500">•</span>
                <span>info@ewsfoundation.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-emerald-400">
          <p>© 2024 Ellen White Sustainable Foundation. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;