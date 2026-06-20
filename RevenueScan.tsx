import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Sparkles, TrendingUp, Target, Zap, CheckCircle } from 'lucide-react';

export function RevenueScan() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const startScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 3000);
  };

  if (scanComplete) {
    return <ScanResults />;
  }

  if (isScanning) {
    return <ScanningScreen />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
            <Sparkles size={16} />
            AI-Powered Analysis
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Revenue Leak Scanner
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Identify where revenue is leaking and get AI-powered recommendations to fix it
          </p>
        </div>

        <Card className="p-8">
          <form className="space-y-6">
            <Input
              label="Your Website URL"
              placeholder="https://yourwebsite.com"
              helperText="We'll analyze your public-facing content"
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Industry
              </label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Select your industry</option>
                <option value="saas">SaaS</option>
                <option value="agency">Agency</option>
                <option value="consulting">Consulting</option>
                <option value="ecommerce">E-commerce</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Current Monthly Revenue
              </label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Select range</option>
                <option value="0-10k">$0 - $10K</option>
                <option value="10k-50k">$10K - $50K</option>
                <option value="50k-100k">$50K - $100K</option>
                <option value="100k+">$100K+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Biggest Revenue Challenge
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Describe your main challenge..."
              />
            </div>

            <Button type="button" onClick={startScan} className="w-full" size="lg">
              Start AI Revenue Scan
              <Sparkles className="ml-2" size={20} />
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

function ScanningScreen() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-20 flex items-center justify-center">
      <div className="text-center max-w-lg">
        <div className="w-24 h-24 mx-auto mb-8 relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-20 animate-ping" />
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
            <Sparkles className="text-white animate-pulse" size={40} />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Analyzing Your Revenue Potential...
        </h2>
        <div className="space-y-3 text-gray-600 dark:text-gray-400">
          <p className="flex items-center justify-center gap-2">
            <CheckCircle className="text-green-500" size={20} />
            Scanning positioning and messaging
          </p>
          <p className="flex items-center justify-center gap-2">
            <CheckCircle className="text-green-500" size={20} />
            Analyzing offer structure
          </p>
          <p className="flex items-center justify-center gap-2 animate-pulse">
            <div className="w-5 h-5 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
            Identifying revenue leaks
          </p>
        </div>
      </div>
    </div>
  );
}

function ScanResults() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
            <CheckCircle className="text-white" size={40} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Revenue Score: 78/100
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We found 5 critical revenue leaks worth an estimated <span className="font-bold text-indigo-600">$47,000/month</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-3 text-green-500" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">+73%</h3>
            <p className="text-gray-600 dark:text-gray-400">Potential Revenue Increase</p>
          </Card>
          <Card className="p-6 text-center">
            <Target className="w-12 h-12 mx-auto mb-3 text-indigo-500" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">5</h3>
            <p className="text-gray-600 dark:text-gray-400">Critical Issues Found</p>
          </Card>
          <Card className="p-6 text-center">
            <Zap className="w-12 h-12 mx-auto mb-3 text-yellow-500" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">2 weeks</h3>
            <p className="text-gray-600 dark:text-gray-400">Estimated Fix Time</p>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Critical Revenue Leaks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <LeakItem
              severity="critical"
              title="Unclear Value Proposition"
              impact="$18K/month"
              description="Your homepage doesn't clearly communicate who you help and what problem you solve."
            />
            <LeakItem
              severity="high"
              title="Confusing Pricing Structure"
              impact="$12K/month"
              description="Visitors spend an average of 4.2 minutes on pricing page with 48% bounce rate."
            />
            <LeakItem
              severity="high"
              title="Weak Call-to-Action"
              impact="$10K/month"
              description="Your CTA doesn't create urgency or communicate clear next steps."
            />
          </CardContent>
        </Card>

        <div className="text-center">
          <Button size="lg">
            View Full Report & Recommendations
            <Sparkles className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}

function LeakItem({ severity, title, impact, description }: {
  severity: 'critical' | 'high';
  title: string;
  impact: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
        severity === 'critical' 
          ? 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300'
          : 'bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300'
      }`}>
        {severity.toUpperCase()}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
          <span className="text-lg font-bold text-indigo-600">{impact}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}
