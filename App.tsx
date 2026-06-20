import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ProtectedRoute } from './components/ProtectedRoute';
import {
  Home,
  Login,
  Signup,
  Dashboard,
  Pricing,
  About,
  Contact,
  Privacy,
  Terms,
  Onboarding,
  RevenueScan,
  Settings,
  Services,
  Tools,
  Blog,
  NotFound,
} from './pages';
import {
  Solutions,
  Resources,
  Docs,
  Help,
  Careers,
  Press,
  Security,
  Cookies,
} from './pages/SimplePage';

function AppLayout() {
  const location = useLocation();
  
  // Pages that should not show header/footer
  const noLayoutPaths = ['/login', '/signup', '/onboarding'];
  const showLayout = !noLayoutPaths.includes(location.pathname);

  return (
    <>
      {showLayout && <Header />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/help" element={<Help />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/security" element={<Security />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />

        {/* Protected Routes */}
        <Route
          path="/onboarding"
          element={
            <ProtectedRoute>
              <Onboarding />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/scan"
          element={
            <ProtectedRoute>
              <RevenueScan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </BrowserRouter>
  );
}
