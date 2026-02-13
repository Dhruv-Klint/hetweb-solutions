import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const blogs = [
  {
    id: "seo-trends-2026",
    title: "Top SEO Trends You Must Follow in 2026",
    desc: "Discover the latest SEO strategies that help your website rank higher and grow organically.",
    details:
      "Voice search, AI-driven content, Core Web Vitals, and semantic search are reshaping SEO in 2026. Businesses must focus on user intent, fast performance, and helpful content to stay competitive.",
    image: "/blog1.jpg",
    date: "Jan 12, 2026",
    category: "SEO",
  },
  {
    id: "social-media-growth",
    title: "How Social Media Marketing Grows Your Business",
    desc: "Learn proven techniques to increase engagement, followers, and conversions using social media.",
    details:
      "Short-form video, storytelling content, and community-driven engagement are dominating social media. Brands that create authentic value win attention and loyalty.",
    image: "/blog2.jpg",
    date: "Jan 20, 2026",
    category: "Marketing",
  },
  {
    id: "digital-branding-guide",
    title: "Complete Digital Branding Guide for Beginners",
    desc: "Build a strong online identity with the right branding strategy and visual presence.",
    details:
      "Consistency, emotional storytelling, and strong design language are key pillars of modern branding. Your brand must feel human, trustworthy, and memorable.",
    image: "/blog3.jpg",
    date: "Feb 02, 2026",
    category: "Branding",
  },
];

const categories = ["All", "SEO", "Marketing", "Branding"];

export default function Blog() {
  const [openId, setOpenId] = useState(null);
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("All");

  const filteredBlogs = blogs.filter(
    (b) =>
      (activeCat === "All" || b.category === activeCat) &&
      b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
            Our Blogs
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Expert strategies, marketing ideas, and digital growth insights.
          </p>
        </motion.div>

        {/* ===== SEARCH + FILTER ===== */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-12">
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition w-full md:w-80"
          />

          <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 rounded-full text-sm transition ${activeCat === cat
                    ? "bg-cyan-500 text-black font-semibold"
                    : "bg-white/5 border border-white/10 hover:border-cyan-400"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ===== BLOG GRID ===== */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => {
            const isOpen = openId === blog.id;

            return (
              <motion.div
                key={blog.id}
                whileHover={{ y: -8 }}
                className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-cyan-500/30 via-cyan-500/10 to-purple-500/30"
              >

                <div
                  onClick={() => setOpenId(isOpen ? null : blog.id)}
                  className="cursor-pointer h-full rounded-3xl bg-black/80 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col shadow-xl transition"
                >
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs text-cyan-400 mb-2">
                      {blog.date} • {blog.category}
                    </span>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition">
                      {blog.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {blog.desc}
                    </p>

                    {/* Expand only inside same card */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-300 text-sm mt-4 border-t border-white/10 pt-4">
                            {blog.details}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <span className="text-xs text-cyan-400 mt-4 opacity-70">
                      {isOpen ? "Click to collapse" : "Click to read more"}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ===== EMPTY STATE ===== */}
        {filteredBlogs.length === 0 && (
          <p className="text-center text-gray-500 mt-16">
            No blogs found. Try a different search or category.
          </p>
        )}
      </div>
    </section>
  );
}
