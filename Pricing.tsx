import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { CheckCircle } from 'lucide-react';

export function Pricing() {
  const [category, setCategory] = useState<'tools' | 'services'>('tools');

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Choose between self-service tools or done-with-you consulting
          </p>

          {/* Category Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <button
              onClick={() => setCategory('tools')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                category === 'tools'
                  ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              SaaS Tools
            </button>
            <button
              onClick={() => setCategory('services')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                category === 'services'
                  ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Consulting Services
            </button>
          </div>
        </div>

        {category === 'tools' ? (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Founder Revenue Tools™
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                AI-powered revenue intelligence tools. Early access pricing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <ToolsPlan
                name="Beta Access"
                price="$9-29"
                period="/month"
                description="Try individual tools"
                features={[
                  "Access to 1-2 tools",
                  "Limited scans per month",
                  "Basic AI analysis",
                  "Email support",
                  "Early access features",
                ]}
              />
              <ToolsPlan
                name="Full System"
                price="$49-99"
                period="/month"
                description="Complete revenue OS"
                features={[
                  "All 4 tools included",
                  "Unlimited scans",
                  "Advanced AI analysis",
                  "Priority support",
                  "API access",
                  "Export reports",
                ]}
                popular
              />
              <ToolsPlan
                name="Agency Tier"
                price="$199"
                period="/month"
                description="For agencies & teams"
                features={[
                  "Everything in Full System",
                  "White-label reports",
                  "Team accounts (5 users)",
                  "Custom branding",
                  "Dedicated support",
                  "Custom integrations",
                ]}
              />
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Individual Tools
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <IndividualTool name="Ghosting Recovery Analyzer™" price="$9" />
                <IndividualTool name="Pipeline Leak Detector™" price="$9" />
                <IndividualTool name="Offer Clarity Scorer™" price="$29" />
                <IndividualTool name="DM Closing System™" price="$29" />
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
                All tools are free during beta. Subscribe now to lock in early access pricing.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Consulting Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Work directly with me to diagnose and fix your revenue constraint
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ServiceCard
                name="Founder Clarity Session"
                price="$3,000"
                description="Single deep-dive to find the exact constraint"
                features={[
                  "30-60 minute diagnostic",
                  "Pipeline & positioning review",
                  "Primary constraint identified",
                  "Actionable next steps",
                  "Follow-up action plan",
                ]}
              />
              <ServiceCard
                name="Revenue Constraint Diagnosis™"
                price="$3,000"
                description="Complete revenue system diagnostic"
                features={[
                  "Full funnel analysis",
                  "Lost deal patterns",
                  "Messaging audit",
                  "Operational friction map",
                  "Prioritized recommendations",
                  "30-day follow-up",
                ]}
              />
              <ServiceCard
                name="Sales & Pipeline Leak Audit"
                price="$3,000"
                description="Find where qualified deals go dark"
                features={[
                  "CRM data analysis (90 days)",
                  "Conversion audit",
                  "Proposal review",
                  "Objection analysis",
                  "Revised frameworks",
                  "Process optimization",
                ]}
              />
              <ServiceCard
                name="Revenue Ops Engineering"
                price="$3,000"
                description="Build operational infrastructure"
                features={[
                  "Operations assessment",
                  "Process design",
                  "Tech stack optimization",
                  "Metrics framework",
                  "Team training & SOPs",
                  "Implementation roadmap",
                ]}
              />
            </div>

            <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-indigo-950 border-2 border-indigo-600">
              <div className="text-center md:text-left md:flex items-center justify-between gap-8">
                <div className="flex-1 mb-6 md:mb-0">
                  <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-3">
                    ONGOING SUPPORT
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Implementation Retainer
                  </h3>
                  <div className="text-3xl font-bold text-indigo-600 mb-4">
                    $3,000/month
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Minimum 3 months. Hands-on execution support, weekly calls, direct access.
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      Weekly implementation calls
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      Direct Slack/email access
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      Monthly performance reviews
                    </li>
                  </ul>
                </div>
                <Link to="/contact">
                  <Button size="lg">Start Retainer</Button>
                </Link>
              </div>
            </Card>
          </div>
        )}

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Not Sure Where to Start?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Book a free 15-minute consultation to find the right solution
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline">
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ToolsPlan({ name, price, period, description, features, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <Card className={`p-8 ${popular ? 'ring-2 ring-indigo-600 relative' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-full">
          Most Popular
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{description}</p>
        <div className="mb-4">
          <span className="text-5xl font-bold text-gray-900 dark:text-white">{price}</span>
          <span className="text-gray-600 dark:text-gray-400 ml-2">{period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Link to="/signup" className="block">
        <Button variant={popular ? 'primary' : 'outline'} className="w-full">
          Get Started
        </Button>
      </Link>
    </Card>
  );
}

function ServiceCard({ name, price, description, features }: {
  name: string;
  price: string;
  description: string;
  features: string[];
}) {
  return (
    <Card hover className="p-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{name}</h3>
      <div className="text-3xl font-bold text-indigo-600 mb-3">{price}</div>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>

      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
            <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Link to="/contact">
        <Button className="w-full">Book Service</Button>
      </Link>
    </Card>
  );
}

function IndividualTool({ name, price }: { name: string; price: string }) {
  return (
    <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <div className="font-semibold text-gray-900 dark:text-white mb-2">{name}</div>
      <div className="text-2xl font-bold text-indigo-600">{price}<span className="text-sm text-gray-600 dark:text-gray-400">/mo</span></div>
    </div>
  );
}
