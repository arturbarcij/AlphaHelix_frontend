
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Download, FileImage, X, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const SvgUploader = () => {
  const [svgFile, setSvgFile] = useState<File | null>(null);
  const [svgDataUrl, setSvgDataUrl] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.includes('svg')) {
      setError("Please select a valid SVG file");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB");
      return;
    }

    setError("");
    setIsUploading(true);
    setSvgFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setSvgDataUrl(result);
      setIsUploading(false);
    };
    reader.onerror = () => {
      setError("Failed to read file");
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    if (!svgFile || !svgDataUrl) return;
    
    const link = document.createElement('a');
    link.href = svgDataUrl;
    link.download = svgFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClear = () => {
    setSvgFile(null);
    setSvgDataUrl("");
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Structure <span className="text-gradient-protein text-neon-glow">Visualization</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload your protein secondary structure diagrams (SVG format) for visualization and analysis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Panel */}
          <Card className="glass-card border-border-glow/20 hover-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="w-8 h-8 bg-neon-cyan/10 rounded-lg flex items-center justify-center">
                  <FileImage className="w-4 h-4 text-neon-cyan" />
                </div>
                SVG Upload
              </CardTitle>
              <CardDescription>
                Upload protein secondary structure diagrams in SVG format
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* File Input Area */}
              <div 
                className={cn(
                  "border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer",
                  "hover:border-neon-cyan/50 hover:bg-neon-cyan/5",
                  error ? "border-destructive/50 bg-destructive/5" : "border-border/30"
                )}
                onClick={triggerFileInput}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/svg+xml,.svg"
                  onChange={handleFileSelect}
                  className="hidden"
                  aria-label="Upload SVG file"
                />
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-neon-cyan/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Upload className="w-8 h-8 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-foreground mb-2">
                      {isUploading ? "Processing..." : "Drop SVG file here"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      or click to browse • Max 5MB • SVG format only
                    </p>
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive">
                  <AlertCircle className="w-5 h-5" />
                  <p className="text-sm font-medium">{error}</p>
                </div>
              )}

              {/* File Info */}
              {svgFile && (
                <div className="p-4 bg-surface/50 rounded-lg border border-border/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-neon-green/10 rounded-lg flex items-center justify-center">
                        <FileImage className="w-5 h-5 text-neon-green" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{svgFile.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {(svgFile.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleClear}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              {svgDataUrl && (
                <div className="flex gap-3 pt-4 border-t border-border/20">
                  <Button
                    onClick={handleDownload}
                    className="btn-neon flex-1"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download SVG
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleClear}
                    className="glass-panel hover-glow border-border-glow/30"
                  >
                    Clear
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Preview Panel */}
          <Card className="glass-card border-border-glow/20">
            <CardHeader>
              <CardTitle className="text-xl">Structure Preview</CardTitle>
              <CardDescription>
                Interactive visualization of your uploaded structure
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              {svgDataUrl ? (
                <div className="space-y-4">
                  <div className="bg-surface/30 rounded-xl p-6 border border-border/10">
                    <img
                      src={svgDataUrl}
                      alt="Protein secondary structure diagram"
                      className="w-full h-auto max-w-full mx-auto rounded-lg"
                      style={{ 
                        maxHeight: '400px',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  
                  {/* Structure Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-neon-cyan/5 rounded-lg border border-neon-cyan/20">
                      <p className="text-neon-cyan font-medium">File Format</p>
                      <p className="text-muted-foreground">SVG Vector</p>
                    </div>
                    <div className="text-center p-3 bg-neon-green/5 rounded-lg border border-neon-green/20">
                      <p className="text-neon-green font-medium">File Size</p>
                      <p className="text-muted-foreground">
                        {svgFile ? (svgFile.size / 1024).toFixed(1) : '0'} KB
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16 text-muted-foreground">
                  <div className="w-20 h-20 bg-muted/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FileImage className="w-10 h-10" />
                  </div>
                  <p className="text-lg font-medium mb-2">No structure uploaded</p>
                  <p className="text-sm">Upload an SVG file to see the preview here</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SvgUploader;
