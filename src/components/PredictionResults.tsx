
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Target, Zap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const PredictionResults = () => {
  // Mock prediction data
  const secondaryStructureData = [
    { type: "Alpha Helix", percentage: 45, confidence: 92, color: "hsl(var(--molecular))" },
    { type: "Beta Sheet", percentage: 28, confidence: 87, color: "hsl(var(--helix))" },
    { type: "Random Coil", percentage: 27, confidence: 89, color: "hsl(var(--accent))" }
  ];

  const confidenceData = [
    { position: "1-20", confidence: 94, structure: "Helix" },
    { position: "21-40", confidence: 89, structure: "Sheet" },
    { position: "41-60", confidence: 92, structure: "Helix" },
    { position: "61-80", confidence: 78, structure: "Coil" },
    { position: "81-100", confidence: 86, structure: "Sheet" },
  ];

  const bindingSites = [
    { site: "Site A", probability: 0.89, residues: "12-18", type: "ATP Binding" },
    { site: "Site B", probability: 0.74, residues: "45-52", type: "Metal Ion" },
    { site: "Site C", probability: 0.67, residues: "78-85", type: "Protein-Protein" },
  ];

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 85) return "text-success";
    if (confidence >= 70) return "text-warning";
    return "text-destructive";
  };

  const getConfidenceLevel = (confidence: number) => {
    if (confidence >= 85) return "High";
    if (confidence >= 70) return "Medium";
    return "Low";
  };

  return (
    <section className="py-20 px-6 bg-surface/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Prediction <span className="text-molecular">Results</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive analysis of protein structure and binding properties
          </p>
        </div>

        {/* Overall Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="data-card border-molecular/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Overall Confidence</p>
                  <p className="text-3xl font-bold text-molecular">89.4%</p>
                </div>
                <div className="w-12 h-12 bg-molecular/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-molecular" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="data-card border-helix/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Binding Sites</p>
                  <p className="text-3xl font-bold text-helix">3</p>
                </div>
                <div className="w-12 h-12 bg-helix/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-helix" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="data-card border-protein/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Processing Time</p>
                  <p className="text-3xl font-bold text-protein">1.2s</p>
                </div>
                <div className="w-12 h-12 bg-protein/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-protein" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Secondary Structure Distribution */}
          <Card className="data-card">
            <CardHeader>
              <CardTitle>Secondary Structure Distribution</CardTitle>
              <CardDescription>
                Predicted distribution of structural elements in the protein
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {secondaryStructureData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{item.type}</span>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant="secondary" 
                          className={`${getConfidenceColor(item.confidence)} bg-surface-elevated`}
                        >
                          {item.confidence}% conf.
                        </Badge>
                        <span className="text-sm font-mono">{item.percentage}%</span>
                      </div>
                    </div>
                    <Progress 
                      value={item.percentage} 
                      className="h-3"
                      style={{ 
                        background: `${item.color}20`,
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-8 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={secondaryStructureData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="percentage"
                      label={({ type, percentage }) => `${type}: ${percentage}%`}
                    >
                      {secondaryStructureData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Confidence Along Sequence */}
          <Card className="data-card">
            <CardHeader>
              <CardTitle>Confidence Distribution</CardTitle>
              <CardDescription>
                Prediction confidence across different sequence regions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={confidenceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
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
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Bar 
                      dataKey="confidence" 
                      fill="hsl(var(--molecular))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-3">
                {confidenceData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-surface-elevated rounded-lg">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="font-mono">
                        {item.position}
                      </Badge>
                      <span className="text-sm">{item.structure}</span>
                    </div>
                    <Badge 
                      className={`${getConfidenceColor(item.confidence)} bg-transparent border-current`}
                      variant="outline"
                    >
                      {getConfidenceLevel(item.confidence)}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Binding Sites */}
        <Card className="data-card mt-8">
          <CardHeader>
            <CardTitle>Predicted Binding Sites</CardTitle>
            <CardDescription>
              Potential ligand and protein binding sites identified in the structure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {bindingSites.map((site, index) => (
                <div key={index} className="p-4 bg-surface-elevated rounded-lg border border-border/30">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{site.site}</h4>
                    <Badge 
                      className={`${getConfidenceColor(site.probability * 100)} bg-transparent border-current`}
                      variant="outline"
                    >
                      {Math.round(site.probability * 100)}%
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Residues: <span className="font-mono">{site.residues}</span>
                  </p>
                  <p className="text-sm text-accent">{site.type}</p>
                  <Progress value={site.probability * 100} className="mt-3 h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Export Options */}
        <div className="flex justify-center mt-12">
          <Button className="bg-molecular hover:bg-molecular/90 text-primary-foreground">
            <Download className="w-4 h-4 mr-2" />
            Export Results
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PredictionResults;
