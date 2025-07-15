import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Search,
  Filter,
  CheckCircle,
  Clock,
  Trophy,
  Target,
} from "lucide-react";

export default function Problems() {
  const problems = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      category: "Array",
      status: "solved",
      acceptance: "49.2%",
      companies: ["Google", "Amazon", "Microsoft"],
    },
    {
      id: 2,
      title: "Binary Tree Inorder Traversal",
      difficulty: "Medium",
      category: "Tree",
      status: "solved",
      acceptance: "74.1%",
      companies: ["Facebook", "Apple"],
    },
    {
      id: 3,
      title: "Merge k Sorted Lists",
      difficulty: "Hard",
      category: "Linked List",
      status: "attempted",
      acceptance: "47.6%",
      companies: ["Google", "Amazon"],
    },
    {
      id: 4,
      title: "Valid Parentheses",
      difficulty: "Easy",
      category: "Stack",
      status: "unsolved",
      acceptance: "40.1%",
      companies: ["Microsoft", "Bloomberg"],
    },
    {
      id: 5,
      title: "Maximum Subarray",
      difficulty: "Medium",
      category: "Dynamic Programming",
      status: "unsolved",
      acceptance: "53.4%",
      companies: ["Amazon", "LinkedIn"],
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-success/10 text-success";
      case "Medium":
        return "bg-warning/10 text-warning";
      case "Hard":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-muted/10 text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "solved":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "attempted":
        return <Clock className="h-4 w-4 text-warning" />;
      default:
        return <div className="h-4 w-4 rounded-full border-2 border-muted" />;
    }
  };

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
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/problems">Problems</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Practice Problems</h1>
          <p className="text-muted-foreground">
            Solve coding challenges and improve your DSA skills
          </p>
        </div>

        {/* Daily Challenge */}
        <Card className="mb-8 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Daily Challenge
                </CardTitle>
                <CardDescription>
                  Complete today's challenge to maintain your streak
                </CardDescription>
              </div>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                🔥 Day 15
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Longest Palindromic Substring
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className={getDifficultyColor("Medium")}>Medium</Badge>
                  <Badge variant="outline">String</Badge>
                  <Badge variant="outline">Dynamic Programming</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Given a string s, return the longest palindromic substring in
                  s.
                </p>
              </div>
              <Button className="ml-4">
                Start Challenge
                <Target className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search problems..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Topics</SelectItem>
                  <SelectItem value="array">Array</SelectItem>
                  <SelectItem value="tree">Tree</SelectItem>
                  <SelectItem value="dp">Dynamic Programming</SelectItem>
                  <SelectItem value="graph">Graph</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="solved">Solved</SelectItem>
                  <SelectItem value="attempted">Attempted</SelectItem>
                  <SelectItem value="unsolved">Todo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Problems List */}
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {problems.map((problem) => (
                <div
                  key={problem.id}
                  className="p-6 hover:bg-muted/30 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex items-center justify-center w-8">
                        {getStatusIcon(problem.status)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold hover:text-primary transition-colors">
                            {problem.id}. {problem.title}
                          </h3>
                          <Badge
                            className={getDifficultyColor(problem.difficulty)}
                          >
                            {problem.difficulty}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            {problem.category}
                          </Badge>
                          <span>•</span>
                          <span>Acceptance: {problem.acceptance}</span>
                          <span>•</span>
                          <span>
                            Companies:{" "}
                            {problem.companies.slice(0, 2).join(", ")}
                            {problem.companies.length > 2 && " +1"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Solve
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Problems
          </Button>
        </div>
      </div>
    </div>
  );
}
