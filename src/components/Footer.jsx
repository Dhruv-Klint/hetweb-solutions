import { useState } from "react";
import emailjs from "@emailjs/browser"
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
  ArrowRight
} from "lucide-react";
import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 3000);

    const templateParams = {
      user_email: email,
    }

    emailjs
      .send(
        "service_pqfdqyr",
        "template_djnchcq",
        templateParams,
        "ySGHCgkHcDujavsVQ"
      )
      .then(() => {
        setSubscribed(true)
        setEmail("")
      })
      .catch((error) => {
        console.error("EmailJS error:", error)
        alert("Something went wrong. Try again.")
      })

  };



  return (
    <footer className="relative bg-black border-t border-cyan-500/10 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-20 blur-3xl bg-cyan-500/50" />

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
            className="h-[88px] w-auto object-contain mx-auto md:mx-0 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]"
          />

          <p className="text-gray-300 mt-2 text-base leading-relaxed max-w-sm mx-auto md:mx-0 text-justify">
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
        <FooterColumn title="Quick Links">
          <FooterLink to="/home" label="Home" />
          <FooterLink to="/#services" label="Services" />
          <FooterLink to="/blog" label="Blog" />
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
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-5 text-white">Get Service Insights</h3>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 justify-center"
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
                className="px-5 py-3 rounded-2xl text-white bg-gray-950 border focus:outline-none focus:border-cyan-400 text-base w-full disabled:opacity-50 placeholder-gray-300"
              />

              <motion.button
                type="submit"
                disabled={subscribed}
                whileTap={{ scale: subscribed ? 1 : 0.95 }}
                className="theme-btn group px-7 py-3 rounded-2xl font-semibold shadow-lg disabled:opacity-70"
              >
                <span className={`relative inline-flex items-center justify-center ${subscribed ? "" : "group-hover:-translate-x-6"} transition-transform duration-300`}>


                  {/* Arrow */}
                  {!subscribed && (
                    <ArrowRight
                      size={18}
                      className="mr-2 transition-transform duration-300 group-hover:translate-x-28 text-white"
                    />
                  )}

                  {/* Text */}
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={subscribed ? "thankyou" : "subscribe"}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="text-white"
                    >
                      {subscribed ? "Thank You" : "Subscribe"}
                    </motion.span>
                  </AnimatePresence>


                </span>
              </motion.button>

            </form>
          </motion.div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-cyan-500/10 text-center py-6 text-gray-300 text-sm">
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
      <h3 className="text-lg font-semibold mb-5 text-white md:ml-8">{title}</h3>
      <div className="space-y-3 text-gray-300 md:ml-8">{children}</div>
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
