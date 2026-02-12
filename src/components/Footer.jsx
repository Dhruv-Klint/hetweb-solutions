import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-black/95 to-black border-t border-cyan-500/10 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12 text-center md:text-left">
        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={logo}
            alt="Hetweb Logo"
            className="h-16 w-auto object-contain mx-auto md:mx-0 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]"
          />

          <p className="text-gray-300 mt-5 text-base leading-relaxed max-w-sm mx-auto md:mx-0">
            We help startups and businesses grow with modern marketing,
            creative branding, and effective digital strategies that drive real
            results.
          </p>

          {/* SOCIAL */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <SocialIcon href="https://facebook.com" icon={<Facebook size={18} />} />
            <SocialIcon href="https://instagram.com" icon={<Instagram size={18} />} />
            <SocialIcon href="https://linkedin.com" icon={<Linkedin size={18} />} />
            <SocialIcon href="https://twitter.com" icon={<Twitter size={18} />} />
          </div>
        </motion.div>

        {/* QUICK LINKS */}
        <FooterColumn title="Essential">
          <FooterLink to="/" label="Home" />
          <FooterLink to="/services" label="Services" />
          <FooterLink to="/" label="Blog" />
          <FooterLink to="/about" label="About Us" />
          <FooterLink to="/contact" label="Contact Us" />
        </FooterColumn>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-5 text-white">Get In Touch</h3>

          <div className="space-y-4 text-gray-300 text-base">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={16} />
              <a href="tel:+919999999999" className="hover:text-cyan-400 transition">
                +91 99999 99999
              </a>
            </p>

            <p className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={16} />
              <a
                href="mailto:dhruv.klint@gmail.com"
                className="hover:text-cyan-400 transition"
              >
                dhruv.klint@gmail.com
              </a>
            </p>

            <p className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={16} /> Ahmedabad, India
            </p>

            <p className="flex items-center justify-center md:justify-start gap-2">
              <Clock size={16} />
              Mon - Sat : 10 AM - 7 PM
            </p>
          </div>
        </motion.div>

        {/* NEWSLETTER */}
        <div className="relative border-t border-cyan-500/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-6 py-12 text-center"
          >
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 rounded-2xl bg-gray-900 border border-gray-700 focus:outline-none focus:border-cyan-400 text-base w-full sm:w-80"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3 rounded-2xl font-semibold text-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-lg shadow-cyan-500/20"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-cyan-500/10 text-center py-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Hetweb Solutions. All rights reserved.
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-semibold mb-5 text-white">{title}</h3>
      <div className="space-y-3 text-gray-300">{children}</div>
    </motion.div>
  );
}

function FooterLink({ to, label }) {
  return (
    <Link
      to={to}
      className="block hover:text-cyan-400 hover:translate-x-1 transition duration-300"
    >
      {label}
    </Link>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <motion.a
      whileHover={{ y: -4, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="p-3 rounded-full bg-gray-900 border border-gray-700 hover:border-cyan-400 text-white hover:text-cyan-400 transition duration-300 shadow-md"
    >
      {icon}
    </motion.a>
  );
}
