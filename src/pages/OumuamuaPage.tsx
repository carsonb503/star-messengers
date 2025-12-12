import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Compass, Telescope } from 'lucide-react';
import StarField from '@/components/StarField';
import Navigation from '@/components/Navigation';
import CaseFileHeader from '@/components/CaseFileHeader';
import DataCard from '@/components/DataCard';
import Timeline from '@/components/Timeline';
import OrbitVisualization from '@/components/OrbitVisualization';
import InfoPanel from '@/components/InfoPanel';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';

const OumuamuaPage = () => {
  const timelineEvents = [
    {
      date: 'October 19, 2017',
      title: 'First Detection',
      description: "Pan-STARRS1 telescope in Hawaii captures a faint, fast-moving object. Initial classification: near-Earth asteroid.",
    },
    {
      date: 'October 22, 2017',
      title: 'Orbital Analysis Begins',
      description: 'Astronomers notice something strange—the trajectory doesn\'t match any known orbit type.',
      highlight: true,
    },
    {
      date: 'October 25, 2017',
      title: 'Interstellar Confirmation',
      description: 'The object\'s hyperbolic orbit is confirmed. It came from outside our solar system.',
    },
    {
      date: 'November 2017',
      title: 'Named ʻOumuamua',
      description: 'Hawaiian for "a messenger from afar arriving first." Designated 1I/ as the first interstellar object.',
    },
    {
      date: 'December 2017',
      title: 'Anomalous Acceleration',
      description: 'Scientists detect non-gravitational acceleration as it leaves the solar system—no visible outgassing.',
      highlight: true,
    },
  ];

  return (
    <>
      <Helmet>
        <title>1I/ʻOumuamua - The First Interstellar Visitor | ISV Files</title>
        <meta 
          name="description" 
          content="Discover the story of ʻOumuamua, the first confirmed interstellar object to pass through our solar system. Learn about its mysterious properties, anomalous acceleration, and the scientific hypotheses explaining its strange behavior." 
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
                caseNumber="01"
                title="1I/ʻOumuamua"
                subtitle="The First Interstellar Visitor"
                year="2017"
                status="mysterious"
              />

              {/* Summary Section */}
              <ScrollReveal delay={0.2}>
                <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 border border-primary/20">
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    Overview
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    On October 19, 2017, astronomers using the Pan-STARRS1 telescope in Hawaii detected an object unlike 
                    anything seen before. Initially thought to be a near-Earth asteroid, detailed orbital analysis revealed 
                    something extraordinary: this visitor came from beyond our solar system.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Named ʻOumuamua (Hawaiian for "a messenger from afar arriving first"), this object became the first 
                    confirmed interstellar visitor—designated 1I/ʻOumuamua. Its hyperbolic orbit (eccentricity {'>'} 1) meant 
                    it was traveling too fast to be captured by the Sun's gravity, confirming its interstellar origin.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    But ʻOumuamua's mysteries didn't end there. As it sped away from the Sun, it exhibited an unexplained 
                    acceleration that couldn't be accounted for by gravity alone. With no visible coma or tail—the typical 
                    signs of cometary outgassing—scientists were left puzzled by this enigmatic visitor from another star system.
                  </p>
                </div>
              </ScrollReveal>

              {/* Key Data Cards */}
              <ScrollReveal delay={0.3}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                  <DataCard
                    title="Velocity"
                    value="26.3"
                    unit="km/s"
                    description="At perihelion—too fast to be captured by the Sun's gravity"
                    variant="highlight"
                  />
                  <DataCard
                    title="Length"
                    value="~400"
                    unit="meters"
                    description="Estimated from brightness variations; highly elongated shape"
                  />
                  <DataCard
                    title="Eccentricity"
                    value="1.20"
                    description=">1 means hyperbolic orbit, confirming interstellar origin"
                    variant="highlight"
                  />
                  <DataCard
                    title="Origin"
                    value="Lyra"
                    description="Came from the direction of the constellation Lyra"
                  />
                </div>
              </ScrollReveal>

              {/* Two column layout */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <ScrollReveal delay={0.4}>
                  <InfoPanel
                    title="Why Scientists Were Confused"
                    icon={<AlertTriangle className="w-5 h-5" />}
                    variant="mystery"
                  >
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">No coma or tail</strong> — Despite being expected to show cometary activity near the Sun, it appeared completely inert.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">Extreme shape</strong> — Brightness variations suggested a 10:1 length-to-width ratio, unlike any known asteroid or comet.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">Unexplained acceleration</strong> — As it left our solar system, it sped up slightly without any visible outgassing.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">Tumbling rotation</strong> — It spins chaotically every 7-8 hours, suggesting a violent past.</span>
                      </li>
                    </ul>
                  </InfoPanel>
                </ScrollReveal>

                <ScrollReveal delay={0.5}>
                  <div className="flex flex-col gap-4">
                    <InfoPanel
                      title="Leading Hypotheses"
                      icon={<Telescope className="w-5 h-5" />}
                    >
                      <p className="mb-3">
                        Scientists have proposed several explanations for ʻOumuamua's strange properties:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong className="text-foreground">Nitrogen ice fragment</strong> — From a Pluto-like world in another system</li>
                        <li>• <strong className="text-foreground">Hydrogen iceberg</strong> — Invisible outgassing could explain acceleration</li>
                        <li>• <strong className="text-foreground">Dust bunny</strong> — Extremely porous, fluffy structure</li>
                        <li>• <strong className="text-foreground">Artificial origin</strong> — Proposed by Harvard astronomer Avi Loeb (controversial)</li>
                      </ul>
                    </InfoPanel>

                    <OrbitVisualization objectName="ʻOumuamua" isHyperbolic />
                  </div>
                </ScrollReveal>
              </div>

              {/* Timeline */}
              <ScrollReveal delay={0.6}>
                <h3 className="text-xl font-display font-semibold text-foreground mb-8 flex items-center gap-3">
                  <Compass className="w-5 h-5 text-primary" />
                  Discovery Timeline
                </h3>
                <Timeline events={timelineEvents} />
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

export default OumuamuaPage;

