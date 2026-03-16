import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineItems = [
    {
      date: "2022.03",
      title: "대학 입학",
      description: "새로운 환경에서 진로를 고민하며 대학 생활을 시작했습니다."
    },
    {
      date: "2023.03",
      title: "개발 시작",
      description: "프로그래밍 기초를 공부하며 개발 학습을 본격적으로 시작했습니다."
    },
    {
      date: "2024.03",
      title: "컴퓨터공학 전공",
      description: "컴퓨터공학 전공 과정을 통해 CS 기초를 체계적으로 학습했습니다."
    },
    {
      date: "2025.03",
      title: "휴식",
      description: "방향을 정리하고 다시 도약하기 위한 휴식 시간을 가졌습니다."
    },
    {
      date: "2026.03",
      title: "DWNC 입부",
      description: "AI 코딩과 실전 프로젝트 경험을 쌓기 위해 DWNC에 입부했습니다."
    }
  ];

  return (
    <section id="timeline" className="min-h-screen snap-start snap-always py-20 px-6 bg-slate-900/50 flex items-center" ref={ref}>
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2 
          className="text-3xl md:text-4xl text-center mb-4 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          성장 타임라인
        </motion.h2>
        <motion.p 
          className="text-center text-slate-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          개발자로서의 여정과 성장 과정입니다
        </motion.p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700 md:left-1/2 md:-ml-px"></div>
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div 
                key={index}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {/* Content */}
                <div className={`flex-1 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <div className="bg-slate-800/50 p-6 rounded-xl shadow-lg border border-slate-700/50 inline-block w-full md:w-auto md:max-w-md backdrop-blur-sm">
                    <span className="text-sm text-blue-400 font-medium">
                      {item.date}
                    </span>
                    <h3 className="text-lg mt-2 mb-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Circle marker */}
                <div className="absolute left-8 md:left-1/2 -ml-2 md:-ml-3">
                  <div className="w-4 h-4 md:w-6 md:h-6 bg-blue-500 rounded-full border-4 border-slate-900 shadow-lg shadow-blue-500/50"></div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
