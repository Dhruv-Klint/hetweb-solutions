import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogs from "../data/blogs";
import { ArrowRight } from "lucide-react";

export default function BlogDetail() {
    const { slug } = useParams();
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return (
            <div className="bg-black text-white min-h-screen flex items-center justify-center">
                Blog not found
            </div>
        );
    }

    return (
        <div className="bg-black text-white min-h-screen">

            {/* HERO IMAGE WITH HEADING */}
            {/* HERO IMAGE WITH CENTERED TITLE */}
            <div className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center text-center">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/70" />

                {/* CENTERED TEXT */}
                <div className="relative z-10 max-w-3xl px-6">

                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-cyan-400 text-sm font-semibold uppercase tracking-wider"
                    >
                        {blog.category}
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mt-3 leading-tight"
                    >
                        {blog.title}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-sm mt-4 flex justify-center gap-3 flex-wrap"
                    >
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.author}</span>
                    </motion.div>

                </div>
            </div>


            {/* CONTENT */}
            <div className="max-w-3xl mx-auto px-6 py-12">

                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition mb-8"
                >
                    ← Back to Blog
                </Link>

                {/* ARTICLE CONTENT */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 leading-relaxed space-y-6 text-lg"
                >
                    {blog.content.split("\n").map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 p-8 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur"
                >
                    <h3 className="text-2xl font-semibold mb-3">
                        Need help growing your business online?
                    </h3>
                    <p className="text-gray-400 mb-6">
                        Our digital marketing experts can help you increase traffic,
                        generate leads, and boost conversions with proven strategies.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className=""
                    >
                        <Link
                            to="/contact"
                            className="theme-btn group inline-block px-12 py-4 rounded-2xl font-semibold text-white shadow-xl transition"
                        >
                            <span className="inline-flex items-center gap-2">
                                <ArrowRight className="w-5 h-5 inline-block mr-2 group-hover:translate-x-[88px] transition-transform duration-300" />
                                <span className="group-hover:-translate-x-8 transition-transform duration-300">
                                    Let's Talk
                                </span>

                            </span>
                        </Link>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
}
