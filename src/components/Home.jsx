import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="mt-28 text-white px-10">
      <div className="flex items-center gap-10">
        {/* LEFT SIDE */}
        <div className="w-1/2 px-10">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-4"
          >
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              //i dont want colourful website so chnge my color
            >
              <span class="font-mono text-green-400 tracking-widest drop-shadow-[0_0_6px_#00ff9d]">
                &gt; di@_trip@thi &lt;
              </span>{" "}
            </motion.span>
            <br />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="text-lg text-gray-300 leading-relaxed max-w-lg text-justify mb-6"
          >
            I’m a final-year MCA student with a strong interest in software
            development. I enjoy building modern, responsive web applications
            and continuously improving my skills in the MERN stack. I love
            combining creativity with code to create meaningful digital
            experiences.
          </motion.p>
          {/* TERMINAL STYLE LINE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="font-mono text-sm text-emerald-400 mb-6"
          >
            &gt; system: fullstack_dev_mode_active
            <br />
            &gt; status: building, learning, deploying
          </motion.div>
          {/* SKILLS TAGS */}
          <div className="flex gap-3 flex-wrap">
            {["MongoDB", "Express", "React", "Node.js"].map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="px-4 py-1 border border-white/30 rounded-full text-sm hover:bg-white hover:text-black transition"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 flex justify-center relative">
          {/* FLOATING DOTS */}

          {/* CODE SVG */}
          <motion.svg
            width="300"
            height="200"
            viewBox="0 0 300 200"
            initial="hidden"
            animate="visible"
            className="opacity-90 drop-shadow-[0_0_20px_#00ffcc]"
            whileHover={{ scale: 1.05 }}
          >
            {/* < */}
            <motion.path
              d="M 100 40 L 60 100 L 100 160"
              stroke="#00ff9d"
              className="drop-shadow-[0_0_8px_#00ff9d]"
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
              stroke="#00ff9d"
              className="drop-shadow-[0_0_8px_#00ff9d]"
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
              stroke="#f0fff7"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />

            {/* Cursor */}
          </motion.svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
