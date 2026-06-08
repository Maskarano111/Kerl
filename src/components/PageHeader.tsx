import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-emerald-700 text-white pt-28 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-100 h-100 sm:w-150 sm:h-150 bg-emerald-600 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/4" />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 px-2 text-white"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-base xs:text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto px-2"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}
