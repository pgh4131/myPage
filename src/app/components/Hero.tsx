import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen snap-start snap-always flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl shadow-lg shadow-blue-500/50">
            pgh
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-6xl mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          박건형
        </motion.h1>
        
        <motion.p 
          className="text-xl text-slate-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          자유전공학부 컴퓨터공학, 경제학 전공
        </motion.p>
        
        <motion.p 
          className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          새로운 기술을 배우며 성장하는 것을 즐기는 개발자입니다. <br />
          사용자 경험을 중심으로 생각하며, 깔끔한 코드를 작성하기 위해 노력합니다.
        </motion.p>
        
        <motion.div 
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a 
            href="#"
            className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
          >
            <Github className="w-6 h-6 text-slate-300" />
          </a>
          <a 
            href="#"
            className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
          >
            <Linkedin className="w-6 h-6 text-slate-300" />
          </a>
          <a 
            href="#"
            className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
          >
            <Mail className="w-6 h-6 text-slate-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
