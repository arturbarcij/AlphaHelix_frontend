import { Button } from "@/components/ui/button";
import { ArrowRight, Atom, Dna, Microscope, Play, Download, Upload, BarChart3 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Futuristic Background with Particles */}
      <div className="absolute inset-0 bg-gradient-surface" />
      
      {/* Animated Particle Field */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 particle-float">
          <div className="w-2 h-2 rounded-full bg-neon-cyan opacity-60" />
        </div>
        <div className="absolute top-40 right-20 particle-float" style={{ animationDelay: '2s' }}>
          <div className="w-3 h-3 rounded-full bg-neon-pink opacity-40" />
        </div>
        <div className="absolute bottom-32 left-20 particle-float" style={{ animationDelay: '4s' }}>
          <div className="w-1 h-1 rounded-full bg-neon-green opacity-80" />
        </div>
        <div className="absolute top-1/3 left-1/3 particle-float" style={{ animationDelay: '1s' }}>
          <div className="w-2 h-2 rounded-full bg-neon-blue opacity-50" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 particle-float" style={{ animationDelay: '3s' }}>
          <div className="w-1 h-1 rounded-full bg-neon-purple opacity-70" />
        </div>
        
        {/* Molecular Icons with Glow */}
        <div className="absolute top-32 right-32 particle-float">
          <Atom className="w-8 h-8 text-neon-cyan opacity-30" />
        </div>
        <div className="absolute bottom-40 left-32 particle-float" style={{ animationDelay: '2.5s' }}>
          <Dna className="w-10 h-10 text-neon-green opacity-25" />
        </div>
        <div className="absolute top-1/2 right-16 particle-float" style={{ animationDelay: '1.5s' }}>
          <Microscope className="w-6 h-6 text-neon-pink opacity-35" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Scientific Badge */}
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-8 py-4 mb-12 animate-fade-in">
            <div className="w-3 h-3 bg-neon-cyan rounded-full animate-glow-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              MIT Hackathon Challenge • Advanced Protein Structure Prediction
            </span>
          </div>
          
          {/* Main Title with Improved Lighting */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient-protein drop-shadow-[0_0_40px_rgba(6,182,212,0.4)] filter brightness-110">
              AlphaHelix
            </span>
          </h1>
          
          {/* Subtitle with Better Contrast */}
          <p className="text-2xl md:text-3xl text-foreground mb-4 animate-fade-in font-light drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]" style={{ animationDelay: '0.2s' }}>
            Beyond Protein Structure Prediction
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-16 leading-relaxed animate-fade-in max-w-4xl mx-auto drop-shadow-sm" style={{ animationDelay: '0.4s' }}>
            Cutting-edge AI for molecular research and drug discovery.
            <br />
            <span className="text-neon-cyan font-medium drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">Democratizing biotechnology</span> with lightweight, specialized models.
          </p>
          
          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="btn-neon text-primary-foreground px-10 py-6 text-lg font-semibold group relative z-10"
            >
              <Play className="mr-3 w-5 h-5" />
              Run Prediction
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-panel hover-glow px-10 py-6 text-lg font-semibold border-border-glow/30"
            >
              <Upload className="mr-3 w-5 h-5" />
              Upload Structure
            </Button>
          </div>
          
          {/* Feature Grid with Improved Title Readability */}
          <div className="grid md:grid-cols-4 gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="glass-card p-8 rounded-2xl hover-glow group">
              <div className="w-16 h-16 bg-neon-cyan/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-neon-cyan/20 transition-colors">
                <Dna className="w-8 h-8 text-neon-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neon-cyan drop-shadow-[0_0_10px_rgba(6,182,212,0.3)] brightness-110">
                Secondary Structure
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Predict alpha-helix, beta-sheet, and coil conformations with high accuracy
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl hover-glow group">
              <div className="w-16 h-16 bg-neon-green/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-neon-green/20 transition-colors">
                <Atom className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neon-green drop-shadow-[0_0_10px_rgba(34,197,94,0.3)] brightness-110">
                Binding Affinity
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Estimate ligand-protein interactions for accelerated drug discovery
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl hover-glow group">
              <div className="w-16 h-16 bg-neon-pink/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-neon-pink/20 transition-colors">
                <Microscope className="w-8 h-8 text-neon-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neon-pink drop-shadow-[0_0_10px_rgba(236,72,153,0.3)] brightness-110">
                Family Classification
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Classify proteins into structural and functional families
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl hover-glow group">
              <div className="w-16 h-16 bg-neon-purple/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-neon-purple/20 transition-colors">
                <BarChart3 className="w-8 h-8 text-neon-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neon-purple drop-shadow-[0_0_10px_rgba(147,51,234,0.3)] brightness-110">
                Confidence Scoring
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Real-time confidence metrics and uncertainty quantification
              </p>
            </div>
          </div>
          
          {/* Bottom Toolbar */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '1s' }}>
            <Button variant="outline" className="glass-panel hover-glow border-border-glow/20">
              <Upload className="w-4 h-4 mr-2" />
              Upload File
            </Button>
            <Button variant="outline" className="glass-panel hover-glow border-border-glow/20">
              <Download className="w-4 h-4 mr-2" />
              Download Model
            </Button>
            <Button variant="outline" className="glass-panel hover-glow border-border-glow/20">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analyze Structure
            </Button>
          </div>
          
          {/* Performance Stats with Enhanced Readability */}
          <div className="flex flex-wrap justify-center gap-12 mt-20 pt-12 border-t border-border/30 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-cyan mb-2 drop-shadow-[0_0_20px_rgba(6,182,212,0.4)] brightness-110">≤50M</div>
              <div className="text-sm text-muted-foreground">Parameters</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-green mb-2 drop-shadow-[0_0_20px_rgba(34,197,94,0.4)] brightness-110">~90%</div>
              <div className="text-sm text-muted-foreground">Accuracy Target</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-pink mb-2 drop-shadow-[0_0_20px_rgba(236,72,153,0.4)] brightness-110">Real-time</div>
              <div className="text-sm text-muted-foreground">Predictions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-purple mb-2 drop-shadow-[0_0_20px_rgba(147,51,234,0.4)] brightness-110">GPU-Free</div>
              <div className="text-sm text-muted-foreground">Inference</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
