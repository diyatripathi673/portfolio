import { motion } from "framer-motion";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="mt-28 text-white px-10">
      <div
        className="flex flex-col md:flex-row items-center gap-16 
  border border-dashed border-gray-400
  p-6 md:p-8
  hover:border-purple-400 
  transition duration-300"
      >
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 px-6 ">
          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            <span className="font-mono text-purple-400">&gt; di@_trip@thi</span>
          </motion.h1>

          {/* ROLE */}
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 mb-6"
          >
            Full Stack Developer (MERN)
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="text-gray-300 leading-relaxed max-w-lg mb-6"
          >
            I build clean, responsive, and scalable web applications using the
            MERN stack. Focused on performance, UI/UX, and real-world problem
            solving. Currently exploring advanced frontend animations and system
            design.
          </motion.p>

          {/* TERMINAL STYLE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-mono text-sm hover:text-purple-300 mb-6"
          >
            &gt; system: fullstack_dev_mode_active <br />
            &gt; status: building • learning • deploying
          </motion.div>

          {/* SKILLS */}
          <div className="flex gap-3 flex-wrap">
            {["MongoDB", "Express", "React", "Node.js", "Next.js"].map(
              (skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="
                    px-4 py-1 
                    border border-[1px] border-dashed border-purple-400/40
                    rounded-full text-sm
                    hover:border-purple-400 
                    transition duration-300
                  "
                >
                  {skill}
                </motion.span>
              ),
            )}
          </div>

          {/* BUTTONS */}
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* BACKGROUND GLOW */}
          <div className="absolute w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

          {/* SVG */}
          <motion.svg
            width="320"
            height="220"
            viewBox="0 0 300 200"
            className="relative opacity-90"
            whileHover={{ scale: 1.05 }}
          >
            {/* < */}
            <motion.path
              d="M 100 40 L 60 100 L 100 160"
              stroke="#c084fc"
              className="drop-shadow-[0_0_10px_#c084fc]"
              strokeWidth="8"
              strokeLinecap="round"
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />

            {/* > */}
            <motion.path
              d="M 200 40 L 240 100 L 200 160"
              stroke="#c084fc"
              className="drop-shadow-[0_0_10px_#c084fc]"
              strokeWidth="8"
              strokeLinecap="round"
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* / */}
            <motion.path
              d="M 150 40 L 150 160"
              stroke="#e9d5ff"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </motion.svg>
        </div>
      </div>

      {/* PROJECTS */}
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
