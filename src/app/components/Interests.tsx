import { Code, Music, Camera, Gamepad2, BookOpen, Moon } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Interests() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const interests = [
    { icon: Code, label: "웹 개발", description: "프론트엔드 구현과 UI 개선" },
    { icon: Gamepad2, label: "게임", description: "전략 게임과 액션 게임 즐기기" },
    { icon: Camera, label: "사진", description: "일상 기록과 풍경 촬영" },
    { icon: Music, label: "음악 감상", description: "작업할 때 집중을 돕는 플레이리스트" },
    { icon: BookOpen, label: "웹툰", description: "장르 가리지 않고 꾸준히 감상" },
    { icon: Moon, label: "잠", description: "충분한 휴식으로 컨디션 유지" },
  ];

  return (
    <section id="interests" className="min-h-screen snap-start snap-always py-20 px-6 flex items-center" ref={ref}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 
          className="text-3xl md:text-4xl text-center mb-4 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          관심사 & 취미
        </motion.h2>
        <motion.p 
          className="text-center text-slate-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          제가 좋아하고 시간을 보내는 것들입니다
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <motion.div 
              key={index}
              className="bg-slate-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 border border-blue-500/30">
                <interest.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg mb-2 text-white">
                {interest.label}
              </h3>
              <p className="text-sm text-slate-400">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
