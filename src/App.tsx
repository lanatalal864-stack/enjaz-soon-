import { Clock, Rocket, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div
      className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-blue-100 selection:text-blue-900 px-4 py-8"
      dir="rtl"
    >
      {/* Background Corner Graphics */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-100/60 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="z-10 bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-16 flex flex-col items-center w-full max-w-3xl"
      >
        {/* Top Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-24 h-24 bg-blue-700 rounded-[1.5rem] flex items-center justify-center shadow-xl shadow-blue-700/20 mb-8"
        >
          <Rocket className="w-10 h-10 text-white" strokeWidth={1.5} />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-relaxed md:leading-relaxed text-center"
        >
          إنجز
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg md:text-xl text-slate-500 text-center mb-12 leading-relaxed max-w-xl"
        >
          نعمل بشغف على بناء منصة مبتكرة تلبي طموحاتكم. نحن الآن في مرحلة
          التطوير، وسنكون معكم قريباً!
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          {/* Note: Placing 'Right Button' first in DOM because 'dir=rtl' reverses flex-row order naturally */}
          
          {/* Right Button */}
          <button className="flex justify-center items-center gap-2.5 px-8 py-4 bg-slate-50 hover:bg-slate-100 text-blue-900 rounded-2xl font-semibold transition-all duration-300 shadow-sm border border-slate-200/60 ring-1 ring-black/5">
            <Sparkles className="w-5 h-5 text-blue-700" />
            <span>ترقبوا الإطلاق</span>
          </button>

          {/* Left Button */}
          <button className="flex justify-center items-center gap-2.5 px-8 py-4 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-2xl font-semibold transition-all duration-300 shadow-sm border border-blue-100 ring-1 ring-blue-500/10">
            <Clock className="w-5 h-5 text-blue-600" />
            <span>قيد الإنشاء</span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
