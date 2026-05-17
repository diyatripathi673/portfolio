import { motion } from "framer-motion";

const TechStack = () => {
  const data = [
    {
      title: "Frontend",
      items: ["React.js", "Next.js", "HTML5", "CSS3"],
    },
    {
      title: "Backend & Integration",
      items: [
        "Node.js",
        "Express.js",
        "REST API Development",
        "API Integration",
      ],
    },
    {
      title: "Databases",
      items: ["MongoDB", "SQL (Basics)"],
    },
    {
      title: "Programming Languages",
      items: ["JavaScript (ES6+)", "Python", "Java (Basic)"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "GitLab", "Postman", "VS Code"],
    },
    {
      title: "Core Concepts",
      items: ["OOPS", "DBMS", "API Design Principles", "HTTP Methods"],
    },
  ];

  return (
    <div className="mt-14 text-white px-10 border border-dashed border-gray-400/40  hover:border-amber-400 rounded-lg py-8  ">
      <h2 className="text-2xl font-bold mb-10">&gt; tech stack</h2>

      {/* GRID LAYOUT */}
      <div className="grid md:grid-cols-2 gap-6">
        {data.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="
              border border-dashed border-gray-400/40
              rounded-lg
              p-5
              hover:border-amber-400
              transition duration-300
            "
          >
            <h3 className="text-sm text-amber-400 mb-3">{section.title}</h3>

            <div className="flex flex-wrap gap-2">
              {section.items.map((item, j) => (
                <span
                  key={j}
                  className="
                    text-xs px-3 py-1
                    border border-dashed border-gray-400/40
                    rounded-full
                    hover:border-amber-400
                    transition
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
