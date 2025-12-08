import { Dna, Rocket, Globe2, Microscope } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import Quiz from '../Quiz';

const AstrobiologySection = () => {
  const implications = [
    {
      icon: <Dna className="w-6 h-6" />,
      title: 'Panspermia Revisited',
      description: 'Interstellar objects could transport organic molecules, water, and potentially even dormant microorganisms between star systems. If life\'s building blocks can survive such journeys, life might spread across the galaxy.',
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: 'Universal Chemistry',
      description: 'Borisov\'s composition showed familiar molecules—water, carbon monoxide, hydrogen cyanide. This suggests the chemistry that led to life on Earth may be common throughout the universe.',
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: 'Sample Opportunities',
      description: 'Future missions could intercept and study interstellar objects, giving us direct samples of material from other star systems—the only way to study another solar system\'s composition without traveling there.',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Technosignature Possibilities',
      description: 'While controversial, some scientists argue we should consider that interstellar objects could, in rare cases, be artifacts of intelligent civilizations. This makes studying them even more important.',
    },
  ];

  return (
    <section id="astrobiology" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-mono tracking-widest text-cosmic-green border border-cosmic-green/30 rounded-full bg-cosmic-green/5">
              IMPLICATIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              What This Means for{' '}
              <span className="text-cosmic-green">Life Beyond Earth</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The discovery of interstellar objects has profound implications for our understanding 
              of life's origins and distribution throughout the cosmos.
            </p>
          </div>
        </ScrollReveal>

        {/* Implications Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {implications.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-cosmic-green/30 transition-all duration-300 card-glow h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cosmic-green/10 text-cosmic-green group-hover:bg-cosmic-green/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Big Takeaway */}
        <ScrollReveal>
          <div className="relative mb-20 p-8 md:p-12 rounded-2xl overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-cosmic-green/10" />
            <div className="absolute inset-0 backdrop-blur-xl" />
            
            {/* Content */}
            <div className="relative text-center">
              <blockquote className="text-xl md:text-2xl font-display text-foreground leading-relaxed mb-6">
                "We are not alone—at least, not alone in terms of having visitors from other star systems. 
                The question is no longer <em>whether</em> material travels between stars, but <em>what</em> 
                it carries."
              </blockquote>
              <p className="text-muted-foreground">
                — The implication of interstellar object discoveries
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Quiz Section */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Test Your Knowledge
            </h3>
            <p className="text-muted-foreground">
              See how much you've learned about interstellar objects.
            </p>
          </div>
        </ScrollReveal>

        <Quiz />

        {/* Closing */}
        <ScrollReveal>
          <div className="mt-20 text-center">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              As our detection capabilities improve, we'll discover more messengers from other star systems. 
              Each one brings a fragment of another world—a cosmic message in a bottle that has traveled 
              for millions of years to reach us.
            </p>
            <div className="mt-8">
              <span className="text-4xl">🌌</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AstrobiologySection;
