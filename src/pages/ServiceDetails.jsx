import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "../data/services";

export default function ServiceDetails() {
  const { id } = useParams();

  const service = services.find((s) => s.id === id);

  if (!service)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h2 className="text-2xl">Service Not Found</h2>
      </div>
    );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-black to-gray-950 py-24 px-4 min-h-screen">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            to="/services"
            className="text-cyan-400 hover:text-cyan-300 transition"
          >
            ← Back to Services
          </Link>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl"
        >
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            {service.title}
          </h1>

          {/* Description (supports array OR string) */}
          <div className="mt-6 text-lg leading-relaxed text-gray-300 space-y-4">
            {Array.isArray(service.description) ? (
              service.description.map((para, index) => (
                <p key={index}>{para}</p>
              ))
            ) : (
              <p>{service.description}</p>
            )}
          </div>

          {/* Features List */}
          {service.features && (
            <ul className="mt-8 space-y-3">
              {service.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="mt-1 w-2 h-2 rounded-full bg-cyan-400" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-2xl font-semibold text-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 transition"
            >
              Get This Service
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
