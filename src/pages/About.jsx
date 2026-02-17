import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* Counter component */
function Counter({ value }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.floor(latest));

    useEffect(() => {
        const controls = animate(count, value, {
            duration: 2,
            ease: "easeOut",
        });
        return controls.stop;
    }, [value]);

    return <motion.span>{rounded}</motion.span>;
}

export default function About() {
    const stats = [
        { number: "50+", label: "Projects Completed" },
        { number: "40+", label: "Happy Clients" },
        { number: "3+", label: "Years Experience" },
        { number: "100%", label: "Client Satisfaction" },
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-black via-black to-gray-950 text-white py-16 px-4">
            {/* Glow Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full" />
            </div>

            <div className="relative max-w-6xl mx-auto">

                {/* Badge */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block mb-6 px-4 py-1 text-sm rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400"
                >
                    About Our Company
                </motion.span>

                {/* Main Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-6">

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold leading-tight"
                        >
                            We Build Digital Growth <br className="hidden md:block" /> That Matters
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-4"
                        >
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Hetweb Solutions is a results-driven digital marketing agency dedicated to helping
                                businesses grow online with smart strategy, creative execution, and measurable
                                performance. From powerful SEO and engaging social media marketing to modern,
                                conversion-focused website development, we create digital experiences that turn
                                visitors into loyal customers.
                            </p>

                            <p className="text-gray-300 leading-relaxed">
                                Our mission is simple - deliver real growth, transparent communication, and
                                long-term success for every brand we work with. Whether you're a startup or an
                                established company, we craft tailored solutions that match your goals and scale
                                with your business.
                            </p>
                        </motion.div>
                    </div>

                    {/* RIGHT STATS */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.12 } },
                        }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {stats.map((item, i) => {
                            const numericValue = parseInt(item.number);

                            return (
                                <motion.div
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    className="p-6 md:py-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-center"
                                >
                                    <h3 className="text-3xl font-bold text-cyan-400">
                                        <Counter value={numericValue} />
                                        {item.number.includes("+") && "+"}
                                        {item.number.includes("%") && "%"}
                                    </h3>

                                    <p className="text-gray-300 mt-2 text-sm">{item.label}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>

            {/* Bottom CTA */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative max-w-4xl mx-auto mt-20 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold">
                    Ready to Grow Your Business Online?
                </h2>

                <p className="text-gray-300 mt-4">
                    Let's create a powerful digital strategy that increases your online visibility,
                    attracts high-quality <br className="hidden md:block" /> leads, and drives sustainable long-term business growth.
                </p>

                <Link
                    to="/contact"
                    className="theme-btn group inline-flex items-center mt-6 px-12 py-4 rounded-2xl font-semibold text-white shadow-xl transition overflow-hidden"
                >
                    <ArrowRight className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:translate-x-20" />
                    <span className="transition-transform duration-300 group-hover:-translate-x-8">
                        Let's Talk
                    </span>
                </Link>
            </motion.div>
        </section>
    );
}
