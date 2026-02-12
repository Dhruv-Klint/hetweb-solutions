import { motion } from "framer-motion";
import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-black via-black to-gray-950 py-24 px-4">
            {/* Glow background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full" />
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Our Services
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
                        We provide result-driven digital solutions designed to grow your brand, increase
                        visibility, and generate high-quality leads. Explore our core services below.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ServiceCard service={service} />
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl px-8 py-10 shadow-2xl">
                        <h3 className="text-2xl md:text-3xl font-semibold text-white">
                            Not sure which service fits your business?
                        </h3>

                        <p className="text-gray-400 mt-3 max-w-xl">
                            Let our experts analyze your goals and recommend the perfect strategy to
                            accelerate your growth.
                        </p>

                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block mt-6 px-8 py-3 rounded-2xl font-semibold text-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-lg shadow-cyan-500/20"
                        >
                            Get Free Consultation
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}