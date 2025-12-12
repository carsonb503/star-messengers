import CaseFileHeader from '../CaseFileHeader';

const BorisovSection = () => {
  return (
    <section id="borisov" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <CaseFileHeader
          caseNumber="02"
          title="2I/Borisov"
          subtitle="The First Interstellar Comet"
          year="2019"
          status="confirmed"
          learnMoreLink="/borisov"
        />
      </div>
    </section>
  );
};

export default BorisovSection;
