// import React from "react";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "LMS Web App",
//     live: "#", // 👉 yaha apna live link dalna
//     desc: "Full-stack Learning Management System where educators can create/manage courses and students can enroll and learn.",
//     points: [
//       "Authentication using Clerk",
//       "Course management with pricing & lectures",
//       "REST API integration",
//       "Responsive dashboard UI",
//     ],
//     tech: ["React", "Node.js", "MongoDB", "Clerk"],
//   },
//   {
//     title: "AI Movie Recommendation App",
//     live: "#",
//     desc: "Movie recommendation app using real-time API data.",
//     points: [
//       "External API integration",
//       "Real-time data rendering",
//       "Optimized state management",
//       "Responsive UI",
//     ],
//     tech: ["React", "APIs"],
//   },
//   {
//     title: "Help Drive",
//     live: "#",
//     desc: "Donation platform for helping underprivileged people.",
//     points: [
//       "Donation workflow UI",
//       "User interaction system",
//       "Responsive design",
//       "Clean UX",
//     ],
//     tech: ["React", "Node.js"],
//   },
// ];

// const Projects = () => {
//   return (
//     <div id="projects" className="min-h-screen text-white px-10 mt-32">
//       {/* TITLE */}
//       <motion.h2
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="text-3xl font-bold mb-12 text-center"
//       >
//         &gt; Projects
//       </motion.h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2 }}
//             whileHover={{ scale: 1.05 }}
//             className="p-6 rounded-xl border border-white/20
//             bg-white/5 backdrop-blur-md
//             shadow-lg hover:shadow-emerald-400/20 transition"
//           >
//             {/* 🔥 TOP BAR (LEFT TITLE + RIGHT LINK) */}
//             <div className="flex justify-between items-center mb-3">
//               <h3 className="text-lg font-semibold text-emerald-400">
//                 {project.title}
//               </h3>

//               <a
//                 href={project.live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-xs text-gray-400 hover:text-emerald-400 transition"
//               >
//                 Live ↗
//               </a>
//             </div>

//             {/* DESCRIPTION */}
//             <p className="text-gray-300 text-sm mb-4">{project.desc}</p>

//             {/* POINTS */}
//             <ul className="text-xs text-gray-400 mb-4 space-y-1">
//               {project.points.map((point, i) => (
//                 <li key={i}>• {point}</li>
//               ))}
//             </ul>

//             {/* TECH */}
//             <div className="flex flex-wrap gap-2">
//               {project.tech.map((tech, i) => (
//                 <span
//                   key={i}
//                   className="text-xs px-3 py-1 border border-white/30 rounded-full"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

import { motion } from "framer-motion";

const projects = [
  {
    title: "LMS Web App",
    tech: "React, Node.js, MongoDB, Clerk",
    link: "#",
    desc: "Full-stack Learning Management System for course creation and student enrollment.",
    points: [
      "Secure authentication using Clerk",
      "Course & lecture management system",
      "REST API integration",
      "Responsive dashboard UI",
    ],
  },
  {
    title: "AI Movie App",
    tech: "React, APIs",
    link: "#",
    desc: "Movie recommendation app using real-time API data.",
    points: [
      "Integrated external movie APIs",
      "Real-time data fetching",
      "Optimized state management",
      "Responsive UI design",
    ],
  },
  {
    title: "AI Movie App",
    tech: "React, APIs",
    link: "#",
    desc: "Movie recommendation app using real-time API data.",
    points: [
      "Integrated external movie APIs",
      "Real-time data fetching",
      "Optimized state management",
      "Responsive UI design",
    ],
  },
  {
    title: "AI Movie App",
    tech: "React, APIs",
    link: "#",
    desc: "Movie recommendation app using real-time API data.",
    points: [
      "Integrated external movie APIs",
      "Real-time data fetching",
      "Optimized state management",
      "Responsive UI design",
    ],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="text-white px-10 mt-32">
      <h2 className="text-3xl font-bold mb-10 font-mono">&gt; projects</h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8 font-mono">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="group relative flex flex-col gap-4 p-5 rounded-lg 
            border border-dashed border-gray-600 
            bg-gradient-to-bl from-gray-900/40 to-black/40
            hover:from-gray-800/60 hover:border-purple-400/60
            transition-all duration-300"
          >
            {/* 🔥 TOP ROW */}
            <div className="flex justify-between items-start">
              <p>
                &gt; project:{" "}
                <span className="text-purple-400">{project.title}</span>
              </p>

              {/* 🔥 OPEN LINK TOP RIGHT */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-purple-400 font-medium 
opacity-80 group-hover:opacity-100 hover:underline transition"
              >
                open ↗
              </a>
            </div>

            <p>&gt; status: deployed</p>

            <p className="text-gray-300 text-sm">&gt; desc: {project.desc}</p>

            <div className="text-xs text-gray-400 space-y-1">
              {project.points.map((point, i) => (
                <p key={i}>&gt; {point}</p>
              ))}
            </div>

            <p>
              &gt; tech: <span className="text-gray-300">{project.tech}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
