import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { CheckCircle, ArrowRight } from 'lucide-react';

export function Services() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Kartik Clarity™ Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Direct consulting to diagnose and fix the exact constraint blocking your revenue
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ServiceCard
            title="Founder Clarity Session"
            price="$3,000"
            description="A single deep-dive session to identify the exact revenue constraint in your business. No fluff. No generic advice. Just one unnamed bottleneck surfaced and diagnosed."
            features={[
              "30-60 minute diagnostic conversation",
              "Review of current pipeline, positioning & offer",
              "Identification of primary revenue constraint",
              "Specific next steps with expected impact",
              "Follow-up action plan document",
            ]}
            cta="Book Clarity Session"
          />

          <ServiceCard
            title="Revenue Constraint Diagnosis™"
            price="$3,000"
            description="Complete diagnostic of your revenue system: acquisition, conversion, retention, and operations. Find where deals are dying before you invest another dollar."
            features={[
              "Full funnel & pipeline analysis",
              "Lost deal pattern identification",
              "Positioning & messaging audit",
              "Operational friction mapping",
              "Prioritized fix recommendations",
              "30-day follow-up included",
            ]}
            cta="Start Diagnosis"
          />

          <ServiceCard
            title="Sales & Pipeline Leak Audit"
            price="$3,000"
            description="Systematic audit of your sales pipeline to identify where qualified deals are going dark. Perfect for agencies and consultants closing high-ticket services."
            features={[
              "CRM data analysis (last 90 days)",
              "Demo-to-close conversion audit",
              "Proposal & follow-up review",
              "Objection pattern analysis",
              "Revised closing frameworks",
              "Sales process optimization guide",
            ]}
            cta="Audit My Pipeline"
          />

          <ServiceCard
            title="Revenue Ops Engineering"
            price="$3,000"
            description="Build the operational infrastructure to systematically capture, convert, and retain revenue. For businesses ready to scale without breaking systems."
            features={[
              "Current operations assessment",
              "Process & workflow design",
              "Tech stack optimization",
              "Reporting & metrics framework",
              "Team training & SOPs",
              "Implementation roadmap",
            ]}
            cta="Fix My Ops"
          />
        </div>

        <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-indigo-950 border-2 border-indigo-200 dark:border-indigo-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Implementation Retainer
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
                $3,000/month (minimum 3 months)
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                For founders who know the constraint but need hands-on execution support. 
                Ongoing implementation, optimization, and accountability to ensure fixes actually get deployed.
              </p>
              <ul className="mt-6 grid md:grid-cols-2 gap-3">
                {[
                  "Weekly implementation calls",
                  "Direct Slack/email access",
                  "Monthly performance review",
                  "Process refinement & iteration",
                  "Team training & support",
                  "KPI tracking & reporting",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/contact">
              <Button size="lg">
                Start Retainer
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </Card>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Not Sure Which Service You Need?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Book a free 15-minute consultation to identify the right starting point
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

function ServiceCard({ title, price, description, features, cta }: {
  title: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
}) {
  return (
    <Card hover className="p-8 flex flex-col">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <div className="text-3xl font-bold text-indigo-600 mb-4">{price}</div>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Link to="/contact">
        <Button className="w-full">{cta}</Button>
      </Link>
    </Card>
  );
}
