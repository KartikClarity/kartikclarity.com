import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';

export function Blog() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Revenue Intelligence Insights
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Real tactical breakdowns on finding and fixing revenue leaks
          </p>
          
          {/* Newsletter Subscribe */}
          <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-indigo-950">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Subscribe to Revenue Clarity™
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Weekly insights on diagnosing revenue constraints. No hype. No fluff. Just systems.
            </p>
            <a 
              href="https://kartikclar.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg">
                Subscribe on Substack <ExternalLink className="ml-2" size={20} />
              </Button>
            </a>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogPost
            title="Most Businesses Don't Have a Lead Problem"
            excerpt="They have invisible breakdowns in conversion, positioning, retention, or operations. Same tools. Same effort. Different month. Same revenue ceiling."
            date="Jan 15, 2026"
            readTime="5 min read"
            category="Revenue Diagnosis"
          />

          <BlogPost
            title="Where Deals Actually Die (And Why)"
            excerpt="You sent the proposal. They said 'this looks great.' Then nothing. 3 days. 7 days. 2 weeks. Most ghosting isn't rejection—it's unresolved friction left unspoken."
            date="Jan 12, 2026"
            readTime="8 min read"
            category="Pipeline Leaks"
          />

          <BlogPost
            title="Prospects Ghost from Fear, Not Price"
            excerpt="They dread wrong choices. Stop pitching features; reduce their risk and eliminate confusion. The buyer doesn't vanish because they got busy—something broke mid-conversation."
            date="Jan 10, 2026"
            readTime="6 min read"
            category="Sales Psychology"
          />

          <BlogPost
            title="The Best Lead Generation Channel in 2026"
            excerpt="Everyone asks about channels. The real scorecard is: Revenue × Trust × Scalability × Durability. Referrals compress credibility, trust, risk, and sales cycle into one introduction."
            date="Jan 8, 2026"
            readTime="10 min read"
            category="Growth Strategy"
          />

          <BlogPost
            title="Fix Your Revenue Leak in 10-15 Minutes"
            excerpt="Get a structured, data-backed diagnosis. No sales calls. No fluff. Map out the exact operational bottlenecks hiding inside your acquisition, trust, delivery, and retention systems."
            date="Jan 5, 2026"
            readTime="12 min read"
            category="Diagnostic Framework"
          />

          <BlogPost
            title="LinkedIn Strategy → Plan → Execution"
            excerpt="Most people think LinkedIn is about posting more. It's not. It's about layered strategy that compounds. Strategy (who you are) → Plan (how you show up) → Execution (what goes live)."
            date="Jan 3, 2026"
            readTime="15 min read"
            category="Content Strategy"
          />

          <BlogPost
            title="Cutting Flowers and Watering Weeds"
            excerpt="Peter Lynch's Disposition Effect: selling winners to fund losers. In revenue terms, it's doubling down on dead accounts while ignoring your best opportunities. Stop watering your weeds."
            date="Dec 28, 2025"
            readTime="7 min read"
            category="Decision Making"
          />

          <BlogPost
            title="The Unnamed Constraint Costing You"
            excerpt="No calls for the sake of calls. No audits without a real constraint. No strategy without a broken system being named first. Just one question: What is that constraint costing you right now?"
            date="Dec 25, 2025"
            readTime="5 min read"
            category="Business Philosophy"
          />

          <BlogPost
            title="Revenue Leak Execution Breakdowns"
            excerpt="Real, uncensored case studies broken down by Problem → Leak → Fix → Result. Most businesses fail from system leaks, not a lack of leads."
            date="Dec 20, 2025"
            readTime="20 min read"
            category="Case Studies"
          />
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://kartikclar.substack.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline">
              View All Posts on Substack <ArrowRight className="ml-2" size={20} />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

function BlogPost({ title, excerpt, date, readTime, category }: {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}) {
  return (
    <Card hover className="p-6 flex flex-col">
      <div className="mb-4">
        <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-medium">
          {category}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 line-clamp-3">
        {excerpt}
      </p>

      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 pt-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          {date}
        </div>
        <div>{readTime}</div>
      </div>
    </Card>
  );
}
