import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Circle Logo - Using external URL temporarily */}
            <img 
              src="https://i.ibb.co/S4h8hfYR/final-logo-circle-kartik-clarity-logo-circle-png.jpg" 
              alt="Kartik Clarity Logo" 
              className="w-10 h-10 object-contain transition-all duration-200"
              onError={(e) => {
                // Fallback: try local file, then gradient
                const target = e.currentTarget;
                if (target.src.includes('ibb.co')) {
                  target.src = '/logo-circle.png';
                } else {
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }
              }}
            />
            <div className="hidden w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-200">
              <span className="text-white font-bold text-xl">KC</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Kartik Clarity™
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                Think. Focus. Achieve.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink to="/services" active={isActive('/services')}>Services</NavLink>
            <NavLink to="/tools" active={isActive('/tools')}>Tools</NavLink>
            <NavLink to="/pricing" active={isActive('/pricing')}>Pricing</NavLink>
            <NavLink to="/blog" active={isActive('/blog')}>Blog</NavLink>
            <NavLink to="/about" active={isActive('/about')}>About</NavLink>
            <NavLink to="/contact" active={isActive('/contact')}>Book a Call</NavLink>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Social Icons */}
            <div className="flex items-center space-x-2 mr-2 border-r border-gray-200 dark:border-gray-700 pr-4">
              <SocialIcon href="https://linkedin.com/in/kartikli" label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://youtube.com/@kartikclarit" label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://twitter.com/kartikclar" label="Twitter/X">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </SocialIcon>
            </div>
            
            {user ? (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost" size="sm">Dashboard</Button>
                </Link>
                <Link to="/scan">
                  <Button variant="ghost" size="sm">Scan</Button>
                </Link>
                <Link to="/settings">
                  <Button variant="outline" size="sm">Settings</Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">Sign In</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="primary" size="sm">Book a Call</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 dark:border-gray-800"
            >
              <div className="py-4 space-y-2">
                <MobileNavLink to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</MobileNavLink>
                <MobileNavLink to="/tools" onClick={() => setIsMobileMenuOpen(false)}>Tools</MobileNavLink>
                <MobileNavLink to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</MobileNavLink>
                <MobileNavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</MobileNavLink>
                <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</MobileNavLink>
                <MobileNavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Book a Call</MobileNavLink>
                <div className="pt-4 space-y-2">
                  {user ? (
                    <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="primary" className="w-full">Dashboard</Button>
                    </Link>
                  ) : (
                    <>
                      <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="ghost" className="w-full">Sign In</Button>
                      </Link>
                      <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="primary" className="w-full">Get Started</Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

function NavLink({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
        active
          ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950'
          : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
    >
      {children}
    </Link>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
    >
      {children}
    </a>
  );
}
