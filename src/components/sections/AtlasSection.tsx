import { HelpCircle, FileQuestion, Eye } from 'lucide-react';
import CaseFileHeader from '../CaseFileHeader';
import DataCard from '../DataCard';
import InfoPanel from '../InfoPanel';
import ScrollReveal from '../ScrollReveal';

const AtlasSection = () => {
  return (
    <section id="atlas" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <CaseFileHeader
          caseNumber="03"
          title="3I/ATLAS"
          subtitle="The Newest Mystery"
          year="2025"
          status="ongoing"
        />

        {/* Key Data Cards */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <DataCard
              title="Discovery"
              value="ATLAS"
              description="Asteroid Terrestrial-impact Last Alert System in South Africa"
            />
            <DataCard
              title="Status"
              value="Confirmed"
              unit="3I"
              description="Third interstellar object ever detected"
              variant="highlight"
            />
            <DataCard
              title="Perihelion"
              value="Oct 2025"
              description="Closest approach to the Sun expected"
            />
            <DataCard
              title="Type"
              value="Comet"
              description="Shows cometary activity with visible coma"
            />
          </div>
        </ScrollReveal>

        {/* Speculation Warning */}
        <ScrollReveal delay={0.2}>
          <div className="mb-12 p-6 rounded-xl border border-secondary/30 bg-secondary/5 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-secondary/20">
                <HelpCircle className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  Ongoing Investigation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  3I/ATLAS was discovered in early 2025 and is still being studied. The information below represents 
                  our current understanding and includes <span className="text-secondary font-medium">clearly labeled speculation</span> based 
                  on preliminary observations.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ScrollReveal delay={0.3}>
            <InfoPanel
              title="What We Know"
              icon={<Eye className="w-5 h-5" />}
              variant="discovery"
            >
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cosmic-green mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Hyperbolic orbit</strong> — Trajectory analysis confirms it originated outside our solar system.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cosmic-green mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Active comet</strong> — Unlike ʻOumuamua, it displays clear cometary behavior with a visible coma.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cosmic-green mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Earlier detection</strong> — Spotted while still far from the Sun, allowing extended observation time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cosmic-green mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Multiple telescopes</strong> — Being tracked by observatories worldwide including Hubble and JWST.</span>
                </li>
              </ul>
            </InfoPanel>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <InfoPanel
              title="Scientific Speculation"
              icon={<FileQuestion className="w-5 h-5" />}
              variant="mystery"
            >
              <p className="mb-4 text-sm text-secondary border-l-2 border-secondary/30 pl-3 italic">
                The following are hypotheses based on early data—not confirmed facts.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Origin system</strong> — Trajectory analysis may eventually reveal its home star or stellar association.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Composition clues</strong> — Spectroscopic analysis could reveal whether it's chemically similar to Borisov.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Age estimates</strong> — If pristine, it could be billions of years old—a time capsule from another system's formation.</span>
                </li>
              </ul>
            </InfoPanel>
          </ScrollReveal>
        </div>

        {/* Why this matters */}
        <ScrollReveal delay={0.5}>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 border border-primary/20">
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">
              Why 3I/ATLAS Matters
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Each interstellar visitor teaches us more about how common these objects are and what other planetary 
              systems look like. With improved detection technology, we're finding them more frequently—suggesting 
              the galaxy is filled with wandering debris from distant star systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The fact that we've now detected three in less than a decade indicates these messengers from 
              other star systems pass through our solar system regularly. We just needed to learn how to see them.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AtlasSection;
