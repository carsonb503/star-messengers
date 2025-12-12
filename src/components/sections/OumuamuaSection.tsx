import CaseFileHeader from '../CaseFileHeader';

const OumuamuaSection = () => {
  return (
    <section id="oumuamua" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <CaseFileHeader
          caseNumber="01"
          title="1I/ʻOumuamua"
          subtitle="The First Interstellar Visitor"
          year="2017"
          status="mysterious"
          learnMoreLink="/oumuamua"
        />
      </div>
    </section>
  );
};

export default OumuamuaSection;
