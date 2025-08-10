
import Hero from "@/components/Hero";
import ProteinInput from "@/components/ProteinInput";
import PredictionResults from "@/components/PredictionResults";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProteinInput />
      <PredictionResults />
    </div>
  );
};

export default Index;
