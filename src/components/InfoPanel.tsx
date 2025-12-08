import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface InfoPanelProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: 'default' | 'mystery' | 'discovery';
}

const InfoPanel = ({ title, children, icon, variant = 'default' }: InfoPanelProps) => {
  const variants = {
    default: {
      border: 'border-border/50',
      accent: 'bg-primary/10',
      title: 'text-primary',
    },
    mystery: {
      border: 'border-secondary/30',
      accent: 'bg-secondary/10',
      title: 'text-secondary',
    },
    discovery: {
      border: 'border-cosmic-green/30',
      accent: 'bg-cosmic-green/10',
      title: 'text-cosmic-green',
    },
  };

  const style = variants[variant];

  return (
    <motion.div
      className={`rounded-xl border ${style.border} overflow-hidden backdrop-blur-sm`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`px-6 py-4 ${style.accent} border-b ${style.border} flex items-center gap-3`}>
        {icon && <span className={style.title}>{icon}</span>}
        <h3 className={`font-display font-semibold ${style.title}`}>{title}</h3>
      </div>
      <div className="p-6 text-muted-foreground leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
};

export default InfoPanel;
