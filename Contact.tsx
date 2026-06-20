import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { Calendar, Mail, MapPin, ExternalLink } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Book a Call with Kartik
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Let's find the unnamed constraint blocking your revenue
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Calendar Booking */}
          <div>
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                  <Calendar className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Schedule a Call
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Book directly on my calendar
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Free 15-Min Consultation
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Quick diagnostic to identify if we're a fit and which service/tool makes sense
                  </p>
                  <a 
                    href="https://calendly.com/kartikclarity/15min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full" size="sm">
                      Book 15-Min Call <ExternalLink className="ml-2" size={16} />
                    </Button>
                  </a>
                </div>

                <div className="p-4 rounded-lg bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    30-Min Founder Clarity Session
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Deep dive diagnostic to surface the exact revenue constraint in your business
                  </p>
                  <a 
                    href="https://calendly.com/kartikclarity/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full" size="sm">
                      Book Clarity Session <ExternalLink className="ml-2" size={16} />
                    </Button>
                  </a>
                </div>

                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    60-Min Deep Dive
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Complete revenue system audit with implementation roadmap
                  </p>
                  <a 
                    href="https://calendly.com/kartikclarity/60min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full" size="sm">
                      Book Deep Dive <ExternalLink className="ml-2" size={16} />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  All calls are conducted via Google Meet or Zoom
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Send a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Prefer to email? Send me a message and I'll respond within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="First Name" placeholder="John" required />
                  <Input label="Last Name" placeholder="Doe" required />
                </div>
                
                <Input 
                  label="Email" 
                  type="email" 
                  placeholder="john@company.com" 
                  required 
                />
                
                <Input 
                  label="Company" 
                  placeholder="Your Company Name" 
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    What's Your Biggest Revenue Challenge?
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Describe the constraint you're facing..."
                    required
                  />
                </div>

                {submitted ? (
                  <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-center">
                    ✓ Message sent! I'll respond within 24 hours.
                  </div>
                ) : (
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                )}
              </form>
            </Card>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-indigo-600" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                  <a 
                    href="mailto:kartik.clarity@gmail.com" 
                    className="text-indigo-600 hover:text-indigo-700"
                  >
                    kartik.clarity@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-indigo-600" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Location</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    San Francisco, California, United States
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <FAQItem
              question="What happens on a Clarity Session?"
              answer="We spend 30-60 minutes diagnosing your revenue system. No sales pitch. I ask specific questions about your pipeline, positioning, offer, and operations to identify the exact constraint blocking growth. You leave with a clear diagnosis and next steps."
            />
            <FAQItem
              question="How do I know if I need consulting vs. tools?"
              answer="Book a free 15-min consultation and we'll figure it out together. If you have a clear constraint and just need execution support, tools might be enough. If you're not sure where deals are dying, consulting makes more sense."
            />
            <FAQItem
              question="Do you offer refunds?"
              answer="For consulting services, we diagnose first. If we can't identify a real constraint worth fixing, you don't pay. For tools, all subscriptions can be cancelled anytime with no long-term contracts."
            />
            <FAQItem
              question="How quickly can we get started?"
              answer="For tools, immediately - just sign up. For consulting, typically within 3-5 business days depending on calendar availability."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{question}</h3>
      <p className="text-gray-600 dark:text-gray-400">{answer}</p>
    </div>
  );
}
