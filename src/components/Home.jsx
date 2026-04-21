import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="mt-24 text-white px-10">
      <div className="flex justify-between items-center">
        {/* LEFT SIDE (About Text) */}
        <div className="w-1/2">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold mb-4"
          >
            About Me
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="text-lg *:text-gray-300 *:leading-relaxed "
          >
            Hi, I'm Diya Tripathi. I am an MCA student and a passionate Web
            Developer with a knack for creating dynamic and responsive websites.
            I have a strong foundation in front-end technologies like HTML, CSS,
            and JavaScript, and I am always eager to learn new frameworks and
            tools to enhance my skills. I enjoy turning complex problems into
            simple, beautiful, and intuitive designs. When I'm not coding, you
            can find me exploring the latest tech trends or working on personal
            projects to further hone my abilities.
          </motion.p>
        </div>

        {/* RIGHT SIDE (Empty for now) */}
        <div className="w-1/2 flex justify-center">
          <div className="w-60 h-60 bg-gray-500 rounded-lg flex items-center justify-center">
            Right Side
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
