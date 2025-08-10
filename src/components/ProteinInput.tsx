
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Upload, AlertCircle, CheckCircle, FileText, Dna, Loader2 } from "lucide-react";

const ProteinInput = () => {
  const [sequence, setSequence] = useState("");
  const [isValidSequence, setIsValidSequence] = useState<boolean | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Example protein sequences for demonstration
  const exampleSequences = [
    {
      name: "Insulin (Human)",
      sequence: "GIVEQCCTSICSLYQLENYCN",
      description: "Hormone protein, 20 amino acids",
      color: "neon-cyan"
    },
    {
      name: "Hemoglobin α-chain",
      sequence: "MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHGKKVADALTNAVAHVDDMPNALSALSDLHAHKLRVDPVNFKLLSHCLLVTLAAHLPAEFTPAVHASLDKFLASVSTVLTSKYR",
      description: "Oxygen transport protein, 141 amino acids",
      color: "neon-green"
    },
    {
      name: "Lysozyme (Chicken)",
      sequence: "KVFGRCELAAAMKRHGLDNYRGYSLGNWVCAAKFESNFNTQATNRNTDGSTDYGILQINSRWWCNDGRTPGSRNLCNIPCSALLSSDITASVNCAKKIVSDGNGMNAWVAWRNRCKGTDVQAWIRGCRL",
      description: "Antibacterial enzyme, 129 amino acids",
      color: "neon-pink"
    }
  ];

  const validateSequence = (seq: string) => {
    const aminoAcidPattern = /^[ACDEFGHIKLMNPQRSTVWY\s]*$/i;
    const cleanSeq = seq.replace(/\s/g, '');
    
    if (cleanSeq.length === 0) {
      setIsValidSequence(null);
      return;
    }
    
    const isValid = aminoAcidPattern.test(cleanSeq) && cleanSeq.length >= 10;
    setIsValidSequence(isValid);
  };

  const handleSequenceChange = (value: string) => {
    setSequence(value);
    validateSequence(value);
  };

  const handlePredict = async () => {
    if (!isValidSequence) return;
    
    setIsProcessing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsProcessing(false);
    
    // In a real app, this would trigger the prediction results
    console.log("Predicting structure for:", sequence.replace(/\s/g, ''));
  };

  const loadExample = (exampleSeq: string) => {
    setSequence(exampleSeq);
    validateSequence(exampleSeq);
  };

  const cleanSequence = sequence.replace(/\s/g, '');

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Protein Structure <span className="text-gradient-protein text-neon-glow">Input Panel</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Input your amino acid sequence to predict secondary structure and binding properties using our advanced AI models
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - FASTA Input */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-border-glow/20 hover-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-10 h-10 bg-neon-cyan/10 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-neon-cyan" />
                  </div>
                  FASTA Sequence Input
                </CardTitle>
                <CardDescription className="text-base">
                  Paste your protein sequence here using standard single-letter amino acid codes
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {/* Sequence Input */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-lg font-medium flex items-center gap-2">
                      <Dna className="w-5 h-5 text-neon-green" />
                      Protein Sequence
                    </label>
                    {cleanSequence.length > 0 && (
                      <div className="flex items-center gap-3">
                        {isValidSequence === true && (
                          <Badge className="bg-neon-green/10 text-neon-green border-neon-green/30 hover:bg-neon-green/20">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Valid ({cleanSequence.length} AA)
                          </Badge>
                        )}
                        {isValidSequence === false && (
                          <Badge variant="destructive" className="bg-destructive/10 border-destructive/30">
                            <AlertCircle className="w-4 h-4 mr-2" />
                            Invalid Sequence
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <Textarea
                    placeholder="Paste sequence here..."
                    value={sequence}
                    onChange={(e) => handleSequenceChange(e.target.value)}
                    className={`min-h-48 sequence-input text-base resize-none ${
                      isValidSequence === false ? 'border-destructive/50' : 
                      isValidSequence === true ? 'border-neon-green/50' : ''
                    }`}
                  />
                  
                  {isValidSequence === false && (
                    <p className="text-sm text-destructive flex items-center gap-2 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                      <AlertCircle className="w-5 h-5" />
                      Please enter a valid amino acid sequence (minimum 10 amino acids, only standard codes: A,C,D,E,F,G,H,I,K,L,M,N,P,Q,R,S,T,V,W,Y)
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6 border-t border-border/30">
                  <Button
                    onClick={handlePredict}
                    disabled={!isValidSequence || isProcessing}
                    className="btn-neon text-primary-foreground flex-1 sm:flex-none px-8 py-6 text-lg font-semibold"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5 mr-3" />
                        Run Prediction
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSequence("");
                      setIsValidSequence(null);
                    }}
                    disabled={!sequence || isProcessing}
                    className="glass-panel hover-glow border-border-glow/30 px-8 py-6 text-lg"
                  >
                    Clear
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="glass-panel hover-glow border-border-glow/30 px-8 py-6 text-lg"
                  >
                    <Upload className="w-5 h-5 mr-3" />
                    Upload File
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Example Sequences */}
          <div className="space-y-6">
            <Card className="glass-card border-border-glow/20">
              <CardHeader>
                <CardTitle className="text-xl">Example Sequences</CardTitle>
                <CardDescription>
                  Click to load pre-configured protein sequences
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {exampleSequences.map((example, index) => (
                  <div 
                    key={index}
                    className="group glass-panel p-6 rounded-xl hover-glow cursor-pointer border border-border/20 hover:border-border-glow/40 transition-all"
                    onClick={() => loadExample(example.sequence)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-3 h-3 rounded-full bg-${example.color} opacity-60 mt-1`} />
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className={`text-${example.color} hover:text-${example.color}/80 opacity-0 group-hover:opacity-100 transition-opacity`}
                      >
                        Load
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground group-hover:text-neon-cyan transition-colors">
                        {example.name}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {example.description}
                      </p>
                      <div className="font-mono text-xs text-muted-foreground/60 bg-surface/50 p-2 rounded border truncate">
                        {example.sequence.substring(0, 30)}...
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="glass-card border-border-glow/20">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 text-neon-cyan">Quick Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Sequence Length</span>
                    <span className="font-mono text-sm text-neon-green">
                      {cleanSequence.length} AA
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Est. Processing</span>
                    <span className="font-mono text-sm text-neon-pink">
                      ~{Math.max(1, Math.ceil(cleanSequence.length / 100))}s
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Model Size</span>
                    <span className="font-mono text-sm text-neon-purple">≤50M params</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProteinInput;
