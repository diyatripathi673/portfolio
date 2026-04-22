import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="mt-28 text-white px-8">
      <div className="w-full max-w-4xl">
        {/* HEADING */}
        <h2 className="text-3xl font-bold mb-12">&gt; experience</h2>

        <div className="space-y-8">
          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              border border-dashed border-purple-400/30
              bg-black/30 backdrop-blur-md
              p-6 md:p-8 rounded-xl
              hover:border-purple-400
              transition duration-300
            "
          >
            <h3 className="text-xl font-semibold text-purple-400">
              Software Developer Intern
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              Cling Multi Solutions Pvt. Ltd. | Feb 2024 – May 2024
            </p>

            <p className="text-sm text-gray-300 mt-3 mb-4">
              Cling Multi Solutions Web Application — Live Project
            </p>

            <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
              <li>
                • Worked on frontend components and company website development.
              </li>
              <li>• Integrated REST APIs with backend team.</li>
              <li>• Improved UI responsiveness across devices.</li>
              <li>• Debugged and optimized features.</li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-5">
              {["React", "Node.js", "Express", "MongoDB"].map((tech, i) => (
                <span
                  key={i}
                  className="
                    text-xs px-3 py-1
                    border border-dashed border-purple-400/40
                    text-purple-400
                    rounded-full
                    hover:border-purple-400
                    transition
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              border border-dashed border-purple-400/30
              bg-black/30 backdrop-blur-md
              p-6 md:p-8 rounded-xl
              hover:border-purple-400
              transition duration-300
            "
          >
            <h3 className="text-xl font-semibold text-purple-400">
              Help Drive (Donation Platform)
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              Frontend Developer (Project Work)
            </p>

            <ul className="space-y-2 text-sm text-gray-300 leading-relaxed mt-4">
              <li>• Built donation platform UI for underprivileged support.</li>
              <li>• Designed user-friendly workflow system.</li>
              <li>• Focused on responsive and clean UI design.</li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-5">
              {["React", "JavaScript", "CSS", "UI/UX"].map((tech, i) => (
                <span
                  key={i}
                  className="
                    text-xs px-3 py-1
                    border border-dashed border-purple-400/40
                    text-purple-400
                    rounded-full
                    hover:border-purple-400
                    transition
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
