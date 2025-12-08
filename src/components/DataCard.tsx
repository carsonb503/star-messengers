import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface DataCardProps {
  title: string;
  value: string;
  unit?: string;
  icon?: ReactNode;
  description?: string;
  variant?: 'default' | 'highlight' | 'warning';
}

const DataCard = ({ title, value, unit, icon, description, variant = 'default' }: DataCardProps) => {
  const variants = {
    default: 'border-border/50 hover:border-primary/50',
    highlight: 'border-primary/30 hover:border-primary bg-primary/5',
    warning: 'border-secondary/30 hover:border-secondary bg-secondary/5',
  };

  return (
    <motion.div
      className={`relative p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 card-glow gradient-border ${variants[variant]}`}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
          {title}
        </span>
        {icon && (
          <span className="text-primary opacity-70">
            {icon}
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-display font-bold text-foreground">
          {value}
        </span>
        {unit && (
          <span className="text-sm text-muted-foreground">
            {unit}
          </span>
        )}
      </div>
      {description && (
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default DataCard;
