
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { TrendingUp, Target, Zap, Download, BarChart3, Atom, Dna, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const PredictionResults = () => {
  // Mock prediction data with enhanced structure
  const secondaryStructureData = [
    { type: "Alpha Helix", percentage: 45, confidence: 92, color: "hsl(var(--neon-cyan))" },
    { type: "Beta Sheet", percentage: 28, confidence: 87, color: "hsl(var(--neon-green))" },
    { type: "Random Coil", percentage: 27, confidence: 89, color: "hsl(var(--neon-pink))" }
  ];

  const confidenceData = [
    { position: "1-20", confidence: 94, structure: "Helix", color: "hsl(var(--neon-cyan))" },
    { position: "21-40", confidence: 89, structure: "Sheet", color: "hsl(var(--neon-green))" },
    { position: "41-60", confidence: 92, structure: "Helix", color: "hsl(var(--neon-cyan))" },
    { position: "61-80", confidence: 78, structure: "Coil", color: "hsl(var(--neon-pink))" },
    { position: "81-100", confidence: 86, structure: "Sheet", color: "hsl(var(--neon-green))" },
    { position: "101-120", confidence: 91, structure: "Helix", color: "hsl(var(--neon-cyan))" },
  ];

  const bindingSites = [
    { site: "ATP Binding Site", probability: 0.89, residues: "12-18", type: "Nucleotide", color: "neon-cyan" },
    { site: "Metal Ion Site", probability: 0.74, residues: "45-52", type: "Catalytic", color: "neon-green" },
    { site: "Protein Interface", probability: 0.67, residues: "78-85", type: "Interaction", color: "neon-pink" },
    { site: "Allosteric Site", probability: 0.82, residues: "95-102", type: "Regulatory", color: "neon-purple" },
  ];

  const sequenceAnalysis = [
    { position: 10, helix: 0.85, sheet: 0.10, coil: 0.05 },
    { position: 20, helix: 0.92, sheet: 0.05, coil: 0.03 },
    { position: 30, helix: 0.88, sheet: 0.08, coil: 0.04 },
    { position: 40, helix: 0.15, sheet: 0.80, coil: 0.05 },
    { position: 50, helix: 0.12, sheet: 0.83, coil: 0.05 },
    { position: 60, helix: 0.89, sheet: 0.06, coil: 0.05 },
    { position: 70, helix: 0.10, sheet: 0.15, coil: 0.75 },
    { position: 80, helix: 0.08, sheet: 0.18, coil: 0.74 },
    { position: 90, helix: 0.85, sheet: 0.10, coil: 0.05 },
  ];

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 85) return "text-neon-green";
    if (confidence >= 70) return "text-neon-cyan";
    return "text-neon-pink";
  };

  const getConfidenceLevel = (confidence: number) => {
    if (confidence >= 85) return "High";
    if (confidence >= 70) return "Medium";
    return "Low";
  };

  return (
    <section className="py-24 px-6 bg-surface/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Prediction <span className="text-gradient-protein text-neon-glow">Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive analysis of protein structure, binding properties, and confidence metrics
          </p>
        </div>

        {/* Performance Metrics Dashboard */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="glass-card border-neon-cyan/20 hover-glow">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-neon-cyan/10 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-neon-cyan" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-neon-cyan text-neon-glow">89.4%</div>
                  <div className="text-sm text-muted-foreground">Overall Confidence</div>
                </div>
              </div>
              <Progress value={89.4} className="h-2 prediction-progress" />
            </CardContent>
          </Card>

          <Card className="glass-card border-neon-green/20 hover-glow">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-neon-green/10 rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-neon-green" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-neon-green text-neon-glow">4</div>
                  <div className="text-sm text-muted-foreground">Binding Sites</div>
                </div>
              </div>
              <div className="flex gap-1">
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-2 flex-1 bg-neon-green/30 rounded" />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-neon-pink/20 hover-glow">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-neon-pink/10 rounded-2xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-neon-pink" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-neon-pink text-neon-glow">1.2s</div>
                  <div className="text-sm text-muted-foreground">Processing Time</div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">Lightning fast inference</div>
            </CardContent>
          </Card>

          <Card className="glass-card border-neon-purple/20 hover-glow">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-neon-purple/10 rounded-2xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-neon-purple" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-neon-purple text-neon-glow">98.2%</div>
                  <div className="text-sm text-muted-foreground">Model Accuracy</div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">Benchmark validated</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Secondary Structure Analysis */}
          <Card className="glass-card border-border-glow/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="w-10 h-10 bg-neon-cyan/10 rounded-xl flex items-center justify-center">
                  <Dna className="w-5 h-5 text-neon-cyan" />
                </div>
                Secondary Structure Distribution
              </CardTitle>
              <CardDescription className="text-base">
                Predicted distribution of structural elements with confidence scores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 mb-8">
                {secondaryStructureData.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="font-medium">{item.type}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge 
                          className={`${getConfidenceColor(item.confidence)} bg-surface-elevated border-current/30`}
                        >
                          {item.confidence}% confidence
                        </Badge>
                        <span className="text-lg font-mono font-semibold">{item.percentage}%</span>
                      </div>
                    </div>
                    <Progress 
                      value={item.percentage} 
                      className="h-4 bg-surface-elevated"
                      style={{ 
                        '--progress-background': item.color,
                      } as React.CSSProperties}
                    />
                  </div>
                ))}
              </div>

              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={secondaryStructureData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      innerRadius={60}
                      fill="#8884d8"
                      dataKey="percentage"
                      label={({ type, percentage }) => `${percentage}%`}
                    >
                      {secondaryStructureData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(var(--surface))",
                        border: "1px solid hsl(var(--border-glow) / 0.3)",
                        borderRadius: "12px",
                        backdropFilter: "blur(12px)"
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Sequence Confidence Analysis */}
          <Card className="glass-card border-border-glow/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="w-10 h-10 bg-neon-green/10 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-neon-green" />
                </div>
                Confidence Along Sequence
              </CardTitle>
              <CardDescription className="text-base">
                Position-specific prediction confidence and structural assignments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 mb-8">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={confidenceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.3)" />
                    <XAxis 
                      dataKey="position" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(var(--surface))",
                        border: "1px solid hsl(var(--border-glow) / 0.3)",
                        borderRadius: "12px",
                        backdropFilter: "blur(12px)"
                      }}
                    />
                    <Bar 
                      dataKey="confidence" 
                      fill="url(#confidenceGradient)"
                      radius={[6, 6, 0, 0]}
                    />
                    <defs>
                      <linearGradient id="confidenceGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(var(--neon-cyan))" />
                        <stop offset="100%" stopColor="hsl(var(--neon-blue))" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-3">
                {confidenceData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 glass-panel rounded-xl hover-glow">
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="font-mono border-border-glow/30">
                        {item.position}
                      </Badge>
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="font-medium">{item.structure}</span>
                    </div>
                    <Badge 
                      className={`${getConfidenceColor(item.confidence)} bg-transparent border-current`}
                      variant="outline"
                    >
                      {getConfidenceLevel(item.confidence)} ({item.confidence}%)
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sequence-Level Structural Probability */}
        <Card className="glass-card border-border-glow/20 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="w-10 h-10 bg-neon-pink/10 rounded-xl flex items-center justify-center">
                <Activity className="w-5 h-5 text-neon-pink" />
              </div>
              Structural Probability Along Sequence
            </CardTitle>
            <CardDescription className="text-base">
              Position-by-position probability for each secondary structure type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sequenceAnalysis} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.3)" />
                  <XAxis 
                    dataKey="position" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    domain={[0, 1]}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--surface))",
                      border: "1px solid hsl(var(--border-glow) / 0.3)",
                      borderRadius: "12px",
                      backdropFilter: "blur(12px)"
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="helix" 
                    stroke="hsl(var(--neon-cyan))" 
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--neon-cyan))", strokeWidth: 2, r: 4 }}
                    name="Alpha Helix"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="sheet" 
                    stroke="hsl(var(--neon-green))" 
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--neon-green))", strokeWidth: 2, r: 4 }}
                    name="Beta Sheet"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="coil" 
                    stroke="hsl(var(--neon-pink))" 
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--neon-pink))", strokeWidth: 2, r: 4 }}
                    name="Random Coil"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Binding Sites Prediction */}
        <Card className="glass-card border-border-glow/20 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="w-10 h-10 bg-neon-purple/10 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-neon-purple" />
              </div>
              Predicted Binding Sites
            </CardTitle>
            <CardDescription className="text-base">
              Potential ligand and protein binding sites with confidence scores
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {bindingSites.map((site, index) => (
                <div key={index} className="glass-panel p-6 rounded-xl hover-glow border border-border/20">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full bg-${site.color}`} />
                      <h4 className="font-semibold text-lg">{site.site}</h4>
                    </div>
                    <Badge 
                      className={`${getConfidenceColor(site.probability * 100)} bg-transparent border-current text-sm`}
                      variant="outline"
                    >
                      {Math.round(site.probability * 100)}%
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Residues:</span>
                      <span className="font-mono text-sm">{site.residues}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Type:</span>
                      <Badge variant="secondary" className={`text-${site.color} bg-${site.color}/10`}>
                        {site.type}
                      </Badge>
                    </div>
                    <Progress 
                      value={site.probability * 100} 
                      className="h-3 mt-4"
                      style={{ 
                        '--progress-background': `hsl(var(--${site.color}))`,
                      } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Export and Actions */}
        <div className="flex flex-wrap justify-center gap-6">
          <Button className="btn-neon text-primary-foreground px-8 py-4 text-lg font-semibold">
            <Download className="w-5 h-5 mr-3" />
            Download PDB Model
          </Button>
          
          <Button variant="outline" className="glass-panel hover-glow border-border-glow/30 px-8 py-4 text-lg font-semibold">
            <BarChart3 className="w-5 h-5 mr-3" />
            Analyze Structure
          </Button>
          
          <Button variant="outline" className="glass-panel hover-glow border-border-glow/30 px-8 py-4 text-lg font-semibold">
            <Atom className="w-5 h-5 mr-3" />
            3D Visualization
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PredictionResults;
