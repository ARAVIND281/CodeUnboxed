import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ExplainResponse {
  explanation: string;
}

const CodeExplainer = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState<string>('');
  const [level, setLevel] = useState<string>('Basic');
  const [explanation, setExplanation] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!code.trim()) {
      toast({
        title: "Missing Code",
        description: "Please paste some code to explain.",
        variant: "destructive",
      });
      return;
    }

    if (!language) {
      toast({
        title: "Select Language",
        description: "Please select a programming language.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // Replace with your actual backend URL
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/explain`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: code.trim(),
          language,
          level,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ExplainResponse = await response.json();
      setExplanation(data.explanation);

      toast({
        title: "✨ Code Explained!",
        description: "Your code explanation is ready.",
      });
    } catch (error) {
      console.error('Error explaining code:', error);

      setExplanation(`❌ Something went wrong while generating the explanation.
Please try again later or check your internet connection.`);

      toast({
        title: "Server Error",
        description: "Failed to get explanation. Please try again shortly.",
        variant: "destructive",
      });
    }
    finally {
      setLoading(false);
    }
  };

  const clearAll = () => {
    setCode('');
    setLanguage('');
    setLevel('Basic');
    setExplanation('');
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-primary bg-clip-text text-transparent">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              CodeUnboxed
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            AI-powered code explanation tool for developers
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                🧾 Paste your code
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Code Input */}
                <div className="space-y-2">
                  <Textarea
                    placeholder="Paste your code here..."
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    rows={12}
                    className="font-mono text-sm bg-code-bg border-code-border resize-none"
                  />
                </div>

                {/* Language Selection */}
                <div className="space-y-2">
                  <Label htmlFor="language" className="text-sm font-medium">
                    Programming Language
                  </Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a language" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      <SelectItem value="Python">Python</SelectItem>
                      <SelectItem value="JavaScript">JavaScript</SelectItem>
                      <SelectItem value="Java">Java</SelectItem>
                      <SelectItem value="C++">C++</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Explanation Level */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">
                    Explanation Level
                  </Label>
                  <RadioGroup
                    value={level}
                    onValueChange={setLevel}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Basic" id="basic" />
                      <Label htmlFor="basic" className="cursor-pointer">Basic</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Advanced" id="advanced" />
                      <Label htmlFor="advanced" className="cursor-pointer">Advanced</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    type="submit"
                    disabled={loading}
                    variant="hero"
                    className="flex-1"
                  >
                    {loading ? "Analyzing..." : "Explain Code"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={clearAll}
                    disabled={loading}
                  >
                    Clear
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                🤖 AI Explanation
              </CardTitle>
            </CardHeader>
            <CardContent>
              {explanation ? (
                <div className="prose prose-invert max-w-none">
                  <div className="bg-code-bg rounded-lg p-6 border border-code-border text-sm leading-relaxed">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {explanation}
                    </ReactMarkdown>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <div className="text-4xl mb-4">🔍</div>
                  <p>Submit your code above to get an AI explanation</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-muted-foreground text-sm">
          <p>
            Built with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/aravinds28"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Aravind S
            </a>{" "}
            •{" "}
            <a
              href="https://github.com/ARAVIND281"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              GitHub
            </a>
          </p>
        </footer>


      </div>
    </div>
  );
};

export default CodeExplainer;