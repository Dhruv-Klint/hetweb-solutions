import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blogs from "../data/blogs";

export default function Blog() {
  return (
    <div className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Our Blogs
        </motion.h1>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-cyan-400/10 rounded-3xl overflow-hidden"
            >
              {/* FULL CARD LINK */}
              <Link to={`/blog/${blog.slug}`} className="block h-full">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-7">
                  <h2 className="text-xl font-semibold mb-3">{blog.title}</h2>
                  <p className="text-gray-400 mb-4">{blog.desc}</p>

                  <span className="text-cyan-400 font-medium group-hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>

              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
