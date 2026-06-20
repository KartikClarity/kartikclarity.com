import { Card } from '../components/ui/Card';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function About() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Kartik Clarity™
          </h1>
          <p className="text-2xl font-semibold text-indigo-600 mb-4">
            Think. Focus. Achieve.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-indigo-950">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Most businesses I talk to aren't struggling because they lack leads.
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              They're struggling because nobody has asked:<br />
              <strong>Where is the deal actually dying?</strong>
            </p>
          </Card>

          <div className="space-y-6 text-gray-600 dark:text-gray-400">
            <p className="text-lg">
              I spent years doing what everyone said worked. More outreach. Better sequences. Bigger lists. 
              Sometimes it helped. Then I stopped selling solutions and started diagnosing the system underneath.
            </p>

            <p className="text-lg">
              <strong className="text-gray-900 dark:text-white">17+ years across SaaS, Sales, BD, Demand Gen, AM, and RevOps</strong> taught 
              me one thing: Companies don't have a lead problem. They have invisible breakdowns in conversion, 
              positioning, retention, or operations.
            </p>

            <p className="text-lg">
              Same tools. Same effort. Different month. <strong className="text-gray-900 dark:text-white">Same revenue ceiling.</strong>
            </p>
          </div>

          <Card className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              You Don't Have a Lead Problem
            </h2>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <p>
                <strong>You have a conversion problem.</strong><br />
                Or positioning. Or retention. Or an operational gap nobody looks at.
              </p>
              <p>
                I work with founders, agencies, consultants, and service businesses to identify the 
                constraint that is actually blocking revenue.
              </p>
              <p className="text-xl font-semibold text-indigo-600">
                This is Kartik Clarity™.
              </p>
            </div>
          </Card>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What I've Built
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Founder Revenue Tools™ (Early Access SaaS)
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Built to diagnose and fix deal friction in real time:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                  <li><strong>Ghosting Recovery Analyzer</strong> - revive dead DMs/emails with friction-based rewrites</li>
                  <li><strong>Pipeline Leak Detector</strong> - find exactly where deals drop in your funnel</li>
                  <li><strong>Offer Clarity Scorer</strong> - convert weak offers into premium positioning (0-100 score)</li>
                  <li><strong>DM Closing System</strong> - structured frameworks for consultative + direct closes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Kartik Clarity™ Services
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                  <li><strong>Founder Clarity Session</strong> - $3,000</li>
                  <li><strong>Revenue Constraint Diagnosis™</strong> - $3,000</li>
                  <li><strong>Sales & Pipeline Leak Audit</strong> - $3,000</li>
                  <li><strong>Revenue Ops Engineering</strong> - $3,000</li>
                  <li><strong>Implementation Retainer</strong> - $3,000/mo (min 3 months)</li>
                </ul>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              No Calls for the Sake of Calls
            </h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>No audits without a real constraint.</p>
              <p>No strategy without a broken system being named first.</p>
              <p className="text-xl font-semibold text-indigo-600 pt-4">
                Just one question: What is that unnamed constraint costing you right now?
              </p>
            </div>
          </Card>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Top Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {['Growth Auditing', 'Revenue Leak Analysis', 'Conversion Optimization', 'Sales Pipeline Design', 
                'Revenue Operations', 'Demand Generation', 'Account Management', 'Business Development'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Link to="/contact" className="flex-1">
              <Button size="lg" className="w-full">
                Book a Clarity Session
              </Button>
            </Link>
            <Link to="/tools" className="flex-1">
              <Button size="lg" variant="outline" className="w-full">
                Try Free Tools
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
