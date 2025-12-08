import { motion } from 'framer-motion';

interface OrbitVisualizationProps {
  objectName: string;
  isHyperbolic?: boolean;
}

const OrbitVisualization = ({ objectName, isHyperbolic = true }: OrbitVisualizationProps) => {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full" />
      
      {/* Sun */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-yellow-300 via-orange-400 to-orange-600 shadow-[0_0_40px_rgba(255,200,100,0.6)]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Planetary orbits (simplified) */}
      {[60, 90, 120].map((size, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-muted/20"
          style={{ width: size, height: size }}
        />
      ))}

      {/* Hyperbolic trajectory */}
      {isHyperbolic && (
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="trajectoryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="30%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="70%" stopColor="hsl(var(--secondary))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 20 180 Q 100 60 180 20"
            fill="none"
            stroke="url(#trajectoryGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
        </svg>
      )}

      {/* Object */}
      <motion.div
        className="absolute w-4 h-4"
        initial={{ top: '85%', left: '15%' }}
        whileInView={{ top: '15%', left: '85%' }}
        viewport={{ once: true }}
        transition={{ duration: 3, ease: 'easeInOut' }}
      >
        <div className="w-full h-full rounded-full bg-gradient-radial from-primary via-primary/80 to-transparent shadow-[0_0_20px_hsl(var(--primary)/0.8)]" />
      </motion.div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 text-xs text-muted-foreground font-mono">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-3 h-0.5 bg-gradient-to-r from-primary to-secondary" />
          <span>Hyperbolic trajectory</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <span>Sun</span>
        </div>
      </div>

      <div className="absolute top-4 right-4 text-sm font-display text-primary">
        {objectName}
      </div>
    </div>
  );
};

export default OrbitVisualization;
