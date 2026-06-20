export function Solutions() {
  return <SimplePage title="Solutions" description="Tailored solutions for your business" />;
}

export function Resources() {
  return <SimplePage title="Resources" description="Guides, articles, and documentation" />;
}

export function Docs() {
  return <SimplePage title="Documentation" description="Complete platform documentation" />;
}

export function Help() {
  return <SimplePage title="Help Center" description="Find answers to common questions" />;
}

export function Careers() {
  return <SimplePage title="Careers" description="Join our team" />;
}

export function Press() {
  return <SimplePage title="Press" description="Media resources and press releases" />;
}

export function Security() {
  return <SimplePage title="Security" description="How we protect your data" />;
}

export function Cookies() {
  return <SimplePage title="Cookie Policy" description="How we use cookies" />;
}

function SimplePage({ title, description }: { title: string; description: string }) {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">{title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}
