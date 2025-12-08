import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

interface CaseFileHeaderProps {
  caseNumber: string;
  title: string;
  subtitle: string;
  year: string;
  status?: 'confirmed' | 'mysterious' | 'ongoing';
}

const CaseFileHeader = ({ caseNumber, title, subtitle, year, status = 'confirmed' }: CaseFileHeaderProps) => {
  const statusColors = {
    confirmed: 'text-cosmic-green bg-cosmic-green/10 border-cosmic-green/30',
    mysterious: 'text-secondary bg-secondary/10 border-secondary/30',
    ongoing: 'text-primary bg-primary/10 border-primary/30',
  };

  const statusLabels = {
    confirmed: 'CONFIRMED INTERSTELLAR',
    mysterious: 'ANOMALOUS',
    ongoing: 'UNDER INVESTIGATION',
  };

  return (
    <ScrollReveal className="mb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <motion.div
            className="flex items-center gap-4 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-mono text-muted-foreground tracking-widest">
              CASE FILE
            </span>
            <span className="text-4xl md:text-5xl font-display font-bold text-primary text-glow">
              {caseNumber}
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-2">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2">
          <span className="text-5xl md:text-6xl font-display font-light text-muted-foreground/30">
            {year}
          </span>
          <span className={`px-3 py-1 text-xs font-mono tracking-wider rounded-full border ${statusColors[status]}`}>
            {statusLabels[status]}
          </span>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default CaseFileHeader;
