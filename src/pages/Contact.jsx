import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ChevronDown } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_bn4lyzf",
                "template_md2347p",
                e.target,
                "ySGHCgkHcDujavsVQ"
            )
            .then(() => {
                alert("Message sent successfully!");
            })
            .catch(() => {
                alert("Failed to send message.");
            });

        e.target.reset();
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-black via-black to-gray-950 py-24 px-4">
            {/* Glow background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full" />
            </div>

            <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                {/* Left Info */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Let's Talk
                    </h1>

                    <p className="text-gray-400 max-w-md leading-relaxed">
                        Ready to grow your brand, get more leads, and boost your online presence? Our digital marketing experts are here to create result-driven strategies tailored to your business. Contact us today and let's turn your goals into measurable success.
                    </p>

                    <div className="space-y-4">
                        <InfoItem icon={Mail} text="dhruv.klint@gmail.com" />
                        <InfoItem icon={MapPin} text="Ahmedabad, Gujarat, India" />
                    </div>
                </motion.div>

                {/* Form */}
                <motion.form
                    onSubmit={sendEmail}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl space-y-5"
                >
                    {/* Name Row */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <Input name="firstname" placeholder="First Name*" required />
                        <Input name="lastname" placeholder="Last Name*" required />
                    </div>

                    {/* Contact Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <Input name="phone" placeholder="Phone Number*" type="tel" required />
                        <Input name="email" placeholder="Email Address*" type="email" required />
                    </div>

                    {/* Business Info */}
                    <Input name="company" placeholder="Company Name" />
                    <Input name="website" placeholder="Website URL" type="url" />

                    {/* Service Selection */}
                    <div className="relative w-full flex items-center">
                        <motion.select
                            name="service"
                            onFocus={() => setIsOpen(true)}
                            onBlur={() => setIsOpen(false)}
                            onChange={() => setIsOpen(false)}
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="w-full appearance-none p-4 pr-12 rounded-2xl bg-black/60 border border-white/10 focus:border-cyan-400 outline-none transition text-gray-200"
                            defaultValue=""
                            required
                        >
                            <option value="">Select a Service*</option>
                            <option>SEO Optimization</option>
                            <option>Social Media Marketing</option>
                            <option>Website Development</option>
                            <option>Paid Ads Management</option>
                            <option>Full Digital Marketing Package</option>
                        </motion.select>

                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute right-4 pointer-events-none text-gray-400"
                        >
                            <ChevronDown />
                        </motion.div>
                    </div>

                    {/* Message */}
                    <motion.textarea
                        name="message"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        rows={4}
                        placeholder="Message*"
                        className="w-full p-4 rounded-2xl bg-black/60 border border-white/10 focus:border-cyan-400 outline-none transition text-gray-200"
                        required
                    />

                    {/* CTA Button */}
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 rounded-2xl font-semibold text-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-lg shadow-cyan-500/20"
                    >
                        Submit
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}

function Input({ name, placeholder, type = "text", required = false }) {
    return (
        <motion.input
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="w-full p-4 rounded-2xl bg-black/60 border border-white/10 focus:border-cyan-400 outline-none transition text-gray-200"
        />
    );
}

function InfoItem({ icon: Icon, text }) {
    return (
        <motion.div whileHover={{ x: 6 }} className="flex items-center gap-3 text-gray-300">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                <Icon className="w-5 h-5 text-cyan-400" />
            </div>
            <span>{text}</span>
        </motion.div>
    );
}