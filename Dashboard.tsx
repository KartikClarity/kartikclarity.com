import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  TrendingUp, 
  TrendingDown, 
  Activity,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target
} from 'lucide-react';
import { Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 45000, target: 50000 },
  { month: 'Feb', revenue: 52000, target: 55000 },
  { month: 'Mar', revenue: 48000, target: 60000 },
  { month: 'Apr', revenue: 61000, target: 65000 },
  { month: 'May', revenue: 55000, target: 70000 },
  { month: 'Jun', revenue: 67000, target: 75000 },
];

const leakData = [
  { name: 'Positioning', value: 85 },
  { name: 'Offer', value: 72 },
  { name: 'Outbound', value: 65 },
  { name: 'Conversion', value: 78 },
  { name: 'Pricing', value: 90 },
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Revenue Intelligence Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track your revenue health and discover optimization opportunities
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Link to="/scan">
            <Card hover className="p-6 cursor-pointer group">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Quick Action</p>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Run New Scan
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="text-white" size={24} />
                </div>
              </div>
            </Card>
          </Link>

          <Card hover className="p-6 cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Latest Score</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">78/100</h3>
              </div>
              <TrendingUp className="text-green-500" size={32} />
            </div>
          </Card>

          <Card hover className="p-6 cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Revenue Potential</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">+$47K</h3>
              </div>
              <Target className="text-indigo-500" size={32} />
            </div>
          </Card>
        </div>

        {/* Main Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Revenue Score"
            value="78"
            change="+12%"
            trend="up"
            subtitle="vs last month"
          />
          <MetricCard
            title="Pipeline Health"
            value="84"
            change="+8%"
            trend="up"
            subtitle="vs last month"
          />
          <MetricCard
            title="Lead Quality"
            value="72"
            change="-3%"
            trend="down"
            subtitle="vs last month"
          />
          <MetricCard
            title="Opportunity Score"
            value="91"
            change="+15%"
            trend="up"
            subtitle="vs last month"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Revenue Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue vs Target</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: 'none', 
                      borderRadius: '8px',
                      color: '#fff'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#6366f1" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorRevenue)" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="target" 
                    stroke="#8b5cf6" 
                    strokeWidth={2}
                    strokeDasharray="5 5" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Revenue Leak Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue Leak Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={leakData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: 'none', 
                      borderRadius: '8px',
                      color: '#fff'
                    }} 
                  />
                  <Bar dataKey="value" fill="#6366f1" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Critical Insights */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Critical Insights</CardTitle>
              <Link to="/scan">
                <Button variant="outline" size="sm">
                  View All
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <InsightItem
                severity="critical"
                title="Positioning Gap Detected"
                description="Your value proposition doesn't clearly differentiate from competitors. Estimated impact: $12K/month"
                action="Fix Positioning"
              />
              <InsightItem
                severity="high"
                title="Offer Structure Needs Optimization"
                description="Current pricing tiers are confusing potential customers. 34% drop-off at pricing page"
                action="Optimize Offer"
              />
              <InsightItem
                severity="medium"
                title="Outbound Messaging Below Benchmark"
                description="Email reply rate is 2.1% vs industry average of 4.5%"
                action="Improve Messaging"
              />
            </div>
          </CardContent>
        </Card>

        {/* Recent Scans */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Scans</CardTitle>
              <Link to="/scan">
                <Button variant="ghost" size="sm">View All</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ScanItem
                date="2 hours ago"
                score={78}
                type="Full Revenue Scan"
              />
              <ScanItem
                date="3 days ago"
                score={74}
                type="Positioning Analysis"
              />
              <ScanItem
                date="1 week ago"
                score={71}
                type="Conversion Audit"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function MetricCard({ title, value, change, trend, subtitle }: { 
  title: string; 
  value: string; 
  change: string; 
  trend: 'up' | 'down';
  subtitle: string;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{title}</p>
        <div className="flex items-baseline gap-2 mb-1">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{value}</h3>
          <span className={`text-sm font-medium flex items-center ${
            trend === 'up' ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            {change}
          </span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-500">{subtitle}</p>
      </CardContent>
    </Card>
  );
}

function InsightItem({ severity, title, description, action }: {
  severity: 'critical' | 'high' | 'medium';
  title: string;
  description: string;
  action: string;
}) {
  const severityStyles = {
    critical: 'text-red-600 bg-red-50 dark:bg-red-950',
    high: 'text-orange-600 bg-orange-50 dark:bg-orange-950',
    medium: 'text-yellow-600 bg-yellow-50 dark:bg-yellow-950',
  };

  return (
    <div className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
      <div className={`p-2 rounded-lg ${severityStyles[severity]}`}>
        <AlertCircle size={20} />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{description}</p>
        <Button variant="outline" size="sm">{action}</Button>
      </div>
    </div>
  );
}

function ScanItem({ date, score, type }: {
  date: string;
  score: number;
  type: string;
}) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
          <Activity className="text-white" size={24} />
        </div>
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white">{type}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{date}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{score}</p>
          <p className="text-xs text-gray-500">score</p>
        </div>
        <CheckCircle className="text-green-500" size={20} />
      </div>
    </div>
  );
}
