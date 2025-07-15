import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Download,
  Chrome,
  FileText,
  Settings,
  AlertCircle,
  CheckCircle,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Extension() {
  const handleDownloadExtension = () => {
    // Create a zip file download link for the extension
    const link = document.createElement("a");
    link.href = "/api/download-extension";
    link.download = "leetcode-focus-extension.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <Chrome className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold">
                Extension Installation
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/problems">Problems</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-12 px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            🔧 Manual Installation
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            LeetCode Focus Extension
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to install the LeetCode Focus extension in
            your Chrome browser.
          </p>
        </div>

        {/* Download Section */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Step 1: Download Extension
            </CardTitle>
            <CardDescription>
              Download the extension files to your computer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="flex-1"
                onClick={handleDownloadExtension}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Extension (.zip)
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/your-repo/leetcode-focus-extension"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Installation Steps */}
        <div className="space-y-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Step 2: Extract Files
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">
                    1
                  </span>
                  <span>
                    Locate the downloaded{" "}
                    <code className="bg-muted px-1 rounded">
                      leetcode-focus-extension.zip
                    </code>{" "}
                    file
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">
                    2
                  </span>
                  <span>
                    Right-click and extract the ZIP file to a folder on your
                    computer
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">
                    3
                  </span>
                  <span>Remember the location of the extracted folder</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Chrome className="h-5 w-5" />
                Step 3: Load Extension in Chrome
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">
                    1
                  </span>
                  <span>
                    Open Google Chrome and navigate to{" "}
                    <code className="bg-muted px-1 rounded">
                      chrome://extensions/
                    </code>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">
                    2
                  </span>
                  <span>
                    Enable <strong>"Developer mode"</strong> by clicking the
                    toggle in the top-right corner
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">
                    3
                  </span>
                  <span>
                    Click <strong>"Load unpacked"</strong> button
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">
                    4
                  </span>
                  <span>
                    Select the extracted{" "}
                    <code className="bg-muted px-1 rounded">
                      leetcode-focus-extension
                    </code>{" "}
                    folder
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">
                    5
                  </span>
                  <span>
                    The extension should now appear in your extensions list
                  </span>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Step 4: Configure Extension
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">
                    1
                  </span>
                  <span>
                    Pin the extension to your toolbar by clicking the puzzle
                    piece icon
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">
                    2
                  </span>
                  <span>
                    Visit{" "}
                    <a
                      href="https://leetcode.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      leetcode.com
                    </a>{" "}
                    to test the extension
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">
                    3
                  </span>
                  <span>
                    Click the extension icon to access settings and features
                  </span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* Alerts */}
        <div className="space-y-4 mb-8">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Note:</strong> This is a manual installation method. The
              extension is currently under review for the Chrome Web Store and
              will be available for automatic installation soon.
            </AlertDescription>
          </Alert>

          <Alert className="border-success/20 bg-success/5">
            <CheckCircle className="h-4 w-4 text-success" />
            <AlertDescription>
              <strong>Security:</strong> This extension only requests
              permissions for LeetCode domains and operates entirely locally. No
              data is collected or transmitted to external servers.
            </AlertDescription>
          </Alert>
        </div>

        {/* Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Extension Features</CardTitle>
            <CardDescription>
              What you'll get with the LeetCode Focus extension
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <h4 className="font-medium">AI-Powered Hints</h4>
                  <p className="text-sm text-muted-foreground">
                    Get intelligent suggestions without spoiling solutions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <h4 className="font-medium">Focus Mode</h4>
                  <p className="text-sm text-muted-foreground">
                    Minimize distractions with clean interface
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <h4 className="font-medium">Code Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Real-time feedback on your solutions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <h4 className="font-medium">Progress Tracking</h4>
                  <p className="text-sm text-muted-foreground">
                    Monitor your improvement over time
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>
              Having trouble with the installation? We're here to help.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" asChild>
                <a href="mailto:support@dsaassist.com">Contact Support</a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/your-repo/leetcode-focus-extension/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Report Issue
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
