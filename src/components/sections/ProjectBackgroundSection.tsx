import { BookOpen, Code } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const ProjectBackgroundSection = () => {
  return (
    <section id="project-background" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-mono tracking-widest text-primary border border-primary/30 rounded-full bg-primary/5">
              PROJECT BACKGROUND
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              About This <span className="text-primary">Project</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A final project for ASTR 2040 by Carson Bleich and Aaron Lowe
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 border border-primary/20">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our project is pretty self explanatory—we did research on the 3 comets, 1I, 2I, and 3I, 
              and made a neat little website for it. For the research itself, we used a lot of sources 
              but mostly used NASA and New York Times to get information.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For the website, we used Lovable, which is a tool that helps build a functional website 
              for you. As we are both computer science majors as well, we were able to make some edits 
              and input our information as we pleased.
            </p>
          </div>
        </ScrollReveal>

        {/* Sources and Tools */}
        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal delay={0.2}>
            <div className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    Research Sources
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      NASA
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      New York Times
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Peer-reviewed astronomical publications
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cosmic-green/10 text-cosmic-green">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    Built With
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cosmic-green" />
                      Lovable
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cosmic-green" />
                      React & TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cosmic-green" />
                      Custom edits by Carson Bleich & Aaron Lowe
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProjectBackgroundSection;

