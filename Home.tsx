import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { 
  AlertCircle, 
  Target, 
  Zap, 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Clock,
  DollarSign
} from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950 -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-8">
              <Clock size={16} />
              17+ Years Finding Revenue Leaks Nobody Else Sees
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Revenue Leaking?
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                I Find It in 30 Minutes.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-4xl mx-auto">
              Find the <strong>bottleneck blocking growth</strong> (rev/convert/retain) before you waste more money 
              on marketing, hiring, or tools. Most businesses don't have a lead problem. They have an 
              <strong> invisible constraint nobody has measured</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact">
                <Button size="lg" className="group">
                  Book Your Clarity Session
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/tools">
                <Button variant="outline" size="lg">
                  Try Free Tools
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                30-min diagnosis
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                No sales pitch
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                Real constraint identified
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Most Businesses I Talk to Aren't Struggling Because They Lack Leads
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              They're struggling because nobody has asked:<br />
              <strong className="text-gray-900 dark:text-white text-2xl">Where is the deal actually dying?</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProblemCard
              icon={<AlertCircle className="text-red-500" size={32} />}
              title="Not a Lead Problem"
              description="You don't have a lead problem. You have a conversion problem. Or positioning. Or retention. Or an operational gap nobody looks at."
            />
            <ProblemCard
              icon={<Target className="text-orange-500" size={32} />}
              title="Invisible Breakdowns"
              description="Companies have invisible breakdowns in conversion, positioning, retention, or operations. Same tools. Same effort. Different month. Same revenue ceiling."
            />
            <ProblemCard
              icon={<TrendingUp className="text-yellow-500" size={32} />}
              title="More Isn't Better"
              description="More outreach. Better sequences. Bigger lists. Sometimes it helps. But it never fixes the system underneath."
            />
            <ProblemCard
              icon={<Zap className="text-indigo-500" size={32} />}
              title="Find the Constraint"
              description="I work with founders, agencies, consultants, and service businesses to identify the constraint that is actually blocking revenue."
            />
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Kartik Clarity™
            </h2>
            <p className="text-2xl font-semibold text-indigo-600 mb-4">Think. Focus. Achieve.</p>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              I spent 17+ years across SaaS, Sales, BD, Demand Gen, AM, and RevOps learning one thing: 
              Companies don't have a lead problem. They have invisible constraints.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Two Ways I Help:
              </h3>
              <div className="space-y-6">
                <ServiceHighlight
                  number="01"
                  title="Founder Revenue Tools™ (SaaS)"
                  description="AI-powered tools built to diagnose and fix deal friction in real time. From $9/mo in early access."
                />
                <ServiceHighlight
                  number="02"
                  title="Direct Consulting Services"
                  description="One-on-one revenue constraint diagnosis, pipeline leak audits, and implementation support. From $3,000."
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-indigo-950 p-8 rounded-2xl">
              <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 mb-6">
                "No calls for the sake of calls. No audits without a real constraint. No strategy without a 
                broken system being named first. Just one question:"
              </blockquote>
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                What is that unnamed constraint costing you right now?
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <StatCard
              icon={<DollarSign className="text-green-500" size={40} />}
              stat="$47K+"
              label="Avg. Revenue Recovered"
            />
            <StatCard
              icon={<Clock className="text-indigo-500" size={40} />}
              stat="30 min"
              label="To Find The Leak"
            />
            <StatCard
              icon={<TrendingUp className="text-purple-500" size={40} />}
              stat="73%"
              label="Avg. Revenue Increase"
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Services & Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Choose your path: Self-service tools or done-with-you consulting
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card hover className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                🛠️ Founder Revenue Tools™
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                AI-powered SaaS tools to diagnose revenue leaks yourself
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  <span>Ghosting Recovery Analyzer™ - Revive dead deals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  <span>Pipeline Leak Detector™ - Find where deals drop</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  <span>Offer Clarity Scorer™ - 0-100 offer score</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  <span>DM Closing System™ - Consultative frameworks</span>
                </li>
              </ul>
              <Link to="/tools">
                <Button variant="outline" className="w-full">
                  Explore Tools
                </Button>
              </Link>
            </Card>

            <Card hover className="p-8 border-2 border-indigo-600">
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                👨‍💼 Direct Consulting
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Work directly with me to diagnose and fix your revenue constraint
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  <span>Founder Clarity Session - $3,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  <span>Revenue Constraint Diagnosis™ - $3,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  <span>Pipeline Leak Audit - $3,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  <span>Implementation Retainer - $3,000/mo</span>
                </li>
              </ul>
              <Link to="/services">
                <Button className="w-full">
                  View All Services
                </Button>
              </Link>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/pricing">
              <Button size="lg" variant="outline">
                See Full Pricing <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stop Guessing Where Your Revenue Is Leaking
          </h2>
          <p className="text-xl text-indigo-100 mb-10">
            Book a 30-minute diagnostic call. No sales pitch. Just one question: Where is the constraint?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="group">
                Book Your Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link to="/tools">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20">
                Try Free Tools
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProblemCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card hover className="p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
    </Card>
  );
}

function ServiceHighlight({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
        {number}
      </div>
      <div>
        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function StatCard({ icon, stat, label }: { icon: React.ReactNode; stat: string; label: string }) {
  return (
    <Card className="p-6 text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat}</div>
      <div className="text-gray-600 dark:text-gray-400">{label}</div>
    </Card>
  );
}
