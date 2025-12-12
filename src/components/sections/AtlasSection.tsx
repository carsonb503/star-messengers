import CaseFileHeader from '../CaseFileHeader';

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
          learnMoreLink="/atlas"
        />
      </div>
    </section>
  );
};

export default AtlasSection;
