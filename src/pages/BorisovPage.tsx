import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Beaker, Scale, Sparkles } from 'lucide-react';
import StarField from '@/components/StarField';
import Navigation from '@/components/Navigation';
import CaseFileHeader from '@/components/CaseFileHeader';
import DataCard from '@/components/DataCard';
import InfoPanel from '@/components/InfoPanel';
import ScrollReveal from '@/components/ScrollReveal';
import OrbitVisualization from '@/components/OrbitVisualization';
import { Button } from '@/components/ui/button';

const BorisovPage = () => {
  const comparisonData = [
    { property: 'Type', oumuamua: 'Unknown (no coma)', borisov: 'Comet (clear coma & tail)' },
    { property: 'Size', oumuamua: '~400m elongated', borisov: '~1km nucleus' },
    { property: 'Composition', oumuamua: 'Unknown', borisov: 'CO, H₂O, HCN detected' },
    { property: 'Activity', oumuamua: 'None observed', borisov: 'Active outgassing' },
    { property: 'Detection', oumuamua: 'Outbound', borisov: 'Inbound (2 months before perihelion)' },
  ];

  return (
    <>
      <Helmet>
        <title>2I/Borisov - The First Interstellar Comet | ISV Files</title>
        <meta 
          name="description" 
          content="Explore 2I/Borisov, the first confirmed interstellar comet. Discover its chemical composition, comparison with ʻOumuamua, and what it reveals about material from other star systems." 
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
                caseNumber="02"
                title="2I/Borisov"
                subtitle="The First Interstellar Comet"
                year="2019"
                status="confirmed"
              />

              {/* Summary Section */}
              <ScrollReveal delay={0.2}>
                <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 border border-primary/20">
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    Overview
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                  Comet 2i was first discovered by Gennadiy Borisov, a Crimean amateur astronomer. He found it on August 29th, 2019 with a telescope he built himself. At the time of discovery, the comet was inbound 3 AU from the Sun and 3.7 AU from the Earth. It is estimated to be around 100 million years old. At first discovery, scientists were puzzled at how normal of a comet it appeared to be, especially compared to 1I/ʻOumuamua. It was immediately apparent that it was a comet, due to the visible coma and large tail. Astronomers from Yale University state that the comet’s tail was a shocking 14 times the size of Earth, while only being about between 0.4 km and 0.5 km in diameter. 2I/Borisov has an orbital eccentricity of 3.36, meaning that it is not orbiting the Sun due to its high velocity.
The comet’s chemical composition is especially interesting. Due to the fact that it was discovered so early, the extra time allowed scientists to perform thorough research on it. They were able to analyze the light patterns from the tail to determine the chemical composition of it. They discovered that it lacks water and diatomic carbon, but is abundant in carbon monoxide and amines. The high abundance of carbon monoxide is what gives the tail its blue hue. It’s estimated from the size of the coma that the comet is producing dust at a rate of 2 kg/s and losing water at 60 kg/s.
At perihelion, the comet came within about 2 AU of the Sun, which is a common distance where comets were observed to disintegrate. The Hubble Space Telescope was used to study the fragmentation of 2I/Borisov as it ejected dust and fragments around February to March 2020. It was later discovered that only about 0.1% of the total mass of the nucleus was ejected from the comet. 
                  </p>
                </div>
              </ScrollReveal>

              {/* Key Data Cards */}
              <ScrollReveal delay={0.3}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                  <DataCard
                    title="Velocity"
                    value="32.2"
                    unit="km/s"
                    description="Even faster than ʻOumuamua at similar distance"
                    variant="highlight"
                  />
                  <DataCard
                    title="CO Ratio"
                    value="2-3x"
                    description="Carbon monoxide levels 2-3× higher than typical solar system comets"
                    variant="warning"
                  />
                  <DataCard
                    title="Eccentricity"
                    value="3.36"
                    description="Strongly hyperbolic—definitely not from our solar system"
                  />
                  <DataCard
                    title="Discoverer"
                    value="Amateur"
                    description="Gennady Borisov spotted it with a homemade telescope"
                  />
                </div>
              </ScrollReveal>

              {/* Comparison Table */}
              <ScrollReveal delay={0.4}>
                <div className="mb-16">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-3">
                    <Scale className="w-5 h-5 text-primary" />
                    Comparison: ʻOumuamua vs Borisov
                  </h3>
                  <div className="rounded-xl border border-border/50 overflow-hidden backdrop-blur-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-primary/10 border-b border-border/50">
                            <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Property</th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-secondary">ʻOumuamua (2017)</th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-primary">Borisov (2019)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {comparisonData.map((row, i) => (
                            <tr key={i} className="border-b border-border/30 last:border-0">
                              <td className="px-6 py-4 text-sm text-foreground font-medium">{row.property}</td>
                              <td className="px-6 py-4 text-sm text-muted-foreground">{row.oumuamua}</td>
                              <td className="px-6 py-4 text-sm text-muted-foreground">{row.borisov}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Two column layout */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <ScrollReveal delay={0.5}>
                  <InfoPanel
                    title="Chemical Composition"
                    icon={<Beaker className="w-5 h-5" />}
                    variant="discovery"
                  >
                    <p className="mb-4">
                      Spectroscopic analysis revealed Borisov's composition, offering our first chemical glimpse of material from another star system:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                        <span className="font-mono text-sm">H₂O (Water)</span>
                        <span className="text-cosmic-green text-sm font-medium">Present</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                        <span className="font-mono text-sm">CO (Carbon Monoxide)</span>
                        <span className="text-secondary text-sm font-medium">Unusually High</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                        <span className="font-mono text-sm">HCN (Hydrogen Cyanide)</span>
                        <span className="text-cosmic-green text-sm font-medium">Detected</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                        <span className="font-mono text-sm">Nickel (Ni)</span>
                        <span className="text-cosmic-green text-sm font-medium">Detected</span>
                      </div>
                    </div>
                  </InfoPanel>
                </ScrollReveal>

                <ScrollReveal delay={0.6}>
                  <InfoPanel
                    title="What Made It Special"
                    icon={<Sparkles className="w-5 h-5" />}
                  >
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">Looked "normal"</strong> — Unlike mysterious ʻOumuamua, Borisov behaved exactly like a comet should.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">Early detection</strong> — Spotted inbound, giving astronomers months to study it.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">Pristine material</strong> — Likely never approached a star before, preserving its original composition.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span><strong className="text-foreground">Fragmentation observed</strong> — In March 2020, it split apart, revealing internal structure.</span>
                      </li>
                    </ul>
                  </InfoPanel>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.7}>
                <OrbitVisualization objectName="2I/Borisov" isHyperbolic />
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

export default BorisovPage;

