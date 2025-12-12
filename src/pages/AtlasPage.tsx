import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, FileQuestion, Eye } from 'lucide-react';
import StarField from '@/components/StarField';
import Navigation from '@/components/Navigation';
import CaseFileHeader from '@/components/CaseFileHeader';
import DataCard from '@/components/DataCard';
import InfoPanel from '@/components/InfoPanel';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';

const AtlasPage = () => {
  return (
    <>
      <Helmet>
        <title>3I/ATLAS - The Newest Mystery | ISV Files</title>
        <meta 
          name="description" 
          content="Learn about 3I/ATLAS, the third confirmed interstellar object. Discover what we know about this ongoing investigation and what it might reveal about interstellar visitors." 
        />
      </Helmet>

      <div className="relative min-h-screen">
        <StarField />
        <Navigation />
        
        <main>
          <section className="relative py-24 px-6">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal className="mb-8">
                <Button asChild variant="ghost" size="sm">
                  <Link to="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
              </ScrollReveal>

              <CaseFileHeader
                caseNumber="03"
                title="3I/ATLAS"
                subtitle="The Newest Mystery"
                year="2025"
                status="ongoing"
              />

              {/* Summary Section */}
              <ScrollReveal delay={0.2}>
                <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 border border-primary/20">
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    Overview
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                  Comet 3I/ATLAS was first discovered on July 1st, 2025 by the Asteroid Terrestrial-impact Last Alert System (ATLAS), making it the most recent and most talked about interstellar object so far. It is currently still under investigation, so not all the details are known about it yet. However, what we do know about it is quite fascinating. At first observation, it was apparent that this comet is nothing like 1I/ʻOumuamua or 2I/Borisov; it had an odd tail, pointed directly at the sun rather than trailing behind it. Imaging suggests that its nucleic diameter is less than 1 km.
Possibly the most interesting characteristic of 3I/ATLAS is the chemical composition of the comet. It has an abundance of methanol and hydrogen cyanide, which are precursors to organic compounds necessary for life. The composition suggests that it originated from a very different star system compared to ours. Its’ place of origin is hypothesized to be the Milky Way’s thick disk or thin disk. If it’s from the thick disk, it’s possible that the comet could be at least 7 billion years old. Observations of the coma and tail by the James Webb Space Telescope reveal that the chemical composition of 3I/ATLAS is made up of large amounts of carbon dioxide, and trace amounts of water ice, water vapor, carbon monoxide gas, and carbonyl sulfide gas. Further spectroscopy additionally detects cyanide gas and nickel vapor in the coma. 
Perhaps the most intriguing part of the comet is the oddly oriented coma, pointed in the direction of the Sun, which is towards the direction of the comet, rather than away.
Typically, the solar winds will blow any outgassed matter away from the Sun, but the likely cause of this opposed direction is the sublimation of ice on the comet. Additionally, the interactions from the solar winds with the comet were recently found (just a few days ago) to be emitting x-ray radiation, which was imaged and captured by Japan’s XRISM satellite and ESA’s XMM-Newton, showing a faint glow around the nucleus.
                  </p>
                </div>
              </ScrollReveal>

              {/* Key Data Cards */}
              <ScrollReveal delay={0.3}>
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
              <ScrollReveal delay={0.4}>
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
                <ScrollReveal delay={0.5}>
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

                <ScrollReveal delay={0.6}>
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
              <ScrollReveal delay={0.7}>
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
        </main>

        <footer className="relative z-10 py-12 px-6 border-t border-border/30">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              An educational experience about interstellar objects.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              Data sourced from NASA, ESA, and peer-reviewed astronomical publications.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AtlasPage;

