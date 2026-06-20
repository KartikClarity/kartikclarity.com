import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { CheckCircle, ExternalLink, Zap } from 'lucide-react';

export function Tools() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
            <Zap size={16} />
            AI-Powered Revenue Intelligence
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Founder Revenue Tools™
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Built to diagnose and fix deal friction in real time. Early access pricing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ToolCard
            title="Ghosting Recovery Analyzer™"
            description="Revive dead DMs and emails with friction-based rewrites. Paste any stalled conversation and get the exact recovery message to send based on where trust broke down."
            features={[
              "Trust breakdown diagnosis",
              "Offer confusion detection",
              "Authority gap identification",
              "Timing mismatch analysis",
              "AI-generated recovery messages",
              "Real-time friction scoring",
            ]}
            pricing="Free in Beta, then $9/mo"
            link="https://ghost-signal-kartik-clarity.lovable.app"
            cta="Try Ghosting Analyzer"
          />

          <ToolCard
            title="Pipeline Leak Detector™"
            description="Find exactly where deals drop in your funnel. Paste your pipeline data and see which stage is killing revenue, what to fix first, and estimated impact."
            features={[
              "Stage-by-stage leak analysis",
              "Lost deal pattern detection",
              "Revenue impact quantification",
              "Prioritized fix recommendations",
              "Conversion rate benchmarks",
              "Historical trend tracking",
            ]}
            pricing="Free in Beta, then $9/mo"
            link="https://leak-intelligence-os-kartik-clarity.lovable.app"
            cta="Detect Pipeline Leaks"
          />

          <ToolCard
            title="Offer Clarity Scorer™"
            description="Convert weak offers into premium positioning. Get a 0-100 score on your offer clarity, value proposition strength, and positioning effectiveness."
            features={[
              "0-100 clarity score",
              "Value proposition analysis",
              "Positioning gap identification",
              "Competitive differentiation audit",
              "Premium conversion suggestions",
              "Before/after comparison",
            ]}
            pricing="Free in Beta, then $29/mo"
            link="/scan"
            cta="Score My Offer"
          />

          <ToolCard
            title="DM Closing System™"
            description="Structured frameworks for consultative and direct closes. Get proven templates and decision trees for closing high-ticket services via DM."
            features={[
              "Consultative close frameworks",
              "Direct close templates",
              "Objection handling scripts",
              "Decision tree mapping",
              "Follow-up sequencing",
              "Urgency trigger library",
            ]}
            pricing="Free in Beta, then $29/mo"
            link="/signup"
            cta="Access Closing System"
          />
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-indigo-950 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Full System Access
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Get all tools, unlimited scans, and priority support
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <PricingTier
                name="Beta Access"
                price="$9-29"
                period="/month"
                description="Individual tools, limited scans"
              />
              <PricingTier
                name="Full System"
                price="$49-99"
                period="/month"
                description="All tools, unlimited scans"
                popular
              />
              <PricingTier
                name="Agency Tier"
                price="$199"
                period="/month"
                description="White-label + team access"
              />
            </div>

            <Link to="/pricing">
              <Button size="lg">
                View Full Pricing <ExternalLink className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Prefer hands-on support? Work directly with me.
          </p>
          <Link to="/services">
            <Button variant="outline" size="lg">
              View Consulting Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ToolCard({ title, description, features, pricing, link, cta }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  link: string;
  cta: string;
}) {
  return (
    <Card hover className="p-8 flex flex-col">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-6 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
            <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">{pricing}</div>
        {link.startsWith('http') ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button className="w-full">
              {cta} <ExternalLink className="ml-2" size={16} />
            </Button>
          </a>
        ) : (
          <Link to={link}>
            <Button className="w-full">{cta}</Button>
          </Link>
        )}
      </div>
    </Card>
  );
}

function PricingTier({ name, price, period, description, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
}) {
  return (
    <div className={`p-6 rounded-xl ${popular ? 'bg-white dark:bg-gray-900 shadow-lg ring-2 ring-indigo-600' : 'bg-white/50 dark:bg-gray-900/50'}`}>
      {popular && (
        <div className="text-xs font-medium text-indigo-600 mb-2">MOST POPULAR</div>
      )}
      <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{name}</div>
      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
        {price}<span className="text-base text-gray-600 dark:text-gray-400">{period}</span>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{description}</div>
    </div>
  );
}
