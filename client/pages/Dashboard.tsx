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
  BookOpen,
  BarChart3,
  Target,
  Calendar,
  Trophy,
  TrendingUp,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function Dashboard() {
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

      {/* Dashboard Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Track your DSA progress and achievements
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Problems Solved
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">
                +12 from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Current Streak
              </CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15 days</div>
              <p className="text-xs text-muted-foreground">
                Personal best: 23 days
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
              <Target className="h-4 w-4 text-info" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">
                +2.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Study Time</CardTitle>
              <Clock className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32h</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Your latest problem-solving sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">Two Sum</div>
                    <div className="text-sm text-muted-foreground">
                      Array • Easy
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-success/10 text-success"
                  >
                    Solved
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">Binary Tree Inorder</div>
                    <div className="text-sm text-muted-foreground">
                      Tree • Medium
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-success/10 text-success"
                  >
                    Solved
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">Merge K Lists</div>
                    <div className="text-sm text-muted-foreground">
                      Linked List • Hard
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-warning/10 text-warning"
                  >
                    In Progress
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress Chart Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>Progress Overview</CardTitle>
              <CardDescription>
                Your problem-solving progress over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
                <div className="text-center text-muted-foreground">
                  <BarChart3 className="h-12 w-12 mx-auto mb-4" />
                  <p>Progress chart will be displayed here</p>
                  <p className="text-sm">Interactive analytics coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-warning" />
              Recent Achievements
            </CardTitle>
            <CardDescription>
              Celebrate your milestones and progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <div className="h-10 w-10 rounded-full bg-success/10 flex items-center justify-center">
                  🎯
                </div>
                <div>
                  <div className="font-medium">First Streak</div>
                  <div className="text-sm text-muted-foreground">
                    Solved problems for 7 days in a row
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  🏆
                </div>
                <div>
                  <div className="font-medium">50 Problems</div>
                  <div className="text-sm text-muted-foreground">
                    Solved your first 50 problems
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <div className="h-10 w-10 rounded-full bg-info/10 flex items-center justify-center">
                  ⚡
                </div>
                <div>
                  <div className="font-medium">Speed Demon</div>
                  <div className="text-sm text-muted-foreground">
                    Solved 5 easy problems in 30 minutes
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
