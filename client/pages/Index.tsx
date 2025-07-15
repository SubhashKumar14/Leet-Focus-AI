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
  ArrowRight,
  Target,
  TrendingUp,
  Calendar,
  Users,
  Star,
  CheckCircle,
  Clock,
  Trophy,
  BookOpen,
  BarChart3,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              DSA Assist
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/problems">Problems</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard">Dashboard</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              🚀 Enhanced DSA Practice Experience
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
            Master Data Structures & Algorithms
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Enhance your coding interview preparation with our intelligent DSA
            practice assistant. Track progress, solve daily challenges, and ace
            your next interview.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="group" asChild>
              <Link to="/problems">
                Start Practicing
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/dashboard">View Dashboard</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">
                Practice Problems
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">25k+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9★</div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to excel
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and features designed to accelerate your DSA
              mastery and interview success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Daily Challenges</CardTitle>
                <CardDescription>
                  High-quality DSA problems delivered daily to maintain
                  consistent practice and skill improvement.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-success" />
                </div>
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>
                  Comprehensive analytics to track your practice sessions,
                  identify weak areas, and celebrate milestones.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-info/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-info" />
                </div>
                <CardTitle>Smart Goals</CardTitle>
                <CardDescription>
                  Set personalized learning goals and get intelligent
                  recommendations based on your progress.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-warning" />
                </div>
                <CardTitle>Quick Disable</CardTitle>
                <CardDescription>
                  Pause your practice sessions with a single click for
                  uninterrupted focus when needed.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Achievement System</CardTitle>
                <CardDescription>
                  Earn badges and achievements as you progress through your DSA
                  journey and hit milestones.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-success" />
                </div>
                <CardTitle>Community Support</CardTitle>
                <CardDescription>
                  Connect with fellow learners, share solutions, and get help
                  from the community.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Chrome Extension Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              🚀 Browser Extension Available
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              LeetCode Focus Extension
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enhance your LeetCode experience with AI hints, code improvements,
              and focus mode to minimize distractions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-success mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">AI-Powered Hints</h3>
                  <p className="text-muted-foreground">
                    Get intelligent hints and suggestions while solving problems
                    without spoiling the solution.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-success mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Focus Mode</h3>
                  <p className="text-muted-foreground">
                    Minimize distractions and stay focused on problem-solving
                    with our clean interface overlay.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-success mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Code Analysis</h3>
                  <p className="text-muted-foreground">
                    Real-time code analysis and suggestions to improve your
                    solution's efficiency.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-success mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Progress Tracking</h3>
                  <p className="text-muted-foreground">
                    Track your problem-solving progress and identify areas for
                    improvement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-background to-primary/5 border rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="text-6xl mb-4">🔥</div>
                <h3 className="text-xl font-semibold mb-4">
                  Install Chrome Extension
                </h3>
                <p className="text-muted-foreground mb-6">
                  Add the LeetCode Focus extension to your Chrome browser and
                  supercharge your coding practice.
                </p>
                <div className="space-y-3">
                  <Button size="lg" className="w-full" disabled>
                    <span className="flex items-center gap-2">
                      <span>🚧</span>
                      Coming to Chrome Web Store
                    </span>
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Currently in review process
                  </p>
                  <div className="pt-4 border-t">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <Link to="/extension">
                        Download for Manual Installation
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Works with your favorite platforms
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Seamlessly integrates with popular coding platforms to enhance
              your practice experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-success mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">LeetCode Integration</h3>
                    <p className="text-muted-foreground">
                      Enhanced UI and tracking for your LeetCode practice
                      sessions with detailed analytics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-success mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      GeeksforGeeks Support
                    </h3>
                    <p className="text-muted-foreground">
                      Practice tracking and progress monitoring for
                      GeeksforGeeks problems and tutorials.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-success mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      Centralized Dashboard
                    </h3>
                    <p className="text-muted-foreground">
                      All your practice data from different platforms in one
                      unified dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">
                  Ready to get started?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of developers who are already improving their
                  DSA skills.
                </p>
                <Button size="lg" className="w-full" asChild>
                  <Link to="/problems">Start Your Journey</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">DSA Assist</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Empowering developers to master Data Structures & Algorithms
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Support
              </a>
            </div>
            <div className="mt-6 pt-6 border-t border-border text-sm text-muted-foreground">
              © 2025 DSA Assist. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
