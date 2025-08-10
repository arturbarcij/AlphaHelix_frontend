
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Upload, AlertCircle, CheckCircle } from "lucide-react";

const ProteinInput = () => {
  const [sequence, setSequence] = useState("");
  const [isValidSequence, setIsValidSequence] = useState<boolean | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Example protein sequences for demonstration
  const exampleSequences = [
    {
      name: "Insulin (Human)",
      sequence: "GIVEQCCTSICSLYQLENYCN",
      description: "Hormone protein, 20 amino acids"
    },
    {
      name: "Hemoglobin α-chain",
      sequence: "MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHGKKVADALTNAVAHVDDMPNALSALSDLHAHKLRVDPVNFKLLSHCLLVTLAAHLPAEFTPAVHASLDKFLASVSTVLTSKYR",
      description: "Oxygen transport protein, 141 amino acids"
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
    await new Promise(resolve => setTimeout(resolve, 2000));
    
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
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Protein Structure <span className="text-molecular">Prediction</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Input your amino acid sequence to predict secondary structure and binding properties
          </p>
        </div>

        <Card className="data-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-molecular" />
              Amino Acid Sequence Input
            </CardTitle>
            <CardDescription>
              Enter a protein sequence using standard single-letter amino acid codes (A, C, D, E, F, G, H, I, K, L, M, N, P, Q, R, S, T, V, W, Y)
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Example Sequences */}
            <div>
              <h4 className="text-sm font-medium mb-3 text-muted-foreground">Example Sequences</h4>
              <div className="grid gap-3">
                {exampleSequences.map((example, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 bg-surface-elevated rounded-lg border border-border/30 hover:border-molecular/50 transition-colors cursor-pointer"
                    onClick={() => loadExample(example.sequence)}
                  >
                    <div>
                      <div className="font-medium text-sm">{example.name}</div>
                      <div className="text-xs text-muted-foreground">{example.description}</div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-molecular hover:text-molecular/80">
                      Load
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Sequence Input */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Protein Sequence</label>
                {cleanSequence.length > 0 && (
                  <div className="flex items-center gap-2">
                    {isValidSequence === true && (
                      <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Valid ({cleanSequence.length} AA)
                      </Badge>
                    )}
                    {isValidSequence === false && (
                      <Badge variant="destructive" className="bg-destructive/10 text-destructive border-destructive/20">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Invalid
                      </Badge>
                    )}
                  </div>
                )}
              </div>
              
              <Textarea
                placeholder="Enter amino acid sequence... (e.g., MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFP...)"
                value={sequence}
                onChange={(e) => handleSequenceChange(e.target.value)}
                className={`min-h-32 font-mono text-sm resize-none ${
                  isValidSequence === false ? 'border-destructive/50' : 
                  isValidSequence === true ? 'border-success/50' : ''
                }`}
              />
              
              {isValidSequence === false && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  Please enter a valid amino acid sequence (minimum 10 amino acids, only standard codes)
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                onClick={handlePredict}
                disabled={!isValidSequence || isProcessing}
                className="bg-molecular hover:bg-molecular/90 text-primary-foreground flex-1 sm:flex-none"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Predict Structure
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
              >
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProteinInput;
