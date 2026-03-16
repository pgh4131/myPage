import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techCategories = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "JavaScript", "HTML/CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "RESTful API"]
    },
    {
      category: "컴퓨터 언어",
      items: ["Python", "C", "C++", "Java"]
    }
  ];

  return (
    <section id="techstack" className="min-h-screen snap-start snap-always py-20 px-6 bg-slate-900/50 flex items-center" ref={ref}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 
          className="text-3xl md:text-4xl text-center mb-4 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          기술 스택
        </motion.h2>
        <motion.p 
          className="text-center text-slate-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          현재 사용할 수 있는 기술들입니다
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="bg-slate-800/50 p-6 rounded-xl shadow-lg border border-slate-700/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <h3 className="text-xl mb-4 text-white">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <span 
                    key={itemIndex}
                    className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm border border-blue-500/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
