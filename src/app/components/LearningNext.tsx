import { BookOpen, Rocket, Target } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function LearningNext() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const learningItems = [
    {
      status: "배우는 중",
      icon: BookOpen,
      items: ["Next.js", "React Server Components", "GraphQL"],
      color: "blue"
    },
    {
      status: "관심 있는 분야",
      icon: Target,
      items: ["Three.js", "WebGL", "D3.js", "데이터 시각화"],
      color: "purple"
    },
    {
      status: "확장하고 싶은 역량",
      icon: Rocket,
      items: ["성능 최적화", "접근성(A11y)", "테스트 주도 개발", "시스템 디자인"],
      color: "green"
    }
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-500/10",
      icon: "bg-blue-500/20",
      iconColor: "text-blue-400",
      tag: "bg-blue-500/20 text-blue-300 border-blue-500/30"
    },
    purple: {
      bg: "bg-purple-500/10",
      icon: "bg-purple-500/20",
      iconColor: "text-purple-400",
      tag: "bg-purple-500/20 text-purple-300 border-purple-500/30"
    },
    green: {
      bg: "bg-green-500/10",
      icon: "bg-green-500/20",
      iconColor: "text-green-400",
      tag: "bg-green-500/20 text-green-300 border-green-500/30"
    }
  };

  return (
    <section id="learning" className="min-h-screen snap-start snap-always py-20 px-6 flex items-center" ref={ref}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 
          className="text-3xl md:text-4xl text-center mb-4 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          앞으로 배워나갈 분야
        </motion.h2>
        <motion.p 
          className="text-center text-slate-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          성장을 멈추지 않고 계속해서 발전하고 싶은 영역들입니다
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningItems.map((item, index) => {
            const colors = colorClasses[item.color as keyof typeof colorClasses];
            return (
              <motion.div 
                key={index}
                className={`${colors.bg} p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className={`w-12 h-12 ${colors.icon} rounded-lg flex items-center justify-center mb-4 border border-slate-700/30`}>
                  <item.icon className={`w-6 h-6 ${colors.iconColor}`} />
                </div>
                <h3 className="text-lg mb-4 text-white">
                  {item.status}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.items.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1.5 ${colors.tag} rounded-lg text-sm border`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}