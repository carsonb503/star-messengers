import { Helmet } from 'react-helmet-async';
import StarField from '@/components/StarField';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import OumuamuaSection from '@/components/sections/OumuamuaSection';
import BorisovSection from '@/components/sections/BorisovSection';
import AtlasSection from '@/components/sections/AtlasSection';
import AstrobiologySection from '@/components/sections/AstrobiologySection';
import ProjectBackgroundSection from '@/components/sections/ProjectBackgroundSection';
import SectionDivider from '@/components/SectionDivider';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Messengers From Other Star Systems | Interstellar Objects</title>
        <meta 
          name="description" 
          content="Explore the scientific stories of 'Oumuamua, Borisov, and ATLAS - the first confirmed visitors from interstellar space. An interactive journey through astronomy's newest frontier." 
        />
      </Helmet>

      <div className="relative min-h-screen">
        <StarField />
        <Navigation />
        
        <main>
          <HeroSection />
          <SectionDivider />
          <OumuamuaSection />
          <SectionDivider />
          <BorisovSection />
          <SectionDivider />
          <AtlasSection />
          <SectionDivider />
          <AstrobiologySection />
          <SectionDivider />
          <ProjectBackgroundSection />
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

export default Index;
