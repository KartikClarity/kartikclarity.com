import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';

export function Onboarding() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    industry: '',
    revenue: '',
    teamSize: '',
    mainChallenge: '',
    goals: [] as string[],
  });
  const navigate = useNavigate();

  const totalSteps = 3;

  const handleSubmit = () => {
    // In production, save to backend
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950">
      <div className="w-full max-w-2xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Step {step} of {totalSteps}
            </span>
            <span className="text-sm font-medium text-indigo-600">
              {Math.round((step / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <Card className="p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Tell us about your business
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  This helps us personalize your experience
                </p>
              </div>

              <Input
                label="Company Name"
                placeholder="Acme Inc"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />

              <Input
                label="Website URL"
                placeholder="https://example.com"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Industry
                </label>
                <select
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                >
                  <option value="">Select industry</option>
                  <option value="saas">SaaS</option>
                  <option value="agency">Agency</option>
                  <option value="consulting">Consulting</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Business Metrics
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Help us understand your current situation
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Annual Revenue
                </label>
                <select
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={formData.revenue}
                  onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                >
                  <option value="">Select range</option>
                  <option value="0-100k">$0 - $100K</option>
                  <option value="100k-500k">$100K - $500K</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="1m-5m">$1M - $5M</option>
                  <option value="5m+">$5M+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Team Size
                </label>
                <select
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={formData.teamSize}
                  onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                >
                  <option value="">Select size</option>
                  <option value="1">Just me</option>
                  <option value="2-5">2-5 people</option>
                  <option value="6-20">6-20 people</option>
                  <option value="21-50">21-50 people</option>
                  <option value="50+">50+ people</option>
                </select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  What are your goals?
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Select all that apply
                </p>
              </div>

              <div className="space-y-3">
                {[
                  'Increase revenue',
                  'Improve conversion rates',
                  'Optimize pricing',
                  'Better positioning',
                  'Scale outbound',
                  'Reduce churn',
                ].map((goal) => (
                  <label
                    key={goal}
                    className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded text-indigo-600 focus:ring-indigo-500"
                      checked={formData.goals.includes(goal)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, goals: [...formData.goals, goal] });
                        } else {
                          setFormData({ ...formData, goals: formData.goals.filter(g => g !== goal) });
                        }
                      }}
                    />
                    <span className="text-gray-900 dark:text-white font-medium">{goal}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            )}
            {step < totalSteps ? (
              <Button onClick={() => setStep(step + 1)} className="flex-1">
                Continue
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="flex-1">
                Complete Setup
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
