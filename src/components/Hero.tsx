
import { Button } from "@/components/ui/button";
import { ArrowRight, Atom, Dna, Microscope } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-elevated" />
      
      {/* Animated Background Molecules */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 molecule-float">
          <Atom className="w-12 h-12 text-molecular/20" />
        </div>
        <div className="absolute top-40 right-20 molecule-float" style={{ animationDelay: '2s' }}>
          <Dna className="w-16 h-16 text-helix/20" />
        </div>
        <div className="absolute bottom-32 left-20 molecule-float" style={{ animationDelay: '4s' }}>
          <Microscope className="w-10 h-10 text-protein/20" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-surface-elevated/50 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-molecular rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              MIT Hackathon Challenge • Protein Structure Prediction
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">AlphaHelix</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Lightweight AI for protein structure prediction and drug discovery.
            <br />
            <span className="text-molecular">Democratizing molecular research</span> with efficient, specialized models.
          </p>
          
          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="data-card p-6 rounded-xl interactive-card">
              <div className="w-12 h-12 bg-molecular/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Dna className="w-6 h-6 text-molecular" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secondary Structure</h3>
              <p className="text-sm text-muted-foreground">
                Predict alpha-helix, beta-sheet, and coil states from amino acid sequences
              </p>
            </div>
            
            <div className="data-card p-6 rounded-xl interactive-card">
              <div className="w-12 h-12 bg-helix/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Atom className="w-6 h-6 text-helix" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Binding Affinity</h3>
              <p className="text-sm text-muted-foreground">
                Estimate ligand-protein binding strength for drug discovery
              </p>
            </div>
            
            <div className="data-card p-6 rounded-xl interactive-card">
              <div className="w-12 h-12 bg-protein/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Microscope className="w-6 h-6 text-protein" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Family Classification</h3>
              <p className="text-sm text-muted-foreground">
                Classify proteins into structural and functional families
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-molecular hover:bg-molecular/90 text-primary-foreground px-8 py-4 text-lg font-semibold group"
            >
              Start Prediction
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border/50 hover:border-molecular/50 hover:text-molecular px-8 py-4 text-lg font-semibold"
            >
              View Documentation
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-molecular mb-1">≤50M</div>
              <div className="text-sm text-muted-foreground">Parameters</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-helix mb-1">~90%</div>
              <div className="text-sm text-muted-foreground">Accuracy Target</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-protein mb-1">Real-time</div>
              <div className="text-sm text-muted-foreground">Predictions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
