import { Beaker, Scale, Sparkles } from 'lucide-react';
import CaseFileHeader from '../CaseFileHeader';
import DataCard from '../DataCard';
import InfoPanel from '../InfoPanel';
import ScrollReveal from '../ScrollReveal';
import OrbitVisualization from '../OrbitVisualization';

const BorisovSection = () => {
  const comparisonData = [
    { property: 'Type', oumuamua: 'Unknown (no coma)', borisov: 'Comet (clear coma & tail)' },
    { property: 'Size', oumuamua: '~400m elongated', borisov: '~1km nucleus' },
    { property: 'Composition', oumuamua: 'Unknown', borisov: 'CO, H₂O, HCN detected' },
    { property: 'Activity', oumuamua: 'None observed', borisov: 'Active outgassing' },
    { property: 'Detection', oumuamua: 'Outbound', borisov: 'Inbound (2 months before perihelion)' },
  ];

  return (
    <section id="borisov" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <CaseFileHeader
          caseNumber="02"
          title="2I/Borisov"
          subtitle="The First Interstellar Comet"
          year="2019"
          status="confirmed"
        />

        {/* Key Data Cards */}
        <ScrollReveal delay={0.1}>
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
        <ScrollReveal delay={0.2}>
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
          <ScrollReveal delay={0.3}>
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

          <ScrollReveal delay={0.4}>
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

        <ScrollReveal delay={0.5}>
          <OrbitVisualization objectName="2I/Borisov" isHyperbolic />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BorisovSection;
