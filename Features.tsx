import { Card } from '../components/ui/Card';

export function Features() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Features
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need to identify and fix revenue leaks
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} hover className="p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: '🎯',
    title: 'Revenue Leak Scanner',
    description: 'Identify exactly where revenue is slipping through the cracks',
  },
  {
    icon: '🧠',
    title: 'AI Analysis',
    description: 'Get intelligent insights powered by advanced AI models',
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    description: 'Track metrics and monitor improvements over time',
  },
  {
    icon: '💡',
    title: 'Actionable Recommendations',
    description: 'Prioritized fixes with expected impact and effort estimates',
  },
  {
    icon: '🔄',
    title: 'Continuous Monitoring',
    description: 'Regular scans to catch new issues early',
  },
  {
    icon: '📈',
    title: 'Growth Tracking',
    description: 'Measure revenue impact of implemented changes',
  },
];
