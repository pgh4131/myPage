import { Link } from "react-router";
import { MessageSquare, ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function GuestbookCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="guestbook" className="min-h-screen snap-start snap-always py-20 px-6 flex flex-col items-center justify-between" ref={ref}>
      <div className="max-w-4xl mx-auto w-full flex-1 flex items-center">
        <motion.div 
          className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-12 text-center text-white shadow-xl shadow-blue-500/20 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl mb-4">
            방명록
          </h2>
          
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            저에게 남기고 싶은 메시지가 있으신가요? <br />
            익명으로 가볍게 인사나 응원의 말을 남겨주세요!
          </p>
          
          <Link 
            to="/guestbook"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            방명록 남기러 가기
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
      
      <footer className="text-center text-slate-500 text-sm pb-4">
        <p>© 2026 박건형. All rights reserved.</p>
      </footer>
    </section>
  );
}
