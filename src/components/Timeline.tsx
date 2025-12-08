import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  highlight?: boolean;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline = ({ events }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

      <div className="space-y-12">
        {events.map((event, index) => (
          <ScrollReveal
            key={index}
            delay={index * 0.1}
            direction={index % 2 === 0 ? 'left' : 'right'}
          >
            <div className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Dot */}
              <motion.div
                className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 z-10 ${
                  event.highlight 
                    ? 'bg-secondary shadow-[0_0_20px_hsl(var(--secondary)/0.6)]' 
                    : 'bg-primary shadow-[0_0_15px_hsl(var(--primary)/0.5)]'
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring' }}
              />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <span className={`text-sm font-medium ${event.highlight ? 'text-secondary' : 'text-primary'}`}>
                  {event.date}
                </span>
                <h4 className="text-lg font-display font-semibold text-foreground mt-1">
                  {event.title}
                </h4>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
