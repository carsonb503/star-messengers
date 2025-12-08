import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_30px_hsl(var(--primary)/0.8)]"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <div className="section-divider" />
    </div>
  );
};

export default SectionDivider;
